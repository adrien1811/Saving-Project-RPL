import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import ConfirmationScreen from "../screens/ConfirmationScreen/ConfirmationScreen";
import TransferScreen from '../screens/TransferScreen/TransferScreen';
import { COLORS } from '../constants/theme';
import 'react-native-gesture-handler';
import Header from "../screens/Header";

const StackNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} 
                options={{
                    headerStyle: {backgroundColor: "white"},
                    headerShown: false
                }}
                />
                <Stack.Screen name="LoginScreen" component={LoginScreen} 
                options={{
                    headerStyle: {backgroundColor: "white"},
                    headerShown: false
                }}
                />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} 
                options={{
                    headerStyle: {backgroundColor: "white"},
                    headerShown: false
                }}
                />
                <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} 
                options={{
                    headerTitle: () => <Header name= "Transaction"/>,
                    
                    headerStyle: {
                        backgroundColor: COLORS.Saving_Blue,
                        borderBottomRightRadius: 60,
                        borderBottomLeftRadius: 60,
                        height: 100,
                    },
                    headerTitleStyle: {
                        color: "white",
                        alignContent: 'center'
                    },
                    headerTitleAlign: 'center'
                }}
                />

                <Stack.Screen name="TransferScreen" component={TransferScreen} 
                options={{
                    headerTitle: () => <Header name= "Transfer"/>,
                    
                    headerStyle: {
                        backgroundColor: COLORS.Saving_Blue,
                        borderBottomRightRadius: 60,
                        borderBottomLeftRadius: 60,
                        height: 100,
                    },
                    headerTitleStyle: {
                        color: "white",
                        alignContent: 'center'
                    },
                    headerTitleAlign: 'center'
                }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;

const styles = StyleSheet.create({});
