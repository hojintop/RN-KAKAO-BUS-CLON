import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLOR } from "./color";

function HederNavigationIconButton({ iconName, onPress, NEWCOLOR }) {
  return (
    <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
      <SimpleLineIcons name={iconName} size={23} color={NEWCOLOR.WHITE_BLACK} />
    </TouchableOpacity>
  );
}

export default ({NEWCOLOR,}) => {
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
                <HederNavigationIconButton iconName="arrow-left" onPress={() => {}} NEWCOLOR={NEWCOLOR} />
                <HederNavigationIconButton iconName="home" onPress={() => {}} NEWCOLOR={NEWCOLOR} />

            </View>

            <View style={{width:'100%', position:'absolute', backgroundColor: COLOR.GRAY_3, height:500, zIndex: -1, }}></View>
        </View>
    )
}