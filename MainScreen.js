//import React from 'react';
//import { ScrollView, View, Text, StyleSheet } from 'react-native';
//import Sidebar from './src/HomePage/sidebar'; // Update path as needed
//import Header from './src/HomePage/header'; // Update path as needed
//import IconMenu from './src/HomePage/bottom'; // Update path as needed
//import Categories from './src/HomePage/categories'; // Update path as needed
//import Seasonal from './src/HomePage/seasonal'; // Update path as needed
//import Trending from './src/HomePage/trending'; // Update path as needed
//import Thatwow from './src/HomePage/thatwow'; // Update path as needed
//import Wear from './src/HomePage/wear'; // Update path as needed
//import Theshirt from './src/HomePage/thesirt'; // Update path as needed
//import Denim from './src/HomePage/inmydenim'; // Update path as needed
//import MyPhotoComponent from './src/HomePage/image'; // Update path as needed
//
//const MainScreen = () => {
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
//
//
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
//
//  text: {
//    fontSize: 18,
//    marginVertical: 10, // Space between items
//  },
//});
//
//export default MainScreen;


import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Header from './src/HomePage/header';
import IconMenu from './src/HomePage/bottom';

const MainScreen = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://10.0.2.2:4000/api/homepage');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []); // Empty dependency array ensures the effect runs once

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header placeholder="Search here..." />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryContainer}>
            <Text style={styles.title}>{category.title}</Text>
            {category.images && category.images.length > 0 && (
              <Image source={{ uri: category.images[0] }} style={styles.image} />
            )}
          </View>
        ))}
      </ScrollView>
      <IconMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 60,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  categoryContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '90%',
    height: 500,
    borderRadius: 10,
  },
});

export default MainScreen;
