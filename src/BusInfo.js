import { Text, View } from "react-native"
import BookmarkButton from "./BookmarkButton"
import { COLOR } from "./color"
import NextBusInfo from "./NextBusInfo"
import AlarmButton from "./AlarmButton"

export default({
    directionDescription,
    num,
    numColor,
    onPressBookmark,
    isBookmarked,
    processedNextBusInfos,
}) => {

    return(
        <View style={{flexDirection: 'row', height: 70, backgroundColor: COLOR.WHITE,}}>
            <View style={{flex: 0.9, flexDirection: 'row', alignItems: 'center',}}>
                {/* 북마크 */}
                <BookmarkButton
                isBookmarkedProd={isBookmarked}
                style={{paddingHorizontal: 10}}
                onPressBookmark={onPressBookmark}
                />

                {/* 버스번호, 방향 */}
                <View style={{flex: 1, }}>
                    <Text style={{color: numColor , fontSize: 20, fontWeight: 'bold'}}>{num}</Text>
                    <Text style={{fontSize: 14, color: COLOR.GRAY_3, marginRight: 2}}>{directionDescription} 방향</Text>
                </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1,}}>
                {
                    processedNextBusInfos.map((info, idx) => (
                        <NextBusInfo
                            key={`next-bus-info-${idx}`}
                            hasInfo={info.hasInfo}
                            remainedTimeText={info.remainedTimeText}
                            numOfRemainedStops={info.numOfRemainedStops}
                            seatStatusText={info.seatStatusText}
                        />
                    ))
                }
                </View>

                <AlarmButton 
                    style={{paddingHorizontal: 20}}
                />
            </View>
        </View>
    )
}