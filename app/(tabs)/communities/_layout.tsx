import { Stack } from 'expo-router';

export default function CommunitiesLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>

    </Stack>
  );
}