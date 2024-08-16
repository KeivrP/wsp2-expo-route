import Message from "@/components/chats/Message";
import React from "react";
import { FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import bg from "@/assets/images/BG.png";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import message  from '@/querys/data/message.json'
import InputBox from "@/components/chats/InputBox";

export default function chatsScreen() {

  return (
    <KeyboardAvoidingView style={styles.bg}>
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={message}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
      />
      <InputBox />
    </ImageBackground>
  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
