import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { Card, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "R4FHVVOPG2RWGAD5"; // Use your actual API key
        const apiUrl = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);

        setNews(response.data.feed);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Market News
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={news}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NewsDetailsScreen", { newsItem: item })
                }
              >
                <Card>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Divider />
                  <Text>{item.summary}</Text>
                  {/* Add more details or styling as needed */}
                </Card>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
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
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
});

export default NewsScreen;
