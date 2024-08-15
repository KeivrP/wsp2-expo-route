// src/screens/ChatScreen.js

import { ImageBackground, StyleSheet, FlatList } from "react-native";
import bg from "@/assets/images/BG.png";
import messages from '@/assets/data/message.json'
import Message from "./Message";

export const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
				style={{ padding: 10 }}
				inverted
      />
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
    bg: {
      flex: 1,
    },
    list: {
      padding: 10,
    },
  });