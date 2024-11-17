import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconMenu from './src/HomePage/bottom.js'; // Import IconMenu as before


const { width } = Dimensions.get('window');

const NewPage = ({ navigation }) => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://10.0.2.2:4000/api/men'); // Replace with your API endpoint
        const data = await response.json();
        setContainers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    const imageUrl = item.images[0]; // Assuming `images` is an array and we use the first URL

    return (
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate('PhotoScreen', { item })}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.price}>{`Rs. ${item.price.toFixed(2)}`}</Text>
        <View style={styles.smallBoxesContainer}>
          {item.sizes.map((size, index) => (
            <View key={index} style={styles.sizes}>
              <Text style={styles.smallBoxText}>{size}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={containers}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <IconMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  row: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  box: {
    padding: 10,
    marginBottom: 15,
    flex: 1,
    alignItems: 'flex-start',
  },
  image: {
    width: (width / 2) - 20, // Adjust width for 2 images per row
    height: 250,
  },
  text: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  smallBoxesContainer: {
    width: (width / 2) - 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sizes: {
    width: 40, // 5 boxes per row, with margin
    height: 30,
    marginBottom: 10,
    marginRight: 10,
    marginTop: 5,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallBoxText: {
    color: '#000',
    fontSize: 14,
  },
});

export default NewPage;
