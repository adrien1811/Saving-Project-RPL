import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./TransferScreen.style"; // Assuming you have imported the existing styles

const TransferScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;
  const [value, onChangeText] = useState("");
  const [category, setCategory] = useState("Income");
  const [selectedExpenseCategory, setSelectedExpenseCategory] = useState(null);
  const [selectedIncomeCategory, setSelectedIncomeCategory] = useState(null);
  const expenseOptions = ["essential", "transportation", "entertainment", "savings"];
  const incomeOptions = ["salary", "other income"];
  const [descriptionText, setDescriptionText] = useState("");

  const toggleCategory = () => {
    setCategory(category === "Income" ? "Expense" : "Income");
  };

  const handleExpenseClick = (selectedOption) => {
    setSelectedExpenseCategory(selectedOption);
  };

  const handleIncomeClick = (selectedOption) => {
    setSelectedIncomeCategory(selectedOption);
  };

  const filteredOptions =
    category === "Expense" ? expenseOptions : incomeOptions;

  const handleKeyPress = (input) => {
    onChangeText((prevValue) => prevValue + input);
  };

  const handleDelete = () => {
    onChangeText(value.slice(0, -1));
  };

  const handleEnter = async () => {
    try {
      const transactionData = {
        amount: value,
        category: category === "Income" ? selectedIncomeCategory : selectedExpenseCategory,
        description: descriptionText,
      };

      // Make a POST request to add income or expense
      const response = await fetch(
        category === "Income"
          ? `http://192.168.10.122:8000/addIncome/${userId}`
          : `http://192.168.10.122:8000/addExpense/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transactionData),
        }
      );

      const data = await response.json();
      console.log(data); 
      navigation.navigate("ConfirmationScreen", { userId: userId });
    } catch (error) {
      console.error("Error adding transaction:", error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <ScrollView showsVerticalScrollIndicator={false}>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ alignItems: "center" }}>
        <Pressable onPress={toggleCategory}>
          <Text style={{ fontSize: 22, opacity: 1 }}>{category}</Text>
        </Pressable>
        <Text style={styles.title}>Enter Amount</Text>

        <View style={styles.container}>
          <Text style={styles.currencyText}>IDR</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="0"
            keyboardType="numeric"
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        <View style={{ marginTop: 15, alignItems: "center" }}>
          <Text style={{ fontSize: 22 }}>Category</Text>
          {selectedExpenseCategory !== null || selectedIncomeCategory !== null ? (
            <Text style={{ fontSize: 22, opacity: 1 }}>
              {selectedExpenseCategory || selectedIncomeCategory}
            </Text>
          ) : (
            filteredOptions.map((option, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  if (category === "Expense") {
                    handleExpenseClick(option);
                  } else {
                    handleIncomeClick(option);
                  }
                }}
              >
                <Text style={{ fontSize: 22, opacity: 0.6 }}>{option}</Text>
              </Pressable>
            ))
          )}
          
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 22 }}>Description</Text>
          <TextInput
           style={{
          borderBottomWidth: 1,
          borderColor: "black",
          padding: 10,
          fontSize: 18,
          width: 300,
          alignSelf: 'center', // Centering TextInput
    }}
            placeholder="Enter description here"
            multiline
            numberOfLines={4}
            value={descriptionText}
            onChangeText={(text) => setDescriptionText(text)}
          />
        </View>
        <View style={styles.BtnContainerRow}>
          <Pressable style={styles.Btn} onPress={() => handleKeyPress("1")}>
            <Text style={styles.BtnText}>1</Text>
          </Pressable>

          <Pressable style={styles.Btn} onPress={() => handleKeyPress("2")}>
            <Text style={styles.BtnText}>2</Text>
          </Pressable>

          <Pressable style={styles.Btn} onPress={() => handleKeyPress("3")}>
            <Text style={styles.BtnText}>3</Text>
          </Pressable>
        </View>

        <View style={styles.BtnContainerRow}>
          <Pressable style={styles.Btn} onPress={() => handleKeyPress("4")}>
            <Text style={styles.BtnText}>4</Text>
          </Pressable>

          <Pressable style={styles.Btn} onPress={() => handleKeyPress("5")}>
            <Text style={styles.BtnText}>5</Text>
          </Pressable>

          <Pressable style={styles.Btn} onPress={() => handleKeyPress("6")}>
            <Text style={styles.BtnText}>6</Text>
          </Pressable>
        </View>

        <View style={styles.BtnContainerRow}>
          <Pressable style={styles.Btn} onPress={() => handleKeyPress("7")}>
            <Text style={styles.BtnText}>7</Text>
          </Pressable>

          <Pressable style={styles.Btn} onPress={() => handleKeyPress("8")}>
            <Text style={styles.BtnText}>8</Text>
          </Pressable>

          <Pressable style={styles.Btn} onPress={() => handleKeyPress("9")}>
            <Text style={styles.BtnText}>9</Text>
          </Pressable>
        </View>

        <View style={styles.BtnContainerRow}>
          <Pressable style={styles.Btn} onPress={() => handleKeyPress("0")}>
            <Text style={styles.BtnText}>0</Text>
          </Pressable>

          <Pressable style={styles.Btn} onPress={handleDelete}>
            <Text style={styles.BtnText}>Delete</Text>
          </Pressable>

          <Pressable style={styles.btnEnter} onPress={handleEnter}>
            <Text style={styles.enterText}>
              <AntDesign name="arrowright" size={45} color="white" />
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferScreen;
