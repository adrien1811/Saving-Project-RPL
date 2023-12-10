import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import HomePageScreen from "../screens/HomePageScreen/HomePageScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen/ConfirmationScreen";
import TransferScreen from "../screens/TransferScreen/TransferScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import InvestScreen from "../screens/InvestScreen/InvestScreen";
import InvestResultScreen from "../screens/InvestResultScreen/InvestResultScreen";
import ExpenseScreen from "../screens/ExpenseScreen/ExpenseScreen";
import IncomeScreen from "../screens/IncomeScreen/IncomeScreen";
import NewsScreen from "../screens/NewsScreen/NewsScreen";
import NewsDetailsScreen from "../screens/NewsDetailsScreen/NewsDetailsScreen";
import WebViewerScreen from "../screens/WebViewerScreen/WebViewerScreen";
import StockScreen from "../screens/StockScreen/StockScreen";
import { COLORS } from "../constants/theme";
import "react-native-gesture-handler";
import Header from "../screens/Header";

const StackNavigator = ({ userId }) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUpScreen"
          initialParams={{ userId: userId }}
          component={SignUpScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          initialParams={{ userId: userId }}
          component={SplashScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          initialParams={{ userId: userId }}
          component={LoginScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          initialParams={{ userId: userId }}
          component={RegisterScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomePageScreen"
          initialParams={{ userId: userId }}
          component={HomePageScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ConfirmationScreen"
          initialParams={{ userId: userId }}
          component={ConfirmationScreen}
          options={{
            headerTitle: () => <Header name="Transaction" />,
            headerStyle: {
              backgroundColor: COLORS.Saving_Blue,
              borderBottomRightRadius: 60,
              borderBottomLeftRadius: 60,
              height: 100,
            },
            headerTitleStyle: {
              color: "white",
              alignContent: "center",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="TransferScreen"
          initialParams={{ userId: userId }}
          component={TransferScreen}
          options={{
            headerTitle: () => <Header name="Transfer" />,
            headerStyle: {
              backgroundColor: COLORS.Saving_Blue,
              borderBottomRightRadius: 60,
              borderBottomLeftRadius: 60,
              height: 100,
            },
            headerTitleStyle: {
              color: "white",
              alignContent: "center",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          initialParams={{ userId: userId }}
          component={ProfileScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InvestScreen"
          initialParams={{ userId: userId }}
          component={InvestScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InvestResultScreen"
          initialParams={{ userId: userId }}
          component={InvestResultScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ExpenseScreen"
          initialParams={{ userId: userId }}
          component={ExpenseScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="IncomeScreen"
          initialParams={{ userId: userId }}
          component={IncomeScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewsScreen"
          initialParams={{ userId: userId }}
          component={NewsScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewsDetailsScreen"
          initialParams={{ userId: userId }}
          component={NewsDetailsScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WebViewerScreen"
          component={WebViewerScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StockScreen"
          initialParams={{ userId: userId }}
          component={StockScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
