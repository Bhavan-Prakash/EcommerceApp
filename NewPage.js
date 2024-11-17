//import React from 'react';
//import { FlatList, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
//import Header from './src/HomePage/header.js';
//import IconMenu from './src/HomePage/bottom.js';
//
//const { width } = Dimensions.get('window');
//
//const NewPage = () => {
//  const containers = [
//    {
//      title: 'First Description',
//      description: 'second des',
//      price: 'Rs. 1400',
//      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533',
//      sizes: [
//              '1A', '1B', '1C', '1D', '1E', '1F',
//            ],
//    },
//    {
//      title: 'Second Description',
//      description: 'second des',
//      price: 'Rs. 1400',
//      sizes: [
//                    '1A', '1B', '1C', '1D', '1E', '1F',
//                  ],
//      image: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533',
//    },
//
//  ];
//
//  const renderItem = ({ item }) => (
//   <View style={styles.box}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <Text style={styles.text}>{item.title}</Text>
//         <Text style={styles.text}>{item.description}</Text>
//         <Text style={styles.price}>{item.price}</Text>
//         <View style={styles.smallBoxesContainer}>
//           {item.sizes.map((text, index) => (
//             <View key={index} style={styles.sizes}>
//               <Text style={styles.smallBoxText}>{text}</Text>
//             </View>
//           ))}
//         </View>
//       </View>
//  );
//
//  return (
//    <View style={styles.container}>
//          <FlatList
//            data={containers}
//            renderItem={renderItem}
//            keyExtractor={(item, index) => index.toString()}
//            numColumns={2}
//            columnWrapperStyle={styles.row}
//          />
//          <IconMenu />
//        </View>
//      );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#f5f5f5',
//  },
//  row: {
//    justifyContent: 'space-between',
//    marginHorizontal: 10,
//  },
//  box: {
//    padding: 10,
//    marginBottom: 15,
//    flex: 1,
//    alignItems: 'flex-start',
//  },
//  image: {
//    width: (width / 2) - 20, // Adjust width for 2 images per row
//    height: 250,
//  },
//  text: {
//    fontSize: 16,
//    color: '#000',
//    textAlign: 'left',
//    marginTop: 5,
//  },
//  smallBoxesContainer: {
//      flexDirection: 'row',
//      flexWrap: 'wrap',
//      justifyContent: 'space-between',
//    },
//    sizes: {
//      width: 30, // 5 boxes per row, with margin
//      height: 30,
//      marginBottom: 10,
//      marginTop: 10,
//      borderWidth: 2,
//      borderColor: '#000',
//      alignItems: 'center',
//      justifyContent: 'center',
//
//    },
//    smallBoxText: {
//      color: '#000',
//      fontSize: 16,
//    },
//});
//
//export default NewPage;




//running code
//import React, { useState, useEffect } from 'react';
//import { FlatList, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
//import IconMenu from './src/HomePage/bottom.js'; // Import IconMenu as before
//
//const { width } = Dimensions.get('window');
//
//const NewPage = () => {
//  const [containers, setContainers] = useState([]);
//
//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        const response = await fetch('http://10.0.2.2:4000/api/new'); // Replace with your API endpoint
//        const data = await response.json();
//        // Assuming data is an array of objects
//        setContainers(data);
//      } catch (error) {
//        console.error('Error fetching data:', error);
//      }
//    };
//
//    fetchData();
//  }, []);
//
//  const renderItem = ({ item }) => {
//    // Ensure image URL is a single string
//    const imageUrl = item.images[0]; // Assuming `images` is an array and we use the first URL
//
//    return (
//      <View style={styles.box}>
//        <Image source={{ uri: imageUrl }} style={styles.image} />
//        <Text style={styles.text}>{item.title}</Text>
//        <Text style={styles.text}>{item.description}</Text>
//        <Text style={styles.price}>{`Rs. ${item.price.toFixed(2)}`}</Text>
//        <View style={styles.smallBoxesContainer}>
//          {item.sizes.map((size, index) => (
//            <View key={index} style={styles.sizes}>
//              <Text style={styles.smallBoxText}>{size}</Text>
//            </View>
//          ))}
//        </View>
//      </View>
//    );
//  };
//
//  return (
//    <View style={styles.container}>
//      <FlatList
//        data={containers}
//        renderItem={renderItem}
//        keyExtractor={(item, index) => index.toString()}
//        numColumns={2}
//        columnWrapperStyle={styles.row}
//      />
//      <IconMenu />
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#f5f5f5',
//  },
//  row: {
//    justifyContent: 'space-between',
//    marginHorizontal: 10,
//  },
//  box: {
//    padding: 10,
//    marginBottom: 15,
//    flex: 1,
//    alignItems: 'flex-start',
//  },
//  image: {
//    width: (width / 2) - 20, // Adjust width for 2 images per row
//    height: 250,
//  },
//  text: {
//    fontSize: 16,
//    color: '#000',
//    textAlign: 'left',
//    marginTop: 5,
//  },
//  price: {
//    fontSize: 16,
//    color: '#000',
//    fontWeight: 'bold',
//    marginTop: 5,
//  },
//  smallBoxesContainer: {
//   width: (width/2) - 50,
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'space-between',
//  },
//     sizes: {
//       width: 40, // 5 boxes per row, with margin
//       height: 30,
//       marginBottom: 10,
//       marginRight: 10,
//       marginTop: 5,
//       borderWidth: 2,
//       borderColor: '#000',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//  smallBoxText: {
//    color: '#000',
//    fontSize: 14,
//  },
//});
//
//export default NewPage;






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
        const response = await fetch('http://10.0.2.2:4000/api/new'); // Replace with your API endpoint
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
