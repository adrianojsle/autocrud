import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { FolderInterface } from "../../interfaces/folder.interface";

export default function HomeScreen() {
    // Dados fakes temporários
    const items = [{ emoction: '😀', name: 'Clientes', total: 0 }, { emoction: '👨‍💻', name: 'Projetos', total: 0 }, { emoction: '💵', name: 'Financeiro', total: 0 }, { emoction: '🧆', name: 'Cardápio', total: 0 }, { emoction: '🛍', name: 'Compras', total: 0 }, { emoction: '🧠', name: 'Estudos', total: 0 }, { emoction: '🛣', name: 'Viagens', total: 0 }, { emoction: '🎯', name: 'Metas', total: 0 }, { emoction: '💸', name: 'Dívidas', total: 0 }, { emoction: '📚', name: 'Livros', total: 0 }];

    const nav = useNavigation();

    const handleRouteFolder = (folder: FolderInterface) => {
        nav.navigate('Folder', folder);
    }

    return <SafeAreaView className="flex-1 bg-slate-950 pt-28 px-5">
        <Title />
        <View className="flex-row flex-wrap mt-5">
            {/* FlashList quando implementar o banco */}
            {
                items.map((item, index) => {
                    return <Card spaceRight={index % 2 == 0 ? true : false} folder={item} onPress={handleRouteFolder} />
                })
            }
        </View>
    </SafeAreaView>
}

function Title() {
    return <View className="flex-row items-center"><View className="flex-grow">
        <Text className="text-white font-bold text-2xl">Minhas pastas</Text>
        <Text className="text-white font-bold text-sky-50 text-sm mt-1">Informações que deseja gerenciar</Text>
    </View>
        <TouchableOpacity className="p-2 bg-slate-800 h-14 w-14 rounded-lg border border-white justify-center items-center">
            <Text className="text-white text-4xl">+</Text>
        </TouchableOpacity>
    </View>
}

function Card({ spaceRight, folder, onPress }: { spaceRight: boolean; folder: FolderInterface; onPress: (folder: FolderInterface) => void; }) {
    return <TouchableOpacity onPress={() => onPress(folder)} className={`py-2 w-1/2 ${spaceRight ? 'pr-4' : ''}`}>
        <View className="w-full bg-slate-800 p-4 rounded-xl">
            <Text className="text-2xl">
                {folder.emoction}
            </Text>
            <Text className="text-white font-bold text-lg mt-2">
                {folder.name}
            </Text>
            <Text className="text-blue-400 font-bold text-sm">{folder.total} registros</Text>
        </View>
    </TouchableOpacity>
}
