//without men women and kid section in home
//import React from 'react';
//import { ScrollView, View, Text, StyleSheet } from 'react-native';
//import Sidebar from './src/HomePage/sidebar.js';
//import Header from './src/HomePage/header.js';
//import IconMenu from './src/HomePage/bottom.js';
//import Categories from './src/HomePage/categories.js';
//import Seasonal from './src/HomePage/seasonal.js';
//import Trending from './src/HomePage/trending.js';
//import Thatwow from './src/HomePage/thatwow.js';
//import Wear from './src/HomePage/wear.js';
//import Theshirt from './src/HomePage/thesirt.js';
//import Denim from './src/HomePage/inmydenim.js';
//import MyPhotoComponent from './src/HomePage/image.js';
//
//
//
//
//
//
//
//const App = () => {
//  return (
//    <View style={styles.container}>
//      <Header placeholder="Search here..." />
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//        <Sidebar />
//        <Categories />
//        <Seasonal />
//        <MyPhotoComponent />
//        <Trending />
//        <Thatwow />
//        <Wear />
//        <Theshirt />
//        <Denim />
//
//        <View style={styles.content}>
//          {/* Generate a lot of text to enable scrolling */}
//          {Array.from({ length: 60 }).map((_, index) => (
//            <Text key={index} style={styles.text}>
//              This is item {index + 1}
//            </Text>
//          ))}
//        </View>
//        <View style={{ padding: 15 }}>
//          <Text>Additional Content Goes Here...</Text>
//        </View>
//      </ScrollView>
//      <IconMenu />
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  },
//  scrollContainer: {
//    paddingBottom: 60, // Adjust based on IconMenu height
//  },
//  content: {
//    alignItems: 'center', // Center items horizontally
//  },
//  text: {
//    fontSize: 18,
//    marginVertical: 10, // Space between items
//  },
//});
//
//export default App;







//with men women kid section in home ( main running code )
import React from 'react';
import AppNavigator from './AppNavigator.js'; // Update path as needed
import Header from './src/HomePage/header.js'; // Update path as needed
import IconMenu from './src/HomePage/bottom.js'; // Update path as needed


const App = () => {
  return <AppNavigator />;
};

export default App;



