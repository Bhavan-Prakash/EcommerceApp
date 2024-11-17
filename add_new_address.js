import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNewAddress = ({navigation}) => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');
  const [state, setState] = useState('');
  const [landmark, setLandmark] = useState('');


  const saveAddress = async () => {
    try {
      const addressId = uuid.v4();
      const userId = await AsyncStorage.getItem('USERID');

      // Fetch the user document from Firestore
      const userDoc = await firestore().collection('users').doc(userId).get();
      let tempDart = userDoc._data?.address || []; // Ensure it's an array

      // Add the new address to the array
      tempDart.push({ street, city, pincode, mobile, state, landmark, addressId });

      // Update Firestore with the new address
      await firestore()
        .collection('users')
        .doc(userId)
        .update({
          address: tempDart,
        });

      console.log('Address successfully added');
      navigation.goBack(); // Navigate back after saving the address
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Address'}
        value={street}
        onChangeText={txt => setStreet(txt)}
      />
      <TextInput
              style={styles.inputStyle}
              placeholder={'Enter Landmark'}
              value={landmark}
              onChangeText={txt => setLandmark(txt)}
            />
       <TextInput
               style={styles.inputStyle}
               placeholder={'Enter State'}
               value={state}
               onChangeText={txt => setState(txt)}
             />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter City '}
        value={city}
        onChangeText={txt => setCity(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Pincode'}
        value={pincode}
        keyboardType="number-pad"
        onChangeText={txt => setPincode(txt)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={'Enter Contact '}
        value={mobile}
        maxLength={10}
        keyboardType="number-pad"
        onChangeText={txt => setMobile(txt)}
      />
      <TouchableOpacity
        style={styles.addNewBtn}
        onPress={saveAddress}>
        <Text style={styles.btnText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '90%',
  },
  addNewBtn: {
    width: '90%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
