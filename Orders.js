//whithout shiprocket nad working

//import React, { useEffect, useState } from 'react';
//import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
//import firestore from '@react-native-firebase/firestore';
//import auth from '@react-native-firebase/auth'; // Import Firebase Auth
//
//const Order = () => {
//  const [orders, setOrders] = useState([]);
//  const [loading, setLoading] = useState(true);
//
//  useEffect(() => {
//    const fetchOrders = async () => {
//      setLoading(true);
//      console.log("Fetching orders...");
//      const currentUser = auth().currentUser; // Get the currently signed-in user
//
//      if (!currentUser) {
//        console.warn('No user is signed in');
//        setLoading(false);
//        return;
//      }
//
//      const userId = currentUser.uid; // Get the user ID
//      console.log("Current User ID:", userId);
//
//      try {
//        const usersSnapshot = await firestore().collection('users').get();
//        const allOrders = [];
//
//        usersSnapshot.forEach(userDoc => {
//          const userOrders = userDoc.data().orders;
//          if (userDoc.id === userId && Array.isArray(userOrders)) { // Check for current user
//            userOrders.forEach(order => {
//              if (order.paymentId) {
//                allOrders.push({ ...order, userId });
//              } else {
//                console.warn(`Order without paymentId for user ${userId}`, order);
//              }
//            });
//          }
//        });
//
//        console.log("Orders fetched:", allOrders);
//        setOrders(allOrders);
//      } catch (error) {
//        console.error('Error fetching orders:', error);
//      } finally {
//        setLoading(false);
//        console.log("Loading state set to false");
//      }
//    };
//
//    fetchOrders();
//  }, []);
//
// const handleReturn = async (orderItem) => {
//     console.log("Handling return for order item:", orderItem);
//     console.log("PaymentId passed to handleReturn:", orderItem.paymentId);
//
//     // Get the user email from the current user
//     const currentUser = auth().currentUser;
//     const userEmail = currentUser ? currentUser.email : null; // Retrieve user email
//
//     // Prepare the body data
//     const requestBody = JSON.stringify({
//         title: orderItem.title,
//         description: orderItem.description,
//         orderDate: new Date(orderItem.date).toLocaleDateString(),
//         userId: orderItem.userId,
//         paymentId: orderItem.paymentId,
//         price: orderItem.price,
//         size: orderItem.size,
//         userEmail, // Pass the userEmail from Firebase Auth
//         quantity: orderItem.quantity,
//     });
//
//     try {
//         // First request to send email
//         const emailResponse = await fetch('http://10.0.2.2:4000/api/mail', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: requestBody,
//         });
//
//         console.log("Email Response status:", emailResponse.status);
//
//         if (emailResponse.ok) {
//             const jsonEmailResponse = await emailResponse.json();
//             console.log('Email success:', jsonEmailResponse.message);
//
//             const userId = orderItem.userId;
//
//             // Get current date in "YYYY-MM-DD" format
//             const currentDate = new Date().toISOString().split('T')[0];
//
//             // Define the new return entry to be added
//             const newReturnEntry = {
//                 date: new Date(orderItem.date).toISOString().split('T')[0],
//                 currentDate: currentDate,
//                 items: [
//                     {
//                         title: orderItem.title,
//                         description: "multi",
//                         image: orderItem.image,
//                         paymentId: orderItem.paymentId,
//                         price: orderItem.price,
//                         quantity: orderItem.quantity,
//                         size: orderItem.size,
//                     },
//                 ],
//             };
//
//             // Add the new return entry to the existing orders array or create a new array if it doesn't exist
//             await firestore().collection('Returns').doc(userId).set({
//                 orders: firestore.FieldValue.arrayUnion(newReturnEntry)
//             }, { merge: true });
//             console.log(`Return details added under Returns -> ${userId}`);
//
//             // Delete the order from the user's orders
//             const userRef = firestore().collection('users').doc(userId);
//             const userDoc = await userRef.get();
//
//             if (userDoc.exists) {
//                 const userData = userDoc.data();
//                 if (Array.isArray(userData.orders)) {
//                     // Filter out the order to be deleted
//                     const updatedOrders = userData.orders.filter(order => order.paymentId !== orderItem.paymentId);
//
//                     // Update the user's document with the new orders array
//                     await userRef.update({
//                         orders: updatedOrders,
//                     });
//                     console.log(`Order with paymentId ${orderItem.paymentId} deleted from user's orders.`);
//                 } else {
//                     console.warn('No orders array found in user document.');
//                 }
//             } else {
//                 console.error('User document does not exist.');
//             }
//
//             // Second request to send return details
//             const returnResponse = await fetch('http://10.0.2.2:4000/api/returnUser', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: requestBody,
//             });
//
//             console.log("Return Response status:", returnResponse.status);
//
//             if (returnResponse.ok) {
//                 const jsonReturnResponse = await returnResponse.json();
//                 console.log('Return success:', jsonReturnResponse.message);
//                 Alert.alert('Success', 'Email sent and return details saved successfully!');
//             } else {
//                 const errorMessage = await returnResponse.text();
//                 console.error('Error', 'Failed to send return details', errorMessage);
//                 Alert.alert('Error', 'Failed to send return details. Please try again.');
//             }
//         } else {
//             const errorMessage = await emailResponse.text();
//             console.error('Error', 'Failed to send email', errorMessage);
//             Alert.alert('Error', 'Failed to send email. Please try again.');
//         }
//     } catch (error) {
//         console.error('Error in handleReturn:', error);
//         Alert.alert('Error', 'Could not process return');
//     }
// };
//
//
//
//
//  const renderItem = ({ item }) => (
//    <View style={styles.orderContainer}>
//      <Text style={styles.orderTitle}>Order Date: {new Date(item.date).toLocaleDateString()}</Text>
//      {item.items && item.items.length > 0 ? (
//        item.items.map((orderItem, index) => (
//          <View key={index} style={styles.itemContainer}>
//            <Text style={styles.title}>{orderItem.title}</Text>
//            {orderItem.image ? (
//              <Image source={{ uri: orderItem.image }} style={styles.image} />
//            ) : (
//              <Text>No image available</Text>
//            )}
//            <Text>Price: ${orderItem.price}</Text>
//            <Text>Quantity: {orderItem.quantity}</Text>
//            <Text>Size: {orderItem.size}</Text>
//            <Text>Description: {orderItem.description}</Text>
//            <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>
//
//            <TouchableOpacity
//              style={styles.button}
//              onPress={() =>
//                handleReturn({
//                  ...orderItem,
//                  userId: item.userId,
//                  date: item.date,
//                  paymentId: item.paymentId, // Ensure paymentId is passed
//                })
//              }
//            >
//              <Text style={styles.buttonText}>Return</Text>
//            </TouchableOpacity>
//          </View>
//        ))
//      ) : (
//        <Text>No items in this order.</Text>
//      )}
//    </View>
//  );
//
//  return (
//    <View style={{ flex: 1, padding: 20 }}>
//      <Text style={styles.header}>Order Items</Text>
//      {loading ? (
//        <ActivityIndicator size="large" color="#007BFF" />
//      ) : orders.length > 0 ? (
//        <FlatList
//          data={orders}
//          renderItem={renderItem}
//          keyExtractor={(item, index) => index.toString()}
//        />
//      ) : (
//        <Text>No orders found.</Text>
//      )}
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  header: {
//    fontSize: 24,
//    fontWeight: 'bold',
//    marginBottom: 10,
//    textAlign: 'center',
//  },
//  orderContainer: {
//    marginBottom: 20,
//    padding: 15,
//    backgroundColor: '#e9e9e9',
//    borderRadius: 8,
//  },
//  orderTitle: {
//    fontSize: 20,
//    fontWeight: 'bold',
//    marginBottom: 10,
//  },
//  itemContainer: {
//    marginBottom: 20,
//    padding: 15,
//    backgroundColor: '#f8f8f8',
//    borderRadius: 8,
//  },
//  title: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    marginBottom: 5,
//  },
//  image: {
//    width: 100,
//    height: 100,
//    marginBottom: 10,
//  },
//  button: {
//    backgroundColor: '#007BFF',
//    padding: 10,
//    borderRadius: 5,
//    marginTop: 10,
//  },
//  buttonText: {
//    color: '#FFFFFF',
//    fontSize: 16,
//    textAlign: 'center',
//  },
//});
//
//export default Order;
//
//
//
//





//with shiprocket


import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      console.log("Fetching orders...");
      const currentUser = auth().currentUser; // Get the currently signed-in user

      if (!currentUser) {
        console.warn('No user is signed in');
        setLoading(false);
        return;
      }

      const userId = currentUser.uid; // Get the user ID
      console.log("Current User ID:", userId);

      try {
        const usersSnapshot = await firestore().collection('users').get();
        const allOrders = [];

        usersSnapshot.forEach(userDoc => {
          const userOrders = userDoc.data().orders;
          if (userDoc.id === userId && Array.isArray(userOrders)) { // Check for current user
            userOrders.forEach(order => {
              if (order.paymentId) {
                allOrders.push({ ...order, userId });
              } else {
                console.warn(`Order without paymentId for user ${userId}`, order);
              }
            });
          }
        });

        console.log("Orders fetched:", allOrders);
        setOrders(allOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
        console.log("Loading state set to false");
      }
    };

    fetchOrders();
  }, []);

const handleReturn = async (orderItem) => {
  console.log("Handling return for order item:", orderItem);

  const currentUser = auth().currentUser;
  const userEmail = currentUser ? currentUser.email : null;

  if (!currentUser) {
    console.error('No user is logged in');
    Alert.alert('Error', 'Please log in to initiate a return.');
    return;
  }

  const userId = orderItem.userId;


  const requestBody = JSON.stringify({
    title: orderItem.title,
    description: orderItem.description,
    orderDate: new Date(orderItem.date).toLocaleDateString(),
    userId: orderItem.userId,
    paymentId: orderItem.paymentId,
    price: orderItem.price,
    size: orderItem.size,
    userEmail,
    quantity: orderItem.quantity,
  });

  try {
    // Send email request
    const emailResponse = await fetch('http://10.0.2.2:4000/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: requestBody,
    });
    console.log("Email Request:", requestBody);
    console.log("Email Response:", await emailResponse.json());

    if (!emailResponse.ok) throw new Error("Failed to send email");

    // Add return details to Firestore
    const userId = orderItem.userId;
    const newReturnEntry = {
      date: new Date(orderItem.date).toISOString().split('T')[0],
      items: [{ ...orderItem }],
    };

    await firestore()
      .collection('Returns')
      .doc(userId)
      .set({ orders: firestore.FieldValue.arrayUnion(newReturnEntry) }, { merge: true });

    console.log("Return details added to Firestore.");

    // Send Shiprocket API request
    // Date format function
       const formatOrderDate = (isoDate) => {
         const dateObj = new Date(isoDate);
         const year = dateObj.getFullYear();
         const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is 0-based
         const day = String(dateObj.getDate()).padStart(2, '0');
         const hours = String(dateObj.getHours()).padStart(2, '0');
         const minutes = String(dateObj.getMinutes()).padStart(2, '0');

         return `${year}-${month}-${day} ${hours}:${minutes}`;
       };

       // Dynamically get the current date and time
       const orderDate = new Date().toISOString(); // Current date in ISO format

       // Formatting the order date
       const formattedOrderDate = formatOrderDate(orderDate);

       console.log("Formatted Order Date:", formattedOrderDate);


//    const userId = await AsyncStorage.getItem('USERID');
        const userDoc = await firestore().collection('users').doc(userId).get();
        const user = userDoc.data();
        // Fetching user details
           const name = user.name || "No Name";
           const email = user.email || "No Email";
           const phone = user.phone || "No Phone";
           const address = user.address?.[0] || {}; // Assuming first address is used
           const cart = user.cart || []; // User's cart items

            console.log(name)
console.log(orderItem.quantity)

    const shiprocketBody = JSON.stringify({
      order_id: "r"+orderItem.paymentId,
      order_date: formattedOrderDate,
      channel_id: "5711518",
      pickup_customer_name: name,
      pickup_address: address.street,
      pickup_city: address.city,
      pickup_state: address.state,
      pickup_country: "India",
      pickup_pincode: address.pincode,
      pickup_email: userEmail,
      pickup_phone: address.mobile,
      pickup_isd_code: "91",
      shipping_customer_name: "Jax",
      shipping_last_name: "Doe",
      shipping_address: "Castle",
      shipping_city: "ghaziabad",
      shipping_country: "India",
      shipping_pincode: 201005,
      shipping_state: "Uttarpardesh",
      shipping_email: userEmail,
      shipping_isd_code: "91",
      shipping_phone: 8888888888,
      order_items: [
        {
          name: orderItem.title,
          qc_enable: false,
          qc_product_name: orderItem.title,
          sku: "WSH234",
          units: orderItem.quantity,
          selling_price: orderItem.price,
          qc_brand: "Levi",
        },
      ],
      payment_method: "PREPAID",
      sub_total: orderItem.price,
      length: 11,
      breadth: 11,
      height: 11,
      weight: 0.5,
    });

    const shiprocketResponse = await fetch(
      'https://apiv2.shiprocket.in/v1/external/orders/create/return',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUzNzM4NzgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzMyMzcyNjEzLCJqdGkiOiJSOFJBM3p4cjk0REFuMFN0IiwiaWF0IjoxNzMxNTA4NjEzLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTczMTUwODYxMywiY2lkIjo1MTc3MzI5LCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.C36Bke-_pOGAx1Cr6-AW4uoz-DkAkEcHRAORQ-6MG-0', // Replace {{token}} with the actual Shiprocket token
        },
        body: shiprocketBody,
      }
    );

    console.log("Shiprocket Request Body:", shiprocketBody);
    console.log("Shiprocket Response:", await shiprocketResponse.json());

    if (shiprocketResponse.ok) {
      Alert.alert('Success', 'Return initiated successfully!');
    } else {
      throw new Error("Failed to initiate return with Shiprocket");
    }
  } catch (error) {
    console.error('Error in handleReturn:', error);
    Alert.alert('Error', error.message || 'Could not process return');
  }
};



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

    const url = `https://apiv2.shiprocket.in/v1/external/courier/track?order_id=${orderItem.paymentId}&channel_id=5711518`;

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





  const renderItem = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text style={styles.orderTitle}>Order Date: {new Date(item.date).toLocaleDateString()}</Text>
      {item.items && item.items.length > 0 ? (
        item.items.map((orderItem, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.title}>{orderItem.title}</Text>
            {orderItem.image ? (
              <Image source={{ uri: orderItem.image }} style={styles.image} />
            ) : (
              <Text>No image available</Text>
            )}
            <Text>Price: ${orderItem.price}</Text>
            <Text>Quantity: {orderItem.quantity}</Text>
            <Text>Size: {orderItem.size}</Text>
            <Text>Description: {orderItem.description}</Text>
            <Text>Date: {new Date(item.date).toLocaleDateString()}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                tracking({
                  ...orderItem,
                  userId: item.userId,
                  date: item.date,
                  paymentId: item.paymentId, // Ensure paymentId is passed
                })
              }
            >
              <Text style={styles.buttonText}>Track Order</Text>
            </TouchableOpacity>


              <TouchableOpacity
                          style={styles.button}
                          onPress={() =>
                            handleReturn({
                              ...orderItem,
                              userId: item.userId,
                              date: item.date,
                              paymentId: item.paymentId, // Ensure paymentId is passed
                            })
                          }
                        >
                          <Text style={styles.buttonText}>Return</Text>
                        </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>No items in this order.</Text>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.header}>Order Items</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No orders found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  orderContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#e9e9e9',
    borderRadius: 8,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
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
});

export default Order;




