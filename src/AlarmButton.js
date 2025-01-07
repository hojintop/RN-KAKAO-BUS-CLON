import { TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLOR } from "./color";

export default({
    style,
}) => {
    return(
        <TouchableOpacity onPress={() => {}} style={style}>
            <Ionicons name="alarm-outline" size={24} color={COLOR.GRAY_3} />
        </TouchableOpacity>
    )
}