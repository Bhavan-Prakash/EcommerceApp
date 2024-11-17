//import React from 'react';
//import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
//
//const FilteredItemsScreen = ({ route }) => {
//  const { filteredItems } = route.params;
//
//  return (
//    <ScrollView contentContainerStyle={styles.container}>
//      {filteredItems.length > 0 ? (
//        filteredItems.map((item, index) => (
//          <View key={index} style={styles.box}>
//            <Image source={{ uri: item.images[0] }} style={styles.image} />
//            <View style={styles.textContainer}>
//              <Text style={styles.text}>{item.name}</Text>
//            </View>
//          </View>
//        ))
//      ) : (
//        <Text>No items found.</Text>
//      )}
//    </ScrollView>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    padding: 10,
//  },
//  box: {
//    backgroundColor: '#000',
//    flexDirection: 'row',
//    padding: 10,
//    marginBottom: 15,
//    alignItems: 'center',
//  },
//  image: {
//    width: 110,
//    height: 92,
//    marginRight: 10,
//    marginLeft: 20,
//  },
//  textContainer: {
//    flex: 1,
//    alignItems: 'flex-end',
//  },
//  text: {
//    fontSize: 16,
//    color: '#fff',
//  },
//});
//
//export default FilteredItemsScreen;








//import React from 'react';
//import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
//
//const { width } = Dimensions.get('window');
//
//const FilteredItemsScreen = ({ route }) => {
//  const { filteredItems } = route.params;
//
//  const renderItem = ({ item }) => (
//    <View style={styles.box}>
//      <Image source={{ uri: item.images[0] }} style={styles.image} />
//      <Text style={styles.text}>{item.title}</Text>
//      <Text style={styles.text}>{item.description}</Text>
//      <Text style={styles.price}>{`Rs. ${item.price.toFixed(2)}`}</Text>
//      <View style={styles.smallBoxesContainer}>
//        {item.sizes.map((size, index) => (
//          <View key={index} style={styles.sizes}>
//            <Text style={styles.smallBoxText}>{size}</Text>
//          </View>
//        ))}
//      </View>
//    </View>
//  );
//
//  return (
//    <FlatList
//      data={filteredItems}
//      renderItem={renderItem}
//      keyExtractor={(item, index) => index.toString()}
//      numColumns={2} // Display two items per row
//      columnWrapperStyle={styles.row} // Style the row
//      contentContainerStyle={styles.container} // Style the entire list
//      ListEmptyComponent={<Text style={styles.noItemsText}>No items found.</Text>} // Handle empty list
//    />
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    padding: 10,
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
//    backgroundColor: '#fff',
//    borderRadius: 5,
//    elevation: 2,
//    alignItems: 'center',
//  },
//  image: {
//    width: (width / 2) - 30, // Adjust width for 2 images per row with padding
//    height: 250,
//    borderRadius: 5,
//  },
//  text: {
//    fontSize: 16,
//    color: '#333',
//    textAlign: 'center',
//    marginTop: 5,
//  },
//  price: {
//    fontSize: 16,
//    color: '#000',
//    fontWeight: 'bold',
//    marginTop: 5,
//  },
//  smallBoxesContainer: {
//    width: (width / 2) - 50,
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'center',
//    marginTop: 5,
//  },
//  sizes: {
//    width: 40, // 5 boxes per row, with margin
//    height: 30,
//    marginBottom: 10,
//    marginRight: 10,
//    borderWidth: 2,
//    borderColor: '#000',
//    alignItems: 'center',
//    justifyContent: 'center',
//    borderRadius: 5,
//  },
//  smallBoxText: {
//    color: '#000',
//    fontSize: 14,
//  },
//  noItemsText: {
//    fontSize: 18,
//    color: '#333',
//    textAlign: 'center',
//    marginTop: 20,
//  },
//});
//
//export default FilteredItemsScreen;














//final running code
//import React from 'react';
//import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
//
//const { width } = Dimensions.get('window');
//
//const FilteredItemsScreen = ({ route, navigation }) => {
//  const { filteredItems } = route.params;
//
//  const renderItem = ({ item }) => (
//    <TouchableOpacity onPress={() => navigation.navigate('ItemDetailScreen', { item })}>
//      <View style={styles.box}>
//        <Image source={{ uri: item.images[0] }} style={styles.image} />
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
//    </TouchableOpacity>
//  );
//
//  return (
//    <FlatList
//      data={filteredItems}
//      renderItem={renderItem}
//      keyExtractor={(item, index) => index.toString()}
//      numColumns={2}
//      columnWrapperStyle={styles.row}
//      contentContainerStyle={styles.container}
//      ListEmptyComponent={<Text style={styles.noItemsText}>No items found.</Text>}
//    />
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    padding: 10,
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
//    backgroundColor: '#fff',
//    borderRadius: 5,
//    elevation: 2,
//    alignItems: 'center',
//  },
//  image: {
//    width: (width / 2) - 30, // Adjust width for 2 images per row with padding
//    height: 250,
//    borderRadius: 5,
//  },
//  text: {
//    fontSize: 16,
//    color: '#333',
//    textAlign: 'center',
//    marginTop: 5,
//  },
//  price: {
//    fontSize: 16,
//    color: '#000',
//    fontWeight: 'bold',
//    marginTop: 5,
//  },
//  smallBoxesContainer: {
//    width: (width / 2) - 50,
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'center',
//    marginTop: 5,
//  },
//  sizes: {
//    width: 40, // 5 boxes per row, with margin
//    height: 30,
//    marginBottom: 10,
//    marginRight: 10,
//    borderWidth: 2,
//    borderColor: '#000',
//    alignItems: 'center',
//    justifyContent: 'center',
//    borderRadius: 5,
//  },
//  smallBoxText: {
//    color: '#000',
//    fontSize: 14,
//  },
//  noItemsText: {
//    fontSize: 18,
//    color: '#333',
//    textAlign: 'center',
//    marginTop: 20,
//  },
//});
//
//export default FilteredItemsScreen;






////only filter logic working
//import React, { useState, useEffect } from 'react';
//import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
//
//const { width } = Dimensions.get('window');
//
//const FilteredItemsScreen = ({ route, navigation }) => {
//  const [allItems, setAllItems] = useState([]); // Store all items
//  const [filteredItems, setFilteredItems] = useState([]); // Store filtered items
//  const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility
//  const [loading, setLoading] = useState(false); // Loading indicator
//  const [selectedCategory, setSelectedCategory] = useState(null); // Selected subcategory
//
//  const subcategories = ['T-Shirts', 'Shirts', 'Shorts', 'Pajamas']; // Available subcategories
//
//  // Function to toggle dropdown visibility
//  const toggleDropdown = () => {
//    setDropdownVisible(!dropdownVisible);
//  };
//
//  // Function to fetch all items from API
//  const fetchAllItems = async () => {
//    setLoading(true);
//    try {
//      const apiUrl = 'http://10.0.2.2:4000/api/subcategory'; // API to fetch all items
//      const response = await fetch(apiUrl);
//      const data = await response.json();
//
//      if (Array.isArray(data)) {
//        setAllItems(data); // Store all fetched items
//        setFilteredItems(data); // Display all items by default
//      } else {
//        console.error("API returned invalid data format", data);
//      }
//    } catch (error) {
//      console.error("Error fetching data:", error);
//    } finally {
//      setLoading(false);
//    }
//  };
//
//  // Function to filter items based on selected subcategory
//  const filterItemsBySubcategory = (subcategory) => {
//    setSelectedCategory(subcategory);
//    setDropdownVisible(false);
//
//    if (subcategory) {
//      const filtered = allItems.filter(item => item.category === subcategory); // Filter items by category
//      setFilteredItems(filtered);
//    } else {
//      setFilteredItems(allItems); // Show all items if no subcategory is selected
//    }
//  };
//
//  // Fetch all items on component mount
//  useEffect(() => {
//    fetchAllItems();
//  }, []);
//
//  // Render each item
//  const renderItem = ({ item }) => (
//    <TouchableOpacity onPress={() => navigation.navigate('ItemDetailScreen', { item })}>
//      <View style={styles.box}>
//        <Image source={{ uri: item.images[0] }} style={styles.image} />
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
//    </TouchableOpacity>
//  );
//
//  return (
//    <View style={{ flex: 1 }}>
//      {/* Header with Dropdown */}
//      <View style={styles.header}>
//        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
//          <Text style={styles.dropdownText}>Categories</Text>
//        </TouchableOpacity>
//        {dropdownVisible && (
//          <View style={styles.dropdownMenu}>
//            {subcategories.map((subcategory, index) => (
//              <TouchableOpacity
//                key={index}
//                style={styles.dropdownItem}
//                onPress={() => filterItemsBySubcategory(subcategory)} // Filter items on subcategory click
//              >
//                <Text style={styles.dropdownItemText}>{subcategory}</Text>
//              </TouchableOpacity>
//            ))}
//            <TouchableOpacity
//              style={styles.dropdownItem}
//              onPress={() => filterItemsBySubcategory(null)} // Show all items
//            >
//              <Text style={styles.dropdownItemText}>All Categories</Text>
//            </TouchableOpacity>
//          </View>
//        )}
//      </View>
//
//      {/* Loading Spinner */}
//      {loading ? (
//        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
//      ) : (
//        <FlatList
//          data={filteredItems}
//          renderItem={renderItem}
//          keyExtractor={(item, index) => index.toString()}
//          numColumns={2}
//          columnWrapperStyle={styles.row}
//          contentContainerStyle={styles.container}
//          ListEmptyComponent={<Text style={styles.noItemsText}>No items found for {selectedCategory || 'all categories'}.</Text>}
//        />
//      )}
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    padding: 10,
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
//    backgroundColor: '#fff',
//    borderRadius: 5,
//    elevation: 2,
//    alignItems: 'center',
//  },
//  image: {
//    width: (width / 2) - 30,
//    height: 250,
//    borderRadius: 5,
//  },
//  text: {
//    fontSize: 16,
//    color: '#333',
//    textAlign: 'center',
//    marginTop: 5,
//  },
//  price: {
//    fontSize: 16,
//    color: '#000',
//    fontWeight: 'bold',
//    marginTop: 5,
//  },
//  smallBoxesContainer: {
//    width: (width / 2) - 50,
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'center',
//    marginTop: 5,
//  },
//  sizes: {
//    width: 40,
//    height: 30,
//    marginBottom: 10,
//    marginRight: 10,
//    borderWidth: 2,
//    borderColor: '#000',
//    alignItems: 'center',
//    justifyContent: 'center',
//    borderRadius: 5,
//  },
//  smallBoxText: {
//    color: '#000',
//    fontSize: 14,
//  },
//  noItemsText: {
//    fontSize: 18,
//    color: '#333',
//    textAlign: 'center',
//    marginTop: 20,
//  },
//
//  // Styles for header and dropdown
//  header: {
//    backgroundColor: '#fff',
//    padding: 10,
//    elevation: 2,
//  },
//  dropdownButton: {
//    padding: 10,
//    backgroundColor: '#eee',
//    borderRadius: 5,
//    alignItems: 'center',
//  },
//  dropdownText: {
//    fontSize: 18,
//    color: '#000',
//  },
//  dropdownMenu: {
//    backgroundColor: '#fff',
//    borderColor: '#ddd',
//    borderWidth: 1,
//    marginTop: 5,
//    borderRadius: 5,
//  },
//  dropdownItem: {
//    padding: 10,
//    borderBottomWidth: 1,
//    borderBottomColor: '#ddd',
//  },
//  dropdownItemText: {
//    fontSize: 16,
//    color: '#333',
//  },
//});
//
//export default FilteredItemsScreen;







import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';

const { width } = Dimensions.get('window');

const FilteredItemsScreen = ({ route, navigation }) => {
  const { filteredItems: initialFilteredItems } = route.params;

  const [allItems, setAllItems] = useState(initialFilteredItems); // Store all items
  const [filteredItems, setFilteredItems] = useState(initialFilteredItems); // Store filtered items
  const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility
  const [loading, setLoading] = useState(false); // Loading indicator
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected subcategory

  const subcategories = ['T-Shirts', 'Shirts', 'Shorts', 'Pajamas']; // Available subcategories

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to filter items based on selected subcategory
  const filterItemsBySubcategory = (subcategory) => {
    setSelectedCategory(subcategory);
    setDropdownVisible(false);

    if (subcategory) {
      const filtered = allItems.filter(item => item.category === subcategory); // Filter items by category
      setFilteredItems(filtered);
    } else {
      setFilteredItems(allItems); // Show all items if no subcategory is selected
    }
  };

  // Render each item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ItemDetailScreen', { item })}>
      <View style={styles.box}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
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
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Header with Dropdown */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
          <Text style={styles.dropdownText}>Categories</Text>
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdownMenu}>
            {subcategories.map((subcategory, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => filterItemsBySubcategory(subcategory)} // Filter items on subcategory click
              >
                <Text style={styles.dropdownItemText}>{subcategory}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => filterItemsBySubcategory(null)} // Show all items
            >
              <Text style={styles.dropdownItemText}>All Categories</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Loading Spinner */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filteredItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.container}
          ListEmptyComponent={<Text style={styles.noItemsText}>No items found for {selectedCategory || 'all categories'}.</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: (width / 2) - 30,
    height: 250,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
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
    justifyContent: 'center',
    marginTop: 5,
  },
  sizes: {
    width: 40,
    height: 30,
    marginBottom: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  smallBoxText: {
    color: '#000',
    fontSize: 14,
  },
  noItemsText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },

  // Styles for header and dropdown
  header: {
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2,
  },
  dropdownButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 18,
    color: '#000',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default FilteredItemsScreen;
