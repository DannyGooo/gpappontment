import React from 'react';
import { View, Text, Card, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import doctor from './tempData/doctor.json';


function renderDoctor(doctor, clinicId) {
    const filteredDoc = doctor.filter((el) => el.clinicId === clinicId);
    const navigation = useNavigation();
    return filteredDoc.map((el) => {
        return (
            <TouchableWithoutFeedback onPress={() => { navigation.navigate("Appointment", { "docId": el.docId }) }}>
                <View style={{ display: "flex", flexDirection: "row", margin: 10, alignContent: "stretch" }}>
                    <Image source={require('./Images/doctor.jpg')} style={{ width: 80, height: 80, borderRadius: 40 }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{fontWeight:"bold",fontSize:16}}>
                            {el.docName}
                        </Text>
                        <Text>这个医生擅长 ...</Text>
                    </View>

                </View>

            </TouchableWithoutFeedback>
        )
    })
}

export default function Doctor({ route, navigation }) {
    const { clinicId } = route.params;

    return (
        <View style={{ display: "flex", flex: 1 }}>
            <Text style={{ fontWeight: "300", fontSize: 20, margin: 10 }}>选择您信任的医生</Text>
            {renderDoctor(doctor, clinicId)}
        </View>
    );
}