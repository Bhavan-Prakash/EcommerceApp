//import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
//import React, { useEffect, useState } from 'react';
//import { useIsFocused } from '@react-navigation/native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import firestore from '@react-native-firebase/firestore';
//
//const Address = ({ navigation }) => {
//  const [addressList, setAddressList] = useState([]);
//  const isFocused = useIsFocused();
//  const [selectedAddress, setSelectedAddress] = useState('');
//
//  useEffect(() => {
//    getAddressList();
//  }, [isFocused]);
//
//  const getAddressList = async () => {
//    try {
//      const userId = await AsyncStorage.getItem('USERID');
//      const addressId = await AsyncStorage.getItem('ADDRESS');
//
//      // Fetch user document from Firestore
//      const user = await firestore().collection('users').doc(userId).get();
//
//      // Check if address exists and is an array
//      let tempDart = user._data?.address || [];
//
//      // Update selected property for each address
//      tempDart = tempDart.map(item => ({
//        ...item,
//        selected: item.addressId === addressId
//      }));
//
//      // Set the updated address list
//      setAddressList(tempDart);
//    } catch (error) {
//      console.error("Error fetching address list:", error);
//    }
//  };
//
//  const saveDeafultAddress = async (item) => {
//    try {
//      await AsyncStorage.setItem('ADDRESS', item.addressId);
//      let tempDart = addressList.map(itm => ({
//        ...itm,
//        selected: itm.addressId === item.addressId
//      }));
//
//      setAddressList(tempDart);
//    } catch (error) {
//      console.error("Error saving default address:", error);
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <FlatList
//        data={addressList}
//        renderItem={({ item, index }) => {
//          return (
//            <View
//              style={[
//                styles.addressItem,
//                { marginBottom: index === addressList.length - 1 ? 100 : 10 },
//              ]}
//            >
//              <View>
//                <Text>{'Street: ' + item.street}</Text>
//                <Text>{'State: ' + item.state}</Text>
//                <Text>{'City: ' + item.city}</Text>
//                <Text>{'Landmark: ' + item.landmark}</Text>
//                <Text>{'Pincode: ' + item.pincode}</Text>
//                <Text>{'Mobile: ' + item.mobile}</Text>
//              </View>
//              {item.selected === true ? (
//                <Text>Default</Text>
//              ) : (
//                <TouchableOpacity
//                  style={styles.btn}
//                  onPress={() => saveDeafultAddress(item)}
//                >
//                  <Text style={{ color: '#fff' }}>Set Default</Text>
//                </TouchableOpacity>
//              )}
//            </View>
//          );
//        }}
//        keyExtractor={(item) => item.addressId.toString()}
//      />
//      <TouchableOpacity
//        style={styles.addNewBtn}
//        onPress={() => navigation.navigate('AddNewAddress')}
//      >
//        <Text style={styles.btnText}>Add New Address</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//export default Address;
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  },
//  addNewBtn: {
//    width: '90%',
//    height: 50,
//    backgroundColor: 'orange',
//    justifyContent: 'center',
//    alignItems: 'center',
//    position: 'absolute',
//    bottom: 10,
//    alignSelf: 'center',
//    borderRadius: 10,
//  },
//  btnText: {
//    color: '#000',
//    fontSize: 16,
//    fontWeight: '600',
//  },
//  addressItem: {
//    width: '90%',
//    backgroundColor: '#fff',
//    elevation: 4,
//    alignSelf: 'center',
//    marginTop: 20,
//    flexDirection: 'row',
//    justifyContent: 'space-between',
//    padding: 20,
//    alignItems: 'center',
//  },
//  btn: {
//    backgroundColor: 'green',
//    height: 40,
//    justifyContent: 'center',
//    alignItems: 'center',
//    width: 100,
//  },
//});


import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const Address = ({ navigation }) => {
  const [addressList, setAddressList] = useState([]);
  const isFocused = useIsFocused();
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    getAddressList();
  }, [isFocused]);

  const getAddressList = async () => {
    try {
      const userId = await AsyncStorage.getItem('USERID');
      const addressId = await AsyncStorage.getItem('ADDRESS');

      // Fetch user document from Firestore
      const user = await firestore().collection('users').doc(userId).get();

      // Check if address exists and is an array
      let tempDart = user._data?.address || [];

      // Update selected property for each address
      tempDart = tempDart.map(item => ({
        ...item,
        selected: item.addressId === addressId
      }));

      // Set the updated address list
      setAddressList(tempDart);
    } catch (error) {
      console.error("Error fetching address list:", error);
    }
  };

  const updateAddressInFirestore = async (updatedAddresses) => {
    try {
      const userId = await AsyncStorage.getItem('USERID');
      await firestore().collection('users').doc(userId).update({
        address: updatedAddresses,
      });
    } catch (error) {
      console.error("Error updating address in Firestore:", error);
    }
  };

  const saveDeafultAddress = async (item) => {
    try {
      // Update default address in AsyncStorage
      await AsyncStorage.setItem('ADDRESS', item.addressId);

      // Reorder address list and set selected address to index 0
      let tempDart = addressList.filter(itm => itm.addressId !== item.addressId);
      tempDart.unshift(item);  // Move selected address to the beginning

      // Update the selected property for each address
      tempDart = tempDart.map(itm => ({
        ...itm,
        selected: itm.addressId === item.addressId,
      }));

      // Update the state with the new address list
      setAddressList(tempDart);

      // Update Firestore with the new address list order
      await updateAddressInFirestore(tempDart);
    } catch (error) {
      console.error("Error saving default address:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={addressList}
        renderItem={({ item, index }) => {
          return (
            <View
              style={[
                styles.addressItem,
                { marginBottom: index === addressList.length - 1 ? 100 : 10 },
              ]}
            >
              <View>
                <Text>{'Street: ' + item.street}</Text>
                <Text>{'State: ' + item.state}</Text>
                <Text>{'City: ' + item.city}</Text>
                <Text>{'Landmark: ' + item.landmark}</Text>
                <Text>{'Pincode: ' + item.pincode}</Text>
                <Text>{'Mobile: ' + item.mobile}</Text>
              </View>
              {item.selected === true ? (
                <Text>Default</Text>
              ) : (
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => saveDeafultAddress(item)}
                >
                  <Text style={{ color: '#fff' }}>Set Default</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        }}
        keyExtractor={(item) => item.addressId.toString()}
      />
      <TouchableOpacity
        style={styles.addNewBtn}
        onPress={() => navigation.navigate('AddNewAddress')}
      >
        <Text style={styles.btnText}>Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  addressItem: {
    width: '90%',
    backgroundColor: '#fff',
    elevation: 4,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'green',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
});
