import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Dimensions } from "react-native";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  const { width } = Dimensions.get("window");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        className="flex-row items-center bg-light-200 rounded-full py-1 px-5"
        style={{
          width: width * 0.9,
          height: 50,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
            tintColor="#FFFFFF"
          />
        </TouchableOpacity>

        <TextInput
          onPress={onPress}
          placeholder={placeholder}
          className="flex-1 ml-3 text-white text-base"
          placeholderTextColor="#FFFFFF"
          keyboardType="default"
          autoFocus={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
