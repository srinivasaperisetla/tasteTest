import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function App() {

    const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-blue-50 ">
        <Text className = "font-bold p-3 text-xl ">Matches</Text>
      <StatusBar style="auto" />
    </View>
  );
}