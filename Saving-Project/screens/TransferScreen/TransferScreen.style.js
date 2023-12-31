import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({

  container: {
    padding: 24,
    backgroundColor: 'white',
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: SIZES.xxLarge,
    fontWeight: "bold"
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center', 
    borderBottomWidth: 1,
    borderColor: "#F5F6FA"
  },

  currencyText: {
    marginRight: 5,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },

  TextInput: {
    opacity: 0.7,
    height: 70,
    width: 160,
    paddingVertical: 5,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
    textAlign: 'center',
    backgroundColor:"white"
  },

  BtnContainerRow: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xLarge,
    marginBottom: 10,
    marginTop: 10,
    gap: 10
  },

  Btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F6FA",
    borderRadius: SIZES.xLarge,
    height: 80,
    width: 90,
    marginBottom: 10,
  },

  BtnText: {
    textAlign: 'center',
    color: COLORS.Saving_Blue,
    alignItems: 'center',
    padding: 15,
    fontSize: SIZES.xLarge,
    fontWeight: 'bold'
  },

  blank: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xLarge,
    height: 80,
    width: 90,
    marginBottom: 10,
  },

  btnEnter: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xLarge,
    backgroundColor: COLORS.Saving_Blue,
    height: 80,
    width: 90,
    marginBottom: 10,
  },

  enterText: {
    textAlign: 'center',
    color: "white",
    alignItems: 'center',
    padding: 15,
    fontSize: SIZES.xLarge,
    fontWeight: 'bold'
  },

});

export default styles;