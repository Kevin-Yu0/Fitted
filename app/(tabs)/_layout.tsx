import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen name="communities" options={{ headerShown: false }}/>
        <Tabs.Screen name="search" options={{ headerShown: false }}/>
        <Tabs.Screen name="home" options={{ headerShown: false }}/>
        <Tabs.Screen name="closet" options={{ headerShown: false }}/>
        <Tabs.Screen name="profile" options={{ headerShown: false }}/>
    </Tabs>
  );
}