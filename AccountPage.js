import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your icon library
import { useNavigation } from '@react-navigation/native'; // Correct import for useNavigation
import IconMenu from './src/HomePage/bottom.js';

const { width } = Dimensions.get('window');

const AccountPage = () => {
  const navigation = useNavigation(); // Hook to access navigation

  const buttons = [
    { text: 'CREATE ACCOUNT', color: '#000', borderRadius: 0, borderColor: '#000', textColor: '#fff', textAlign: 'center', action: () => { console.log('CREATE ACCOUNT clicked'); navigation.navigate('UserSignup'); } },
    { text: 'Already have an account? Sign in', color: '#fff', borderRadius: 0, borderColor: '#000', textColor: '#000', textAlign: 'center', action: () => { console.log('Sign In clicked'); navigation.navigate('UserLogin'); } },
//    { text: 'Sign in with Google', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'center' },
    { text: 'Invite A Friend', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'left',  action: () => { navigation.navigate('Invite'); } },
    { text: 'Payment Info', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'left', action: () => { navigation.navigate('Payment'); } },
    { text: 'Orders', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'left', icon: 'map-marker', action: () => { navigation.navigate('Order'); } },
    { text: 'Return / Exchange Order', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'left', action: () => { navigation.navigate('Return'); } },
    { text: 'Contact Us', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'left', icon: 'phone', action: () => { navigation.navigate('Contact'); } },
    { text: 'Terms & Conditions', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'left', action: () => { navigation.navigate('Terms'); } },
    { text: 'Store Locator', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'left', icon: 'map-marker', action: () => { navigation.navigate('Store'); } },
    { text: 'Privacy Policy', color: '#fff', borderRadius: 0, borderColor: '#fff', textColor: '#000', textAlign: 'left', action: () => { navigation.navigate('Privacy'); } }
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <View key={index}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: button.color,
                    borderRadius: button.borderRadius,
                    borderColor: button.borderColor,
                    borderWidth: 2
                  }
                ]}
                onPress={button.action} // Set action on button press
              >
                <View style={[
                  styles.buttonContent,
                  button.textAlign === 'left' && { justifyContent: 'flex-start' }
                ]}>
                  {button.icon && <Icon name={button.icon} size={20} color={button.textColor} style={styles.icon} />}
                  <Text style={[
                    styles.buttonText,
                    { color: button.textColor, textAlign: button.textAlign }
                  ]}>
                    {button.text}
                  </Text>
                </View>
              </TouchableOpacity>
              {/* Additional text below the 2nd button */}
              {index === 1 && (
                <Text style={styles.additionalText}>
                  ------------------- Or continue with -------------------
                </Text>
              )}
              {index === 8 && (
                <Text style={styles.additionalText}>
                  Hey SNITCH will never request financial details or payments for contest winnings.
                </Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <IconMenu style={styles.iconMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80, // Add padding to avoid overlap with IconMenu
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Adjusts text and icon alignment
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  additionalText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  iconMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, // Adjust as per IconMenu height
  },
});

export default AccountPage;
