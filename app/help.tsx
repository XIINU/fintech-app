import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Colors from "@/constants/Colors";

const windowHeight = Dimensions.get("window").height;

export default function HelpScreen() {
  return (
    <View style={styles.modalContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Help Center</Text>
          <Text style={styles.sectionTitle}>Getting Started</Text>
          <Text style={styles.paragraph}>
            Welcome to our app! Here are some quick tips to get you started:
          </Text>
          <Text style={styles.bulletPoint}>• Create an account or log in</Text>
          <Text style={styles.bulletPoint}>• Explore the main features</Text>
          <Text style={styles.bulletPoint}>• Customize your profile</Text>

          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          <Text style={styles.question}>How do I reset my password?</Text>
          <Text style={styles.answer}>
            You can reset your password by clicking on the "Forgot Password"
            link on the login screen.
          </Text>

          <Text style={styles.question}>How can I contact support?</Text>
          <Text style={styles.answer}>
            For any issues or questions, please email us at support@example.com
            or use the in-app chat feature.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: windowHeight * 0.7,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    right: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
    marginBottom: 15,
  },
});
