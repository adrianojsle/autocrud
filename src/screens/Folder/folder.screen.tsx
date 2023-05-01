import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import ButtonBack from "../../components/ButtonBack/button-back.component";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function FolderScreen() {
    return <SafeAreaView className="flex-1 bg-slate-800 pt-14">
        <ButtonBack />
        <Title />
        <View className="w-full bg-slate-950 h-full p-5 mt-7 rounded-tr-3xl rounded-tl-3xl">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </View>
    </SafeAreaView>
}

function Title() {
    return <View className="flex-row items-center px-5">
        <View className="justify-center items-center">
            <Text className="text-4xl mt-1 mr-3">😀</Text>
        </View>
        <View className="flex-grow">
            <Text className="text-white font-bold text-2xl">Clientes</Text>
            <Text className="text-white font-bold text-sky-100 text-sm">3 registros</Text>
        </View>
        <Buttons />
    </View>
}

function Item() {
    return <View className="py-3 flex-row justify-between border-b border-gray-600">
        <View>
            <Text className="text-white text-lg">Adriano Santos Leite</Text>
            <View className="flex-row mt-1">
                <MaterialIcons name="calendar-today" size={14} color="white" />
                <Text className="text-white text-xs ml-2">01 de Maio de 2023</Text>
            </View>
        </View>
        <View className="pl-3 flex-row items-center gap-3">
            <TouchableOpacity className="h-5 w-5 justify-center items-center">
                <AntDesign name="edit" size={15} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="h-5 w-5 justify-center items-center">
                <Octicons name="trash" size={14} color="white" />
            </TouchableOpacity>
        </View>
    </View>
}

function Buttons() {
    return <View className="pl-3 flex-row items-center gap-3">
        <TouchableOpacity className="h-10 w-10 rounded-full border border-white justify-center items-center">
            <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="h-10 w-10 rounded-full border border-white justify-center items-center">
            <AntDesign name="database" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="h-10 w-10 rounded-full border border-white justify-center items-center">
            <Octicons name="trash" size={22} color="white" />
        </TouchableOpacity>
    </View>
}