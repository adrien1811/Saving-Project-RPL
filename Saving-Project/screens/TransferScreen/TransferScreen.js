import { StyleSheet, Text, View, Image, Button, TextInput, KeyboardAvoidingView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../../constants/theme';
import styles from './TransferScreen.style';
import { AntDesign } from '@expo/vector-icons';

const TransferScreen = ({ value, onChangeText }) => {
      
    return (
        <SafeAreaView style={{flex : 1, backgroundColor: "white"}}>

            <KeyboardAvoidingView style={{alignItems: 'center'}} >
            
            <Text style={styles.title}>
                Enter Amount
            </Text>

            <View style={styles.container}>
            <Text style={styles.currencyText}>IDR</Text>
                <TextInput
                style={styles.TextInput}
                placeholder= "0"
                keyboardType='numeric'
                value={value}
                onChangeText={onChangeText}
            />
            </View>

            <View style = {{marginTop : 70,}}/>

            <View style = {styles.BtnContainerRow}>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                       1 
                    </Text>
                </Pressable>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                        2
                    </Text>
                </Pressable>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                        3
                    </Text>
                </Pressable>
            </View>

            <View style = {styles.BtnContainerRow}>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                    4 
                    </Text>
                </Pressable>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                        5
                    </Text>
                </Pressable>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                        6
                    </Text>
                </Pressable>
            </View>

            <View style = {styles.BtnContainerRow}>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                       7 
                    </Text>
                </Pressable>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                        8
                    </Text>
                </Pressable>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                        9
                    </Text>
                </Pressable>
            </View>

            <View style = {styles.BtnContainerRow}>

                <Pressable
                style={
                    styles.Btn
                    }>
                    <Text style={
                    styles.BtnText
                    }>
                       0 
                    </Text>
                </Pressable>
            </View>


            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default TransferScreen;