import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const Terms = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🌟 INSOMNIAC Terms & Conditions 🌟</Text>

      <View style={styles.section}>
        <Text style={styles.subheading}>1. Introduction</Text>
        <Text style={styles.paragraph}>
          If you place an order through www.Insomniac.co.in or the Insomniac app, you agree to these Terms & Conditions, which will govern your contract of sale with Insomniac India Marketing Private Limited.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>2. Purchase Terms</Text>
        <Text style={styles.paragraph}>
          These terms apply to all offers and contracts for the sale of products. By placing an order on our platform, you agree to these terms.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>3. Use of the Platform</Text>
        <Text style={styles.paragraph}>
          Your use of the Insomniac platform is subject to these terms. Please read them carefully before accessing or using our platform.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>4. Miscellaneous</Text>
        <Text style={styles.paragraph}>
          In case of any contradiction between these terms and other content on the platform, these terms prevail. We reserve the right to amend the terms anytime.
        </Text>
      </View>

      <Text style={styles.smallNote}>📜 For full details, please refer to the complete document on our platform.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#faf5ff', // Light lavender background
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9b59b6', // Soft purple
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginBottom: 15,
  },
  subheading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#8e44ad', // Aesthetic deep purple
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Darker grey for readability
    backgroundColor: '#f0e6f6', // Light purple background for text blocks
    padding: 10,
    borderRadius: 10,
    shadowColor: '#ddd',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  smallNote: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Terms;
