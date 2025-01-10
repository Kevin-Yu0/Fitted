import { Stack } from 'expo-router';

export default function ClosetLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>

    </Stack>
  );
}