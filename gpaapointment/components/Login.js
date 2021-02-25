import React, { useState } from 'react';
import {View,Text} from 'react-native';
import DatePicker from 'react-native-date-picker'
import { color } from 'react-native-reanimated';
import { Button,Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    
    const navigation = useNavigation();
    return(
        <View style={{display:"flex",flex:1, alignItems:"center"}}>
          <View style={{margin:15}}></View>
            {/*<Text>{docId}</Text>*/}
            <Input
            label="用户名"
            ></Input>
            <View style={{margin:15}}></View>
            <Input
            label="密码"></Input>

            <Button title="登陆" onPress={()=>{navigation.navigate("主页")}}></Button>
           
        </View>
    );
}