import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./ExpenseScreen.style";
import { COLORS, FONT, SIZES } from '../../constants/theme';

const ExpenseScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;
  const [history, setHistory] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [categoryAmounts, setCategoryAmounts] = useState({
    essential: 0,
    transportation: 0,
    entertainment: 0,
    savings: 0,
  });

  useEffect(() => {
    fetch(`http://192.168.10.122:8000/expenses/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const totalAmount = data.reduce((total, item) => total + item.amount, 0);
        setTotalAmount(totalAmount);
        setHistory(data);
      })
      .catch((error) => console.error(error));

    fetch(`http://192.168.10.122:8000/totalExpenses/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryAmounts(data.totalExpensesByCategory || {});
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ alignItems: "center" }}>
        <Text style={styles.title}>Money Manager</Text>

        <View style={{ marginTop: 8, alignItems: "center" }}>
          <Text
            style={{
              color: COLORS.Saving_Blue,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10,
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            This Month
          </Text>
        </View>

        <View style={styles.rectangle}>
          <Text style={styles.titleLabel}>Your Total Expenses</Text>
          <Text style={styles.assetLabel}>Rp {totalAmount || 0}</Text>
        </View>
        <Pressable
              onPress={() => {
                navigation.navigate("IncomeScreen", { userId });
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
                See Income
              </Text>
            </Pressable>
      
        

        <View style={styles.ContainerRow}>
          <View style={styles.Categories1}>
            <Text style={styles.categoriesLabel}>Essential</Text>
            <Text style={styles.assetLabel}>Rp {categoryAmounts.essential || 0}</Text>
          </View>

          <View style={styles.Categories2}>
            <Text style={styles.categoriesLabel}>Transportation</Text>
            <Text style={styles.assetLabel}>
              Rp {categoryAmounts.transportation || 0}
            </Text>
          </View>
        </View>

        <View style={styles.ContainerRow}>
          <View style={styles.Categories3}>
            <Text style={styles.categoriesLabel}>Entertainment</Text>
            <Text style={styles.assetLabel}>Rp {categoryAmounts.entertainment || 0}</Text>
          </View>

          <View style={styles.Categories4}>
            <Text style={styles.categoriesLabel}>Savings</Text>
            <Text style={styles.assetLabel}>Rp {categoryAmounts.savings || 0}</Text>
          </View>
        </View>

        <View style={styles.History}>
          <Text style={styles.HistoryText}>History</Text>
        </View>

        <FlatList
          data={history}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.historyMoney}>Rp {item.amount}</Text>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.historyInfo}>{item.description}</Text>
                <Text style={styles.historyDate}>{item.date} </Text>
              </View>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ExpenseScreen;
