import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "center",
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },
  title2: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    textAlign: "center",
    fontSize: SIZES.large,
  },
  Btn: {
    marginTop: SIZES.xxLarge,
    alignItems: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.medium,
    height: 50,
  },
  BtnText: {
    textAlign: "center",
    color: "white",
    alignItems: "center",
    padding: 15,
  },
});

export default styles;
