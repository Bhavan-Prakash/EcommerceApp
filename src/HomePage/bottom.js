//import React from 'react';
//import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//
//const { width } = Dimensions.get('window');
//
//const IconMenu = () => {
//  // Handler functions for button presses
//  const handlePress = (label) => {
//    Alert.alert(`${label} Pressed`);
//  };
//
//  return (
//    <View style={styles.container}>
//      <TouchableWithoutFeedback onPress={() => handlePress('Home')}>
//        <View style={styles.button}>
//          <Icon name="home" size={30} color="#fff" />
//          <Text style={styles.text}>Home</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('Collections')}>
//        <View style={styles.button}>
//          <Icon name="collections" size={30} color="#fff" />
//          <Text style={styles.text}>Collections</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('New')}>
//        <View style={styles.button}>
//          <Icon name="new-releases" size={30} color="#fff" />
//          <Text style={styles.text}>New</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('Account')}>
//        <View style={styles.button}>
//          <Icon name="account-circle" size={30} color="#fff" />
//          <Text style={styles.text}>Account</Text>
//        </View>
//      </TouchableWithoutFeedback>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flexDirection: 'row',
//    justifyContent: 'space-around', // Adjusted to space evenly
//
//    backgroundColor: '#333',
//  },
//  button: {
//    alignItems: 'center',
//    justifyContent: 'center',
//    flex: 1, // Each button will take up equal space
//    padding: 10, // Add some padding to the button
//    borderRadius: 5, // Optional: to give rounded corners
//    backgroundColor: '#555', // Optional: to give a button-like appearance
//  },
//  text: {
//    marginTop: 5,
//    fontSize: 14,
//    color: '#fff',
//  },
//});
//
//export default IconMenu;




//import React from 'react';
//import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import { useNavigation } from '@react-navigation/native';
//
//const { width } = Dimensions.get('window');
//
//const IconMenu = () => {
//  const navigation = useNavigation();
//
//  // Handler functions for button presses
//  const handlePress = (label) => {
//    if (label === 'Collections') {
//      navigation.navigate('NewPage'); // Navigate to NewPage screen
//    } else {
//      Alert.alert(`${label} Pressed`);
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <TouchableWithoutFeedback onPress={() => handlePress('Home')}>
//        <View style={styles.button}>
//          <Icon name="home" size={30} color="#fff" />
//          <Text style={styles.text}>Home</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('Collections')}>
//        <View style={styles.button}>
//          <Icon name="collections" size={30} color="#fff" />
//          <Text style={styles.text}>Collections</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('New')}>
//        <View style={styles.button}>
//          <Icon name="new-releases" size={30} color="#fff" />
//          <Text style={styles.text}>New</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('Account')}>
//        <View style={styles.button}>
//          <Icon name="account-circle" size={30} color="#fff" />
//          <Text style={styles.text}>Account</Text>
//        </View>
//      </TouchableWithoutFeedback>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flexDirection: 'row',
//    justifyContent: 'space-around', // Adjusted to space evenly
//    backgroundColor: '#333',
//  },
//  button: {
//    alignItems: 'center',
//    justifyContent: 'center',
//    flex: 1, // Each button will take up equal space
//    padding: 10, // Add some padding to the button
//    borderRadius: 5, // Optional: to give rounded corners
//    backgroundColor: '#555', // Optional: to give a button-like appearance
//  },
//  text: {
//    marginTop: 5,
//    fontSize: 14,
//    color: '#fff',
//  },
//});
//
//export default IconMenu;




import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const IconMenu = () => {
  const navigation = useNavigation();

  // Handler functions for button presses
  const handlePress = (label) => {
    switch (label) {
      case 'Collections':
        navigation.navigate('CollectionPage'); // Navigate to NewPage screen
        break;
      case 'Home':
        navigation.navigate('MainScreen'); // Navigate to MainScreen
        break;
      case 'New':
              navigation.navigate('NewPage'); // Navigate to NewPage screen
              break;
      case 'Account':
                    navigation.navigate('AccountPage'); // Navigate to NewPage screen
                    break;
      default:
        Alert.alert(`${label} Pressed`);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => handlePress('Home')}>
        <View style={styles.button}>
          <Icon name="home" size={30} color="#fff" />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePress('Collections')}>
        <View style={styles.button}>
          <Icon name="collections" size={30} color="#fff" />
          <Text style={styles.text}>Collections</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePress('New')}>
        <View style={styles.button}>
          <Icon name="new-releases" size={30} color="#fff" />
          <Text style={styles.text}>New</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePress('Account')}>
        <View style={styles.button}>
          <Icon name="account-circle" size={30} color="#fff" />
          <Text style={styles.text}>Account</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjusted to space evenly
    backgroundColor: '#333',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Each button will take up equal space
    padding: 10, // Add some padding to the button
    borderRadius: 5, // Optional: to give rounded corners
    backgroundColor: '#555', // Optional: to give a button-like appearance
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff',
  },
});

export default IconMenu;













//import React from 'react';
//import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import { useNavigation } from '@react-navigation/native';
//
//const { width } = Dimensions.get('window');
//
//const IconMenu = () => {
//  const navigation = useNavigation();
//
//  // Handler functions for button presses
//  const handlePress = (label) => {
//    if (label === 'Collections') {
//      navigation.navigate('Collections');
//    } else {
//      Alert.alert(`${label} Pressed`);
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <TouchableWithoutFeedback onPress={() => handlePress('Home')}>
//        <View style={styles.button}>
//          <Icon name="home" size={30} color="#fff" />
//          <Text style={styles.text}>Home</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('Collections')}>
//        <View style={styles.button}>
//          <Icon name="collections" size={30} color="#fff" />
//          <Text style={styles.text}>Collections</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('New')}>
//        <View style={styles.button}>
//          <Icon name="new-releases" size={30} color="#fff" />
//          <Text style={styles.text}>New</Text>
//        </View>
//      </TouchableWithoutFeedback>
//      <TouchableWithoutFeedback onPress={() => handlePress('Account')}>
//        <View style={styles.button}>
//          <Icon name="account-circle" size={30} color="#fff" />
//          <Text style={styles.text}>Account</Text>
//        </View>
//      </TouchableWithoutFeedback>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flexDirection: 'row',
//    justifyContent: 'space-around', // Adjusted to space evenly
//    backgroundColor: '#333',
//  },
//  button: {
//    alignItems: 'center',
//    justifyContent: 'center',
//    flex: 1, // Each button will take up equal space
//    padding: 10, // Add some padding to the button
//    borderRadius: 5, // Optional: to give rounded corners
//    backgroundColor: '#555', // Optional: to give a button-like appearance
//  },
//  text: {
//    marginTop: 5,
//    fontSize: 14,
//    color: '#fff',
//  },
//});
//
//export default IconMenu;

