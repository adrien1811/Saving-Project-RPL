import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Pressable,
    FlatList,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import styles from "./IncomeScreen.style";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { COLORS, FONT, SIZES } from '../../constants/theme';
  import { useEffect, useState } from "react";
  
  const IncomeScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { userId } = route.params;
    const [history, setHistory] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [categoryAmounts, setCategoryAmounts] = useState({
      salary: 0,
      "other income": 0,
    });
  
    useEffect(() => {
      fetch(`http://192.168.10.122:8000/income/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          const totalAmount = data.reduce((total, item) => total + item.amount, 0);
          setTotalAmount(totalAmount);
          setHistory(data);
        })
        .catch((error) => console.error(error));
  
      fetch(`http://192.168.10.122:8000/totalIncome/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setCategoryAmounts(data.totalIncomeByCategory || {});
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
            <Text style={styles.titleLabel}>Your Total Income</Text>
            <Text style={styles.assetLabel}>Rp {totalAmount}</Text>
          </View>
  
          <View style={{ marginTop: 20 }} />
  
          <View style={styles.ContainerRow}>
            <View style={styles.Categories1}>
              <Text style={styles.categoriesLabel}>Salary</Text>
              <Text style={styles.assetLabel}>Rp {categoryAmounts.salary || 0}</Text>
            </View>
  
            <View style={styles.Categories2}>
              <Text style={styles.categoriesLabel}>Other Income</Text>
              <Text style={styles.assetLabel}>
                Rp {categoryAmounts["other income"] || 0}
              </Text>
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
  
           <Pressable
           style={styles.Btn}
           onPress={() => {
          navigation.navigate("TransferScreen", { userId });
           }}
          > 
          <Text style={styles.BtnText}>Add Transaction</Text>
        </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default IncomeScreen;
  