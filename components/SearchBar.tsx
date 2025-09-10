import React from "react";
import { icons } from "@/constants/icons";
import { View, Text, Image, TextInput, Pressable, GestureResponderEvent } from "react-native";

interface Props {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onPress?: (event: GestureResponderEvent) => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
            <Image
                source={icons.search}
                className="size-5"
                resizeMode="contain"
                tintColor="#ab8bff"
            />

            {onPress
                ? (
                    <Pressable onPress={onPress} className="flex-1 ml-2">
                        <Text className="text-white opacity-60">{placeholder}</Text>
                    </Pressable>)
                : (
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        placeholderTextColor="#A8B5AB"
                        className="flex-1 ml-2 text-white"
                    />
                )}
        </View>
    );
};

export default SearchBar;