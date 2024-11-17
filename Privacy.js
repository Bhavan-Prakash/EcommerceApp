import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const Privacy = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>🌸 Privacy Policy 🌸</Text>

        <Text style={styles.subheading}>1. What does this Privacy Policy tell you?</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy explains how we collect and use your personal data when you interact with our platforms, apps, and services.
        </Text>

        <Text style={styles.subheading}>2. Who is responsible for your Personal Data?</Text>
        <Text style={styles.paragraph}>
          The responsible entity for your data is insomniac India Marketing Private Limited, located at AWFIS, Augusta point, Golf course road, Gurugram, Haryana - 122002, India.
        </Text>

        <Text style={styles.subheading}>3. How do you get in touch with the Grievance Officer?</Text>
        <Text style={styles.paragraph}>
          You can reach out to our Grievance Officer, Rithik Mahajan, via email at support@insomniac.co.in for any data-related queries.
        </Text>

        <Text style={styles.subheading}>4. What Personal Data do we collect?</Text>
        <Text style={styles.paragraph}>
          We collect various types of data such as identity info, contact details, location, purchase history, and more to ensure a seamless user experience.
        </Text>

        <Text style={styles.subheading}>5. What do we do with your Personal Data?</Text>
        <Text style={styles.paragraph}>
          Your data is used for things like order processing, customer service, personalized marketing, and event management.
        </Text>

        <Text style={styles.subheading}>6. How do we secure your Personal Data?</Text>
        <Text style={styles.paragraph}>
          We use industry-standard practices to protect your personal data from unauthorized access and breaches.
        </Text>

        <Text style={styles.subheading}>7. Your Rights</Text>
        <Text style={styles.paragraph}>
          You have the right to access, correct, and withdraw consent regarding your data at any time by contacting our Grievance Officer.
        </Text>

        <Text style={styles.subheading}>8. Questions or Complaints?</Text>
        <Text style={styles.paragraph}>
          If you have any questions, feel free to reach out to our Grievance Officer at support@insomniac.co.in.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fef4f4', // light pastel pink
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff85a1', // soft pinkish-red
    textAlign: 'center',
    marginVertical: 20,
    textShadowColor: '#ffe6e6',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ff5e79', // warm coral
    marginVertical: 10,
    textShadowColor: '#ffb3c1',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c2c2c', // dark grey for readability
    backgroundColor: '#ffe6e6', // soft pastel pink background for text blocks
    padding: 10,
    borderRadius: 10,
    shadowColor: '#ffe6e6',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 15,
  },
});

export default Privacy;
