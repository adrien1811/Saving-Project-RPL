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
import { useNavigation, useRoute } from "@react-navigation/native";

const InvestResultScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { stockName, profitPerYear, duration, investmentNominal } = route.params;
  
    const calculateInvestmentResult = () => {
      const profit = parseFloat(profitPerYear);
      const years = parseFloat(duration);
      const nominal = parseFloat(investmentNominal);
  
      const netNow = nominal;
      const profitAmount = (nominal * profit * years) / 100;
      const finalNet = netNow + profitAmount;
  
      return {
        netNow,
        profitAmount,
        finalNet,
      };
    };
  
    const { netNow, profitAmount, finalNet } = calculateInvestmentResult();
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
          <AntDesign name="left" size={24} color="black" />
        </View>
  
        <KeyboardAvoidingView style={{ alignItems: "center", flex: 1 }}>
          <Text style={styles.title}>Result</Text>
          <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.result}
                  source={require("../../assets/images/result.png")}
                />
              </View>
              <Text style={styles.cardTitle}>Investment Result</Text>
              <View style={styles.resultContainer}>
                <View style={styles.row}>
                  <View style={[styles.item, styles.itemMargin]}>
                    <Image
                      style={styles.bullet}
                      source={require("../../assets/images/bullet.png")}
                    />
                    <Text style={styles.textContext}>Net Now</Text>
                    <Text style={styles.textPrice}>Rp {netNow}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={[styles.item, styles.itemMargin]}>
                    <Image
                      style={styles.bullet}
                      source={require("../../assets/images/bullet.png")}
                    />
                    <Text style={styles.textContext}>Profit</Text>
                    <Text style={styles.textPrice}>Rp {profitAmount}</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={[styles.item, styles.itemMargin]}>
                    <Image
                      style={styles.bullet}
                      source={require("../../assets/images/bullet.png")}
                    />
                    <Text style={styles.textContext}>Final Net</Text>
                    <Text style={styles.textPrice}>Rp {finalNet}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Pressable
              style={styles.Btn}
              onPress={() => {
                navigation.navigate("InvestScreen");
              }}
            >
              <Text style={styles.BtnText}>Try Again</Text>
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
    marginTop: 80,
    width: 350,
    height: 400,
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
  cardTitle: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.Saving_Green
  },
  cardContent: {
    padding: 10,
    marginTop:40
  },
  Btn: {
    marginTop: SIZES.xxLarge,
    alignItems: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.xxLarge,
    height: 50,
    width:120
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
    marginLeft: 200
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    height: 25,
    width: 25,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    marginTop:30
  },
  textContext:{
    width: 100,
    marginTop: 0,
    textAlign: 'left',
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: "black"
  },
  bullet: {
    height: 35,
    width: 37,
    marginRight:10
  },
  item: {
    padding: 10,
    width: 350,
    margin: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  itemMid: {
    padding: 10,
    width: 350,
    margin: 0,
    borderTopWidth: 1, 
    borderBottomWidth: 1, 
    borderColor:"gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textPrice:{
    width: 100,
    marginLeft: 80,
    textAlign: "left",
    fontSize: SIZES.small,
    color: "black"
  },
  

});
  export default InvestResultScreen;
  