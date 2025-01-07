import { Text, View } from "react-native"
import { COLOR } from "./color"

export default({
    hasInfo,        // remainedTimeText ='도착 정보 없음' 일때 'true'
    remainedTimeText,   // 8분 -초, 곧 조착, 도착 정보 없음
    numOfRemainedStops, // n
    seatStatusText, // 좌석정보
}) => {
    if(!hasInfo){
        return(
            <Text style={{color: COLOR.GRAY_2}}>도착 정보 없음</Text>
        )
    }else{
        return(
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color:COLOR.BLACK, marginRight: 10,}}>{remainedTimeText}</Text>

                <View style={{borderWidth: 0.5, borderColor:COLOR.GRAY_2, borderRadius: 3, flexDirection: 'row', alignItems: 'center', padding: 2,}}>
                    <Text style={{color: COLOR.GRAY_3, marginRight: 5}}>{numOfRemainedStops}번째전</Text>
                    <Text style={{color: COLOR.CORAL}}>{seatStatusText}</Text>
                </View>
            </View>
        )
    }
}