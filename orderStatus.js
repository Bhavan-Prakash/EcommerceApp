//import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
//import React, {useEffect} from 'react';
//import {useRoute} from '@react-navigation/native';
//import firestore from '@react-native-firebase/firestore';
//const OrderStatus = ({navigation}) => {
//  const route = useRoute();
//  useEffect(() => {
//    if (route.params.status == 'success') {
//      placeOrder();
//    }
//  }, []);
//  const placeOrder = async () => {
//    let tempOrders = [];
//    let user = await firestore()
//      .collection('users')
//      .doc(route.params.userId)
//      .get();
//    tempOrders = user._data.orders;
//    tempOrders.push({
//      items: route.params.cartList,
//      address: route.params.address,
//      orderBy: route.params.userName,
//      userEmail: route.params.userEmail,
//      userMobile: route.params.userMobile,
//      userId: route.params.userId,
//      orderTotal: route.params.total,
//      paymentId: route.params.paymentId,
//    });
//    firestore().collection('users').doc(route.params.userId).update({
//      cart: [],
//      orders: tempOrders,
//    });
//    firestore()
//      .collection('orders')
//      .add({
//        data: {
//          items: route.params.cartList,
//          address: route.params.address,
//          orderBy: route.params.userName,
//          userEmail: route.params.userEmail,
//          userMobile: route.params.userMobile,
//          userId: route.params.userId,
//          orderTotal: route.params.total,
//          paymentId: route.params.paymentId,
//        },
//        orderBy: route.params.userId,
//      });
//  };
//  return (
//    <View style={styles.container}>
//      <Image
//        source={
//          route.params.status == 'success'
//            ? require('./src/images/success.gif')
//            : require('./src/images/failed.gif')
//        }
//        style={styles.icon}
//      />
//      <Text style={styles.msg}>
//        {route.params.status == 'success'
//          ? 'Order Placed Successfully !!'
//          : 'Order Failed !!'}
//      </Text>
//      <TouchableOpacity
//        style={styles.backToHome}
//        onPress={() => {
//          navigation.navigate('Home');
//        }}>
//        <Text>Go To Home</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//export default OrderStatus;
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  icon: {
//    width: '70%',
//    height: '40%',
//    alignSelf: 'center',
//  },
//  msg: {
//    fontSize: 20,
//    fontWeight: '600',
//    color: '#000',
//    marginTop: -50,
//  },
//  backToHome: {
//    width: '50%',
//    height: 50,
//    borderWidth: 0.5,
//    marginTop: 30,
//    borderRadius: 10,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});


//
//import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
//import React, {useEffect} from 'react';
//import {useRoute} from '@react-navigation/native';
//import firestore from '@react-native-firebase/firestore';
//
//const OrderStatus = ({navigation}) => {
//  const route = useRoute();
//
//  useEffect(() => {
//    if (route.params.status === 'success') {
//      placeOrder();
//    }
//  }, []);
//
//  const placeOrder = async () => {
//    try {
//      let tempOrders = [];
//      const user = await firestore()
//        .collection('users')
//        .doc(route.params.userId)
//        .get();
//
//      tempOrders = user._data.orders || [];
//      tempOrders.push({
//        items: route.params.cartList,
//        address: route.params.address,
//        orderBy: route.params.userName,
//        userEmail: route.params.userEmail,
//        userMobile: route.params.userMobile,
//        userId: route.params.userId,
//        orderTotal: route.params.total,
//        paymentId: route.params.paymentId,
//        productDetails: route.params.cartList.map(item => ({
//          description: item.description,
//          title: item.title,
//          size: item.size,
//          price: item.price,
//          paymentNumber: route.params.paymentId,
//        })),
//      });
//
//      await firestore().collection('users').doc(route.params.userId).update({
//        cart: [],
//        orders: tempOrders,
//      });
//
//      await firestore()
//        .collection('orders')
//        .add({
//          data: {
//            items: route.params.cartList,
//            address: route.params.address,
//            orderBy: route.params.userName,
//            userEmail: route.params.userEmail,
//            userMobile: route.params.userMobile,
//            userId: route.params.userId,
//            orderTotal: route.params.total,
//            paymentId: route.params.paymentId,
//            productDetails: route.params.cartList.map(item => ({
//              description: item.description,
//              title: item.title,
//              size: item.size,
//              price: item.price,
//              paymentNumber: route.params.paymentId,
//            })),
//          },
//          orderBy: route.params.userId,
//        });
//    } catch (error) {
//      console.error('Error placing order:', error);
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <Image
//        source={
//          route.params.status === 'success'
//            ? require('./src/images/success.gif')
//            : require('./src/images/failed.gif')
//        }
//        style={styles.icon}
//      />
//      <Text style={styles.msg}>
//        {route.params.status === 'success'
//          ? 'Order Placed Successfully !!'
//          : 'Order Failed !!'}
//      </Text>
//      <TouchableOpacity
//        style={styles.backToHome}
//        onPress={() => {
//          navigation.navigate('Home');
//        }}>
//        <Text>Go To Home</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//export default OrderStatus;
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  icon: {
//    width: '70%',
//    height: '40%',
//    alignSelf: 'center',
//  },
//  msg: {
//    fontSize: 20,
//    fontWeight: '600',
//    color: '#000',
//    marginTop: -50,
//  },
//  backToHome: {
//    width: '50%',
//    height: 50,
//    borderWidth: 0.5,
//    marginTop: 30,
//    borderRadius: 10,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});


import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const OrderStatus = ({navigation}) => {
  const route = useRoute();

  useEffect(() => {
    console.log('useEffect triggered with route.params.status:', route.params.status);
    if (route.params.status === 'success') {
      console.log('Payment successful, attempting to place order...');
      placeOrder();
    }
  }, [route.params.status]); // Add route.params.status as a dependency

  const placeOrder = async () => {
    try {
      console.log('Starting placeOrder function...');
      const userRef = firestore().collection('users').doc(route.params.userId);
      const userSnapshot = await userRef.get();

      if (userSnapshot.exists) {
        console.log('User data found, proceeding with order creation...');
        const userData = userSnapshot.data();
        const currentCart = userData.cart || [];
        const newOrderField = `orders_${route.params.paymentId}`;

        const newOrderData = {
          items: currentCart,
          address: route.params.address,
          orderBy: route.params.userName,
          userEmail: route.params.userEmail,
          userMobile: route.params.userMobile,
          userId: route.params.userId,
          orderTotal: route.params.total,
          paymentId: route.params.paymentId,
          productDetails: currentCart.map(item => ({
            description: item.description,
            title: item.title,
            size: item.size,
            price: item.price,
            paymentNumber: route.params.paymentId,
          })),
        };

        await userRef.update({
          cart: [], // Clears the cart field
          [newOrderField]: newOrderData, // Adds a new field with paymentId as key
        });

        console.log(`Field '${newOrderField}' created successfully with order data.`);

        // Add to the global 'orders' collection
        await firestore().collection('orders').add({
          data: newOrderData,
          orderBy: route.params.userId,
        });

        console.log("Order added to 'orders' collection successfully.");
      } else {
        console.log('User document does not exist.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          route.params.status === 'success'
            ? require('./src/images/success.gif')
            : require('./src/images/failed.gif')
        }
        style={styles.icon}
      />
      <Text style={styles.msg}>
        {route.params.status === 'success'
          ? 'Order Placed Successfully !!'
          : 'Order Failed !!'}
      </Text>
      <TouchableOpacity
        style={styles.backToHome}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '70%',
    height: '40%',
    alignSelf: 'center',
  },
  msg: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: -50,
  },
  backToHome: {
    width: '50%',
    height: 50,
    borderWidth: 0.5,
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
