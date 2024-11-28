import { FlatList, Text, View } from "react-native";
import { useEffect, useState} from 'react'
import { PetsItem } from './horizontal'

export interface PetsProsps{
    id : string;
    name: string;
    image: string;
}


export function Pets() {
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
        <FlatList
        
            data={pets}
            renderItem={ ({ item }) => <PetsItem item={item}/> }
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        
        
        />
    );
}