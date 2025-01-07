import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

import { COLOR } from "./color";
import { busStop } from "./data";
import Margin from "./Margin";
import BookmarkButton from "./BookmarkButton";

export default() => {
    const insets = useSafeAreaInsets();

    return(
        <View style={{ width: '100%',backgroundColor: COLOR.GRAY_3, }} >
            <View style={{marginTop: insets.top, flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity style={{padding: 10}}>
                    <SimpleLineIcons name="arrow-left" size={23} color={COLOR.WHITE} />
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}}>
                    <SimpleLineIcons name="home" size={23} color={COLOR.WHITE} />
                </TouchableOpacity>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Margin height={5}/>
                <Text style={{color: COLOR.WHITE, fontSize: 15}}>{busStop.id}</Text>
                <Margin height={5}/>
                <Text style={{color: COLOR.WHITE, fontSize: 20}}>{busStop.name}</Text>
                <Margin height={5}/>
                <Text style={{color: COLOR.GRAY_2, fontSize: 15}}>{busStop.directionDescription} 방면</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center', padding:30}}>
                <View style={{borderWidth:0.5, borderColor: COLOR.GRAY_2, flexDirection: 'row', justifyContent:'center', alignItems:'center', padding: '6', paddingHorizontal: 20, borderRadius: 30, marginRight: 15}}>
                    <Fontisto name="metro" size={24} color={COLOR.WHITE} />
                    <Text style={{marginLeft: 5, color: COLOR.WHITE, fontSize: 15,}}>지하철</Text>
                </View>

                <View style={{borderWidth:0.5, borderColor: COLOR.GRAY_2, flexDirection: 'row', justifyContent:'center', alignItems:'center', padding: '6', paddingHorizontal: 20, borderRadius: 30, marginRight: 15}}>
                    <SimpleLineIcons name="map" size={24} color={COLOR.WHITE} />
                    <Text style={{marginLeft: 5, color: COLOR.WHITE, fontSize: 15}}>지도</Text>
                </View>

                <View style={{borderWidth:0.5,borderColor: COLOR.GRAY_2 , padding: 6, borderRadius: 20}}>
                    <BookmarkButton 
                        isBookmarked={true}
                    />
                </View>
            </View>
        </View>
    )
}