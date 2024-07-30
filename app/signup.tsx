import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Page = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSignup = async () => {};

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number, We will send you a confirmation code there
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={[styles.input, { flex: 1 }]} value={countryCode} />
        <TextInput
          style={[styles.input, { flex: 5 }]}
          placeholder="Mobile number"
          placeholderTextColor={Colors.gray}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <Link href={"/login"} replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </Link>

      <View style={{ flex: 1 }}></View>

      <TouchableOpacity
        onPress={onSignup}
        style={[
          defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enabled : styles.disabled,
          { marginTop: 20 },
        ]}
      >
        <Text style={defaultStyles.buttonText}>Sign up</Text>
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

export default Page;
