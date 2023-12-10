import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./LoginScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const url = "http://192.168.10.122:8000/login";
      const requestBody = {
        emailAddress: emailAddress,
        password: password,
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      const contentType = response.headers.get('content-type');
      const responseData = await response.json();
  
      if (response.ok && contentType && contentType.includes('application/json')) {
        console.log('Login success:', responseData);
        const userId = responseData.user._id; 
  
        await AsyncStorage.setItem('12345', userId);
        navigation.navigate("HomePageScreen", { userId: userId });
        navigation.navigate("ProfileScreen", { userId: userId });
        navigation.navigate("HomePageScreen", { userId: userId });

      } else {
        console.log('Login failed:', responseData);
        Alert.alert('Login Failed', 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Error', 'An error occurred while trying to login. Please try again.');
    }
    useEffect(() => {
      const fetchUserId = async () => {
        try {
          const storedUserId = await AsyncStorage.getItem('12345'); 
  
          if (storedUserId) {
            console.log('User ID found in AsyncStorage:', storedUserId);
          } else {
            console.log('User ID not found in AsyncStorage');
          }
        } catch (error) {
          console.error('Error fetching userId:', error);
          Alert.alert('Error', 'An error occurred while fetching userId.');
        }
      };
  
      fetchUserId();
    }, []);
  };

  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <AntDesign name="left" size={24} color="black" />
      </View>

      <KeyboardAvoidingView style={{ alignItems: "center", flex: 1 }}>
        <Text style={styles.title}>Log in to your Saving account</Text>

        <View style={{ marginTop: 50 }}>
          <View style={styles.ViewInput}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email Address"
              value={emailAddress}
              onChangeText={(text) => setEmailAddress(text)}
            />

            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <Pressable style={styles.Btn} onPress={handleLogin}>
            <Text style={styles.BtnText}>Login</Text>
          </Pressable>
        </View>

        <Image
          style={{
            alignContent: "center",
          }}
          source={require("../../assets/icons/SAVING.png")}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
