////main running code
//import React, { useState } from 'react';
//import { TextInput, View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
//import BottomBarNewPage from './BottomBarNewPage.js';
//
//const { width, height } = Dimensions.get('window');
//
//const QuantitySelector = () => {
//  const [quantity, setQuantity] = useState(1);
//
//  const incrementQuantity = () => {
//    setQuantity(prevQuantity => prevQuantity + 1);
//  };
//
//  const decrementQuantity = () => {
//    if (quantity > 1) {
//      setQuantity(prevQuantity => prevQuantity - 1);
//    }
//  };
//
//  return (
//    <View style={styles.quantityContainer}>
//      <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
//        <Text style={styles.buttonText}>-</Text>
//      </TouchableOpacity>
//      <Text style={styles.quantityText}>{quantity}</Text>
//      <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
//        <Text style={styles.buttonText}>+</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//const Header = ({ placeholder }) => {
//  const [searchText, setSearchText] = useState('');
//
//  return (
//    <View style={styles.headerContainer}>
//      <View style={styles.searchContainer}>
//        <TextInput
//          style={styles.searchInput}
//          placeholder={placeholder}
//          value={searchText}
//          onChangeText={setSearchText}
//        />
//      </View>
//      <TouchableOpacity style={styles.blackButton}>
//        <Text style={styles.buttonLabel}>Check</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//const ItemDetailScreen = ({ route }) => {
//  const { item } = route.params; // Access the item passed from the previous screen
//
//  return (
//    <View style={styles.screenContainer}>
//      <ScrollView contentContainerStyle={styles.container}>
//        <Image source={{ uri: item.images[0] }} style={styles.image} />
//        <Text style={styles.title}>{item.title}</Text>
//        <Text style={styles.description}>{item.description}</Text>
//        <Text style={styles.price}>{`Rs. ${item.price.toFixed(2)}`}</Text>
//        <Text style={styles.sizeHeading}>Size</Text>
//        <View style={styles.smallBoxesContainer}>
//          {item.sizes.map((size, index) => (
//            <View key={index} style={styles.sizes}>
//              <Text style={styles.smallBoxText}>{size}</Text>
//            </View>
//          ))}
//        </View>
//        <Text style={styles.quantityHeading}>Quantity</Text>
//        <QuantitySelector />
//        <Text style={styles.cashondeliveryheading}>Cash on delivery checker</Text>
//        <Header placeholder="Enter your PIN code" />
//      </ScrollView>
//      <View style={styles.bottomBarContainer}>
//        <BottomBarNewPage />
//      </View>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  screenContainer: {
//    flex: 1,
//  },
//  container: {
//    marginLeft: 20,
//    marginRight: 20,
//    backgroundColor: '#fff',
//    paddingBottom: 100, // Ensure there's enough space at the bottom
//  },
//  image: {
//    height: 650,
//    marginBottom: 20,
//  },
//  title: {
//    fontSize: 28,
//    fontWeight: 'bold',
//    marginBottom: 10,
//  },
//  description: {
//    fontSize: 18,
//    marginBottom: 20,
//  },
//  price: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    marginBottom: 20,
//    color: '#333',
//  },
//  sizeHeading: {
//    fontSize: 18,
//    color: '#000',
//    marginBottom: 10,
//  },
//  smallBoxesContainer: {
//    width: (width / 2) - 50,
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'space-between',
//  },
//  sizes: {
//    width: 40,
//    height: 30,
//    marginBottom: 10,
//    marginRight: 10,
//    marginTop: 5,
//    borderWidth: 2,
//    borderColor: '#000',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  smallBoxText: {
//    color: '#000',
//    fontSize: 14,
//  },
//  quantityHeading: {
//    fontSize: 18,
//    color: '#000',
//    marginBottom: 10,
//    marginTop: 20,
//  },
//  quantityContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginTop: 20,
//    marginBottom: 10,
//  },
//  button: {
//    backgroundColor: '#fff',
//    borderWidth: 2,
//    borderColor: '#cccccc',
//    borderRadius: 5,
//    paddingLeft: 20,
//    paddingRight: 20,
//    paddingTop: 7,
//    paddingBottom: 7,
//  },
//  buttonText: {
//    fontSize: 20,
//    fontWeight: 'bold',
//  },
//  quantityText: {
//    fontSize: 18,
//    paddingLeft: 20,
//    paddingRight: 20,
//    fontWeight: 'bold',
//  },
//  cashondeliveryheading: {
//    fontSize: 18,
//    color: '#000',
//    marginBottom: 10,
//    marginTop: 20,
//  },
//  headerContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    justifyContent: 'space-between',
//    marginBottom: 30,
//    height: 40,
//  },
//  searchContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    backgroundColor: '#fff',
//    borderRadius: 5,
//    borderWidth: 1,
//    flex: 1,
//    marginRight: 20,
//  },
//  searchInput: {
//    flex: 1,
//    fontSize: 15,
//  },
//  blackButton: {
//    backgroundColor: '#000',
//    padding: 10,
//    borderRadius: 5,
//  },
//  buttonLabel: {
//    color: '#fff',
//    fontWeight: 'bold',
//    fontSize: 15,
//  },
//  bottomBarContainer: {
//    position: 'absolute',
//    bottom: 0,
//    left: 0,
//    right: 0,
//    height: 80,
//    backgroundColor: '#fff',
//  },
//});
//
//export default ItemDetailScreen;









//import React, { useState } from 'react';
//import { TextInput, View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Modal } from 'react-native';
//import BottomBarNewPage from './BottomBarNewPage.js';
//
//const { width } = Dimensions.get('window');
//
//const QuantitySelector = ({ quantity, setQuantity }) => {
//  const incrementQuantity = () => {
//    setQuantity(prevQuantity => prevQuantity + 1);
//  };
//
//  const decrementQuantity = () => {
//    if (quantity > 1) {
//      setQuantity(prevQuantity => prevQuantity - 1);
//    }
//  };
//
//  return (
//    <View style={styles.quantityContainer}>
//      <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
//        <Text style={styles.buttonText}>-</Text>
//      </TouchableOpacity>
//      <Text style={styles.quantityText}>{quantity}</Text>
//      <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
//        <Text style={styles.buttonText}>+</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//const Header = ({ placeholder }) => {
//  const [searchText, setSearchText] = useState('');
//
//  return (
//    <View style={styles.headerContainer}>
//      <View style={styles.searchContainer}>
//        <TextInput
//          style={styles.searchInput}
//          placeholder={placeholder}
//          value={searchText}
//          onChangeText={setSearchText}
//        />
//      </View>
//      <TouchableOpacity style={styles.blackButton}>
//        <Text style={styles.buttonLabel}>Check</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//const ItemDetailScreen = ({ route }) => {
//  const { item } = route.params;
//  const [quantity, setQuantity] = useState(1); // For quantity state
//  const [selectedSize, setSelectedSize] = useState(item.sizes[0]); // For selected size state
//  const [modalVisible, setModalVisible] = useState(false); // For modal visibility
//
//  return (
//    <View style={styles.screenContainer}>
//      <ScrollView contentContainerStyle={styles.container}>
//        <Image source={{ uri: item.images[0] }} style={styles.image} />
//        <Text style={styles.title}>{item.title}</Text>
//        <Text style={styles.description}>{item.description}</Text>
//        <Text style={styles.price}>{`Rs. ${item.price.toFixed(2)}`}</Text>
//
//        {/* Size Selector */}
//        <Text style={styles.sizeHeading}>Size</Text>
//        <View style={styles.smallBoxesContainer}>
//          {item.sizes.map((size, index) => (
//            <TouchableOpacity
//              key={index}
//              style={[
//                styles.sizes,
//                size === selectedSize && styles.selectedSize // Highlight selected size
//              ]}
//              onPress={() => setSelectedSize(size)} // Update selected size
//            >
//              <Text style={styles.smallBoxText}>{size}</Text>
//            </TouchableOpacity>
//          ))}
//        </View>
//
//        <TouchableOpacity style={styles.sizeCheckButton} onPress={() => setModalVisible(true)}>
//          <Text style={styles.buttonLabel}>Size Chart</Text>
//        </TouchableOpacity>
//
//        {/* Quantity Selector */}
//        <Text style={styles.quantityHeading}>Quantity</Text>
//        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
//
//        {/* Cash on Delivery Checker */}
//        <Text style={styles.cashondeliveryheading}>Cash on delivery checker</Text>
//        <Header placeholder="Enter your PIN code" />
//      </ScrollView>
//
//      {/* Bottom Bar */}
//      <View style={styles.bottomBarContainer}>
//        <BottomBarNewPage
//          image={item.images[0]}
//          price={item.price}
//          quantity={quantity}
//          size={selectedSize}
//          title={item.title}
//          description={item.description}
//        />
//      </View>
//
//      {/* Modal for Size Chart */}
//      <Modal
//        animationType="slide"
//        transparent={true}
//        visible={modalVisible}
//        onRequestClose={() => setModalVisible(false)}
//      >
//        <View style={styles.modalContainer}>
//          <View style={styles.modalContent}>
//            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
//              <Text style={styles.buttonLabel}>Close</Text>
//            </TouchableOpacity>
//            <Image source={{ uri: item.sizeChart[0] }} style={styles.modalImage} />
//          </View>
//        </View>
//      </Modal>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  sizeCheckButton: {
//    backgroundColor: '#000',
//    paddingVertical: 10,
//    paddingHorizontal: 20,
//    borderRadius: 5,
//    marginLeft: 0,
//    marginRight: '65%',
//  },
//  buttonLabel: {
//    color: '#fff',
//    fontSize: 16,
//  },
//  screenContainer: {
//    flex: 1,
//  },
//  container: {
//    marginLeft: 20,
//    marginRight: 20,
//    backgroundColor: '#fff',
//    paddingBottom: 100,
//  },
//  image: {
//    height: 650,
//    marginBottom: 20,
//  },
//  title: {
//    fontSize: 28,
//    fontWeight: 'bold',
//    marginBottom: 10,
//  },
//  description: {
//    fontSize: 18,
//    marginBottom: 20,
//  },
//  price: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    marginBottom: 20,
//    color: '#333',
//  },
//  sizeHeading: {
//    fontSize: 18,
//    color: '#000',
//    marginBottom: 10,
//  },
//  smallBoxesContainer: {
//    width: (width / 2) - 50,
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'space-between',
//  },
//  sizes: {
//    width: 40,
//    height: 30,
//    marginBottom: 10,
//    marginRight: 10,
//    marginTop: 5,
//    borderWidth: 2,
//    borderColor: '#cccccc',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  selectedSize: {
//    borderColor: '#000',
//  },
//  smallBoxText: {
//    color: '#000',
//    fontSize: 14,
//  },
//  quantityHeading: {
//    fontSize: 18,
//    color: '#000',
//    marginBottom: 10,
//    marginTop: 20,
//  },
//  quantityContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginTop: 20,
//    marginBottom: 10,
//  },
//  button: {
//    backgroundColor: '#fff',
//    borderWidth: 2,
//    borderColor: '#cccccc',
//    borderRadius: 5,
//    paddingLeft: 20,
//    paddingRight: 20,
//    paddingTop: 7,
//    paddingBottom: 7,
//  },
//  buttonText: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    color: '#000',
//  },
//  quantityText: {
//    marginLeft: 20,
//    marginRight: 20,
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  cashondeliveryheading: {
//    fontSize: 18,
//    marginTop: 20,
//  },
//  headerContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginTop: 15,
//    marginBottom: 10,
//  },
//  searchContainer: {
//    flex: 1,
//  },
//  searchInput: {
//    backgroundColor: '#F5F5F5',
//    borderRadius: 5,
//    padding: 12,
//    fontSize: 18,
//    width: '80%',
//  },
//  blackButton: {
//    backgroundColor: '#000',
//    paddingVertical: 10,
//    paddingHorizontal: 20,
//    borderRadius: 5,
//  },
//  bottomBarContainer: {
//    position: 'absolute',
//    bottom: 0,
//    left: 0,
//    right: 0,
//    height: 80,
//    backgroundColor: '#fff',
//  },
//  modalContainer: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//  },
//  modalContent: {
//    width: '90%',
//    backgroundColor: '#fff',
//    borderRadius: 10,
//    padding: 20,
//    alignItems: 'center',
//  },
//  modalImage: {
//    width: '100%',
//    height: 300, // Adjust height as needed
//    resizeMode: 'contain',
//  },
//  closeButton: {
//    marginBottom: 10,
//    backgroundColor: '#000',
//    paddingVertical: 10,
//    paddingHorizontal: 20,
//    borderRadius: 5,
//  },
//});
//
//export default ItemDetailScreen;







//import React, { useState } from 'react';
//import { TextInput, View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Modal } from 'react-native';
//import BottomBarNewPage from './BottomBarNewPage.js';
//
//const { width } = Dimensions.get('window');
//
//// Quantity Selector Component
//const QuantitySelector = ({ quantity, setQuantity }) => {
//  const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
//  const decrementQuantity = () => {
//    if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
//  };
//
//  return (
//    <View style={styles.quantityContainer}>
//      <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
//        <Text style={styles.buttonText}>-</Text>
//      </TouchableOpacity>
//      <Text style={styles.quantityText}>{quantity}</Text>
//      <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
//        <Text style={styles.buttonText}>+</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//// Header Component for Cash on Delivery Checker
//const Header = ({ placeholder }) => {
//  const [searchText, setSearchText] = useState('');
//
//  return (
//    <View style={styles.headerContainer}>
//      <View style={styles.searchContainer}>
//        <TextInput
//          style={styles.searchInput}
//          placeholder={placeholder}
//          value={searchText}
//          onChangeText={setSearchText}
//        />
//      </View>
//      <TouchableOpacity style={styles.blackButton}>
//        <Text style={styles.buttonLabel}>Check</Text>
//      </TouchableOpacity>
//    </View>
//  );
//};
//
//// Item Detail Screen Component
//const ItemDetailScreen = ({ route }) => {
//  const { item } = route.params;
//  const [quantity, setQuantity] = useState(1);
//  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
//  const [modalVisible, setModalVisible] = useState(false);
//  const [activeIndex, setActiveIndex] = useState(0);
//
//  const handleScroll = (event) => {
//    const scrollPosition = event.nativeEvent.contentOffset.x;
//    const currentIndex = Math.round(scrollPosition / width);
//    setActiveIndex(currentIndex);
//  };
//
//  return (
//    <View style={styles.screenContainer}>
//      <ScrollView contentContainerStyle={styles.container}>
//        {/* Horizontal Image Scrolling */}
//        <ScrollView
//          horizontal
//          pagingEnabled
//          onScroll={handleScroll}
//          showsHorizontalScrollIndicator={false}
//          scrollEventThrottle={16}
//        >
//          {item.images.map((image, index) => (
//            <Image key={index} source={{ uri: image }} style={styles.image} />
//          ))}
//        </ScrollView>
//
//        {/* Pagination Dots */}
//        <View style={styles.pagination}>
//          {item.images.map((_, index) => (
//            <View
//              key={index}
//              style={[styles.dot, index === activeIndex ? styles.activeDot : styles.inactiveDot]}
//            />
//          ))}
//        </View>
//
//        <Text style={styles.title}>{item.title}</Text>
//        <Text style={styles.description}>{item.description}</Text>
//        <Text style={styles.price}>{`Rs. ${item.price.toFixed(2)}`}</Text>
//
//        {/* Size Selector */}
//        <Text style={styles.sizeHeading}>Size</Text>
//        <View style={styles.smallBoxesContainer}>
//          {item.sizes.map((size, index) => (
//            <TouchableOpacity
//              key={index}
//              style={[styles.sizes, size === selectedSize && styles.selectedSize]}
//              onPress={() => setSelectedSize(size)}
//            >
//              <Text style={styles.smallBoxText}>{size}</Text>
//            </TouchableOpacity>
//          ))}
//        </View>
//
//        <TouchableOpacity style={styles.sizeCheckButton} onPress={() => setModalVisible(true)}>
//          <Text style={styles.buttonLabel}>Size Chart</Text>
//        </TouchableOpacity>
//
//        {/* Quantity Selector */}
//        <Text style={styles.quantityHeading}>Quantity</Text>
//        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
//
//        {/* Cash on Delivery Checker */}
//        <Text style={styles.cashondeliveryheading}>Cash on delivery checker</Text>
//        <Header placeholder="Enter your PIN code" />
//      </ScrollView>
//
//      {/* Bottom Bar */}
//      <View style={styles.bottomBarContainer}>
//        <BottomBarNewPage
//          image={item.images[0]}
//          price={item.price}
//          quantity={quantity}
//          size={selectedSize}
//          title={item.title}
//          description={item.description}
//        />
//      </View>
//
//      {/* Modal for Size Chart */}
//      <Modal
//        animationType="slide"
//        transparent={true}
//        visible={modalVisible}
//        onRequestClose={() => setModalVisible(false)}
//      >
//        <View style={styles.modalContainer}>
//          <View style={styles.modalContent}>
//            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
//              <Text style={styles.buttonLabel}>Close</Text>
//            </TouchableOpacity>
//            <Image source={{ uri: item.sizeChart[0] }} style={styles.modalImage} />
//          </View>
//        </View>
//      </Modal>
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  screenContainer: {
//    flex: 1,
//  },
//  container: {
//    marginLeft: 20,
//    marginRight: 20,
//    backgroundColor: '#fff',
//    paddingBottom: 100,
//  },
//  image: {
//    width: width - 39.5,
//    height: 400,
//    marginBottom: 20,
//  },
//  pagination: {
//    flexDirection: 'row',
//    justifyContent: 'center',
//    marginTop: 10,
//  },
//  dot: {
//    width: 10,
//    height: 10,
//    borderRadius: 5,
//    marginHorizontal: 5,
//  },
//  activeDot: {
//    backgroundColor: '#000',
//  },
//  inactiveDot: {
//    backgroundColor: '#ccc',
//  },
//  title: {
//    fontSize: 28,
//    fontWeight: 'bold',
//    marginBottom: 10,
//  },
//  description: {
//    fontSize: 18,
//    marginBottom: 20,
//  },
//  price: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    marginBottom: 20,
//    color: '#333',
//  },
//  sizeHeading: {
//    fontSize: 18,
//    color: '#000',
//    marginBottom: 10,
//  },
//  smallBoxesContainer: {
//    width: width / 2 - 50,
//    flexDirection: 'row',
//    flexWrap: 'wrap',
//    justifyContent: 'space-between',
//  },
//  sizes: {
//    width: 40,
//    height: 30,
//    marginBottom: 10,
//    marginRight: 10,
//    marginTop: 5,
//    borderWidth: 2,
//    borderColor: '#cccccc',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  selectedSize: {
//    borderColor: '#000',
//  },
//  smallBoxText: {
//    color: '#000',
//    fontSize: 14,
//  },
//  sizeCheckButton: {
//    backgroundColor: '#000',
//    paddingVertical: 10,
//    paddingHorizontal: 20,
//    borderRadius: 5,
//  },
//  buttonLabel: {
//    color: '#fff',
//    fontSize: 16,
//  },
//  quantityHeading: {
//    fontSize: 18,
//    color: '#000',
//    marginBottom: 10,
//    marginTop: 20,
//  },
//  quantityContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginTop: 20,
//    marginBottom: 10,
//  },
//  button: {
//    backgroundColor: '#fff',
//    borderWidth: 2,
//    borderColor: '#cccccc',
//    borderRadius: 5,
//    paddingLeft: 20,
//    paddingRight: 20,
//    paddingTop: 7,
//    paddingBottom: 7,
//  },
//  buttonText: {
//    fontSize: 18,
//    fontWeight: 'bold',
//    color: '#000',
//  },
//  quantityText: {
//    marginLeft: 20,
//    marginRight: 20,
//    fontSize: 18,
//    fontWeight: 'bold',
//  },
//  cashondeliveryheading: {
//    fontSize: 18,
//    marginTop: 20,
//  },
//  headerContainer: {
//    flexDirection: 'row',
//    alignItems: 'center',
//    marginTop: 15,
//    marginBottom: 10,
//  },
//  searchContainer: {
//    flex: 1,
//  },
//  searchInput: {
//    backgroundColor: '#F5F5F5',
//    borderRadius: 5,
//    padding: 12,
//    fontSize: 18,
//    width: '80%',
//  },
//  blackButton: {
//    backgroundColor: '#000',
//    paddingVertical: 10,
//    paddingHorizontal: 20,
//    borderRadius: 5,
//  },
//  bottomBarContainer: {
//    position: 'absolute',
//    bottom: 0,
//    left: 0,
//    right: 0,
//    height: 80,
//    backgroundColor: '#fff',
//  },
//  modalContainer: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//  },
//  modalContent: {
//    width: '90%',
//    backgroundColor: '#fff',
//    borderRadius: 10,
//    padding: 20,
//  },
//  closeButton: {
//    alignSelf: 'flex-end',
//    padding: 10,
//  },
//  modalImage: {
//    width: '100%',
//    height: 300,
//    resizeMode: 'contain',
//    marginTop: 10,
//  },
//});
//
//export default ItemDetailScreen;





import React, { useState } from 'react';
import { TextInput, View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import BottomBarNewPage from './BottomBarNewPage';

const { width } = Dimensions.get('window');

const QuantitySelector = ({ quantity, setQuantity }) => {
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);

  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const Header = ({ placeholder }) => {
  const [searchText, setSearchText] = useState('');

const handleCheckPress = async () => {
  try {
    const response = await fetch(
      `https://staging-express.delhivery.com/c/api/pin-codes/json/?filter_codes=${searchText}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 0368e03c66b1fc26848d7d4bed4798c45de2b3cf',
          'Client': 'B2CKEYTESTEXPRESS-B2C'
        }
      }
    );
    const data = await response.json();
    console.log('API Response:', data);

    // Extract the necessary fields
    const deliveryInfo = data.delivery_codes[0]?.postal_code;
    if (deliveryInfo) {
      const { cod, pre_paid, cash } = deliveryInfo;

      // Check conditions
      if (cod === "Y" && pre_paid === "Y" && cash === "Y") {
        //Alert.alert('Response', JSON.stringify(data));
        Alert.alert('Available', 'Delivery is available.');
      } else {
        Alert.alert('Not Available', 'Delivery is not available.');
      }
    } else {
      Alert.alert('Error', 'No data available for the provided PIN code.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    Alert.alert('Error', 'Failed to fetch data');
  }
};


  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <TouchableOpacity style={styles.blackButton} onPress={handleCheckPress}>
        <Text style={styles.buttonLabel}>Check</Text>
      </TouchableOpacity>
    </View>
  );
};

const PhotoScreen = ({ route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSizeChartPress = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  // Handle order completion
  const handleOrderCompletion = () => {
    const updatedQuantities = {
      S: item.quantityS,
      M: item.quantityM,
      L: item.quantityL,
      XL: item.quantityXL,
      XXL: item.quantityXXL,
      XXXL: item.quantityXXXL
    };

    if (updatedQuantities[selectedSize] < quantity) {
      Alert.alert('Insufficient Stock', `Only ${updatedQuantities[selectedSize]} items available for size ${selectedSize}`);
      return;
    }

    updatedQuantities[selectedSize] -= quantity;
    item[`quantity${selectedSize}`] = updatedQuantities[selectedSize]; // Updating item state to reflect reduced quantity for selected size
    Alert.alert('Order Successful', `You ordered ${quantity} items of size ${selectedSize}`);
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {item.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </ScrollView>

        <View style={styles.dotContainer}>
          {item.images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot
              ]}
            />
          ))}
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{`Rs. ${item.price.toFixed(2)}`}</Text>

        {/* Display Available Quantity per Size */}
        <Text style={styles.sizeHeading}>Available Quantities</Text>
        <View style={styles.quantityInfoContainer}>
          <Text style={styles.quantityInfoText}>S: {item.quantityS}</Text>
          <Text style={styles.quantityInfoText}>M: {item.quantityM}</Text>
          <Text style={styles.quantityInfoText}>L: {item.quantityL}</Text>
          <Text style={styles.quantityInfoText}>XL: {item.quantityXL}</Text>
          <Text style={styles.quantityInfoText}>XXL: {item.quantityXXL}</Text>
          <Text style={styles.quantityInfoText}>XXXL: {item.quantityXXXL}</Text>
        </View>

        <Text style={styles.sizeHeading}>Size</Text>
        <View style={styles.smallBoxesContainer}>
          {item.sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.sizes,
                size === selectedSize && styles.selectedSize
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={styles.smallBoxText}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.sizeCheckButton} onPress={handleSizeChartPress}>
          <Text style={styles.buttonLabel}>Size Chart</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <Image source={{ uri: item.sizeChart[0] }} style={styles.sizeChartImage} />
            </View>
          </View>
        </Modal>

        <Text style={styles.quantityHeading}>Quantity</Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        <Text style={styles.cashondeliveryheading}>Cash on delivery checker</Text>
        <Header placeholder="Enter your PIN code" />
      </ScrollView>

      <View style={styles.bottomBarContainer}>
        <BottomBarNewPage
          image={item.images[0]}
          price={item.price}
          quantity={quantity}
          size={selectedSize}
          title={item.title}
          description={item.description}
          onOrderComplete={handleOrderCompletion} // Trigger order completion function
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
    },
    container: {
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#fff',
      paddingBottom: 100,
    },
    image: {
      width: width - 39.5, // Set image width to device width for paging
      height: 650,
      resizeMode: 'cover',
    },
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#000',
    },
    inactiveDot: {
      backgroundColor: '#cccccc',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    description: {
      fontSize: 18,
      marginBottom: 20,
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    sizeHeading: {
      fontSize: 18,
      color: '#000',
      marginBottom: 10,
    },
    smallBoxesContainer: {
      width: (width / 2) - 50,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    sizes: {
      width: 40,
      height: 30,
      marginBottom: 10,
      marginRight: 10,
      marginTop: 5,
      borderWidth: 2,
      borderColor: '#cccccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedSize: {
      borderColor: '#000',
    },
    smallBoxText: {
      color: '#000',
      fontSize: 14,
    },
    sizeCheckButton: {
      backgroundColor: '#000',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginLeft: 0,
      marginRight: '65%',
    },
    sizeChartImage: {
      width: width - 40,
      height: 400,
      marginTop: 20,
      resizeMode: 'contain',
    },
    quantityHeading: {
      fontSize: 18,
      color: '#000',
      marginBottom: 10,
      marginTop: 20,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#cccccc',
      borderRadius: 5,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 7,
      paddingBottom: 7,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    quantityText: {
      marginLeft: 20,
      marginRight: 20,
      fontSize: 18,
      fontWeight: 'bold',
    },
    cashondeliveryheading: {
      fontSize: 18,
      marginTop: 20,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 10,
    },
    searchContainer: {
      flex: 1,
    },
    searchInput: {
      backgroundColor: '#F5F5F5',
      borderRadius: 5,
      padding: 12,
      fontSize: 18,
      width: '80%',
    },
    blackButton: {
      backgroundColor: '#000',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginLeft: 10,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width: width - 40,
      maxHeight: '80%',
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10,
    },
    closeButtonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
    bottomBarContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
});


export default PhotoScreen;
