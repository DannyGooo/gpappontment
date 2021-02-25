import React, { useState } from 'react';
import {View,Text} from 'react-native';
import DatePicker from 'react-native-date-picker'
import { color } from 'react-native-reanimated';
import { Button } from 'react-native-elements';



export default function Appointment({route,navigation}) {
    const {docId}=route.params;
    const [date, setDate] = useState(new Date());
    const [time,setTime]=useState(0);

    return(
        <View style={{display:"flex",flex:1, alignItems:"center"}}>
            <Text style={{fontWeight:"300",fontSize:20, margin:10}}>选择您打算就医的日期</Text>
            {/*<Text>{docId}</Text>*/}
            <View style={{ marginLeft: 20 }}>
            <DatePicker date={date}
            mode="date"
            fadeToColor={color,"White"}
            style={{marginVertical:20}}/>
            </View>
            <Text style={{fontWeight:"300",fontSize:20, margin:10}}>请选择您打算就诊的时间</Text>
            <View style={{display:"flex",flexDirection:"row",alignSelf:"stretch", marginHorizontal:50}}>
                <Text style={{flex:1,textAlign:"center",backgroundColor:time===1?"grey":"white",margin:5,borderRadius:10}}
                onPress={()=>{setTime(1)}}>9:00 - 10:00</Text>
                <Text style={{flex:1,textAlign:"center",backgroundColor:time===2?"grey":"white",margin:5,borderRadius:10}}
                onPress={()=>{setTime(2)}}>10:00 - 11:00</Text>
                <Text style={{flex:1,textAlign:"center",backgroundColor:time===3?"grey":"white",margin:5,borderRadius:10}}
                onPress={()=>{setTime(3)}}>13:00 - 14:00</Text>
            </View>
            <Button title="确认" containerStyle={{margin:70}}></Button>
            
        </View>
    );
}