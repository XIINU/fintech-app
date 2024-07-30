import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

enum LoginType {
  Phone,
  Email,
  Google,
  Apple,
}

const login = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onLogin = async (type: LoginType) => {};
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number associated with your account
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          // placeholder="Country code"
          // placeholderTextColor={Colors.gray}
          value={countryCode}
        />
        <TextInput
          style={[styles.input, { flex: 5 }]}
          placeholder="Mobile number"
          placeholderTextColor={Colors.gray}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <TouchableOpacity
        onPress={() => onLogin(LoginType.Phone)}
        style={[
          defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 16 },
        ]}
      >
        <Text style={defaultStyles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <View
          style={{
            flex: 1,
            height: 2,
            backgroundColor: Colors.lightGray,
          }}
        />
        <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
        <View
          style={{
            flex: 1,
            height: 2,
            backgroundColor: Colors.lightGray,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => onLogin(LoginType.Email)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: "row",
            gap: 10,
            marginTop: 20,
            backgroundColor: "#fff",
          },
        ]}
      >
        <Ionicons name="mail" size={24} color="#000" />
        <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
          Continue with Email
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onLogin(LoginType.Google)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: "row",
            gap: 10,
            marginTop: 20,
            backgroundColor: "#fff",
          },
        ]}
      >
        <Ionicons name="logo-google" size={24} color="#000" />
        <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onLogin(LoginType.Apple)}
        style={[
          defaultStyles.pillButton,
          {
            flexDirection: "row",
            gap: 10,
            marginTop: 20,
            backgroundColor: "#fff",
          },
        ]}
      >
        <Ionicons name="logo-apple" size={24} color="#000" />
        <Text style={[defaultStyles.buttonText, { color: "#000" }]}>
          Continue with Apple
        </Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 16,
    borderRadius: 16,
    fontSize: 16,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default login;
