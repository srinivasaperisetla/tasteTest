import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, ImageBackground} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Linking } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';  
import { MaterialIcons } from '@expo/vector-icons'; 
import { useState } from 'react';


export default function App(props) {

    const navigation = useNavigation();
    const instalink = `https://www.instagram.com/${props.user.instagram}/`;
    const snaplink = `https://www.snapchat.com/add/${props.user.snapchat}/`;

    const [likedPic, setLikedPic] = useState("");
    
    const giveLike = (pic) =>{
      props.giveLike(pic);
    }

  return (
    <ScrollView  scrollEnabled={!props.givingLike}>
      <View className="flex p-1 pb-24 ">

        <View className="flex rounded-lg pl-2 " style={styles.name}>
          <Text className="text-4xl font-semibold">{props.user.name}</Text>
        </View>

        <View className="flex rounded-lg pl-2" style={styles.name}>
          <Text className="pl-2">{props.user.pronouns}</Text>
        </View>

        <View>
          <View className="shadow bg-white rounded-lg" style={styles.imageContainer}>
            {!(props.user.caption1==="")&&(
              <Text className="p-3 font-medium">{props.user.caption1}</Text>
            )} 
              <Image source={props.user.picture1} style={styles.image} className="rounded-lg" />
              {!props.givingLike && (
                <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture1)} >
                  <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
                </TouchableOpacity>
                )}
          </View>
        </View>

        <ScrollView horizontal={true}  className="flex-row space-x-4" style={styles.card}> 
            <View className="bg-white p-1 px-7 rounded-lg border"><Text className="font-medium">{props.user.tag1}</Text></View>
            <View className="bg-white p-1 px-7 rounded-lg border"><Text className="font-medium">{props.user.tag2}</Text></View>
            <View className="bg-white p-1 px-7 rounded-lg border"><Text className="font-medium">{props.user.tag3}</Text></View>
            <View className="bg-white p-1 px-7 rounded-lg border"><Text className="font-medium">{props.user.tag4}</Text></View>
            <View className="bg-white p-1 px-7 rounded-lg border"><Text className="font-medium">{props.user.tag5}</Text></View>
            <View className="bg-white p-1 px-7 rounded-lg border"><Text className="font-medium">{props.user.tag6}</Text></View>
        </ScrollView>

        <View className="flex bg-white rounded-lg pt-10 pb-10 shadow" style={styles.card}>
          <Text className="pl-1 pb-2 font-medium">{props.user.prompt1}</Text>
          <View className="">
            <Text className="text-3xl font-medium m-2">{props.user.prompt1Ans}</Text>
          </View>
          {!props.givingLike && (
            <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture1)}>
            <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
          </TouchableOpacity>
          )}     
        </View>

        <View className="flex bg-white rounded-lg shadow" style={styles.card}>
          <ScrollView horizontal={true}>
            <View className="flex-row pb-2 border-b border-gray-300">

              <View className="p-2 px-4 border-r border-gray-300 flex-row justify-center items-center space-x-4 ">
                <MaterialCommunityIcons name="cake-variant-outline" size={24} color="black" />
                <Text>{props.user.age}</Text>
              </View>
              <View className="p-2 px-4 border-r border-gray-300 flex-row justify-center items-center space-x-4">
                <AntDesign name="man" size={24} color="black" />
                <Text>{props.user.gender}</Text>
              </View>
              <View className="p-2 px-4 border-r border-gray-300 flex-row justify-center items-center space-x-4">
                <Ionicons name="ios-magnet-outline" size={24} color="black" />
                <Text>{props.user.sexuality}</Text>
              </View>
              {!(props.user.height==="") && (
                <View className="p-2 px-4 border-r border-gray-300 flex-row justify-center items-center space-x-4">
                  <FontAwesome5 name="ruler-vertical" size={24} color="black" />
                  <Text>{props.user.height}</Text>
                </View>
              )}
              <View className="p-2 px-4 border-r border-gray-300 flex-row justify-center items-center space-x-4">
                <Ionicons name="md-location-outline" size={24} color="black" />
                <Text>{props.user.location}</Text>
              </View>
              {!(props.user.race==="")&&(
                <View className="p-2 px-4 border-r border-gray-300 flex-row justify-center items-center space-x-4">
                  <MaterialIcons name="person-outline" size={24} color="black" />
                  <Text>{props.user.race}</Text>
                </View>
              )}
              <View className="p-2 px-4 border-r border-gray-300 flex-row justify-center items-center space-x-4">
                <Ionicons name="md-wine-outline" size={24} color="black" />
                <Text>{props.user.drinking}</Text>
              </View>
              <View className="p-2 px-4 border-gray-300 flex-row justify-center items-center space-x-4">
                <MaterialCommunityIcons name="smoking" size={24} color="black" />
                <Text>{props.user.smoking}</Text>
              </View>

            </View>
          </ScrollView>

          <View className="p-3 py-5 flex-row items-center space-x-4 border-b border-gray-300">
            <Ionicons name="md-school-outline" size={24} color="black" />
            <Text>{`${props.user.year} year ${props.user.major} Major`}</Text>
          </View>
          <View className="p-3 py-5 flex-row items-center space-x-4 border-b border-gray-300">
            <MaterialCommunityIcons name="magnify" size={24} color="black" />
            <Text>{props.user.datingIntentions}</Text>
          </View>
          {!(props.user.instagram==="")&&(
            <TouchableOpacity className="p-3 py-5 flex-row items-center space-x-4 border-b border-gray-300" onPress={() => Linking.openURL(instalink)}>
              <Ionicons name="ios-logo-instagram" size={24} color="black" />
              <Text>{`@${props.user.instagram}`}</Text>
            </TouchableOpacity>
          )}
          {!(props.user.snapchat==="")&&(
            <TouchableOpacity className="p-3 py-5 flex-row items-center space-x-4 border-b border-gray-300" onPress={() => Linking.openURL(snaplink)}>
              <MaterialCommunityIcons name="snapchat" size={24} color="black" />
              <Text>{`@${props.user.snapchat}`}</Text>
            </TouchableOpacity>
          )}
          
        </View>

        <View>
          <View className="shadow bg-white rounded-lg" style={styles.imageContainer}>
            {!(props.user.caption2==="")&&(
              <Text className="p-3 font-medium">{props.user.caption2}</Text>
            )}
            <Image source={props.user.picture2} style={styles.image} className="rounded-lg"></Image>
            {!props.givingLike && (
              <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture2)} >
                <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
              </TouchableOpacity>   
            )}
          </View>
        </View>

        <View className="flex bg-white rounded-lg pt-10 pb-10 shadow" style={styles.card}>
          <Text className="pl-1 pb-2 font-medium">{props.user.prompt2}</Text>
          <View className="">
            <Text className="text-3xl font-medium m-2">{props.user.prompt2Ans}</Text>
          </View> 
          {!props.givingLike && (
              <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture2)} >
                <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
              </TouchableOpacity>   
            )}
        </View>
     
        <View>
          <View className="shadow bg-white rounded-lg" style={styles.imageContainer}>
            {!(props.user.caption3==="")&&(
              <Text className="p-3 font-medium">{props.user.caption3}</Text>
            )}
            <Image source={props.user.picture3} style={styles.image} className="rounded-lg"></Image>
            {!props.givingLike && (
              <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture3)} >
                <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
              </TouchableOpacity>   
            )}
          </View>
        </View>

        <View className="flex bg-white rounded-lg pt-10 pb-10 shadow" style={styles.card}>
          <Text className="pl-1 pb-2 font-medium">{props.user.prompt3}</Text>
          <View className="">
            <Text className="text-3xl font-medium m-2">{props.user.prompt3Ans}</Text>
          </View> 
          {!props.givingLike && (
              <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture3)} >
                <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
              </TouchableOpacity>   
            )}
        </View>
       
        {!(props.user.picture4===null)&&(
          <View>
          <View className="shadow bg-white rounded-lg" style={styles.imageContainer}>
            {!(props.user.caption4==="")&&(
              <Text className="p-3 font-medium">{props.user.caption4}</Text>
            )}
            <Image source={props.user.picture4} style={styles.image} className="rounded-lg"></Image>
            {!props.givingLike && (
              <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture4)} >
                <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
              </TouchableOpacity>   
            )}
          </View>
        </View>
        )}

        {!(props.user.prompt4==="")&&(
          <View className="flex bg-white rounded-lg pt-10 pb-10 shadow" style={styles.card}>
            <Text className="pl-1 pb-2 font-medium">{props.user.prompt4}</Text>
            <View className="">
              <Text className="text-3xl font-medium m-2">{props.user.prompt4Ans}</Text>
            </View> 
            {!props.givingLike && (
              <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture4)} >
                <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
              </TouchableOpacity>   
            )}
          </View>
        )}
  
        {!(props.user.picture5===null)&&(
          <View>
          <View className="shadow bg-white rounded-lg" style={styles.imageContainer}>
            {!(props.user.caption5==="")&&(
              <Text className="p-3 font-medium">{props.user.caption5}</Text>
            )}
            <Image source={props.user.picture5} style={styles.image} className="rounded-lg"></Image>
            {!props.givingLike && (
              <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture5)} >
                <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
              </TouchableOpacity>   
            )}
          </View>
        </View>
        )}

        {!(props.user.picture6===null)&&(
          <View>
          <View className="shadow bg-white rounded-lg" style={styles.imageContainer}>
            {!(props.user.caption6==="")&&(
              <Text className="p-3 font-medium">{props.user.caption6}</Text>
            )}
            <Image source={props.user.picture6} style={styles.image} className="rounded-lg"></Image>
            {!props.givingLike && (
              <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 right-0 shadow" onPress={()=>giveLike(props.user.picture6)} >
                <MaterialCommunityIcons name="heart-plus-outline" size={32} color="palevioletred" />
              </TouchableOpacity>   
            )}
          </View>
        </View>
        )}

      </View>
          
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    marginBottom: 1,
  },
  name: {
    margin: 10,
    marginBottom: 0,
  },
  imageContainer: {
    margin: 16,
    marginBottom: 1,
  },
  image: {
    width: "100%",
    height: 400,
  }
})