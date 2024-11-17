import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const MyPhotoComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' }} // Replace with your image URI
        style={styles.photo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    marginTop: 50,
  },
  photo: {
    width: '100%',
    height: 470,
    resizeMode: 'cover', // Adjust as needed
  },
});

export default MyPhotoComponent;
