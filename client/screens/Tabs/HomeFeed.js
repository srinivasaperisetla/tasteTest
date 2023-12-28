import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import Card from "../Card"
import { BlurView } from 'expo-blur';

import { Ionicons } from '@expo/vector-icons'; 

export default function App() {

    const navigation = useNavigation();

    const user = {
      name: "Wumi",
      pronouns: "he/him",
      age: "18",
      gender: "Male",
      sexuality: "Straight",
      height: "6'0",
      race:"Nigerian",
      datingIntentions: "hit n dip",
      location: "Stockton",
      year: "1st",
      major: "Computer Science",
      drinking: "No",
      smoking: "No",
      instagram: "wumiadeoti",
      snapchat: "oadeoti21",
      tag1: "🍆 BBC",
      tag2: "🥷🏿 African",
      tag3: "🤓 Nerd",
      tag4: "⚡️ Anime",
      tag5: "🏀 Hooper",
      tag6: "🔫 EBK",
      picture1: require("../temporary/Wumi1.png"),
      caption1:"This is me holding Koolaid Jammers",
      picture2: require("../temporary/Wumi2.png"),
      caption2:"Ohgeezy concert!",
      picture3: require("../temporary/Wumi3.png"),
      caption3:"This is me drinking koolaid :)",
      picture4: require("../temporary/Wumi4.png"),
      caption4:"Diwali Night!",
      picture5: require("../temporary/Wumi5.jpg"),
      caption5:"Me and my boy Srini",
      picture6: require("../temporary/Wumi6.jpg"),
      caption6:"Goofy ass picture",
      prompt1: "The best thing about me",
      prompt1Ans: "My humongous BBC",
      prompt2: "I go crazy for",
      prompt2Ans: "snow bunnies",
      prompt3: "My greatest strength",
      prompt3Ans: "being a 6ft BBC from the hood🥷🏿 like ill really take ur bitch nigga i keep it strapped on me 24/7🥷🏿🥷🏿🔫💥🩸👿",
      prompt4: "prompt4",
      prompt4Ans: "prompt4ans",
    }

    const [givingLike, setGivingLike] = useState(false);
    const [comment, setComment] = useState("Liked your photo");
    const [likedPicture, setLikedPicture] = useState("");

    const giveLike = (pic) =>{
      setGivingLike(true);
      setLikedPicture(pic);
    }

    const cancelLike = () => {
      setGivingLike(false);
    }

    const handleComment = (comment) => {
      setComment(comment)
    }

    const handleLike = () =>{
      console.log(user.name+ " recieved a like!");
      console.log(comment);
      setGivingLike(false);
      setComment("Liked your photo");
    }

  return (
    <SafeAreaView className="flex-1 bg-sky-50">
        <View>
          <Card user={user} givingLike={givingLike} giveLike={giveLike} /*sendLike={handleLike} cancelLike={cancelLike}*//>
          {!givingLike ?(
            <TouchableOpacity className="absolute bg-white rounded-full m-3 p-2 bottom-0 left-0 shadow">
              <Ionicons name="close-sharp" size={48} color="black" />
            </TouchableOpacity>
          ):(
            <BlurView intensity={70} tint='light' className="items-center absolute justify-center w-full h-full">
              <View className="mb-32">
                <View className="flex rounded-lg " style={styles.name}>
                  <Text className="text-4xl font-semibold">{user.name}</Text>
                </View>
                <View className="shadow bg-white rounded-lg" style={styles.imageContainer}>
                  <Image source={likedPicture} style={styles.image} className="rounded-lg"/>
                </View>
                <TextInput 
                  placeholder={"Add a Comment..."}
                  onChangeText={(comment) => handleComment(comment)}
                  className="bg-white m-2 p-2 py-5 w-90 rounded-lg"
                />
                <TouchableOpacity style={{backgroundColor:"palevioletred"}} className="m-2 p-2 py-4 w-72 rounded-full justify-center items-center" onPress={handleLike}>
                  <Text> Send Like</Text>
                </TouchableOpacity>
                </View>
                <View className="bottom-0 absolute">
                <TouchableOpacity className="m-10 p-2 pb-24 rounded-lg justify-center items-center" onPress={cancelLike}>
                  <Text> Cancel</Text>  
                </TouchableOpacity>
              </View>
            </BlurView>
          )}

        </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    marginBottom: 1,
  },
  name: {
    margin: 8,
    marginBottom: 0,
  },
  imageContainer: {
    margin: 10,
    marginBottom: 1,
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: 300,
  }
})
