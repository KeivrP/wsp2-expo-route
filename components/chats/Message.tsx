import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";
import { Colors } from "@/constants/Colors";
import relativeTime from "dayjs/plugin/relativeTime";
import { type Message as MessageType } from "./chats-types";
dayjs.extend(relativeTime);
interface Props {
  message: MessageType;
}

const Message = ({ message }: Props) => {
  const isMyMessage = () => {
    return message?.user.id === "u1";
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage()
            ? Colors.light.tabIconSelected
            : "white",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message?.text}</Text>
      <Text style={styles.time}>{dayjs(message?.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",

    // Shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  message: {},
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});

export default Message;
