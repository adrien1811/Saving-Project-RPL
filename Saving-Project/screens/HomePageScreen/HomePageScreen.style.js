import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";

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

  stockCarousel: {
    top: 323,
    width: 414,
    height: 294,
  },

  sectionNewsPosition: {
    left: 0,
    position: "absolute",
  },

  rectangle: {
    marginTop: SIZES.small,
    alignItems: "center",
    backgroundColor: COLORS.Saving_Blue,
    borderRadius: SIZES.medium,
    height: 50,
    width: 300,
    height: 130,
  },

  titleLabel: {
    color: "#ffffff",
    fontSize: SIZES.small,
    fontWeight: "400",
    left: 30,
    letterSpacing: 0,
    lineHeight: 1.5,
    position: "absolute",
    top: 29,
    width: 318,
  },

  assetLabel: {
    color: "#ffffff",
    fontSize: SIZES.xLarge,
    fontWeight: "700",
    left: 30,
    letterSpacing: 0,
    lineHeight: 1.5,
    position: "absolute",
    top: 65,
    whiteSpace: "nowrap",
  },

  viewarticle: {
    marginTop: 16,
    paddingVertical: 8,
    letterSpacing: 1,
    lineHeight: 28,
    borderRadius: 6,
    textAlign: "left",
    left: 40,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
  },

  frame: {
    marginTop: SIZES.small,
    alignItems: "flex-start",
    backgroundColor: COLORS.Saving_LightGray,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 140,
    height: 110,
    left: 40,
  },

  frame2: {
    alignItems: "flex-start",
    backgroundColor: COLORS.Saving_LightGray,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 140,
    height: 110,
    right: 40,
  },

  //bawah ini copasan
  ViewInput: {
    alignItems: "center",
    gap: SIZES.medium,
  },

  TextInput: {
    borderWidth: 1,
    opacity: 0.7,
    height: 50,
    width: 300,
    paddingVertical: 5,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
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
