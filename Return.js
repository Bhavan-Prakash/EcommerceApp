//import React, { useEffect, useState } from 'react';
//import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
//import firestore from '@react-native-firebase/firestore';
//
//const ReturnsScreen = () => {
//  const [returns, setReturns] = useState([]);
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);
//
//  const fetchAllDocuments = async () => {
//    try {
//      const snapshot = await firestore().collection('Returns').get();
//      if (snapshot.empty) {
//        console.log("No documents found in the Returns collection.");
//        setReturns([]);
//        return;
//      }
//
//      const fetchedReturns = [];
//      snapshot.forEach(userDoc => {
//        const userId = userDoc.id;
//        const userReturns = userDoc.data().orders;
//
//        if (Array.isArray(userReturns)) {
//          fetchedReturns.push({ userId, orders: userReturns });
//        } else {
//          console.warn(`No orders array for userId: ${userId}`);
//        }
//      });
//
//      setReturns(fetchedReturns);
//    } catch (error) {
//      console.error('Error fetching documents: ', error);
//      setError(error);
//    } finally {
//      setLoading(false);
//    }
//  };
//
//  useEffect(() => {
//    fetchAllDocuments();
//  }, []);
//
//  if (loading) {
//    return <Text>Loading...</Text>;
//  }
//
//  if (error) {
//    return <Text>Error: {error.message}</Text>;
//  }
//
//  return (
//    <ScrollView style={styles.container}>
//      <Text style={styles.header}>Returns Screen</Text>
//      {returns.map(returnItem => (
//        <View key={returnItem.userId} style={styles.userContainer}>
//          <Text style={styles.userId}>User ID: {returnItem.userId}</Text>
//          {returnItem.orders.map((orderItem, index) => {
//            // Log order item data for debugging
//            console.log('Order Item Data:', orderItem);
//            return (
//              <View key={index} style={styles.orderContainer}>
//                <Text style={styles.orderTitle}>Order {index + 1}</Text>
//                {/* Loop through the items array inside each order item */}
//                {orderItem.items.map((item, itemIndex) => (
//                  <View key={itemIndex} style={styles.itemContainer}>
//                    {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
//                    {item.description && <Text>Description: {item.description}</Text>}
//                    {item.price && <Text>Price: ${item.price}</Text>}
//                    {item.quantity && <Text>Quantity: {item.quantity}</Text>}
//                    {item.size && <Text>Size: {item.size}</Text>}
//                    {item.title && <Text>Title: {item.title}</Text>}
//                    {item.date && <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>}
//                    {item.paymentId && <Text>Payment ID: {item.paymentId}</Text>}
//                  </View>
//                ))}
//              </View>
//            );
//          })}
//        </View>
//      ))}
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    padding: 20,
//    backgroundColor: '#fff',
//  },
//  header: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 20,
//    textAlign: 'center',
//  },
//  userContainer: {
//    marginBottom: 20,
//    padding: 15,
//    backgroundColor: '#f8f8f8',
//    borderRadius: 8,
//  },
//  userId: {
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  orderContainer: {
//    marginTop: 10,
//    padding: 10,
//    backgroundColor: '#e9e9e9',
//    borderRadius: 5,
//  },
//  itemContainer: {
//    marginTop: 5,
//    padding: 5,
//    backgroundColor: '#d9d9d9',
//    borderRadius: 5,
//  },
//  orderTitle: {
//    fontSize: 16,
//    fontWeight: 'bold',
//  },
//  image: {
//    width: 100,
//    height: 100,
//    borderRadius: 5,
//    marginVertical: 5,
//  },
//});
//
//export default ReturnsScreen;


import React, { useEffect, useState } from 'react';
import {   ScrollView,Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; // Import Firebase Authentication




const tracking = async (orderItem) => {
  const currentUser = auth().currentUser;

  if (!currentUser) {
    console.error('No user is logged in');
    Alert.alert('Error', 'Please log in to track your order.');
    return;
  }

  // Shipment status table
  const shipmentStatusTable = {
    6: 'Shipped',
    7: 'Delivered',
    8: 'Canceled',
    9: 'RTO Initiated',
    10: 'RTO Delivered',
    12: 'Lost',
    13: 'Pickup Error',
    14: 'RTO Acknowledged',
    15: 'Pickup Rescheduled',
    16: 'Cancellation Requested',
    17: 'Out For Delivery',
    18: 'In Transit',
    19: 'Out For Pickup',
    20: 'Pickup Exception',
    21: 'Undelivered',
    22: 'Delayed',
    23: 'Partial Delivered',
    24: 'Destroyed',
    25: 'Damaged',
    26: 'Fulfilled',
    27: 'Pickup Booked',
    38: 'Reached at Destination Hub',
    39: 'Misrouted',
    40: 'RTO_NDR',
    41: 'RTO_OFD',
    42: 'Picked Up',
    43: 'Self Fulfilled',
    44: 'Disposed Off',
    45: 'Cancelled Before Dispatched',
    46: 'RTO In Intransit',
    47: 'QC Failed',
    48: 'Reached Warehouse',
    49: 'Custom Cleared',
    50: 'In Flight',
    51: 'Handover to Courier',
    52: 'Shipment Booked',
    54: 'In Transit Overseas',
    55: 'Connection Aligned',
    56: 'Reached Overseas Warehouse',
    57: 'Custom Cleared Overseas',
    59: 'Box Packing',
    60: 'FC Allocated',
    61: 'Picklist Generated',
    62: 'Ready To Pack',
    63: 'Packed',
    67: 'FC Manifest Generated',
    68: 'Processed at Warehouse',
    71: 'Handover Exception',
    72: 'Packed Exception',
    75: 'RTO Lock',
    76: 'Untraceable',
    77: 'Issue Related to the Recipient',
    78: 'Reached Back at Seller City',
  };

  try {
    // Replace this with your actual authentication token
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUzNzM4NzgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzMyMzcyNjEzLCJqdGkiOiJSOFJBM3p4cjk0REFuMFN0IiwiaWF0IjoxNzMxNTA4NjEzLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTczMTUwODYxMywiY2lkIjo1MTc3MzI5LCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.C36Bke-_pOGAx1Cr6-AW4uoz-DkAkEcHRAORQ-6MG-0';
console.log(orderItem.paymentId)
    const url = `https://apiv2.shiprocket.in/v1/external/courier/track?order_id="r"+orderItem.paymentId&channel_id=5711518`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tracking details: ${response.status}`);
    }

    const trackingData = await response.json();
    const shipmentStatus = trackingData?.shipment_status;

    if (shipmentStatus && shipmentStatusTable[shipmentStatus]) {
      // Display recognized shipment status
      Alert.alert('Shipment Status', shipmentStatusTable[shipmentStatus]);
    } else {
      // Display unrecognized status only
      Alert.alert('Shipment Status', `Unrecognized Status: ${shipmentStatus || 'No status available'}`);
    }
  } catch (error) {
    console.error('Error fetching tracking details:', error);
    Alert.alert('Error', 'Unable to fetch tracking details. Please try again later.');
  }
};





const ReturnsScreen = () => {
  const [returns, setReturns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserReturns = async (userId) => {
    try {
      const userDoc = await firestore().collection('Returns').doc(userId).get();
      if (!userDoc.exists) {
        console.log("No document found for the current user.");
        setReturns([]);
        return;
      }

      const userReturns = userDoc.data().orders;

      if (Array.isArray(userReturns)) {
        setReturns([{ userId, orders: userReturns }]);
      } else {
        console.warn(`No orders array for userId: ${userId}`);
      }
    } catch (error) {
      console.error('Error fetching documents: ', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = auth().currentUser; // Get the current user
    if (user) {
      fetchUserReturns(user.uid); // Fetch returns for the signed-in user
    } else {
      setLoading(false); // No user signed in, stop loading
      setError(new Error('No user is signed in.'));
    }
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

 return (
   <ScrollView style={styles.container}>
     <Text style={styles.header}>Returns Screen</Text>
     {returns.map((returnItem, returnIndex) => (
       <View key={returnIndex} style={styles.userContainer}>
         <Text style={styles.userId}>User ID: {returnItem.userId}</Text>
         {returnItem.orders.map((orderItem, orderIndex) => (
           <View key={orderIndex} style={styles.orderContainer}>
             <Text style={styles.orderTitle}>Order {orderIndex + 1}</Text>
             {orderItem.items.map((item, itemIndex) => (
               <View key={itemIndex} style={styles.itemContainer}>
                 {item.image && (
                   <Image source={{ uri: item.image }} style={styles.image} />
                 )}
                 {item.description && <Text>Description: {item.description}</Text>}
                 {item.price && <Text>Price: ${item.price}</Text>}
                 {item.quantity && <Text>Quantity: {item.quantity}</Text>}
                 {item.size && <Text>Size: {item.size}</Text>}
                 {item.title && <Text>Title: {item.title}</Text>}
                 {item.date && (
                   <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
                 )}
                 {item.paymentId && <Text>Payment ID: {item.paymentId}</Text>}
                 <TouchableOpacity
                   style={styles.button}
                   onPress={() =>
                     tracking({
                       ...item, // Pass the item directly
                       userId: returnItem.userId, // Use userId from the returnItem
                       date: orderItem.date, // Use date from the orderItem
                       paymentId: item.paymentId, // Use paymentId from the item
                     })
                   }
                 >
                   <Text style={styles.buttonText}>Track Order</Text>
                 </TouchableOpacity>
               </View>
             ))}
           </View>
         ))}
       </View>
     ))}
   </ScrollView>
 );

};

const styles = StyleSheet.create({
button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  userId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
  },
  itemContainer: {
    marginTop: 5,
    padding: 5,
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default ReturnsScreen;
