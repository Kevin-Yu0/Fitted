import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen name="communities"  options={{ headerShown: false, tabBarIcon:({})=><Image style={{ width:30, height:30 }} source={require("../../assets/images/react-logo.png")}/>}}/>
        <Tabs.Screen name="search" options={{ headerShown: false }}/>
        <Tabs.Screen name="home" options={{ headerShown: false  }}/>
        <Tabs.Screen name="closet" options={{ headerShown: false }}/>
        <Tabs.Screen name="profile" options={{ headerShown: false }}/>
    </Tabs>
  );
}