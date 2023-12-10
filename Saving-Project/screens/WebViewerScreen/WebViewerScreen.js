// WebViewerScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

const WebViewerScreen = ({ route }) => {
  const { url, title } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default WebViewerScreen;
