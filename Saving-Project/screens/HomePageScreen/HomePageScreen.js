import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "./HomePageScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const HomePageScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome Wisang</Text>
        </View>
        <View style={[styles.totalAssetParent, styles.pageTitlePosition]}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.rectangle}>
              <Text style={styles.titleLabel}>Your Total Expenses</Text>
              <Text style={styles.assetLabel}>Rp 500.000</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.viewarticle}>View Article</Text>
          <View style={styles.frame}>
            <Image
              style={{
                alignContent: "center",
                width: 120,
                height: 100,
                top: 5,
                left: 15,
              }}
              source={require("../../assets/icons/womanlogo.png")}
            />
            <View></View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.frame2}>
              <Image
                style={{
                  alignContent: "center",
                  width: 120,
                  height: 100,
                  top: 5,
                  left: 15,
                }}
                source={require("../../assets/icons/womanlogo.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePageScreen;
