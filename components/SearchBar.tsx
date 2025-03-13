import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <TouchableOpacity onPress={onPress}>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
            tintColor="#1E6A33"
          />
        </TouchableOpacity>

        <TextInput
          onPress={onPress}
          placeholder={placeholder}
          className="flex-1 ml-2 text-white"
          placeholderTextColor="#1E6A33"
          keyboardType="default"
          autoFocus={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
