import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;

const styles = StyleSheet.create({});
