// Not used gesture-handler 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'

const Stack = createNativeStackNavigator();
const globalScreenOptions={
  headerStyle:{backgroundColor: '#f4511e'},
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login',}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home',}}/>
      
      </Stack.Navigator>
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
