import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

// Sample data for the photos with unique text
const photos = [
  { id: '1', uri: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533'},
  { id: '2', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533'},
  { id: '3', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533'},
  { id: '4', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533'},
  { id: '5', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533'},
  { id: '6', uri: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533'},
    { id: '7', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533'},
    { id: '8', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533'},

  // Add more photos as needed
];

const Theshirt = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <FastImage
        style={styles.image}
        source={{ uri: item.uri }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.imageLabel}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The Shirt Gallery</Text>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={170} // Width of each image + marginRight
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    marginBottom: 15,
    color: '#000',
  },
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 10,
    alignItems: 'flexStart',
    marginLeft: 12,
  },
  image: {
    width: 170,
    height: 250,
    marginBottom: 5,
  },
});

export default Theshirt;