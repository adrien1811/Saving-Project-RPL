import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardAvoidingView, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../../constants/theme';
import styles from './RegisterScreen.style';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex : 1, backgroundColor: "white"}}>
            <ScrollView showsVerticalScrollIndicator = {false}>
            <View
            style = {
                styles.container
            }>
            <AntDesign name="left" size={24} color="black" />
            </View>

            <KeyboardAvoidingView style={{alignItems: 'center'}} >
            <Text
            style = {
                styles.title
            }
            >Create an account</Text>

            <Text
            style={{
                opacity: 0.5
            }}
            >Manage your finance now</Text>

            <View style = {{marginTop : 50}}>
                <View style = {styles.ViewInput}>

                <TextInput style = {styles.TextInput}
                placeholder='Full name'
                />

                <TextInput style = {styles.TextInput}
                placeholder='Email Address'
                />

                <TextInput style = {styles.TextInput}
                placeholder='Phone number'
                />

                <TextInput style = {styles.TextInput}
                placeholder='Password'
                />

                <TextInput style = {styles.TextInput}
                placeholder='Date of Birth'
                />
                </View>

                <Pressable
                style={
                    styles.Btn
                }>
                    <Text style={
                    styles.BtnText
                }>
                        Create account 
                    </Text>
                </Pressable>

                <Pressable
                onPress={() => {
                    navigation.navigate('LoginScreen'); // Navigate to the Login screen
                }}>
                <Text
                style={{
                color: COLORS.Saving_Blue,
                fontWeight: 'bold',
                textAlign: 'center',
                margin: 15
                }}
                >Already have an account?</Text>
                </Pressable>
                </View>

            </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}

export default RegisterScreen;