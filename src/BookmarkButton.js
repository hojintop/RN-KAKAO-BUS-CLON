import { TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLOR } from "./color";

export default({
    isBookmarked,
    onPressBookmark,
    style,
}) => {
    return(
        <TouchableOpacity onPress={onPressBookmark} style={style}>
            <Ionicons name="star" size={24} color={isBookmarked ? COLOR.YELLOW : COLOR.GRAY_1} />
        </TouchableOpacity>
    )
}