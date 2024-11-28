import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { PetsItem } from './item'

export interface PetsProsps{
    id : string;
    name: string;
    image: string;
}


export function PetsVerticalList() {
    const [pets, setPets] = useState<PetsProsps[]>([])


    useEffect(() => {
        async function getTosas(){
            const response = await fetch("http://192.168.1.3:3000/pets")
            const data = await response.json()
            setPets(data);
        }
        getTosas();

    }, [])



    return (
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
            {pets.map( item => (
                <PetsItem item={item} key={item.id} />
            
            ))}
        </View>
    );
}