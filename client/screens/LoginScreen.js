import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function App() {

    const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-sky-50 border">
        <Text className = "font-bold p-0 text-4xl ">TasteTest</Text>
        <Text className = "font-bold mb-3  ">UC Merced's Official Dating App</Text>

      <TouchableOpacity 
        className="bg-white rounded-lg w-48 justify-center items-center shadow "
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text className = "font-bold p-3 text-xl ">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        className="bg-white rounded-lg w-48 justify-center items-center m-3 shadow "
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text className = "font-bold p-3 text-xl ">Create Account</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}