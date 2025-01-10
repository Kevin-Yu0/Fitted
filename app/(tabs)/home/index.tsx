import { StyleSheet,TouchableOpacity, Image, Text, View, SafeAreaView, Alert } from "react-native";
import {Link} from 'expo-router';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default function Home() {
  return (
    <SafeAreaView
      style={styles.screen}
    >
      <Text>Fitted.</Text>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Alert", "You tapped the image!",[
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')}
          ]);
        }}
      >
        <Image source={require("../../../assets/images/react-logo.png")} />
      </TouchableOpacity>
      <Link style={styles.button} href="/home/user_profile" asChild>
        <Text>Go to user profile</Text>
      </Link>
    </SafeAreaView>   
  );
}

const styles = StyleSheet.create({
  // Add styles here
  screen: {
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  }
});
