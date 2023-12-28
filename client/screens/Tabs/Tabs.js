import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Profile from "./Profile"
import HomeFeed from "./HomeFeed"
import MatchesScreen from "./MatchesScreen"
import LikesScreen from "./LikesScreen"
import ChatScreen from "./ChatScreen"

export default function App() {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
        initialRouteName='HomeFeed'
        screenOptions={() => ({
            tabBarStyle: {
                backgroundColor: "black",
            },
            tabBarShowLabel: false,
            headerShown: false,
        })}

    >
        <Tab.Screen 
            name = "HomeFeed"
            component = {HomeFeed}
            options = {{
                tabBarIcon: ({size,focused})=>(
                    <AntDesign name="home" size={26} color={focused ? "white" : "grey"} style={{fontWeight: "bold"}} />
                )
            }}
        />
        <Tab.Screen 
            name = "MatchesScreen"
            component = {MatchesScreen}
            options = {{
                tabBarIcon: ({size,focused})=>(
                    <AntDesign name="staro" size={26} color={focused ? "white" : "grey"} />
                )
            }}
        />
        <Tab.Screen 
            name = "LikesScreen"
            component = {LikesScreen}
            options = {{
                tabBarIcon: ({size,focused})=>(
                    <AntDesign name="hearto" size={26} color={focused ? "white" : "grey"} />
                )
            }}
        />
        <Tab.Screen 
            name = "ChatScreen"
            component = {ChatScreen}
            options = {{
                tabBarIcon: ({size,focused})=>(
                    <Feather name="message-square" size={26} color={focused ? "white" : "grey"} />
                )
            }}
        />
        <Tab.Screen 
            name = "Profile"
            component = {Profile}
            options = {{
                tabBarIcon: ({size,focused})=>(
                    <Ionicons name="person-outline" size={26} color={focused ? "white" : "grey"} />
                )
            }}
        />
    </Tab.Navigator>

  );
}