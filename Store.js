import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Store = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.addressText}>🏢 Office Address</Text>
      <Text style={styles.infoText}>
        AWFIS, Augusta Point, Golf Course Road, Sector 53, Gurugram, Haryana - 122002
      </Text>

      <Text style={styles.emailText}>📧 Email</Text>
      <Text style={styles.infoText}>support@insomniac.co.in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdf6e3', // Soft cream background for an aesthetic feel
    padding: 20,
  },
  addressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6b81', // Light pink to give it a cool aesthetic
    marginBottom: 10,
    textShadowColor: '#ffe6e6',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  emailText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#74b9ff', // Light blue for the email section
    marginTop: 20,
    marginBottom: 10,
    textShadowColor: '#dfe6e9',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#2c3e50', // Dark grey for readable contrast
    textAlign: 'center',
    backgroundColor: '#fff0f6', // Light pink background for text blocks
    padding: 10,
    borderRadius: 10,
    shadowColor: '#ffcccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginBottom: 10,
  },
});

export default Store;
