import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewsDetailsScreen = ({ route, navigation }) => {
  const { newsItem } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{newsItem.title}</Text>
        <Image
          style={styles.bannerImage}
          source={{ uri: newsItem.banner_image }}
        />
        <Text style={styles.summary}>{newsItem.summary}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WebViewerScreen", {
              url: newsItem.url,
              title: newsItem.title,
            });
          }}
        >
          <Text style={styles.readMore}>Read More</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  summary: {
    fontSize: 16,
    marginBottom: 16,
  },
  readMore: {
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 16,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
});

export default NewsDetailsScreen;
