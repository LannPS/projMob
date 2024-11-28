import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";


import Constants  from 'expo-constants'
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingTosas } from "../components/trending";
import { Pets } from "../components/pets";
import { PetsVerticalList} from '../components/list'

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1}} 
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Header/>

        <Banner/>

        <Search/>
      </View>

      <Section
        name="Pet's para Adoção"
        label="Veja mais"
        action={ () => console.log("CLICOU NO VEJA MAIS")}
        size="text-2xl"
        
        
      />
      

      <TrendingTosas/>

      <Section
        name="PetsShop's recomendados"
        label="Veja todos"
        action={ () => console.log("CLICOU NOS DESTAQUES")}
        size="text-xl"
      />

      <Pets/>

      <Section
        name="PetsShop's "
        label="Veja todos"
        action={ () => console.log("CLICOU NOS PETSHOPS")}
        size="text-xl"
      />

      <PetsVerticalList/>
      
    </ScrollView>
  );
}
