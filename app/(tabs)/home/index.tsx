import { StyleSheet, Button,TouchableOpacity, Image, Text, View, SafeAreaView, Alert } from "react-native";
import {Link} from 'expo-router';



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
      <Button 
        onPress={() => {console.log('You tapped the button!');}}
        title="Press Me"/>
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
