import React from 'react';
import { View, Text,TouchableNativeFeedback } from 'react-native';
import { ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export default function Account() {
    const navigation = useNavigation();
    return (
        <View style={{ display: "flex", flex: 1 ,marginVertical:10}}>
            <TouchableNativeFeedback onPress={()=>{navigation.navigate('signup')}}>
            <ListItem bottomDivider >
              
                <ListItem.Content>
                    <ListItem.Title >注册</ListItem.Title>
                    <ListItem.Subtitle>如果您没有账户请先点击注册一个吧</ListItem.Subtitle>
                </ListItem.Content>
                
                <ListItem.Chevron />
               
            </ListItem>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{navigation.navigate('login')}}>
            <ListItem bottomDivider >
                <ListItem.Content>
                    <ListItem.Title>登陆</ListItem.Title>
                    <ListItem.Subtitle>如果您已经注册了，请点击登陆你的账户吧</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            </TouchableNativeFeedback>
            <Text style={{margin:20}}>设置</Text>
            <TouchableNativeFeedback onPress={()=>{}}>
            <ListItem bottomDivider >
                <ListItem.Content>
                    <ListItem.Title>购买VIP</ListItem.Title>
                    <ListItem.Subtitle>购买VIP享用更多服务</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{}}>
            <ListItem bottomDivider >
                <ListItem.Content>
                    <ListItem.Title>隐私</ListItem.Title>
                    <ListItem.Subtitle>更改您的账户设置</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            </TouchableNativeFeedback>
            <Text style={{margin:20}}>预约记录</Text>
            <TouchableNativeFeedback onPress={()=>{}}>

            <ListItem bottomDivider >
                <ListItem.Content>
                    <ListItem.Title>查阅您预约的诊所</ListItem.Title>
                    <ListItem.Subtitle>点击以查阅您的预约记录</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            </TouchableNativeFeedback>
           
        </View>
    );
}