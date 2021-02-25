import React from 'react';
import { View, Text, Image  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button, Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <View style={{ marginTop: 20, alignSelf: "stretch", display: "flex", alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>欢迎使用如约</Text>
                <Icon style={{ color: '#F4D03F', marginTop: 20, fontSize: 40 }} name="smile-circle" />
                <Text
                    style={{ marginHorizontal: 80, textAlign: "center", marginVertical: 20 }}>如需预约就诊，请先登陆注册
                </Text>
                <Button title="注册" onPress={()=>{navigation.navigate('signup')}}></Button>
                <Button title="登陆" containerStyle={{ margin: 10 }} type="outline" onPress={()=>{navigation.navigate('login')}}></Button>
                <Card>
                    <Card.Title>咨讯</Card.Title>
                    <Card.Divider />
                    <Image source={require('./Images/news.jpg')} style={{alignSelf:"center",width:320}}/>
                    <Text style={{ margin: 5,alignSelf:"center" }}>
                        花粉病迎来重大突破 ... ?
                    </Text>
                   
                </Card>
            </View>
        </View>
    );
}