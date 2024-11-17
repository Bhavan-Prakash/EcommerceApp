//import React from 'react';
//import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
//import Header from './src/HomePage/header.js';
//import IconMenu from './src/HomePage/bottom.js';
//
//
//const { width } = Dimensions.get('window');
//
//const CollectionPage = () => {
//  const containers = [
//    {
//      text: 'First Container',
//      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//    },
//    {
//      text: 'Second Container',
//      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//    },
//    {
//      text: 'Third Container',
//      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//    },
//    {
//      text: 'Fourth Container',
//      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//    },
//    {
//          text: 'First Container',
//          image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//        },
//        {
//          text: 'Second Container',
//          image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//        },
//        {
//          text: 'Third Container',
//          image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//        },
//        {
//          text: 'Fourth Container',
//          image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//        },
//        {
//              text: 'First Container',
//              image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//            },
//            {
//              text: 'Second Container',
//              image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//            },
//            {
//              text: 'Third Container',
//              image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//            },
//            {
//              text: 'Fourth Container',
//              image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//            },
//            {
//                  text: 'First Container',
//                  image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//                },
//                {
//                  text: 'Second Container',
//                  image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//                },
//                {
//                  text: 'Third Container',
//                  image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//                },
//                {
//                  text: 'Fourth Container',
//                  image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//                },
//                {
//                      text: 'First Container',
//                      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//                    },
//                    {
//                      text: 'Second Container',
//                      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//                    },
//                    {
//                      text: 'Third Container',
//                      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//                    },
//                    {
//                      text: 'Fourth Container',
//                      image: 'https://wtflex.in/cdn/shop/files/B2BF7439-F07C-4856-81FC-A7A317217001.png?v=1721477805&width=533', // Replace with actual image URL
//                    },
//  ];
//
//  return (
//         <View style={styles.container}>
//           <Header placeholder="Search here..." />
//           <ScrollView contentContainerStyle={styles.scrollContainer}>
//             {containers.map((item, index) => (
//               <View key={index} style={styles.box}>
//                 <Image source={{ uri: item.image }} style={styles.image} />
//                 <View style={styles.textContainer}>
//                   <Text style={styles.text}>{item.text}</Text>
//                 </View>
//               </View>
//             ))}
//
//
//           </ScrollView>
//           <IconMenu />
//         </View>
//       );
//     };
//
//     const styles = StyleSheet.create({
//
//       container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//       },
//       box: {
//         backgroundColor: '#000',
//         flexDirection: 'row', // Align items horizontally
//         padding: 10,
//         marginBottom: 15,
//         width: width, // Adjust width as needed
//         alignItems: 'center',
//       },
//       image: {
//         width: 110,
//         height: 92,
//         marginRight: 10, // Space between image and text
//         marginLeft: 20,
//       },
//       textContainer: {
//         flex: 1, // Take up remaining space in the container
//         alignItems: 'flex-end', // Align text to the right
//       },
//       text: {
//         fontSize: 16,
//         color: '#fff',
//       },
//       content: {
//         padding: 15, // Optional: Add padding for content section
//       },
//     });
//
//     export default CollectionPage;


//working code
//import React, { useState, useEffect } from 'react';
//import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
//import Header from './src/HomePage/header.js';
//import IconMenu from './src/HomePage/bottom.js';
//
//const { width } = Dimensions.get('window');
//
//const CollectionPage = () => {
//  const [containers, setContainers] = useState([]);
//
//  useEffect(() => {
//    // Fetch data from API
//    const fetchData = async () => {
//      try {
//        const response = await fetch('http://10.0.2.2:4000/api/category'); // Replace with your actual API endpoint
//        const data = await response.json();
//        setContainers(data);
//      } catch (error) {
//        console.error('Error fetching data:', error);
//      }
//    };
//
//    fetchData();
//  }, []);
//
//  return (
//    <View style={styles.container}>
//      <Header placeholder="Search here..." />
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//        {containers.map((item, index) => (
//          <View key={index} style={styles.box}>
//            <Image source={{ uri: item.images[0] }} style={styles.image} />
//            <View style={styles.textContainer}>
//              <Text style={styles.text}>{item.name}</Text>
//            </View>
//          </View>
//        ))}
//      </ScrollView>
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
//  box: {
//    backgroundColor: '#000',
//    flexDirection: 'row', // Align items horizontally
//    padding: 10,
//    marginBottom: 15,
//    width: width, // Adjust width as needed
//    alignItems: 'center',
//  },
//  image: {
//    width: 110,
//    height: 92,
//    marginRight: 10, // Space between image and text
//    marginLeft: 20,
//  },
//  textContainer: {
//    flex: 1, // Take up remaining space in the container
//    alignItems: 'flex-end', // Align text to the right
//  },
//  text: {
//    fontSize: 16,
//    color: '#fff',
//  },
//  content: {
//    padding: 15, // Optional: Add padding for content section
//  },
//});
//
//export default CollectionPage;
//







//import React, { useState, useEffect } from 'react';
//import { ScrollView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
//import Header from './src/HomePage/header.js';
//import IconMenu from './src/HomePage/bottom.js';
//
//const { width } = Dimensions.get('window');
//
//const CollectionPage = () => {
//  const [containers, setContainers] = useState([]);
//  const [filteredItems, setFilteredItems] = useState([]);
//
//  useEffect(() => {
//    // Fetch category data from API
//    const fetchCategories = async () => {
//      try {
//        const response = await fetch('http://10.0.2.2:4000/api/category');
//        const data = await response.json();
//        setContainers(data);
//      } catch (error) {
//        console.error('Error fetching category data:', error);
//      }
//    };
//
//    fetchCategories();
//  }, []);
//
//  const handleCategoryPress = async (categoryName) => {
//    try {
//      const response = await fetch('http://10.0.2.2:4000/api/men');
//      const data = await response.json();
//
//      // Filter items that match the selected category name and gender
//      const matchingItems = data.filter(item => item.gender === categoryName);
//
//      setFilteredItems(matchingItems);
//    } catch (error) {
//      console.error('Error fetching men data:', error);
//    }
//  };
//
//  return (
//    <View style={styles.container}>
//      <Header placeholder="Search here..." />
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//        {containers.map((item, index) => (
//          <TouchableOpacity key={index} onPress={() => handleCategoryPress(item.name)}>
//            <View style={styles.box}>
//              <Image source={{ uri: item.images[0] }} style={styles.image} />
//              <View style={styles.textContainer}>
//                <Text style={styles.text}>{item.name}</Text>
//              </View>
//            </View>
//          </TouchableOpacity>
//        ))}
//
//        {filteredItems.map((item, index) => (
//          <View key={index} style={styles.box}>
//            <Image source={{ uri: item.images[0] }} style={styles.image} />
//            <View style={styles.textContainer}>
//              <Text style={styles.text}>{item.name}</Text>
//            </View>
//          </View>
//        ))}
//      </ScrollView>
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
//  box: {
//    backgroundColor: '#000',
//    flexDirection: 'row', // Align items horizontally
//    padding: 10,
//    marginBottom: 15,
//    width: width, // Adjust width as needed
//    alignItems: 'center',
//  },
//  image: {
//    width: 110,
//    height: 92,
//    marginRight: 10, // Space between image and text
//    marginLeft: 20,
//  },
//  textContainer: {
//    flex: 1, // Take up remaining space in the container
//    alignItems: 'flex-end', // Align text to the right
//  },
//  text: {
//    fontSize: 16,
//    color: '#fff',
//  },
//  content: {
//    padding: 15, // Optional: Add padding for content section
//  },
//});
//
//export default CollectionPage;
//









import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Header from './src/HomePage/header.js';
import IconMenu from './src/HomePage/bottom.js';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CollectionPage = () => {
  const [containers, setContainers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://10.0.2.2:4000/api/category');
        const data = await response.json();
        setContainers(data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryPress = async (categoryName) => {
    try {
      const response = await fetch('http://10.0.2.2:4000/api/subcategory');
      const data = await response.json();

      const matchingItems = data.filter(item => item.gender === categoryName);

      // Navigate to the FilteredItemsScreen with the filtered items
      navigation.navigate('FilteredItemsScreen', { filteredItems: matchingItems });
    } catch (error) {
      console.error('Error fetching men data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header placeholder="Search here..." />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {containers.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleCategoryPress(item.name)}>
            <View style={styles.box}>
              <Image source={{ uri: item.images[0] }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <IconMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  box: {
    backgroundColor: '#000',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    width: width,
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 92,
    marginRight: 10,
    marginLeft: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default CollectionPage;
