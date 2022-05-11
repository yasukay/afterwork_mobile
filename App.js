import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import LoginStackNavigator from "./navigation/loginStackNavigator";
import MainTabNavigator from "./navigation/mainTabNavigator";

export default function App() {
  return (
      <NavigationContainer>
        <LoginStackNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
