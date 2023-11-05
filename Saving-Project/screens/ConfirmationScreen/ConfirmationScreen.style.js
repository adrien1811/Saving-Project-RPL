import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({

  container: {
    padding: 24,
    backgroundColor: 'white',
  },

  header: {
    marginTop: 20,
    fontSize: SIZES.xLarge,
    width: 210,
    textAlign: 'center',
    opacity: 0.7
  },

  Btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.xLarge,
    height: 70,
    width: 340,
    marginBottom: 10,
  },

  BtnText: {
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    padding: 15,
    fontSize: SIZES.xLarge
  },

  Btn2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: SIZES.xLarge,
    height: 70,
    width: 340,
    marginBottom: 10,
    borderColor: COLORS.Saving_Blue,
    borderWidth: 1
  },

  BtnText2: {
    textAlign: 'center',
    color: COLORS.Saving_Blue,
    alignItems: 'center',
    padding: 15,
    fontSize: SIZES.xLarge
  }
});

export default styles;