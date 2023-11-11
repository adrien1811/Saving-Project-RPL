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
    flexDirection: 'row', // Arrange "IDR" and TextInput horizontally
    alignItems: 'center', // Center them vertically
  },

  currencyText: {
    marginRight: 5,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },

  TextInput: {
    opacity: 0.7,
    height: 70,
    width: 70,
    paddingVertical: 5,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
    textAlign: 'center',
  },

  BtnContainerRow: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xLarge,
    marginBottom: 10,
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
  }

});

export default styles;