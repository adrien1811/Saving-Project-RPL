import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";

const NewsScreen = () => {
  const navigation = useNavigation();

  const [stockName, setStockName] = useState("");
  const [profitPerYear, setProfitPerYear] = useState("");
  const [duration, setDuration] = useState("");
  const [investmentNominal, setInvestmentNominal] = useState("");
  const [isInputsFilled, setIsInputsFilled] = useState(false);

  useEffect(() => {

    if (stockName !== "" && profitPerYear !== "" && duration !== "" && investmentNominal !== "") {
      setIsInputsFilled(true);
    } else {
      setIsInputsFilled(false);
    }
  }, [stockName, profitPerYear, duration, investmentNominal]);
  const handleNextPress = () => {
    if (isInputsFilled) {
      navigation.navigate("InvestResultScreen", {
        stockName,
        profitPerYear,
        duration,
        investmentNominal,
      });
    } 
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
            style={[styles.Btn, { marginLeft: 5, opacity: isInputsFilled ? 1 : 0.5 }]}
            disabled={!isInputsFilled}
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
const styles = StyleSheet.create({
  title: {
    marginTop: 0,
    textAlign: 'center',
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.Saving_Green
  },
  cardContainer: {
    borderWidth: 1,
    marginTop: 40,
    width: 380,
    height: 500,
    borderRadius: 15,
    borderColor: '#ddd',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: '#DEF4DE',
  },
  cardContent: {
    padding: 10,
    marginTop:40
  },
  input: {
    height: 60,
    borderColor: COLORS.gray,
    borderRadius: 15,
    marginTop:5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor:"white",
    width: "100%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  Btn: {
    marginTop: SIZES.xxLarge,
    alignItems: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.xxLarge,
    height: 50,
    width:90
  },

  BtnText: {
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    padding: 15
  },
  btnContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    marginBottom:20,
    marginLeft: 190
  },
  CancelBtn: {
    backgroundColor: 'white', 
    borderColor: COLORS.Saving_Blue, 
    borderWidth: 2, 
  },
  CancelText: {
    color: COLORS.Saving_Blue, 
  },
  ask: {
    color: "black", 
  },
});
  export default NewsScreen;
  