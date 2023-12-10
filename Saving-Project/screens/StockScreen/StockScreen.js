import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Pressable,
    FlatList,
    TextInput,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import styles from "./StockScreen.style";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { COLORS, FONT, SIZES } from '../../constants/theme';
  import React, { useState, useEffect } from 'react';
  
  
  const StockScreen = ({ }) => {
    const navigation = useNavigation();
    const route = useRoute(); // Initialize route with useRoute
    const [stockData, setStockData] = useState(null);
    const [search, setSearch] = useState(null);

    const handleSearch = () => {
      fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=4II8RJAW003DKDDQ`)
        .then(response => response.json())
        .then(data => setStockData(data))
        .catch(error => console.error(error));
     }

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
              Stock
            </Text>

          </View>
  
          <View style={{ marginTop: 20 }} />

        <View style= {styles.History}>
            <Text style= {styles.HistoryText}>
                Search Stock
            </Text>
        </View>

        <View style={styles.ViewInput}>
            <TextInput
              style={styles.TextInput}
              placeholder="Search Stock"
              value={search}
              onChangeText={(text) => setSearch(text)}
            />
            <Pressable onPress={handleSearch}>
              <AntDesign name="search1" size={24} color="black" />
            </Pressable>
        </View>

        <FlatList
          data={stockData ? Object.values(stockData['bestMatches']) : []}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.historyItem}>
              <Text style={styles.historyMoney}>{item['2. name']}</Text>
              <View style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row'
              }}>
              <Text style={styles.historyInfo}>{item['1. symbol']}</Text> 
              <Text style={styles.historyDate}>{item['8. previousClose']}</Text>
              </View>
            </View>)}/>


        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default StockScreen;
  