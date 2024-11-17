import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

// Sample data for the photos
const photos = [
  { id: '1', uri: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533' },
  { id: '2', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
  { id: '3', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
  { id: '4', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
  { id: '5', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
  { id: '6', uri: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533' },
  { id: '7', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
  { id: '8', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
  { id: '9', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
  { id: '10', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
  // Add more photos as needed
];

const Categories = () => {
  const renderItem = ({ item }) => (
    <FastImage
      style={styles.image}
      source={{ uri: item.uri }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={100} // Width of each image
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 140,
    marginRight: 35,
    marginLeft: 25,
  },
});

export default Categories;



