//// Header.js working one
//import React, { useState } from 'react';
//import { View, TextInput, StyleSheet, Text } from 'react-native';
//import { Icon } from 'react-native-elements';
//
//const Header = ({ placeholder }) => {
//const [searchText, setSearchText] = useState('');
//
//  return (
//    <View style={styles.headerContainer}>
//      <View style={styles.searchContainer}>
//
//        <TextInput
//          style={styles.searchInput}
//          placeholder={placeholder}
//          value={searchText}
//          onChangeText={setSearchText}
//        />
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  headerContainer: {
//   zIndex: 1000,
//   position: 'relative',
//    flexDirection: 'row',
//    alignItems: 'center',
//    paddingHorizontal: 15,
//    paddingVertical: 10,
//    justifyContent: 'space-between',
//    BorderWidth: 3,
//  },
//  searchContainer: {
//
//    flexDirection: 'row',
//    alignItems: 'center',
//    backgroundColor: '#fff',
//    borderRadius: 5,
//    borderWidth: 1,
//    flex: 1,
//    width: 200,
//  },
//
//  searchInput: {
//
//    flex: 1,
//    fontSize: 15,
//  },
//});
//
//export default Header;









// Header.js
//import React, { useState } from 'react';
//import { View, TextInput, StyleSheet } from 'react-native';
//import { Icon } from 'react-native-elements';
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
//          type="feather"
//          color="#000"
//          size={20}
//          containerStyle={styles.iconStyle}
//        />
//      </View>
//      <View style={styles.iconContainer}>
//        <Icon
//          name="bell"
//          type="feather"
//          color="#000"
//          size={25}
//          containerStyle={styles.iconStyle}
//        />
//        <Icon
//          name="user"
//          type="feather"
//          color="#000"
//          size={25}
//          containerStyle={styles.iconStyle}
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
//    borderRadius: 5,
//    borderWidth: 1,
//    flex: 1,
//    marginRight: 10,
//  },
//  searchInput: {
//    flex: 1,
//    fontSize: 15,
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




import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchSubmit = () => {
    if (onSearch) {
      onSearch(searchText); // Pass the search text to the parent component
    } else {
      console.log('Search text:', searchText); // Default action (e.g., log the search text)
    }
    Keyboard.dismiss(); // Dismiss the keyboard after submitting
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearchSubmit} // Trigger search on submit
          returnKeyType="search" // Change the keyboard "Enter" key to "Search"
        />
        <Icon
          name="search"
          type="feather"
          color="#000"
          size={20}
          containerStyle={styles.iconStyle}
          onPress={handleSearchSubmit} // Trigger search on icon press
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="bell"
          type="feather"
          color="#000"
          size={25}
          containerStyle={styles.iconStyle}
        />
        <Icon
          name="user"
          type="feather"
          color="#000"
          size={25}
          containerStyle={styles.iconStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 1000,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderWidth: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginLeft: 10,
  },
});

export default Header;
