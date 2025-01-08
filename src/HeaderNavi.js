import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLOR } from "./color";

function HederNavigationIconButton({ iconName, onPress }) {
  return (
    <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
      <SimpleLineIcons name={iconName} size={23} color={COLOR.WHITE} />
    </TouchableOpacity>
  );
}

export default () => {
    const insets = useSafeAreaInsets();

    return (
        <View>
            <View
                style={{
                    width: '100%',
                    marginTop: insets.top,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: COLOR.GRAY_3,
                }}
                >
                <HederNavigationIconButton iconName="arrow-left" onPress={() => {}} />
                <HederNavigationIconButton iconName="home" onPress={() => {}} />

            </View>

            <View style={{width:'100%', position:'absolute', backgroundColor: COLOR.GRAY_3, height:500, zIndex: -1, }}></View>
        </View>
    )
}