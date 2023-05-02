import { View, TextInput, TextInputProps, Text } from "react-native";
import { styled } from "nativewind";
import { Controller, FieldError } from "react-hook-form";
import MaskInput, { Mask } from "react-native-mask-input";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface Props extends TextInputProps {
  placeholder: string;
  icon?: any;
  control: any;
  name: string;
  error: any;
  mask?: Mask;
}

const InputBase: ForwardRefRenderFunction<TextInput, Props> = (
  { name, placeholder, icon, control, error, mask, ...rest },
  ref
) => {
  const style = "w-full bg-white flex flex-row justify-between border-b-2" + (error ? 'border-red-600 mb-1' : ' border-gray-300 mb-5');
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <View className="flex flex-col w-full">
            <Text className="text-xs">{placeholder}</Text>
            <View>
              {mask ? (
                <MaskInput className={style}
                  mask={mask}
                  ref={ref}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  {...rest}
                />
              ) : (
                <TextInput className={style}
                  ref={ref}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  {...rest}
                />
              )}
            </View>
            {error && (
              <Text className="text-red-600 font-bold text-xs mb-3 ml-2">
                {error.message}
              </Text>
            )}
          </View>
        );
      }}
      name={name}
    />
  );
};

export const Input = styled(forwardRef(InputBase));
