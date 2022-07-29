import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <StatusBar translucent/>
        <Text>Hai</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})