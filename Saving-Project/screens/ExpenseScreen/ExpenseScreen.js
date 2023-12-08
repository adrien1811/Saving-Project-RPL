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
  import { SafeAreaView } from "react-native-safe-area-context";
  import styles from "./ExpenseScreen.style";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { COLORS, FONT, SIZES } from '../../constants/theme';
  
  const ExpenseScreen = ({ value, onChangeText }) => {
    const navigation = useNavigation();
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
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

        </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ExpenseScreen;
  