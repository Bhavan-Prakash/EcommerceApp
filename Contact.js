import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.addressText}>
        🏢 Office address: AWFIS, Augusta Point, Golf Course Road, Sector 53, Gurugram, Haryana - 122002
      </Text>
      <Text style={styles.emailText}>📧 Email: support@insmniac.co.in</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdf6e3', // A soft, warm background color
  },
  addressText: {
    fontSize: 16,
    color: '#a29bfe', // Light pastel purple
    textAlign: 'center',
    marginBottom: 10,
  },
  emailText: {
    fontSize: 16,
    color: '#74b9ff', // Light blue for the email
    textAlign: 'center',
  },
});

export default Contact;
