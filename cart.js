//  working code with reducer api
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import RazorpayCheckout from 'react-native-razorpay';
import Lottie from 'lottie-react-native';

const Cart = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [cartList, setCartList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('No Selected Address');
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  useEffect(() => {
    getCartItems();
    getAddressList();
  }, [isFocused]);

  const getCartItems = async () => {
    try {
      const userId = await AsyncStorage.getItem('USERID');
      if (userId) {
        const userDoc = await firestore().collection('users').doc(userId).get();
        const userCart = userDoc.data()?.cart || [];
        setCartList(userCart);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const reduceProductQuantity = async (itemId, quantity) => {
    try {
      await fetch(`http://10.0.2.2:4000/api/new/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: quantity }),
      });
    } catch (error) {
      console.error('Error reducing product quantity in API:', error);
    }
  };

  const clearCart = async () => {
    try {
      const userId = await AsyncStorage.getItem('USERID');
      await firestore().collection('users').doc(userId).update({ cart: [] });

      // Reduce quantity for each item in the cart
      for (const item of cartList) {
        const { id, quantity } = item;
        await reduceProductQuantity(id, quantity);
      }

      setCartList([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const updateOrderHistory = async (paymentId) => {
    try {
      const userId = await AsyncStorage.getItem('USERID');
      const userRef = firestore().collection('users').doc(userId);
      await userRef.update({
        orders: firestore.FieldValue.arrayUnion({
          paymentId: paymentId,
          items: cartList,
          date: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Error updating order history:', error);
    }
  };

  const getAddressList = async () => {
    try {
      const userId = await AsyncStorage.getItem('USERID');
      const addressId = await AsyncStorage.getItem('ADDRESS');
      const userDoc = await firestore().collection('users').doc(userId).get();

      let addressList = userDoc.data()?.address;

      if (Array.isArray(addressList)) {
        addressList.map(item => {
          if (item.addressId === addressId) {
            setSelectedAddress(
              `${item.street}, ${item.city}, ${item.pincode}, ${item.mobile}`
            );
          }
        });
      }
    } catch (error) {
      console.error('Error fetching address list:', error);
    }
  };

  const getTotal = () => {
    return cartList.reduce((total, item) => {
      const qty = item.quantity || 0;
      const price = item.price || 0;
      return total + qty * price;
    }, 0);
  };

const sendOrderDetailsToAPI = async (paymentId) => {
  try {
    const userId = await AsyncStorage.getItem('USERID');
    const userEmail = await AsyncStorage.getItem('EMAIL');
    const orderDate = new Date().toISOString();

    // Log cartList and other variables for debugging
    console.log("cartList:", cartList);
    console.log("userId:", userId);
    console.log("userEmail:", userEmail);
    console.log("orderDate:", orderDate);
    console.log("paymentId:", paymentId);

    // Map through cartList and structure each item for the API
    const orderDetails = cartList.map(item => {
      const title = item.title || "No Title"; // Get the title from item
      const description = item.orderItem ? item.orderItem.description || "No Description" : "No Description"; // Get description
      const price = item.price || 0; // Get price
      const quantity = item.quantity || 0; // Get quantity
      const size = item.size || 'N/A'; // Get size

      console.log("Item Details:", { title, description, price, quantity, size }); // Log item details

      return {
        title: title,
        description: description,
        price: price,
        quantity: quantity,
        size: size,
      };
    });

    // Create a payload object to send
    const payload = {
      userId: userId || "No User ID",
      userEmail: userEmail || "No Email",
      orderDate: orderDate || "No Order Date",
      paymentId: paymentId || "No Payment ID",
      title: orderDetails.length > 0 ? orderDetails[0].title : "No Title", // First item's title
      description: orderDetails.length > 0 ? orderDetails[0].description : "No Description", // First item's description
      price: orderDetails.length > 0 ? orderDetails[0].price : 0, // First item's price
      quantity: orderDetails.length > 0 ? orderDetails[0].quantity : 0, // First item's quantity
      size: orderDetails.length > 0 ? orderDetails[0].size : 'N/A', // First item's size
      orderDetails: orderDetails, // Include the order details array
    };

    console.log("Payload to send:", payload);

    // First API call
    await fetch('http://10.0.2.2:4000/api/newOrderAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload), // Send the entire payload object
    });

    // Second API call to another endpoint
    await fetch('http://10.0.2.2:4000/api/newOrderUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload), // Send the same payload object
    });

    console.log("Order details sent to the second API.");

  } catch (error) {
    console.error('Error sending order details to API:', error);
  }
};


// New function to send the final order details
const sendFinalOrderDetailsToAPI = async (paymentId) => {
  try {
    const userId = await AsyncStorage.getItem('USERID');
    const userEmail = await AsyncStorage.getItem('EMAIL');
    const orderDate = new Date().toISOString();

    const orderDetails = cartList.map(item => ({
      image: item.image || 'defaultCategoryId',
      quantity: item.quantity || 0,
      size: item.size || 'N/A',
    }));

    const payload = {
      userId: userId || "No User ID",
      orderDate: orderDate || "No Order Date",
      paymentId: paymentId || "No Payment ID",
      userEmail: userEmail || "No Email",
      orderDetails: orderDetails,
    };

    await fetch('http://10.0.2.2:4000/api/reducer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log("Final order details sent to http://10.0.2.2:4000/api/reducer");

  } catch (error) {
    console.error('Error sending final order details to API:', error);
  }
};



//shiprocket with fixed parameters

//const sendToShiprocket = async (paymentId) => {
//  try {
//    const payload = {
//      order_id: "224-448",
//      order_date: "2024-07-25 11:11",
//      pickup_location: "Home",
//      channel_id: "5711518",
//      comment: "Testing",
//      billing_customer_name: "Bhavan",
//      billing_last_name: "Uzumaki",
//      billing_address: "House 221B, Leaf Village",
//      billing_address_2: "Near Hokage House",
//      billing_city: "New Delhi",
//      billing_pincode: "110002",
//      billing_state: "Delhi",
//      billing_country: "India",
//      billing_email: "naruto@uzumaki.com",
//      billing_phone: "9876543210",
//      shipping_is_billing: true,
//      order_items: [
//        {
//          name: "Kunai",
//          sku: "chakra123",
//          units: 10,
//          selling_price: "900",
//          discount: "",
//          tax: "",
//          hsn: 441122
//        }
//      ],
//      payment_method: "Prepaid",
//      shipping_charges: 0,
//      giftwrap_charges: 0,
//      transaction_charges: 0,
//      total_discount: 0,
//      sub_total: 9000,
//      length: 10,
//      breadth: 15,
//      height: 20,
//      weight: 2.5
//    };
//
//    console.log("Sending payload to Shiprocket:", payload);
//
//    const response = await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUzNzM4NzgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzMyMzcyNjEzLCJqdGkiOiJSOFJBM3p4cjk0REFuMFN0IiwiaWF0IjoxNzMxNTA4NjEzLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTczMTUwODYxMywiY2lkIjo1MTc3MzI5LCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.C36Bke-_pOGAx1Cr6-AW4uoz-DkAkEcHRAORQ-6MG-0" // Replace with a valid token
//      },
//      body: JSON.stringify(payload),
//    });
//
//    const responseData = await response.json();
//    console.log("Shiprocket response:", responseData);
//
//    if (!response.ok) {
//      throw new Error(`Shiprocket API error: ${responseData.message || response.statusText}`);
//    }
//  } catch (error) {
//    console.error("Error sending data to Shiprocket:", error);
//  }
//};

//shiprocket with dynamic parameters

const sendToShiprocket = async (paymentId) => {
  try {
    const userId = await AsyncStorage.getItem('USERID');
    const userDoc = await firestore().collection('users').doc(userId).get();
    const user = userDoc.data();

    // Fetching user details
    const name = user.name || "No Name";
    const email = user.email || "No Email";
    const phone = user.phone || "No Phone";
    const address = user.address?.[0] || {}; // Assuming first address is used
    const cart = user.cart || []; // User's cart items

    // Order details
//    const orderDate = new Date().toISOString();
    const orderItems = cart.map((item) => ({
      name: item.name || "No Item Name",
      sku: item.sku || "No SKU",
      units: item.quantity || 1,
      selling_price: item.price || 0,
      discount: "",
      tax: "",
      hsn: item.hsn || 0,
    }));

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




    // Payload for Shiprocket
    const payload = {
      order_id: `${paymentId}`,
      order_date: formattedOrderDate,
      pickup_location: "Home",
      channel_id: "5711518",
      comment: "Order placed via app",
      billing_customer_name: name,
      billing_last_name: "",
      billing_address: address.street || "No Street",
      billing_address_2: address.landmark || "",
      billing_city: address.city || "No City",
      billing_pincode: address.pincode || "000000",
      billing_state: address.state || "No State",
      billing_country: "India",
      billing_email: email,
      billing_phone: address.mobile,
      shipping_is_billing: true,
      order_items: orderItems,
      payment_method: "Prepaid",
      shipping_charges: 0,
      giftwrap_charges: 0,
      transaction_charges: 0,
      total_discount: 0,
      sub_total: orderItems.reduce((total, item) => total + item.selling_price * item.units, 0),
      length: 10,
      breadth: 15,
      height: 20,
      weight: 2.5,
    };

    console.log("Sending payload to Shiprocket:", payload);

    // API call to Shiprocket
    const response = await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUzNzM4NzgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzMyMzcyNjEzLCJqdGkiOiJSOFJBM3p4cjk0REFuMFN0IiwiaWF0IjoxNzMxNTA4NjEzLCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTczMTUwODYxMywiY2lkIjo1MTc3MzI5LCJ0YyI6MzYwLCJ2ZXJib3NlIjpmYWxzZSwidmVuZG9yX2lkIjowLCJ2ZW5kb3JfY29kZSI6IiJ9.C36Bke-_pOGAx1Cr6-AW4uoz-DkAkEcHRAORQ-6MG-0", // Replace with valid token
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();
    console.log("Shiprocket response:", responseData);

    if (!response.ok) {
      throw new Error(`Shiprocket API error: ${responseData.message || response.statusText}`);
    }

    console.log("Order successfully sent to Shiprocket.");
  } catch (error) {
    console.error("Error sending data to Shiprocket:", error);
  }
};





  const payNow = async () => {
    const email = await AsyncStorage.getItem("EMAIL");
    const name = await AsyncStorage.getItem("NAME");
    const mobile = await AsyncStorage.getItem("MOBILE");

    const totalAmount = getTotal() * 100; // Convert to paise
    const options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_mQinADxZJLDkJf',
      amount: totalAmount.toString(),
      name: 'Acme Corp',
      prefill: {
        email: email,
        contact: mobile,
        name: name,
      },
      theme: { color: '#53a20e' },
    };

    RazorpayCheckout.open(options)
      .then(async (data) => {
        setPaymentSuccess(true);
        await updateOrderHistory(data.razorpay_payment_id);
        await sendOrderDetailsToAPI(data.razorpay_payment_id);
        await sendFinalOrderDetailsToAPI(data.razorpay_payment_id);
              await sendToShiprocket(data.razorpay_payment_id); // New Shiprocket API call

        await clearCart();
      })
      .catch((error) => {
        console.error("Payment error:", error);
        setPaymentSuccess(false);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemView}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.nameView}>
        <Text style={styles.nameText}>{item.title}</Text>
        <Text style={styles.descText}>{item.description}</Text>
        <Text style={styles.sizeText}>{`Size: ${item.size || 'N/A'}`}</Text>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{'$' + item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {paymentSuccess !== null && (
        <View style={styles.gifContainer}>
          <Lottie
            source={paymentSuccess ? require('./src/animations/failed.json') : require('./src/animations/success.json')}
            autoPlay
            loop={false}
            style={styles.paymentGif}
          />
        </View>
      )}

      <FlatList
        data={cartList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
      />

      <View style={styles.totalView}>
        <Text style={styles.nameText}>Selected Address</Text>
        <Text style={styles.editAddress} onPress={() => navigation.navigate('Address')}>
          Change Address
        </Text>
      </View>
      <Text style={styles.selectedAddressText}>{selectedAddress}</Text>

      {cartList.length > 0 && (
        <View style={styles.checkoutView}>
          <Text style={styles.totalText}>
            {'Items(' + cartList.length + ')\nTotal: $' + getTotal()}
          </Text>
          <TouchableOpacity style={styles.checkoutBtn} onPress={payNow}>
            <Text style={{ color: '#fff' }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  gifContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  paymentGif: {
    width: 200,
    height: 200,
  },
  itemView: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  nameView: {
    flex: 1,
    paddingLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
  },
  descText: {
    fontSize: 14,
    color: '#666',
  },
  sizeText: {
    fontSize: 12,
    color: '#888',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  selectedAddressText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },
  editAddress: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  checkoutView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '700',
  },
  checkoutBtn: {
    backgroundColor: '#53a20e',
    padding: 12,
    borderRadius: 8,
  },
});

export default Cart;







