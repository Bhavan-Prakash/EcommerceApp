import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

// Sample data for the photos with unique buttons
const photos = [
  { id: '1', uri: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', buttonText: 'Baggy'},
  { id: '2', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533', buttonText: 'Bootcut'},
  { id: '3', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533', buttonText: 'Straight'},
  { id: '4', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533', buttonText: 'Skinny'},
  { id: '5', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533', buttonText: 'Slim'},
  { id: '6', uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533', buttonText: 'View All'},
  // Add more photos as needed
];

const Denim = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <FastImage
        style={styles.image}
        source={{ uri: item.uri }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.button}>
        <Text style={styles.buttonText}>{item.buttonText}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>#InMyDenim</Text>
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
    marginLeft: 12,
  },
  image: {
    width: 160,
    height: 250,
    borderRadius: 15,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#000', // Blue background color for the button
    paddingVertical: 6,
    paddingHorizontal: 44,
    borderRadius: 15,
    // You can also add cursor styles or other interactive styles if needed
  },
  buttonText: {
    color: '#FFF', // White text color
    fontSize: 16,
  },
});

export default Denim;
