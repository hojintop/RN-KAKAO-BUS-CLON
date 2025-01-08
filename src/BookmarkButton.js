import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { COLOR } from "./color";

function useBookmark(initIsBookmarked){
    const [isBookmarked, setIsBookmarked] = useState(initIsBookmarked);
    const toggleIsBookmarked = () => setIsBookmarked(!isBookmarked);

    return{
        isBookmarked,
        toggleIsBookmarked,
    }
}

export default ({ isBookmarkedProd, onPressBookmark, style }) => {
  const {isBookmarked,toggleIsBookmarked,} = useBookmark(isBookmarkedProd);

  return (
    <TouchableOpacity
      onPress={() => {
        toggleIsBookmarked();
        onPressBookmark();
      }}
      style={style}
    >
      <Ionicons
        name="star"
        size={24}
        color={isBookmarked ? COLOR.YELLOW : COLOR.GRAY_1}
      />
    </TouchableOpacity>
  );
};
