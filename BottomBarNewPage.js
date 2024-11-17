//import React from 'react';
//import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import { useNavigation } from '@react-navigation/native';
//
//const { width } = Dimensions.get('window');
//
//const BottomBarNewPage = () => {
//  const navigation = useNavigation();
//
//  // Handler functions for button presses
//  const handlePress = (label) => {
//    switch (label) {
//      case 'cart':
//        navigation.navigate('cart'); // Navigate to CollectionPage screen
//        break;
//      case 'Home':
//        navigation.navigate('MainScreen'); // Navigate to MainScreen
//        break;
//      case 'New':
//        navigation.navigate('NewPage'); // Navigate to NewPage screen
//        break;
//      default:
//        Alert.alert(`${label} Pressed`);
//        break;
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <TouchableWithoutFeedback onPress={() => handlePress('Home')}>
//        <View style={styles.smallButton}>
//          <Icon name="home" size={20} color="#fff" />
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('cart')}>
//        <View style={styles.smallButton}>
//          <Icon name="collections" size={20} color="#fff" />
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('New')}>
//        <View style={styles.button}>
//          <Text style={styles.text}>ADD TO CART</Text>
//        </View>
//      </TouchableWithoutFeedback>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flexDirection: 'row',
//    justifyContent: 'space-around', // Space evenly
//    alignItems: 'center',
//    backgroundColor: '#fff',
//    paddingVertical: 20,
//
//  },
//  smallButton: {
//    width: 40, // Square box
//    height: 40, // Square box
//    alignItems: 'center',
//    justifyContent: 'center',
//    borderRadius: 5,
//    backgroundColor: '#555',
//    marginHorizontal: 5, // Small space between boxes
////    marginBottom: 15,
//    marginLeft: 10,
//  },
//  button: {
//    flex: 1, // Takes the rest of the space
//    alignItems: 'center',
////    paddingVertical: 10,
//    paddingHorizontal: 20,
//    borderRadius: 5,
//    backgroundColor: '#000',
//    marginHorizontal: 10, // Space between the small boxes and this button
//    paddingTop: 10,
//    paddingBottom: 10,
//  },
//  text: {
////    marginTop: 5,
//    fontSize: 18,
//    color: '#fff',
//  },
//});
//
//export default BottomBarNewPage;






//import React from 'react';
//import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import { useNavigation } from '@react-navigation/native';
//
//import firestore from '@react-native-firebase/firestore';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//
//// Function to add an item to the cart
//const onAddToCart = async (item, index) => {
//  try {
//    const userId = await AsyncStorage.getItem('USERID'); // Ensure correct key
//    if (!userId) {
//      Alert.alert('User not found', 'Please login first.');
//      return;
//    }
//
//    const userDoc = await firestore().collection('users').doc(userId).get();
//
//    if (userDoc.exists) {
////      console.log('User data:', userDoc.data());
//        console.log(userDoc.data().cart);
//
//
//      Alert.alert('Item added to cart', 'The selected item has been successfully added to your cart.');
//    } else {
//      Alert.alert('User not found in Firestore', 'Please check your account.');
//    }
//  } catch (error) {
//    console.error('Error adding to cart:', error);
//    Alert.alert('Error', 'There was an error adding the item to the cart.');
//  }
//};
//
//const { width } = Dimensions.get('window');
//
//const BottomBarNewPage = () => {
//  const navigation = useNavigation();
//
//  // Handler functions for button presses
//  const handlePress = (label) => {
//    switch (label) {
//      case 'cart':
//        navigation.navigate('cart'); // Navigate to CollectionPage screen
//        break;
//      case 'Home':
//        navigation.navigate('MainScreen'); // Navigate to MainScreen
//        break;
//      case 'New':
//        onAddToCart(); // Call function to add item to cart
//        Alert.alert('Item added to cart', 'The selected item has been successfully added to your cart.'); // Show alert message
//        break;
//      default:
//        Alert.alert(`${label} Pressed`);
//        break;
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <TouchableWithoutFeedback onPress={() => handlePress('Home')}>
//        <View style={styles.smallButton}>
//          <Icon name="home" size={20} color="#fff" />
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('cart')}>
//        <View style={styles.smallButton}>
//          <Icon name="collections" size={20} color="#fff" />
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('New')}>
//        <View style={styles.button}>
//          <Text style={styles.text}>ADD TO CART</Text>
//        </View>
//      </TouchableWithoutFeedback>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flexDirection: 'row',
//    justifyContent: 'space-around', // Space evenly
//    alignItems: 'center',
//    backgroundColor: '#fff',
//    paddingVertical: 20,
//  },
//  smallButton: {
//    width: 40, // Square box
//    height: 40, // Square box
//    alignItems: 'center',
//    justifyContent: 'center',
//    borderRadius: 5,
//    backgroundColor: '#555',
//    marginHorizontal: 5, // Small space between boxes
//    marginLeft: 10,
//  },
//  button: {
//    flex: 1, // Takes the rest of the space
//    alignItems: 'center',
//    paddingHorizontal: 20,
//    borderRadius: 5,
//    backgroundColor: '#000',
//    marginHorizontal: 10, // Space between the small boxes and this button
//    paddingTop: 10,
//    paddingBottom: 10,
//  },
//  text: {
//    fontSize: 18,
//    color: '#fff',
//  },
//});
//
//export default BottomBarNewPage;





//// BottomBarNewPage.js (with firebase)
//import React from 'react';
//import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import { useNavigation } from '@react-navigation/native';
//import firestore from '@react-native-firebase/firestore';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//
//// Function to add an item to the cart
//const onAddToCart = async (item, quantity) => {
//  try {
//    const userId = await AsyncStorage.getItem('USERID');
//    if (!userId) {
//      Alert.alert('User not found', 'Please login first.');
//      return;
//    }
//
//    const userDoc = await firestore().collection('users').doc(userId).get();
//    if (userDoc.exists) {
//      const cart = userDoc.data().cart || [];
//      const updatedCart = [...cart, { ...item, quantity }];
//
//      await firestore().collection('users').doc(userId).update({ cart: updatedCart });
//      Alert.alert('Item added to cart', `You have added ${quantity} of ${item.title} to your cart.`);
//    } else {
//      Alert.alert('User not found in Firestore', 'Please check your account.');
//    }
//  } catch (error) {
//    console.error('Error adding to cart:', error);
//    Alert.alert('Error', 'There was an error adding the item to the cart.');
//  }
//};
//
//const { width } = Dimensions.get('window');
//
//const BottomBarNewPage = ({ item, quantity }) => {
//  const navigation = useNavigation();
//
//  const handlePress = (label) => {
//    switch (label) {
//      case 'cart':
//        navigation.navigate('cart');
//        break;
//      case 'Home':
//        navigation.navigate('MainScreen');
//        break;
//      case 'New':
//        onAddToCart(item, quantity);
//        break;
//      default:
//        Alert.alert(`${label} Pressed`);
//        break;
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <TouchableWithoutFeedback onPress={() => handlePress('Home')}>
//        <View style={styles.smallButton}>
//          <Icon name="home" size={20} color="#fff" />
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('cart')}>
//        <View style={styles.smallButton}>
//          <Icon name="collections" size={20} color="#fff" />
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('New')}>
//        <View style={styles.button}>
//          <Text style={styles.text}>ADD TO CART</Text>
//        </View>
//      </TouchableWithoutFeedback>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flexDirection: 'row',
//    justifyContent: 'space-around',
//    alignItems: 'center',
//    backgroundColor: '#fff',
//    paddingVertical: 20,
//  },
//  smallButton: {
//    width: 40,
//    height: 40,
//    alignItems: 'center',
//    justifyContent: 'center',
//    borderRadius: 5,
//    backgroundColor: '#555',
//    marginHorizontal: 5,
//    marginLeft: 10,
//  },
//  button: {
//    flex: 1,
//    alignItems: 'center',
//    paddingHorizontal: 20,
//    borderRadius: 5,
//    backgroundColor: '#000',
//    marginHorizontal: 10,
//    paddingTop: 10,
//    paddingBottom: 10,
//  },
//  text: {
//    fontSize: 18,
//    color: '#fff',
//  },
//});
//
//export default BottomBarNewPage;
//
//
//
//




////working with everything
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage, { showMessage } from 'react-native-flash-message';

// Function to add an item to the cart
const onAddToCart = async (image, price, quantity, size, title, description) => {
  try {
    const userId = await AsyncStorage.getItem('USERID');
    if (!userId) {
      Alert.alert('User not found', 'Please login first.');
      return;
    }

    const userDoc = await firestore().collection('users').doc(userId).get();
    if (userDoc.exists) {
      const cart = userDoc.data().cart || [];
      const updatedCart = [...cart, { image, price, quantity, size, title, description }];

      await firestore().collection('users').doc(userId).update({ cart: updatedCart });

      // Show flash message for successful cart addition
      showMessage({
        message: "Item added to cart",
        description: "Your item has been successfully added to the cart.",
        type: "success",
        duration: 2000,  // Display for 3 seconds
      });

    } else {
      Alert.alert('User not found in Firestore', 'Please check your account.');
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    Alert.alert('Error', 'There was an error adding the item to the cart.');
  }
};

const { width } = Dimensions.get('window');

const BottomBarNewPage = ({ image, price, quantity, size, title, description }) => {
  const navigation = useNavigation();

  const handlePress = (label) => {
    switch (label) {
      case 'cart':
        navigation.navigate('cart');
        break;
      case 'Home':
        navigation.navigate('MainScreen');
        break;
      case 'New':
        onAddToCart(image, price, quantity, size, title, description);
        break;
      default:
        Alert.alert(`${label} Pressed`);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => handlePress('Home')}>
        <View style={styles.smallButton}>
          <Icon name="home" size={20} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePress('cart')}>
        <View style={styles.smallButton}>
          <Icon name="collections" size={20} color="#fff" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePress('New')}>
        <View style={styles.button}>
          <Text style={styles.text}>ADD TO CART</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* FlashMessage component to show alerts */}
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  smallButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#555',
    marginHorizontal: 5,
    marginLeft: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default BottomBarNewPage;






//// Header.js
//import React, { useState } from 'react';
//import { View, TextInput, StyleSheet } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//
//const Header = ({ placeholder }) => {
//  const [searchText, setSearchText] = useState('');
//
//  return (
//    <View style={styles.headerContainer}>
//      <View style={styles.searchContainer}>
//        <TextInput
//          style={styles.searchInput}
//          placeholder={placeholder}
//          value={searchText}
//          onChangeText={setSearchText}
//        />
//        <Icon
//          name="search"
//          color="#000"
//          size={20}
//          style={styles.iconStyle}
//        />
//      </View>
//      <View style={styles.iconContainer}>
//        <Icon
//          name="notifications"
//          color="#000"
//          size={25}
//          style={styles.iconStyle}
//        />
//        <Icon
//          name="account-circle"
//          color="#000"
//          size={25}
//          style={styles.iconStyle}
//        />
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  headerContainer: {
//    zIndex: 1000,
//    position: 'relative',
//    flexDirection: 'row',
//    alignItems: 'center',
//    paddingHorizontal: 15,
//    paddingVertical: 10,
//    justifyContent: 'space-between',
//    borderWidth: 3,
//  },
//  searchContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    backgroundColor: '#fff',
//    borderRadius: 30, // Making the edges round
//    borderWidth: 1,
//    width: 180, // Reducing the size of the search bar
//    height: 35, // Adjusting height for better appearance
//    paddingHorizontal: 10,
//  },
//  searchInput: {
//    flex: 1,
//    fontSize: 15,
//    padding: 0,
//  },
//  iconContainer: {
//    flexDirection: 'row',
//  },
//  iconStyle: {
//    marginLeft: 10,
//  },
//});
//
//export default Header;
