import { Switch, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";

import { COLOR } from "./color";
import { busStop } from "./data";
import Margin from "./Margin";
import BookmarkButton from "./BookmarkButton";

function HederBottomIconButton({ iconName, title, onPress, NEWCOLOR }) {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 0.5,
        borderColor: COLOR.GRAY_2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginRight: 15,
      }}
      onPress={onPress}
    >
      <Fontisto name={iconName} size={22} color={NEWCOLOR.WHITE_BLACK} />
      <Text
        style={{ marginLeft: 5, color: NEWCOLOR.WHITE_BLACK, fontSize: 15 }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default ({ NEWCOLOR, isDark, toggleIsDark }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ width: "100%", backgroundColor: COLOR.GRAY_3 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Margin height={5} />
        <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 15 }}>
          {busStop.id}
        </Text>
        <Margin height={5} />
        <Text style={{ color: NEWCOLOR.WHITE_BLACK, fontSize: 20 }}>
          {busStop.name}
        </Text>
        <Margin height={5} />
        <Text style={{ color: NEWCOLOR.GRAY_1_GRAY_4, fontSize: 15 }}>
          {busStop.directionDescription} 방면
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 25,
        }}
      >
        <HederBottomIconButton
          iconName="metro"
          title="지하철"
          onPress={() => {}}
          NEWCOLOR={NEWCOLOR}
        />
        <HederBottomIconButton
          iconName="map"
          title="지도"
          onPress={() => {}}
          NEWCOLOR={NEWCOLOR}
        />

        <BookmarkButton
          isBookmarkedProd={busStop.isBookmarked}
          style={{
            borderWidth: 0.5,
            borderColor: NEWCOLOR.GRAY_2_GRAY_3,
            padding: 6,
            borderRadius: 36 / 2,
          }}
          onPressBookmark={() => {}}
        />

      </View>

      <View style={{width: '100%', justifyContent: 'center', alignItems: 'center',}}>
            <Switch value={isDark} onValueChange={(v) => {
              toggleIsDark();
            }}
              />

      </View>
      <Margin height={10} />
    </View>
  );
};
