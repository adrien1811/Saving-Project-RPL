import React, { useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./InvestResultScreen.style";
import { useNavigation } from "@react-navigation/native";

const InvestScreen = () => {
  const navigation = useNavigation();

  const [stockName, setStockName] = useState("");
  const [profitPerYear, setProfitPerYear] = useState("");
  const [duration, setDuration] = useState("");
  const [investmentNominal, setInvestmentNominal] = useState("");

  const handleNextPress = () => {
    navigation.navigate("NextScreen", {
      stockName,
      profitPerYear,
      duration,
      investmentNominal,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <AntDesign name="left" size={24} color="black" />
      </View>

      <KeyboardAvoidingView style={{ alignItems: "center", flex: 1 }}>
        <Text style={styles.title}>Investment Calculator</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
          <Text style={styles.ask}>Stock Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Stock Name"
              value={stockName}
              onChangeText={(text) => setStockName(text)}
            />
            <Text style={[styles.ask, {marginTop: 10}]}>Profit Percentage</Text>
            <TextInput
              style={styles.input}
              placeholder=" Enter Profit per Year"
              value={profitPerYear}
              onChangeText={(text) => setProfitPerYear(text)}
              keyboardType="numeric"
            />
            <Text style={[styles.ask, {marginTop: 10}]}>Duration</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Many Years You Will Invest"
              value={duration}
              onChangeText={(text) => setDuration(text)}
              keyboardType="numeric"
            />
            <Text style={[styles.ask, {marginTop: 10}]}>Nominal</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter How Much You Will Invest"
              value={investmentNominal}
              onChangeText={(text) => setInvestmentNominal(text)}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable
            style={[styles.Btn, styles.CancelBtn]}
            onPress={() => {
              navigation.navigate("HomePageScreen");
            }}
          >
            <Text style={[styles.BtnText, styles.CancelText]}>Cancel</Text>
          </Pressable>
          <Pressable
            style={[styles.Btn, { marginLeft: 5 }]}
            onPress={handleNextPress}
          >
            <Text style={styles.BtnText}>Next</Text>
          </Pressable>
        </View>
        <Image
          style={{
            alignContent: "center",
            height: 200,
          }}
          source={require("../../assets/Vector7.png")}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
  export default InvestScreen;
  