import { View, Pressable, Text, Image } from "react-native";
import  Ionicons from '@expo/vector-icons/Ionicons'

import { TosaProps } from '..'

export function CardHorizontalTosa({ tosa }: { tosa: TosaProps}) {
    return (
        <Pressable className='flex flex-col rounded-xl relative'>
            <Image
                source={{ uri: tosa.image }}
                className="w-44 h-36 rounded-xl"
            />

            <View className="flex flex-row bg-neutral-900/90  gap-1 
            rounded-full absolute top-2 right-3 px-2 py-1 items-center
            justify-center ">
                <Ionicons name="heart-half-outline" size={14} color="#dc2626" />
                

            </View>

            <Text className="text-red-900 font-medium text-lg"> {tosa.price} </Text>
            <Text className="text-black mt-1"> {tosa.name} </Text>
            <Text className="text-neutral-600 text-sm "> {tosa.time} - {tosa.delivery} </Text>
        </Pressable>
    );
}