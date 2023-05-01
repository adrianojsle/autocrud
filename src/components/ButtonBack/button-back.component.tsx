import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function ButtonBack() {
    return <TouchableOpacity className="px-5 pb-5 pt-3">
        <AntDesign name="arrowleft" size={30} color="white" />
    </TouchableOpacity>
}