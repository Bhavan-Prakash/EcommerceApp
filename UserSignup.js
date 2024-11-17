//
//
//import {
//  View,
//  Text,
//  StyleSheet,
//  TextInput,
//  TouchableOpacity,
//} from 'react-native';
//import React, { useState } from 'react';
//import Loader from './Loader'; // Ensure Loader is correctly exported
//import firestore from '@react-native-firebase/firestore';
//import uuid from 'react-native-uuid';
//import FlashMessage, { showMessage } from 'react-native-flash-message';
//import { Animated } from 'react-native'; // Import Animated from react-native
//
//const UserSignup = ({ navigation }) => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [name, setName] = useState('');
//  const [mobile, setMobile] = useState('');
//  const [modalVisible, setModalVisible] = useState(false);
//  const [animation] = useState(new Animated.Value(0)); // Initialize animation value
//  const [successMessageVisible, setSuccessMessageVisible] = useState(false); // State to control success message visibility
//
//  const saveUser = () => {
//    setModalVisible(true);
//    const userId = uuid.v4();
//    firestore()
//      .collection('users')
//      .doc(userId)
//      .set({
//        name: name,
//        email: email,
//        password: password,
//        mobile: mobile,
//        userId: userId,
//        cart: [],
//      })
//      .then(res => {
//        console.log('User saved successfully!'); // Debugging line
//        setModalVisible(false);
//        showMessage({
//          message: "Welcome to the FAMILY",
//          type: "success",
//          duration: 1500,
//          style: { backgroundColor: '#2ecc71' },
//          icon: { icon: 'success', position: 'left' },
//        });
//        setSuccessMessageVisible(true);
//        animateSuccessMessage();
//        // Navigate only after success message animation completes
//        setTimeout(() => {
//          navigation.goBack();
//        }, 2000); // Delay navigation to allow the message to be seen
//      })
//      .catch(error => {
//        setModalVisible(false);
//        console.log(error);
//      });
//  };
//
//  const animateSuccessMessage = () => {
//    animation.setValue(0);
//    Animated.timing(animation, {
//      toValue: 1,
//      duration: 300, // Duration for fade-in
//      useNativeDriver: true,
//    }).start(() => {
//      // Fade out after 2 seconds
//      setTimeout(() => {
//        Animated.timing(animation, {
//          toValue: 0,
//          duration: 300, // Duration for fade-out
//          useNativeDriver: true,
//        }).start(() => {
//          setSuccessMessageVisible(false); // Hide success message after animation
//        });
//      }, 2000); // Keep visible for 2 seconds
//    });
//  };
//
//  return (
//    <View style={styles.container}>
//      <Text style={styles.title}>Sign up</Text>
//      <TextInput
//        style={styles.inputStyle}
//        placeholder={'Enter Name'}
//        value={name}
//        onChangeText={txt => setName(txt)}
//      />
//      <TextInput
//        style={styles.inputStyle}
//        placeholder={'Enter Email Id'}
//        value={email}
//        onChangeText={txt => setEmail(txt)}
//      />
//      <TextInput
//        style={styles.inputStyle}
//        placeholder={'Enter Mobile'}
//        keyboardType={'number-pad'}
//        value={mobile}
//        onChangeText={txt => setMobile(txt)}
//      />
//      <TextInput
//        style={styles.inputStyle}
//        placeholder={'Enter Password '}
//        secureTextEntry={true} // Add this for password input
//        value={password}
//        onChangeText={txt => setPassword(txt)}
//      />
//      <TouchableOpacity
//        style={styles.loginBtn}
//        onPress={() => {
//          // Validate inputs before calling saveUser
//          if (
//            email !== '' &&
//            password !== '' &&
//            name !== '' &&
//            mobile !== '' &&
//            mobile.length >= 10 // Ensure mobile has at least 10 digits
//          ) {
//            saveUser(); // Call saveUser if inputs are valid
//          } else {
//            alert('Please Enter Valid Data'); // Alert for invalid inputs
//          }
//        }}>
//        <Text style={styles.btnText}>Sign up</Text>
//      </TouchableOpacity>
//      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
//      <FlashMessage position="top" />
//      {successMessageVisible && ( // Conditionally render success message
//        <Animated.View
//          style={{
//            opacity: animation,
//            position: 'absolute',
//            top: '50%', // Center vertically
//            left: 0,
//            right: 0,
//            justifyContent: 'center',
//            alignItems: 'center',
//            transform: [{ translateY: -25 }], // Adjust for half of the text height
//          }}>
//          <Text style={styles.successText}>Successfully signed up!</Text>
//        </Animated.View>
//      )}
//    </View>
//  );
//};
//
//export default UserSignup;
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#f3f7fa',
//    paddingHorizontal: 20,
//  },
//  title: {
//    fontSize: 32,
//    fontWeight: 'bold',
//    color: '#2c3e50',
//    marginTop: 70,
//    marginBottom: 30,
//    alignSelf: 'center',
//    textTransform: 'uppercase',
//    letterSpacing: 1,
//  },
//  inputStyle: {
//    paddingLeft: 20,
//    height: 55,
//    alignSelf: 'center',
//    marginTop: 20,
//    borderWidth: 1,
//    borderRadius: 10,
//    width: '100%',
//    borderColor: '#bdc3c7',
//    backgroundColor: '#fff',
//    color: '#34495e',
//    fontSize: 16,
//    shadowColor: '#000',
//    shadowOffset: { width: 0, height: 2 },
//    shadowOpacity: 0.1,
//    shadowRadius: 3,
//    elevation: 3,
//  },
//  loginBtn: {
//    backgroundColor: '#3498db',
//    width: '100%',
//    height: 55,
//    alignSelf: 'center',
//    borderRadius: 12,
//    marginTop: 40,
//    justifyContent: 'center',
//    alignItems: 'center',
//    shadowColor: '#000',
//    shadowOffset: { width: 0, height: 2 },
//    shadowOpacity: 0.2,
//    shadowRadius: 4,
//    elevation: 5,
//  },
//  btnText: {
//    fontSize: 18,
//    fontWeight: '600',
//    color: '#fff',
//    letterSpacing: 1,
//    textTransform: 'uppercase',
//  },
//  successText: {
//    fontSize: 20,
//    fontWeight: 'bold',
//    color: '#fff',
//    backgroundColor: '#2ecc71', // Change background color as needed
//    padding: 10,
//    borderRadius: 5,
//  },
//});








import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Loader from './Loader'; // Ensure Loader is correctly exported
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; // Import Firebase Authentication
import uuid from 'react-native-uuid';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { Animated } from 'react-native'; // Import Animated from react-native

const UserSignup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0)); // Initialize animation value
  const [successMessageVisible, setSuccessMessageVisible] = useState(false); // State to control success message visibility

  const saveUser = async () => {
    setModalVisible(true);
    try {
      // Create user with Firebase Authentication
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid; // Get the user ID from the credential

      // Save user data to Firestore
      await firestore()
        .collection('users')
        .doc(userId) // Use user ID as the document ID
        .set({
          name: name,
          email: email,
          mobile: mobile,
          userId: userId,
          cart: [],
        });

      console.log('User saved successfully!'); // Debugging line
      setModalVisible(false);
      showMessage({
        message: "Welcome to the FAMILY",
        type: "success",
        duration: 1500,
        style: { backgroundColor: '#2ecc71' },
        icon: { icon: 'success', position: 'left' },
      });
      setSuccessMessageVisible(true);
      animateSuccessMessage();

      // Navigate only after success message animation completes
      setTimeout(() => {
        navigation.goBack();
      }, 2000); // Delay navigation to allow the message to be seen
    } catch (error) {
      setModalVisible(false);
      console.log(error);
      showMessage({
        message: error.message,
        type: "danger",
        duration: 2000,
        style: { backgroundColor: '#e74c3c' },
        icon: { icon: 'danger', position: 'left' },
      });
    }
  };

  const animateSuccessMessage = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 300, // Duration for fade-in
      useNativeDriver: true,
    }).start(() => {
      // Fade out after 2 seconds
      setTimeout(() => {
        Animated.timing(animation, {
          toValue: 0,
          duration: 300, // Duration for fade-out
          useNativeDriver: true,
        }).start(() => {
          setSuccessMessageVisible(false); // Hide success message after animation
        });
      }, 2000); // Keep visible for 2 seconds
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Name'}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Email Id'}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Mobile'}
        keyboardType={'number-pad'}
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Password '}
        secureTextEntry={true} // Add this for password input
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          // Validate inputs before calling saveUser
          if (
            email !== '' &&
            password !== '' &&
            name !== '' &&
            mobile !== '' &&
            mobile.length >= 10 // Ensure mobile has at least 10 digits
          ) {
            saveUser(); // Call saveUser if inputs are valid
          } else {
            alert('Please Enter Valid Data'); // Alert for invalid inputs
          }
        }}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <FlashMessage position="top" />
      {successMessageVisible && ( // Conditionally render success message
        <Animated.View
          style={{
            opacity: animation,
            position: 'absolute',
            top: '50%', // Center vertically
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{ translateY: -25 }], // Adjust for half of the text height
          }}>
          <Text style={styles.successText}>Successfully signed up!</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default UserSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f7fa',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 70,
    marginBottom: 30,
    alignSelf: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  inputStyle: {
    paddingLeft: 20,
    height: 55,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    borderColor: '#bdc3c7',
    backgroundColor: '#fff',
    color: '#34495e',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  loginBtn: {
    backgroundColor: '#3498db',
    width: '100%',
    height: 55,
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#2ecc71', // Change background color as needed
    padding: 10,
    borderRadius: 5,
  },
});
