import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
      
        name="index"
        options={{
          title: 'Chats',
          headerRight: () => (
            <View style={{ flexDirection: 'row'}}>
                <Ionicons
                    onPress={() => console.log("Contacts")}
                    name="camera-outline"
                    size={20}
                    color={"royalblue"}
                    style={{ marginRight: 15 }}
                />
                <Ionicons
                    onPress={() => console.log("Contacts")}
                    name="search-sharp"
                    size={18}
                    color={"royalblue"}
                    style={{ marginRight: 15 }}
                />
                <Ionicons
                    onPress={() => console.log("Contacts")}
                    name='ellipsis-vertical'
                    size={18}
                    color={"royalblue"}
                    style={{ marginRight: 15 }}
                />
            </View>
        ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: 'Estatus',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="call"
        options={{
          title: 'Llamadas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag' : 'bag-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="comunities"
        options={{
          title: 'comunidades',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'call' : 'call-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
