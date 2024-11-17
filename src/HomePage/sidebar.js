//without men women kid section in home

//import React, { useState, useRef } from 'react';
//import { View, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
//
//const { width } = Dimensions.get('window');
//
//const photos = [
//  { uri: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533' },
//  { uri: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533' },
//];
//
//const renderItem = ({ item }) => (
//  <View style={styles.item}>
//    <Image source={{ uri: item.uri }} style={styles.image} />
//  </View>
//);
//
//const Sidebar = () => {
//  const [activeSlide, setActiveSlide] = useState(0);
//  const flatListRef = useRef(null);
//
//  const viewabilityConfig = {
//    viewAreaCoveragePercentThreshold: 50,
//  };
//
//  const onViewableItemsChanged = ({ viewableItems }) => {
//    if (viewableItems.length > 0) {
//      setActiveSlide(viewableItems[0].index || 0);
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <FlatList
//        ref={flatListRef}
//        data={photos}
//        renderItem={renderItem}
//        keyExtractor={(item) => item.uri}
//        horizontal
//        pagingEnabled
//        showsHorizontalScrollIndicator={false}
//        onViewableItemsChanged={onViewableItemsChanged}
//        viewabilityConfig={viewabilityConfig}
//        contentContainerStyle={styles.contentContainer}
//      />
//      <View style={styles.dotsContainer}>
//        {photos.map((_, index) => (
//          <View
//            key={index}
//            style={[
//              styles.dot,
//              { backgroundColor: index === activeSlide ? '#ff5733' : '#ddd' },
//            ]}
//          />
//        ))}
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    height: 650, // Set a fixed height for the sidebar
//    width: '100%',
//    position: 'relative',
//  },
//  item: {
//    width: width, // Full width of the screen
//    height: '100%', // Full height of the sidebar
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  image: {
//    width: '100%',
//    height: '100%',
//    resizeMode: 'cover',
//  },
//  contentContainer: {
//    padding: 0,
//    margin: 0,
//    alignItems: 'center',
//  },
//  dotsContainer: {
//    flexDirection: 'row',
//    justifyContent: 'center',
//    marginTop: 10,
//    marginBottom: 10,
//  },
//  dot: {
//    width: 10,
//    height: 10,
//    borderRadius: 5,
//    marginHorizontal: 5,
//  },
//});
//
//export default Sidebar;
//



//with men women kid section in home withoup api
//import React from 'react';
//import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
//
//const { width } = Dimensions.get('window'); // Get the width of the device's screen
//
//const PhotoWithHeading = ({ heading, photoUrl }) => {
//  return (
//    <View style={styles.photoContainer}>
//      <Text style={styles.heading}>{heading}</Text>
//      <Image source={{ uri: photoUrl }} style={styles.image} resizeMode="cover" />
//    </View>
//  );
//};
//
//const App = () => {
//  const photos = [
//    {
//      title: 'MEN',
//      image: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533',
//    },
//    {
//      title: 'WOMEN',
//      image: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533',
//    },
//    {
//       title: 'KIDs',
//       image: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533',
//    },
//    {
//        title: 'UNISEX',
//        image: 'https://wtflex.in/cdn/shop/files/Artboard3-3.png?v=1706878396&width=533',
//    },
//  ];
//
//  return (
//    <View style={styles.appContainer}>
//      {photos.map((photo, index) => (
//        <PhotoWithHeading key={index} heading={photo.title} photoUrl={photo.image} />
//      ))}
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  appContainer: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#fff',
//  },
//  photoContainer: {
//    alignItems: 'center',
//    marginBottom: 20,
//    width: width, // Ensure the photo container spans the full width of the device
//  },
//  title: {
//    fontSize: 20,
//    fontWeight: 'bold',
//    marginBottom: 10,
//  },
//  image: {
//    width: '100%', // Make the image span the full width of the container
//    height: 500, // Adjust height as needed
//    borderRadius: 8,
//  },
//});
//
//export default App;









//with men women kid section in home

//import React, { useEffect, useState } from 'react';
//import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
//
//const { width } = Dimensions.get('window'); // Get the width of the device's screen
//
//const PhotoWithHeading = ({ heading, photoUrl }) => {
//  console.log('Image URL:', photoUrl); // Debug: Log the image URL
//  return (
//    <View style={styles.photoContainer}>
//      <Text style={styles.heading}>{heading}</Text>
//      {photoUrl ? (
//        <Image source={{ uri: photoUrl }} style={styles.image} resizeMode="cover" />
//      ) : (
//        <Text style={styles.errorText}>Image not available</Text>
//      )}
//    </View>
//  );
//};
//
//const App = () => {
//  const [photos, setPhotos] = useState([]);
//  const [loading, setLoading] = useState(true);
//
//  useEffect(() => {
//    fetch('http://10.0.2.2:4000/api/homepage')
//      .then(response => response.json())
//      .then(data => {
//
//        const formattedData = data.map(item => ({
//          title: item.title,
//          image: item.images[0],
//        }));
//        setPhotos(formattedData);
//        setLoading(false);
//      })
//      .catch(error => {
//        console.error('Error fetching data:', error);
//        setLoading(false);
//      });
//  }, []);
//
//  if (loading) {
//    return (
//      <View style={styles.loadingContainer}>
//        <ActivityIndicator size="large" color="#0000ff" />
//      </View>
//    );
//  }
//
//  return (
//    <View style={styles.appContainer}>
//      {photos.map((photo, index) => (
//        <PhotoWithHeading key={index} heading={photo.title} photoUrl={photo.image} />
//      ))}
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  appContainer: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#fff',
//  },
//  photoContainer: {
//    alignItems: 'center',
//    marginBottom: 20,
//    width: width,
//  },
//  heading: {
//    fontSize: 20,
//    fontWeight: 'bold',
//    marginBottom: 10,
//  },
//  image: {
//    width: '100%', // Make the image span the full width of the container
//    height: 500, // Adjust height as needed
//    borderRadius: 8,
//  },
//  errorText: {
//    color: 'red',
//    fontSize: 16,
//  },
//  loadingContainer: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//});
//
//export default App;







import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Video from 'react-native-video'; // Import the Video component

const { width } = Dimensions.get('window'); // Get the width of the device's screen

const isValidUrl = (url) => {
  return url && (url.startsWith('http://') || url.startsWith('https://'));
};

const VideoWithHeading = ({ heading, videoUrl, isPlaying, playbackSpeed = 1.0 }) => {
  console.log('Video URL:', videoUrl); // Debug: Log the video URL

  return (
    <View style={styles.videoContainer}>
      <Text style={styles.heading}>{heading}</Text>
      {isValidUrl(videoUrl) ? (
        <Video
          source={{ uri: videoUrl }} // Use the video URL as the source
          style={styles.video} // Apply video styles
          controls={true} // Show the default video controls
          resizeMode="cover" // Resize the video to cover the container
          repeat={true} // Loop the video
          rate={isPlaying ? playbackSpeed : 0} // Control playback speed
          ignoreSilentSwitch="obey" // Handle device silent mode
          volume={1.0} // Set the volume for the video
        />
      ) : (
        <Text style={styles.errorText}>Video not available</Text>
      )}
    </View>
  );
};

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:4000/api/homepage')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data:", data); // Log the fetched data for debugging

        // Ensure we're formatting the data correctly
        const formattedData = data.map(item => ({
          title: item.title,
          video: item.images || '', // Ensure video URL exists; default to an empty string if undefined
        }));

        // Log the formatted data
        console.log("Formatted Data:", formattedData); // Check the formatted data

        setVideos(formattedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const isPlaying = true; // Set this to true to play all videos

  return (
    <View style={styles.appContainer}>
      {videos.map((video, index) => (
        <VideoWithHeading
          key={index}
          heading={video.title}
          videoUrl={video.video}
          isPlaying={isPlaying} // Play all videos simultaneously
          playbackSpeed={1.0} // Set the playback speed to normal (or adjust as needed)
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  videoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: width,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  video: {
    width: '100%', // Make the video span the full width of the container
    height: 300, // Adjust height as needed
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;




//import React from 'react';
//import { View, StyleSheet } from 'react-native';
//import { Canvas } from '@react-three/fiber';
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { useLoader } from '@react-three/fiber';
//
//const ModelViewer = () => {
//  // Adjust the path according to your project structure
//  const gltf = useLoader(GLTFLoader, require('../../assets/3d.gltf')); // Ensure this path is correct
//
//  return (
//    <View style={styles.container}>
//      <Canvas>
//        <ambientLight />
//        <pointLight position={[10, 10, 10]} />
//        <primitive object={gltf.scene} />
//        <OrbitControls />
//      </Canvas>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  },
//});
//
//export default ModelViewer;
