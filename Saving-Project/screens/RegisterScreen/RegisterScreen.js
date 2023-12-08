import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/theme";
import styles from "./RegisterScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  const [errorAlert, setErrorAlert] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await fetch("http://192.168.10.122:8000/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          emailAddress,
          phoneNumber,
          password,
          age,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate("LoginScreen");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const validateEmail = (text) => {
    if (!emailRegex.test(text)) {
      setErrorAlert('Invalid email address');
    } else {
      setErrorAlert(null);
    }
    setEmailAddress(text);
  };

  const validatePhoneNumber = (text) => {
    if (!phoneRegex.test(text)) {
      setErrorAlert('Invalid phone number');
    } else {
      setErrorAlert(null);
    }
    setPhoneNumber(text);
  };

  const validatePassword = (text) => {
    if (!passwordRegex.test(text)) {
      setErrorAlert('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
    } else {
      setErrorAlert(null);
    }
    setPassword(text);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <AntDesign name="left" size={24} color="black" />
        </View>

        <KeyboardAvoidingView style={{ alignItems: "center" }}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={{ opacity: 0.5 }}>Manage your finance now</Text>

          <View style={{ marginTop: 50 }}>
            <View style={styles.ViewInput}>
            <TextInput
                style={styles.TextInput}
                placeholder="Full name"
                onChangeText={setFullName}
                value={fullName}
              />

              <TextInput
                style={styles.TextInput}
                placeholder="Email Address"
                onChangeText={validateEmail}
                value={emailAddress}
                keyboardType="email-address"
              />

              <TextInput
                style={styles.TextInput}
                placeholder="Phone number"
                onChangeText={validatePhoneNumber}
                value={phoneNumber}
                keyboardType="phone-pad"
              />

              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                onChangeText={validatePassword}
                value={password}
                secureTextEntry
              />

              <TextInput
                style={styles.TextInput}
                placeholder="Age"
                onChangeText={setAge}
                value={age}
                keyboardType="numeric"
              />
            </View>

            <Pressable onPress={handleRegister} style={styles.Btn}>
              <Text style={styles.BtnText}>Create account</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              <Text
                style={{
                  color: COLORS.Saving_Blue,
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 15,
                }}
              >
                Already have an account?
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
            >
              <Text
                style={{
                  color: COLORS.Saving_Blue,
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 15,
                }}
              >
                Navigate to profile?
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("InvestScreen");
              }}
            >
              <Text
                style={{
                  color: COLORS.Saving_Blue,
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 15,
                }}
              >
                Navigate to Tax?
              </Text>
            </Pressable>
            {errorAlert && (
              <View style={styles.errorAlert}>
                <Text style={styles.errorText}>{errorAlert}</Text>
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
