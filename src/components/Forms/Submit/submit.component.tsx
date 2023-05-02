import { TouchableOpacity, Text } from "react-native";
import { styled } from "nativewind";

interface Props {
  label: string;
  onSubmit: () => Promise<void>;
  loading: boolean;
};

function ButtonBase({ label, onSubmit, loading, ...rest }: Props) {
  return (
    <TouchableOpacity disabled={loading} onPress={onSubmit} className={`w-full py-3 ${loading ? 'bg-neutral-400' : 'bg-blue-500'} rounded-xl justify-center items-center`} {...rest}>
      <Text className={`font-bold text-lg ${loading ? 'text-neutral-300' : 'text-white'} text-center`}>
        {loading ? 'AGUARDE' : label.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}

export const Submit = styled(ButtonBase)