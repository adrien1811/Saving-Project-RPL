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
import styles from "./ConfirmationScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ alignItems: "center" }}>
        <View
          style={{
            marginTop: 90,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="checkcircle"
            size={120}
            color={COLORS.Saving_Green}
          />
          <Text style={styles.header}>Succesfully added transaction</Text>
        </View>

        <View style={{ marginTop: 120 }}>
          <Pressable
            onPress={() => {
              navigation.navigate("TransferScreen"); // Navigate to the Transfer screen
            }}
            style={styles.Btn}
          >
            <Text style={styles.BtnText}>Execute Again</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate("HomePageScreen"); // Navigate to the Homepage screen
            }}
            style={styles.Btn2}
          >
            <Text style={styles.BtnText2}>Confirm</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
