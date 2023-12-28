import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function App() {

    const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-sky-50 ">
        <Text className = "font-bold p-3 text-xl ">Profile</Text>
      <StatusBar style="auto" />

      <TouchableOpacity 
        className="bg-white rounded-lg w-48 justify-center items-center shadow"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text className = "font-bold p-3 text-xl ">Logout</Text>
      </TouchableOpacity>

    </View>
  );
}