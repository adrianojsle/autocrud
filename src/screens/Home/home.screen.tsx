import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
    const items = [{ emoction: '😀', name: 'Clientes', total: 0 }, { emoction: '👨‍💻', name: 'Projetos', total: 0 }, { emoction: '💵', name: 'Financeiro', total: 0 }, { emoction: '🧆', name: 'Cardápio', total: 0 }, { emoction: '🛍', name: 'Compras', total: 0 }, { emoction: '🧠', name: 'Estudos', total: 0 }, { emoction: '🛣', name: 'Viagens', total: 0 }, { emoction: '🎯', name: 'Metas', total: 0 }, { emoction: '💸', name: 'Dívidas', total: 0 }, { emoction: '📚', name: 'Livros', total: 0 }];

    return <SafeAreaView className="flex-1 bg-slate-950 pt-28 px-5">
        <Title />
        <View className="flex-row flex-wrap mt-5">
            {
                items.map((item, index) => {
                    return <Card name={item.name} emoction={item.emoction} spaceRight={index % 2 == 0 ? true : false} total={item.total} />
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

function Card({ spaceRight, name, emoction, total }: { spaceRight: boolean; name: string; emoction: string; total: number }) {
    return <View className={`py-2 w-1/2 ${spaceRight ? 'pr-4' : ''}`}><View className="w-full bg-slate-800 p-4 rounded-xl">
        <Text className="text-2xl">
            {emoction}
        </Text>
        <Text className="text-white font-bold text-lg mt-2">
            {name}
        </Text>
        <Text className="text-blue-400 font-bold text-sm">{total} registros</Text>
    </View></View>
}
