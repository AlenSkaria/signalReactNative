import { SafeAreaView,StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Input,Button } from "@rneui/themed";

const LoginScreen = () => {
  
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  return (
    <SafeAreaView styles={styles.container}>
        <StatusBar style="Light" translucent/>
      <View>
        <Input placeholder="email" autoFocus type="email" value={email} onChangeText={(text)=>{setEmail(text)}} />
        <Input placeholder="password" secureTextEntry autoFocus type="password"/>
      </View>
      <Button title="login"/>
      <Button type="outline" title="Register" />
    </SafeAreaView>
  )
}

export default LoginScreen












const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})