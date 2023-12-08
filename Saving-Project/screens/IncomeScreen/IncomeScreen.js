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
  import { useNavigation } from "@react-navigation/native";
  import { COLORS, FONT, SIZES } from '../../constants/theme';
  import { useState } from "react";
  
  const IncomeScreen = ({ value, onChangeText }) => {
    const navigation = useNavigation();
    const [history, setHistory] = useState([
      {
        id: '1',
        money: '3.800.000',
        date: 'TUE 22 Jun 2020',
        info: 'Gajian',
      },
      {
        id: '2',
        money: '200.000',
        date: 'TUE 22 Jun 2020',
        info: 'Return Saham',
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
                <Text style={styles.categoriesLabel}>Salary</Text>
                <Text style={styles.assetLabel}>Rp 3.800.000</Text>
            </View>

            <View style={styles.Categories2}>
                <Text style={styles.categoriesLabel}>Other Income</Text>
                <Text style={styles.assetLabel}>Rp 200.000</Text>
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

        <Pressable style={styles.Btn}>
              <Text style={styles.BtnText}>Add Transaction</Text>
            </Pressable>

        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default IncomeScreen;
  