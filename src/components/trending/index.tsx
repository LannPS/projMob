import { useState, useEffect } from 'react'
import { FlatList } from "react-native";
import { CardHorizontalTosa } from './tosa';



export interface TosaProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    petsId: string;
}

export function TrendingTosas() {
    const [ tosas, setTosas] = useState<TosaProps[]>([])

    useEffect(() => {
        async function getTosas(){
            const response = await fetch("http://192.168.1.3:3000/tosas")
            const data = await response.json()
            setTosas(data);
        }
        getTosas();

    }, [])

    return (
        <FlatList
        
            data={tosas}
            renderItem={ ({ item }) => <CardHorizontalTosa tosa={item}/> }
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        
        
        />
    );
}