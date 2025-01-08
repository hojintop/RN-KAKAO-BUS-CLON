import { StatusBar } from "expo-status-bar";
import { RefreshControl, SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BusInfo from "./src/BusInfo";
import { COLOR } from "./src/color";
import {
  busStop,
  getBusNumColorByType,
  getRemainedTimeText,
  getSeatStatusText,
  getSections,
} from "./src/data";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import HeaderBusInfo from "./src/HeaderBusInfo";
import Margin from "./src/Margin";
import HeaderNavi from "./src/HeaderNavi";

export default function App() {
  const sections = getSections(busStop.buses);
  const [now, setNow] = useState(dayjs());
  const [isRefreshing, setIsRefreshing] = useState();

  function renderItem({ item }) {
    const firstNextBusInfo = item.nextBusInfos?.[0] ?? null;
    const secondNextBusInfo = item.nextBusInfos?.[1] ?? null;
    let newNextBusInfos = [];
    if (!firstNextBusInfo && !firstNextBusInfo) {
      newNextBusInfos = [null];
    } else {
      newNextBusInfos = [firstNextBusInfo, secondNextBusInfo];
    }
    
    const processedNextBusInfos = newNextBusInfos.map((info) => {
      if (!info) {
        return {
          hasInfo: false,
        };
      }

      const { arrivalTime, numOfRemainedStops, numOfPassengers } = info;
      const remainedTimeText = getRemainedTimeText(dayjs(), arrivalTime);
      const seatStatusText = getSeatStatusText(item.type, numOfPassengers);

      return {
        hasInfo: true,
        remainedTimeText,
        numOfRemainedStops,
        seatStatusText,
      };
    });

    return (
      <BusInfo
        directionDescription={item.directionDescription}
        num={item.num}
        numColor={getBusNumColorByType(item.type)}
        onPressBookmark={() => {}}
        isBookmarked={item.isBookmarked}
        processedNextBusInfos={processedNextBusInfos}
      />
    );
  }

  function ListHeaderComponent(){
    return(
      <HeaderBusInfo />
    )
  }

  function renderSectionHeader({ section: { title } }) {
    return (
      <View
        style={{
          backgroundColor: COLOR.GRAY_1,
          paddingLeft: 13,
          paddingVertical: 4,
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          borderTopColor: COLOR.GRAY_2,
          borderBottomColor: COLOR.GRAY_2,
        }}
      >
        <Text style={{ fontSize: 14, color: COLOR.GRAY_4 }}>{title}</Text>
      </View>
    );
  }

  function ItemSeparatorComponent(){
    return(
      <View style={{width: '100%', height: 1, backgroundColor: COLOR.GRAY_1}}/>
    );

  }

  function ListFooterComponent(){
    return(
      <Margin height={30} />
    );
  }

  function onRefresh(){
    setIsRefreshing(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if(isRefreshing){
      setNow(dayjs());
      setIsRefreshing(false);  
    }
    // setTimeout(() => {
    //   setIsRefreshing(false);  
    // }, 2000);
    
  },[isRefreshing])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <HeaderNavi />
        <SectionList
          style={{ flex: 1, width: "100%",}}
          sections={sections}
          ListHeaderComponent={ListHeaderComponent}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListFooterComponent={ListFooterComponent}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
