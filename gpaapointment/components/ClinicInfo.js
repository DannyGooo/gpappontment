import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import clinics from './tempData/clinic.json';

function renderClinic(clinics) {
    const navigation = useNavigation();
    return clinics.map((clinic) => {
        return (
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Doctor', { clinicId: clinic.clinicId }) }}>
                <View style={{ display: "flex", flexDirection: "row", margin: 10,alignContent:"stretch" }}>
                    <Image source={require('./Images/clinic.jpg')} style={{ width: 80, height: 80 }} />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontWeight:"bold",fontSize:16}}>{clinic.clinicName}</Text>
                        <Text>这是一个 ... 诊所</Text>
                        <View style={{ display: "flex", flexDirection: "row"}}>
                        <Text style={{fontWeight:"bold"}}>地址 : </Text>
                        <Text>这个诊所位于 .... ,VIC</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        )
    });
}

export default function ClinicInfo() {

    return (
        <View style={{ display: "flex", flex: 1 }}>
            <Text style={{ fontWeight: "300", fontSize: 20, margin: 10 }}>请选择一个诊所</Text>
            {renderClinic(clinics)}
        </View>
    );
}