import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "./LoginScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <AntDesign name="left" size={24} color="black" />
      </View>

      <KeyboardAvoidingView style={{ alignItems: "center" }}>
        <Text style={styles.title}>Log in to your Saving account</Text>

        <View style={{ marginTop: 50 }}>
          <View style={styles.ViewInput}>
            <TextInput style={styles.TextInput} placeholder="Email Address" />

            <TextInput style={styles.TextInput} placeholder="Password" />
          </View>

          <Pressable
            style={styles.Btn}
            onPress={() => {
              navigation.navigate("HomePageScreen");
            }}
          >
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
