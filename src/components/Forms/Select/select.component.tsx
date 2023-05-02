import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { variables } from "../../../config/variables";
import { ISelect } from "../../../interfaces/select.interface";

export default function Select({
  options = [],
  onChange,
  initialSelect = [],
  title,
  max = 999,
  error,
  reset = false
}: {
  options: ISelect[];
  onChange: (e: ISelect[]) => void;
  initialSelect?: ISelect[];
  title: string;
  max: number;
  error?: any;
  reset?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const [originalOptions, setOriginalOptions] = useState<ISelect[]>([]);
  const [data, setData] = useState<ISelect[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([...initialSelect]);

  useEffect(() => {
    if (reset) {
      setSelected([])
    }
  }, [reset])

  useEffect(() => {
    setOriginalOptions(options);
    setData(options);
  }, [options]);

  useEffect(() => {
    let arr: ISelect[] = originalOptions;
    if (arr.length > 0) {
      setData(
        arr.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
  }, [search]);

  const toggleSelection = (item: ISelect) => {
    let index = selected.findIndex((i) => i?.id === item?.id);
    let arrSelected = [...selected];
    if (index !== -1) {
      arrSelected.splice(index, 1);
    } else {
      if (arrSelected.length < max) {
        arrSelected.push(item);
      } else {
        if (max === 1) {
          arrSelected = [item];
        }
      }
    }
    setSelected(arrSelected);
  };

  const renderItem = ({ item }: { item: ISelect }) => (
    <TouchableOpacity
      onPress={() => toggleSelection(item)}
      className={`${selected?.findIndex((i) => i.id === item.id) !== -1
          ? "bg-blue-500"
          : "bg-white"
        } py-3 px-9 border-b border-b-blue-300`}
    >
      <Text
        className={`${selected?.findIndex((i) => i.id === item.id) !== -1
            ? "text-white font-bold"
            : "text-black"
          } `}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingBottom: 10, marginBottom: 9 }}>
      <Text className="text-xs">{title}</Text>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className={`${error?.message ? "border-red-500" : "border-gray-300"
          } flex flex-row justify-between items-center border-b-2 bg-white h-10`}
      >
        <Text className={`text-neutral-400`} numberOfLines={1}>
          {selected.length > 0
            ? selected.map(
              (p) => `${p.name + (selected.length > 1 ? "," : "")} `
            )
            : 'Selecione...'}
        </Text>
        <Text className="pr-2 font-bold text-lg">+</Text>
      </TouchableOpacity>
      {error?.message && (
        <Text className="text-red-600 font-bold text-xs mt-1 ml-2">
          {error.message}
        </Text>
      )}

      <Modal
        onRequestClose={() => setVisible(false)}
        visible={visible}
        animationType={"slide"}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ backgroundColor: "#fff", padding: 12 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text
                  style={{
                    fontSize: 14,
                    color: variables.colors.background,
                    fontWeight: "500",
                  }}
                >
                  Voltar
                </Text>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#777",
                    textAlign: "center",
                  }}
                >
                  {title}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "500",
                    color: "#444",
                    textAlign: "center",
                  }}
                >{`Selecione ${max > 1 ? "várias opções" : "uma opção"}`}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  onChange(selected);
                  setVisible(false);
                  setSearch("");
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: variables.colors.background,
                    fontWeight: "500",
                  }}
                >
                  Concluir
                </Text>
              </TouchableOpacity>
            </View>
            {originalOptions.length > 10 ? (
              <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Pesquisar"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 4,
                  paddingHorizontal: 10,
                  height: 35,
                  marginTop: 7,
                }}
              />
            ) : null}
          </View>
          <FlatList data={data} renderItem={renderItem} />
        </SafeAreaView>
      </Modal>
    </View>
  );
}