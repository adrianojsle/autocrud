import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ButtonBack() {
    const nav = useNavigation();

    const handleRouteBack = () => {
        nav.goBack();
    }

    return <TouchableOpacity onPress={handleRouteBack} className="px-5 pb-5 pt-3">
        <AntDesign name="arrowleft" size={30} color="white" />
    </TouchableOpacity>
}