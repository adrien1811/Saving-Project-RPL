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
import styles from "./TransferScreen.style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TransferScreen = ({ value, onChangeText }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView style={{ alignItems: "center" }}>
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
          <Text
            style={{
              fontSize: 22,
            }}
          >
            Category
          </Text>
          <Text
            style={{
              fontSize: 22,
              opacity: 0.6,
            }}
          >
            Entertainment
          </Text>
        </View>

        <View style={{ marginTop: 40 }} />

        <View style={styles.BtnContainerRow}>
          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>1</Text>
          </Pressable>

          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>2</Text>
          </Pressable>

          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>3</Text>
          </Pressable>
        </View>

        <View style={styles.BtnContainerRow}>
          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>4</Text>
          </Pressable>

          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>5</Text>
          </Pressable>

          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>6</Text>
          </Pressable>
        </View>

        <View style={styles.BtnContainerRow}>
          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>7</Text>
          </Pressable>

          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>8</Text>
          </Pressable>

          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>9</Text>
          </Pressable>
        </View>

        <View style={styles.BtnContainerRow}>
          <View style={styles.blank} />

          <Pressable style={styles.Btn}>
            <Text style={styles.BtnText}>0</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate("ConfirmationScreen"); // Navigate to the Login screen
            }}
            style={styles.btnEnter}
          >
            <Text style={styles.enterText}>
              <AntDesign name="arrowright" size={45} color="white" />
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TransferScreen;
