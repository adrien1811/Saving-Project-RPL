import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Pressable,
    FlatList,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import styles from "./ExpenseScreen.style";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { COLORS, FONT, SIZES } from '../../constants/theme';
  import { useState } from "react";
  
  const ExpenseScreen = ({ value, onChangeText }) => {
    const navigation = useNavigation();
    const [history, setHistory] = useState([
      {
        id: '1',
        money: '200.000',
        date: 'TUE 22 Jun 2020',
        info: 'Beli bensin mobil',
      },
      {
        id: '2',
        money: '150.000',
        date: 'TUE 22 Jun 2020',
        info: 'Beli paket internet',
      },
      {
        id: '3',
        money: '75.000',
        date: 'TUE 22 Jun 2020',
        info: 'Nonton di bioskop',
      },
      {
        id: '4',
        money: '750.000',
        date: 'TUE 22 Jun 2020',
        info: 'Menabung',
      },
    ]);

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
                <Text style={styles.assetLabel}>Rp 3.550.000</Text>
            </View>
  
          <View style={{ marginTop: 20 }} />
  
        <View style={styles.ContainerRow}>
            <View style={styles.Categories1}>
                <Text style={styles.categoriesLabel}>Essential</Text>
                <Text style={styles.assetLabel}>Rp 500.000</Text>
            </View>

            <View style={styles.Categories2}>
                <Text style={styles.categoriesLabel}>Transportation</Text>
                <Text style={styles.assetLabel}>Rp 500.000</Text>
            </View>

        </View>

        <View style={styles.ContainerRow}>
            <View style={styles.Categories3}>
                <Text style={styles.categoriesLabel}>Entertainment</Text>
                <Text style={styles.assetLabel}>Rp 500.000</Text>
            </View>

            <View style={styles.Categories4}>
                <Text style={styles.categoriesLabel}>Savings</Text>
                <Text style={styles.assetLabel}>Rp 500.000</Text>
            </View>

        </View>

        <View style= {styles.History}>
            <Text style= {styles.HistoryText}>
                History
            </Text>
        </View>

        <FlatList
        data= {history}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.historyItem}>
            <Text style= {styles.historyMoney}>Rp {item.money}</Text>
            <View style= {{
              justifyContent: 'space-between',
              flexDirection: 'row'}}>
                <Text style= {styles.historyInfo}>{item.info}</Text> 
                <Text style= {styles.historyDate}>{item.date} </Text>
              </View>
          </View>
        )}
        />

        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default ExpenseScreen;
  