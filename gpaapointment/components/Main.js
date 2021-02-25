import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './Home';
import ClinicInfo from './ClinicInfo';
import Account from './Account';
import Doctor from './Doctor';
import Appointment from './Appointment';
import Login from './Login';
import Signup from './Signup';

const Stack = createStackNavigator();

//declare the stack navigators
function MyStackHome() {
    return (
        <Stack.Navigator
            initialRouteName={"主页"}
            screenOptions={{ headerStyle: { backgroundColor: "#2E86C1" } }}
        >
            <Stack.Screen
                name="主页"
                component={Home}
                options={{
                    title: '主页',
                    headerTintColor: '#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    title:"登陆",
                    headerTintColor:'#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="signup"
                component={Signup}
                options={{
                    title:"注册",
                    headerTintColor:'#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>
    );
}
function MyStackClinicInfo() {
    return (
        <Stack.Navigator
            initialRouteName={"ClinicInfo"}
            screenOptions={{ headerStyle: { backgroundColor: "#2E86C1" } }}
        >
            <Stack.Screen
                name="ClinicInfo"
                component={ClinicInfo}
                options={{
                    title: '诊所',
                    headerTintColor: '#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
             <Stack.Screen
                name="Doctor"
                component={Doctor}
                options={{
                    title: '医生',
                    headerTintColor: '#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
             <Stack.Screen
                name="Appointment"
                component={Appointment}
                options={{
                    title: '预约',
                    headerTintColor: '#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>
    );
}

function MyStackAccount() {
    return (
        <Stack.Navigator
            initialRouteName={"Account "}
            screenOptions={{ headerStyle: { backgroundColor: "#2E86C1" } }}
        >
            <Stack.Screen
                name="Account "
                component={Account}
                options={{
                    title: '账户',
                    headerTintColor: '#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    title:"登陆",
                    headerTintColor:'#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
            <Stack.Screen
                name="signup"
                component={Signup}
                options={{
                    title:"注册",
                    headerTintColor:'#FDFEFE',
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>
    );
}


//declare the tab navigators
const Tab = createBottomTabNavigator();
//declare tab bars
function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row',paddingVertical:12 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };



                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={{ flex: 1 }}
                        key={route.key}
                    >
                        <Icon style={{color: isFocused ? '#673ab7' : '#222', alignSelf:"center"}} name={index==0?"home":index==1?"activity":"github"}></Icon>
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' , alignSelf:"center"}}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
export default function Main() {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="主页" component={MyStackHome} />
            <Tab.Screen name="诊所" component={MyStackClinicInfo} />
            <Tab.Screen name="账户" component={MyStackAccount} />
        </Tab.Navigator>
    );
}