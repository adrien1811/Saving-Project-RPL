import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import 'react-native-gesture-handler';


export default function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('12345'); 
  
        if (storedUserId) {
          console.log('User ID found in AsyncStorage:', storedUserId);
        } else {
          console.log('User ID not found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error fetching userId:', error);
        Alert.alert('Error', 'An error occurred while fetching userId.');
      }
    };
  
    fetchUserId();
  }, []);
  return (
   
   <>
   <StackNavigator userId={userId} /> 
   </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
