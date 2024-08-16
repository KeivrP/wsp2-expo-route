import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import type { ChatsList } from "./chats-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useLocalSearchParams, useRouter } from "expo-router";

dayjs.extend(relativeTime);

interface Props {
  chatList: ChatsList;
}

const ChatListItem = ({ chatList }: Props) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("ChatListItem", chatList);
        router.push({
          pathname: "/(chat)/index",
          params: {
            id: chatList.user.id,
            nameUser: chatList.user.name,
            image: chatList.user.image,
          },
        });
      }}
    >
      <View style={styles.container} id={chatList.id}>
        <Image
          source={{
            uri:
              chatList.user.image ??
              "https://w7.pngwing.com/pngs/313/542/png-transparent-business-organization-computer-software-tom-clancy-s-rainbow-six-siege-research-unknown-person-thumbnail.png",
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name} numberOfLines={1}>
              {chatList.user.name}
            </Text>
            <Text style={styles.subTitle}>
              {dayjs(chatList.lastMessage.createdAt).fromNow()}
            </Text>
          </View>

          <Text numberOfLines={2} style={styles.subTitle}>
            {chatList.lastMessage.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 1,
    height: 70,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default ChatListItem;
