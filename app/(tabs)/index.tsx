import { Image, StyleSheet, Platform, FlatList } from 'react-native';
import ChatListItem from '@/components/chats/ChatListItem';
import chats from '@/querys/data/chats.json';

export default function HomeScreen() {
  return (
   
         <FlatList
            data={chats}
            renderItem={({ item }) => <ChatListItem chatList={item} />}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
