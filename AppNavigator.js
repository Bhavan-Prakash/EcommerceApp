//import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
//
//import IconMenu from './src/HomePage/bottom'; // Update path as needed
//import NewPage from './NewPage.js'; // Create this screen
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator initialRouteName="IconMenu">
//        <Stack.Screen name="IconMenu" component={IconMenu} />
//        <Stack.Screen name="NewPage" component={NewPage} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;




//working code
//import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
//
//// Import your screens and components
//import IconMenu from './src/HomePage/bottom.js'; // Update path as needed
//import CollectionPage from './CollectionPage.js'; // Create this screen
//import MainScreen from './MainScreen.js'; // Create this screen to hold your content
//import NewPage from './NewPage.js';
//import AccountPage from './AccountPage.js';
//
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator initialRouteName="MainScreen" screenOptions={{
//                                                           animationEnabled: false, // Disable animation
//                                                         }} >
//        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
//        <Stack.Screen name="IconMenu" component={IconMenu} options={{ headerShown: false }} />
//        <Stack.Screen name="NewPage" component={NewPage} />
//        <Stack.Screen name="CollectionPage" component={CollectionPage} options={{ headerShown: false }} />
//        <Stack.Screen name="AccountPage" component={AccountPage} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;
//








//final working code
//import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';

// Import your screens and components
//import CollectionPage from './CollectionPage.js';
//import MainScreen from './MainScreen.js';
//import NewPage from './NewPage.js';
//import AccountPage from './AccountPage.js';
//import PhotoScreen from './PhotoScreen.js';
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator
//        initialRouteName="MainScreen"
//        screenOptions={{
//          animationEnabled: false, // Disable animation
//        }}
//      >
//        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
//        <Stack.Screen name="NewPage" component={NewPage} />
//        <Stack.Screen name="CollectionPage" component={CollectionPage} options={{ headerShown: false }} />
//        <Stack.Screen name="AccountPage" component={AccountPage} />
//        <Stack.Screen name="PhotoScreen" component={PhotoScreen} options={{ headerShown: true }} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;





//import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
//
//import CollectionPage from './CollectionPage.js';
//import MainScreen from './MainScreen.js';
//import NewPage from './NewPage.js';
//import AccountPage from './AccountPage.js';
//import PhotoScreen from './PhotoScreen.js';
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator
//        initialRouteName="MainScreen"
//        screenOptions={{
//          animationEnabled: false,
//        }}
//      >
//        {/* Start with one screen and check */}
//        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
//        {/* Add other screens one by one to check which one causes the issue */}
//        <Stack.Screen name="CollectionPage" component={CollectionPage} options={{ headerShown: false }} />
//        <Stack.Screen name="NewPage" component={NewPage} />
//        <Stack.Screen name="AccountPage" component={AccountPage} />
//        <Stack.Screen name="PhotoScreen" component={PhotoScreen} options={{ headerShown: true }} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;








//import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
//
//import CollectionPage from './CollectionPage.js';
//import MainScreen from './MainScreen.js';
//import NewPage from './NewPage.js';
//import AccountPage from './AccountPage.js';
//import PhotoScreen from './PhotoScreen.js';
//import FilteredItemsScreen from './FilteredItemsScreen.js'; // Make sure this component is correctly imported
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator
//        initialRouteName="MainScreen"
//        screenOptions={{
//          animationEnabled: false,
//        }}
//      >
//        {/* Ensure each child is a valid screen */}
//        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
//        <Stack.Screen name="CollectionPage" component={CollectionPage} options={{ headerShown: false }} />
//        <Stack.Screen name="NewPage" component={NewPage} />
//        <Stack.Screen name="AccountPage" component={AccountPage} />
//        <Stack.Screen name="PhotoScreen" component={PhotoScreen} options={{ headerShown: true }} />
//        <Stack.Screen name="FilteredItemsScreen" component={FilteredItemsScreen} options={{ title: 'Filtered Items' }} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;










////main and final code
//import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
//
//import CollectionPage from './CollectionPage.js';
//import MainScreen from './MainScreen.js';
//import NewPage from './NewPage.js';
//import AccountPage from './AccountPage.js';
//import PhotoScreen from './PhotoScreen.js';
//import FilteredItemsScreen from './FilteredItemsScreen.js';
//import ItemDetailScreen from './ItemDetailScreen.js'; // Ensure correct import
//import CartScreen from './cart.js';
//
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator
//        initialRouteName="MainScreen"
//        screenOptions={{
//          animationEnabled: false,
//        }}
//      >
//        <Stack.Screen
//          name="MainScreen"
//          component={MainScreen}
//          options={{ headerShown: false }}
//        />
//        <Stack.Screen
//          name="CollectionPage"
//          component={CollectionPage}
//          options={{ headerShown: false }}
//        />
//        <Stack.Screen
//          name="NewPage"
//          component={NewPage}
//        />
//        <Stack.Screen
//          name="AccountPage"
//          component={AccountPage}
//        />
//        <Stack.Screen
//          name="PhotoScreen"
//          component={PhotoScreen}
//          options={{ headerShown: true }}
//        />
//        <Stack.Screen
//          name="FilteredItemsScreen"
//          component={FilteredItemsScreen}
//          options={{ title: 'Filtered Items' }}
//        />
//        <Stack.Screen
//          name="ItemDetailScreen"
//          component={ItemDetailScreen}
//          options={{ title: 'Item Details' }}
//        />
//        <Stack.Screen
//          name="cart"
//          component={CartScreen}
//          options={{ title: 'cart' }}
//        />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CollectionPage from './CollectionPage.js';
import MainScreen from './MainScreen.js';
import NewPage from './NewPage.js';
import AccountPage from './AccountPage.js';
import PhotoScreen from './PhotoScreen.js';
import FilteredItemsScreen from './FilteredItemsScreen.js';
import ItemDetailScreen from './ItemDetailScreen.js';
import CartScreen from './cart.js';
import UserSignup from './UserSignup.js'; // Import the UserSignup page
import UserLogin from './UserLogin.js';   // Import the UserLogin page
import Address from './change_address.js';
import AddNewAddress from './add_new_address.js';
import OrderStatus from './orderStatus.js';
import Invite from './Invite.js';
import Payment from './Payment.js';
import Order from './Orders.js';
import Return from './Return.js';
import Contact from './Contact.js';
import Terms from './Terms.js';
import Store from './Store.js';
import Privacy from './Privacy.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          animationEnabled: false,
        }}
      >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CollectionPage"
          component={CollectionPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPage"
          component={NewPage}
        />
        <Stack.Screen
          name="AccountPage"
          component={AccountPage}
        />
        <Stack.Screen
          name="PhotoScreen"
          component={PhotoScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="FilteredItemsScreen"
          component={FilteredItemsScreen}
          options={{ title: 'Filtered Items' }}
        />
        <Stack.Screen
          name="ItemDetailScreen"
          component={ItemDetailScreen}
          options={{ title: 'Item Details' }}
        />
        <Stack.Screen
          name="cart"
          component={CartScreen}
          options={{ title: 'Cart' }}
        />
        <Stack.Screen
          name="UserSignup" // Add the UserSignup screen to the navigator
          component={UserSignup}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="UserLogin" // Add the UserLogin screen to the navigator
          component={UserLogin}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
           name="Address"
           component={Address}
           options={{ title: 'Address' }}
         />
         <Stack.Screen
           name="AddNewAddress"
           component={AddNewAddress}
           options={{ title: 'AddNewAddress' }}
          />
        <Stack.Screen
           name="OrderStatus"
           component={OrderStatus}
           options={{ title: 'OrderStatus' }}
          />
       <Stack.Screen
            name="Invite"
            component={Invite}
            options={{ title: 'Invite' }}
           />
        <Stack.Screen
                   name="Payment"
                   component={Payment}
                   options={{ title: 'Payment' }}
                  />
         <Stack.Screen
                    name="Order"
                    component={Order}
                    options={{ title: 'Order' }}
                   />
          <Stack.Screen
                     name="Return"
                     component={Return}
                     options={{ title: 'Return' }}
                    />
           <Stack.Screen
                      name="Contact"
                      component={Contact}
                      options={{ title: 'Contact' }}
                     />
            <Stack.Screen
                       name="Terms"
                       component={Terms}
                       options={{ title: 'Terms' }}
                      />
             <Stack.Screen
                        name="Store"
                        component={Store}
                        options={{ title: 'Store' }}
                       />
              <Stack.Screen
                         name="Privacy"
                         component={Privacy}
                         options={{ title: 'Privacy' }}
                        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
