//import {
//  View,
//  Text,
//  StyleSheet,
//  TextInput,
//  TouchableOpacity,
//  KeyboardAvoidingView,
//  Animated,
//  Keyboard,
//} from 'react-native';
//import React, { useEffect, useState } from 'react';
//import firestore from '@react-native-firebase/firestore';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { translation } from './utils.js';
//import FlashMessage, { showMessage } from 'react-native-flash-message';
//
//const UserLogin = ({ navigation }) => {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [selectedLang, setSelectedLang] = useState(0);
//  const [animation] = useState(new Animated.Value(0));
//
//  useEffect(() => {
//    getLang();
//  }, []);
//
//  const getLang = async () => {
//    const lang = await AsyncStorage.getItem('LANG');
//    if (lang) {
//      setSelectedLang(parseInt(lang));
//    }
//  };
//
//  const adminLogin = async () => {
//    // Dismiss keyboard
//    Keyboard.dismiss();
//
//    // Run the success message animation first
//    animateSuccessMessage();
//
//    // Delay login logic for 2 seconds
//    setTimeout(() => {
//      // Proceed with the login after 2 seconds
//      firestore()
//        .collection('users')
//        .where('email', '==', email)
//        .get()
//        .then(querySnapshot => {
//          if (querySnapshot.docs.length > 0 && querySnapshot.docs[0]._data) {
//            if (
//              querySnapshot.docs[0]._data.email === email &&
//              querySnapshot.docs[0]._data.password === password
//            ) {
//              console.log('User logged in successfully!');
//              showMessage({
//                message: "Welcome to the FAMILY",
//                type: "success",
//                duration: 1500,
//                style: { backgroundColor: '#2ecc71' },
//                icon: { icon: 'success', position: 'left' },
//              });
//              goToNextScreen(
//                querySnapshot.docs[0]._data.userId,
//                querySnapshot.docs[0]._data.mobile,
//                querySnapshot.docs[0]._data.name,
//              );
//            } else {
//              showIncorrectMessage();
//            }
//          } else {
//            showIncorrectMessage();
//          }
//        })
//        .catch(error => {
//          console.log(error);
//        });
//    }, 2000); // Wait for 2 seconds before proceeding with login
//  };
//
//  const goToNextScreen = async (userId, mobile, name) => {
//    await AsyncStorage.setItem('EMAIL', email);
//    await AsyncStorage.setItem('USERID', userId);
//    await AsyncStorage.setItem('MOBILE', mobile);
//    await AsyncStorage.setItem('NAME', name);
//    navigation.navigate('MainScreen');
//  };
//
//  const animateSuccessMessage = () => {
//    animation.setValue(0);
//    Animated.timing(animation, {
//      toValue: 1,
//      duration: 300,
//      useNativeDriver: true,
//    }).start(() => {
//      setTimeout(() => {
//        Animated.timing(animation, {
//          toValue: 0,
//          duration: 300,
//          useNativeDriver: true,
//        }).start(() => {
//          // Optionally handle any post-animation logic here
//        });
//      }, 2000); // Keep visible for 2 seconds
//    });
//  };
//
//  const showIncorrectMessage = () => {
//    showMessage({
//      message: 'Incorrect email or password. Please try again.',
//      type: 'danger',
//      duration: 1500,
//      style: { backgroundColor: '#e74c3c' },
//      icon: { icon: 'danger', position: 'left' },
//    });
//    animateErrorMessage();
//  };
//
//  const animateErrorMessage = () => {
//    animation.setValue(0);
//    Animated.timing(animation, {
//      toValue: 1,
//      duration: 300,
//      useNativeDriver: true,
//    }).start(() => {
//      setTimeout(() => {
//        Animated.timing(animation, {
//          toValue: 0,
//          duration: 300,
//          useNativeDriver: true,
//        }).start(() => {
//          // Optionally handle any post-animation logic here
//        });
//      }, 2000); // Keep visible for 2 seconds
//    });
//  };
//
//  const animatedOpacity = animation.interpolate({
//    inputRange: [0, 1],
//    outputRange: [0, 1],
//  });
//
//  return (
//    <View style={styles.container}>
//      <KeyboardAvoidingView style={styles.inner} behavior="padding">
//        <Text style={styles.title}>
//          {selectedLang === 0
//            ? translation[1].English
//            : selectedLang === 1
//            ? translation[1].Tamil
//            : selectedLang === 2
//            ? translation[1].Hindi
//            : selectedLang === 3
//            ? translation[1].Punjabi
//            : selectedLang === 4
//            ? translation[1].Urdu
//            : null}
//        </Text>
//        <TextInput
//          style={styles.inputStyle}
//          placeholder={'Enter Email Id'}
//          placeholderTextColor="#aaa"
//          value={email}
//          onChangeText={setEmail}
//          autoCapitalize="none"
//        />
//        <TextInput
//          style={styles.inputStyle}
//          placeholder={'Enter Password'}
//          placeholderTextColor="#aaa"
//          value={password}
//          onChangeText={setPassword}
//          secureTextEntry
//        />
//        <TouchableOpacity
//          style={styles.loginBtn}
//          onPress={() => {
//            if (email && password) {
//              adminLogin();
//            } else {
//              alert('Please Enter Data');
//            }
//          }}>
//          <Text style={styles.btnText}>Login</Text>
//        </TouchableOpacity>
//        <Text
//          style={styles.createNewAccount}
//          onPress={() => {
//            navigation.navigate('UserSignup');
//          }}>
//          Create New Account
//        </Text>
//        <Animated.View style={{ opacity: animatedOpacity }}>
//          <Text style={styles.successText}>Welcome to the FAMILY</Text>
//        </Animated.View>
//      </KeyboardAvoidingView>
//      <FlashMessage position="top" />
//    </View>
//  );
//};
//
//export default UserLogin;
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#121212',
//    justifyContent: 'center',
//    padding: 20,
//  },
//  inner: {
//    borderRadius: 15,
//    padding: 20,
//    backgroundColor: 'rgba(18, 18, 18, 0.9)',
//    shadowColor: '#000',
//    shadowOffset: { width: 0, height: 2 },
//    shadowOpacity: 0.5,
//    shadowRadius: 4,
//    elevation: 5,
//  },
//  title: {
//    fontSize: 24,
//    fontWeight: '800',
//    color: '#ffffff',
//    marginBottom: 40,
//    textAlign: 'center',
//  },
//  inputStyle: {
//    height: 50,
//    borderWidth: 1,
//    borderColor: '#444',
//    borderRadius: 10,
//    paddingLeft: 15,
//    marginBottom: 20,
//    backgroundColor: '#1e1e1e',
//    color: '#ffffff',
//  },
//  loginBtn: {
//    backgroundColor: '#bb86fc',
//    height: 50,
//    borderRadius: 10,
//    justifyContent: 'center',
//    alignItems: 'center',
//    marginTop: 20,
//    shadowColor: '#000',
//    shadowOffset: { width: 0, height: 2 },
//    shadowOpacity: 0.5,
//    shadowRadius: 4,
//    elevation: 5,
//  },
//  btnText: {
//    fontSize: 18,
//    fontWeight: '600',
//    color: '#ffffff',
//  },
//  createNewAccount: {
//    fontSize: 16,
//    fontWeight: '600',
//    color: '#bb86fc',
//    textDecorationLine: 'underline',
//    marginTop: 20,
//    textAlign: 'center',
//  },
//  successText: {
//    color: '#2ecc71',
//    fontSize: 18,
//    fontWeight: 'bold',
//    textAlign: 'center',
//    marginTop: 20,
//  },
//});
//








import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translation } from './utils.js';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const UserLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLang, setSelectedLang] = useState(0);
  const [animation] = useState(new Animated.Value(0));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLang();
  }, []);

  const getLang = async () => {
    const lang = await AsyncStorage.getItem('LANG');
    if (lang) {
      setSelectedLang(parseInt(lang));
    }
  };

  const adminLogin = async () => {
    // Dismiss keyboard
    Keyboard.dismiss();
    setLoading(true); // Start loading

    try {
      // Run the success message animation first
      animateSuccessMessage();

      // Authenticate with Firebase
      await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully!');
      showMessage({
        message: "Welcome to the FAMILY",
        type: "success",
        duration: 1500,
        style: { backgroundColor: '#2ecc71' },
        icon: { icon: 'success', position: 'left' },
      });

      // Store user data in AsyncStorage
      const user = auth().currentUser;
      await AsyncStorage.setItem('EMAIL', user.email);
      await AsyncStorage.setItem('USERID', user.uid);
      navigation.navigate('MainScreen');
    } catch (error) {
      console.error("Login failed: ", error);
      showIncorrectMessage();
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const animateSuccessMessage = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(animation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          // Optionally handle any post-animation logic here
        });
      }, 2000); // Keep visible for 2 seconds
    });
  };

  const showIncorrectMessage = () => {
    showMessage({
      message: 'Incorrect email or password. Please try again.',
      type: 'danger',
      duration: 1500,
      style: { backgroundColor: '#e74c3c' },
      icon: { icon: 'danger', position: 'left' },
    });
    animateErrorMessage();
  };

  const animateErrorMessage = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(animation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          // Optionally handle any post-animation logic here
        });
      }, 2000); // Keep visible for 2 seconds
    });
  };

  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.inner} behavior="padding">
        <Text style={styles.title}>
          {selectedLang === 0
            ? translation[1].English
            : selectedLang === 1
            ? translation[1].Tamil
            : selectedLang === 2
            ? translation[1].Hindi
            : selectedLang === 3
            ? translation[1].Punjabi
            : selectedLang === 4
            ? translation[1].Urdu
            : null}
        </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter Email Id'}
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter Password'}
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            if (email && password) {
              adminLogin();
            } else {
              alert('Please Enter Data');
            }
          }}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.btnText}>Login</Text>
          )}
        </TouchableOpacity>
        <Text
          style={styles.createNewAccount}
          onPress={() => {
            navigation.navigate('UserSignup');
          }}
        >
          Create New Account
        </Text>
        <Animated.View style={{ opacity: animatedOpacity }}>
          <Text style={styles.successText}>Welcome to the FAMILY</Text>
        </Animated.View>
      </KeyboardAvoidingView>
      <FlashMessage position="top" />
    </View>
  );
};

export default UserLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 20,
  },
  inner: {
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'rgba(18, 18, 18, 0.9)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputStyle: {
    height: 50,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
  },
  loginBtn: {
    backgroundColor: '#bb86fc',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  createNewAccount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#bb86fc',
    textDecorationLine: 'underline',
    marginTop: 20,
    textAlign: 'center',
  },
  successText: {
    color: '#2ecc71',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
