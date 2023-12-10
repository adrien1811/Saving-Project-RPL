import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONT, SIZES } from '../../constants/theme';

const HomePageScreen = () => {
  const route = useRoute();
  const { userId } = route.params;
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [fullName, setFullName] = useState(''); 
  const [totalExpenses, setTotalExpenses] = useState(0); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleProfileNavigation = () => {
    navigation.navigate("ProfileScreen", { userId: userId });
    setShowMenu(false);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.error('Error during logout:', error);
    }
    setShowMenu(false);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const url = `http://192.168.10.122:8000/userDetails/${userId}`;
        const response = await fetch(url);

        if (response.ok) {
          const userDetails = await response.json();
          setFullName(userDetails.userDetails.fullName);
          setTotalExpenses(userDetails.userDetails.totalExpenses);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails(); 
  }, [userId]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 20 }}>
          <TouchableOpacity onPress={toggleMenu}>
            <AntDesign name="bars" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showMenu}
          onRequestClose={() => {
            setShowMenu(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.option} onPress={handleProfileNavigation}>
                <Text style={styles.optionText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={handleLogout}>
                <Text style={styles.optionText}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.title}>Welcome {fullName}</Text>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.expenseText}>Your Total Expense</Text>
              <View style={styles.row}>
                <Text style={styles.expenseAmount}>{totalExpenses}</Text>
                <Pressable
                  style={styles.btn}
                  onPress={() => {
                    navigation.navigate("ExpenseScreen");
                  }}
                >
                  <Text style={styles.BtnText}>View More</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.row2}>
          <Text style={styles.contentTitle2}>View Article</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Pressable
                  style={styles.btn}
                  onPress={() => {
                    navigation.navigate("ExpenseScreen");
                  }}
                >
                  <Text style={styles.BtnText2}>View All</Text>
                </Pressable>
              </View>
              </View>
              <View style={styles.articleContainer}>
              <Image
              style={{
               alignContent: "center",
               width: 170,
               height: 170
                }}
               source={require("../../assets/article1.png")}
        />
              <Image
               style={{
               alignContent: "center",
               width: 170,
               height: 170
               }}
               source={require("../../assets/article2.png")}
        />
              </View>
              <Text style={styles.contentTitle3}>Finance Calculating Tools</Text>
               <Pressable
          style={styles.investButton}
          onPress={() => {
            navigation.navigate("InvestScreen");
          }}
        >
          <View style={styles.investButtonContent}>
            <View style={styles.row}>
              <Image
                style={{
                  width: 30,
                  height: 30
                }}
                source={require("../../assets/images/result.png")}
              />
              <Text style={{
                fontSize: SIZES.medium,
                marginLeft: 20
              }}>Investment Calculator</Text>
              <Image
                style={{
                  width: 150,
                  height: '100%', // agar gambar mengisi tinggi tombol
                  resizeMode: 'contain',
                }}
                source={require("../../assets/images/invest.png")}
              />
            </View>
          </View>
        </Pressable>
          <Image
          style={{
            alignContent: "center",
            height: 200,
          }}
          source={require("../../assets/Vector7.png")}
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 5,
    paddingVertical: 8,
    borderRadius: 6,
    width: "100%",
    textAlign: "left",
    marginLeft: 30,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },
  contentTitle: {
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "center",
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  contentTitle2: {
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "left",
    marginLeft: 30,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  contentTitle3: {
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "left",
    width:"100%",
    marginLeft: 60,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    marginTop: 20,
    width: 330,
    height: 135,
    borderRadius: 25,
    shadowOpacity: 1,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    backgroundColor: COLORS.Saving_Blue,
  },
  cardContent: {
    padding: 10,
    marginTop: 25,
  },
  expenseText: {
    fontSize: SIZES.medium,
    color: "white",
    textAlign: "left",
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  articleContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    justifyContent: "space-between",
  },
  expenseAmount: {
    fontSize: SIZES.xLarge,
    color: "white",
    fontWeight: "bold",
    marginLeft: 25,
  },
  btn: {
    backgroundColor: "white",
    borderRadius: SIZES.small,
    height: 35,
    width:120,
    marginLeft: 30,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  BtnText: {
    color: COLORS.Saving_Blue,
    textAlign: "center",
    alignItems: "center",
    padding: 10,
  },
  BtnText2: {
    color: COLORS.Saving_Red,
    textAlign: "center",
    padding: 10,
  },
  investButton: {
    flex: 1,
    marginTop: 20,
    width: 340,
    height: 80,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#DEF4DE",
  },
  investButtonContent: {
    padding: 10,
    textAlign: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 15,
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
});

export default HomePageScreen;
