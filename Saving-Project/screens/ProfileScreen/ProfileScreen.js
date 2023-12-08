import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../../constants/theme";
import styles from "./ProfileScreen.style";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("Adrien Ardra Ramadhan");
  const [age, setAge] = useState("21");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("adrien.ardra@ui.ac.id");
  const [phoneNumber, setPhoneNumber] = useState("081310310242");

  const handleTextChange = (field, text) => {
    switch (field) {
      case "Name":
        setName(text);
        break;
      case "Age":
        setAge(text);
        break;
      case "Gender":
        setGender(text);
        break;
      case "Email":
        setEmail(text);
        break;
      case "Phone Number":
        setPhoneNumber(text);
        break;
      default:
        break;
    }
  };

  const renderEditableField = (label, value) => {
    return (
      <View style={styles.ViewInput}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.margin]}>{label}</Text>
          <TouchableOpacity
            onPress={() => handleTextChange(label, value)}
            activeOpacity={0.7}
            style={{ position: 'absolute', left:250 }}
          >
            <Text style={[styles.text, styles.changeText]}>Change</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={[styles.text, { marginTop: 5, marginBottom: 5 }]}
          value={value}
          onChangeText={(text) => handleTextChange(label, text)}
          placeholder={`Enter new ${label}`}
        />
        <View style={styles.line} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.title}>Contact Info</Text>
      </View>
      <KeyboardAvoidingView style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 120,
            height: 120,
            alignContent: "center",
          }}
          source={require("../../assets/Profile.png")}
        />
        <View
          style={{
            marginTop: 30,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {renderEditableField("Name", name)}
          {renderEditableField("Age", age)}
          {renderEditableField("Gender", gender)}
          {renderEditableField("Email", email)}
          {renderEditableField("Phone Number", phoneNumber)}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
