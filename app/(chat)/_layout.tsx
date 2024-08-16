import { Stack, useLocalSearchParams } from "expo-router";

export default function Layout() {
  const { id, nameUser, image } = useLocalSearchParams();

  console.log(id, nameUser, image);
  return (
    <Stack>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen
        name="index"
        options={{
          title: "Chat",  // Title for the screen         
        }}
      />
    </Stack>
  );
}
