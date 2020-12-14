/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import CustomIcon from './src/styles/CustomIcon';

import {
    StyleSheet, View,
} from 'react-native';

import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import {ExitIcons} from './assets/';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Image from 'react-native-remote-svg'

import * as Screen from './src/screens';


const screenStack = {
    HomeScreen: Screen.HomeScreen,
    BooksScreen: Screen.BooksScreen,
    StatsScreen: Screen.StatsScreen,
    OtherScreen: Screen.OtherScreen,
};


import Svg, {G, Path} from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

const ExitIcons=()=>{
    return(
        <Svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 7V4C19 2.34315 17.6569 1 16 1H4C2.34315 1 1 2.34315 1 4V21V22C1 23.6569 2.34315 25 4 25H16C17.6569 25 19 23.6569 19 22V19"
                stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M15.5119 9.74334L19 13.0886L15.5119 16.4338" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M18.7505 13.0506H10.1862" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </Svg>
    )
}
import MySVGImage from './assets/icons/exit.svg';
const Tab = createBottomTabNavigator();

const perfectSize = create(PREDEF_RES.iphoneX.px);



const App = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'rgb(255, 45, 85)',
            background:"white"
        },
    };

    return (
        <NavigationContainer theme={MyTheme}>

                        <Tab.Navigator
                            screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;

                                    if (route.name === 'Home') {
                                        iconName = focused
                                            ? 'home-filled'
                                            : 'home-filled';
                                        return <MaterialIcons name={'home-filled'} size={30} color={focused?"#007AFF":'#A1A1A1'}/>
                                    } else if(route.name === 'Books') {
                                        iconName = focused ? 'ios-layers' : 'ios-layers';
                                    } else if(route.name === 'Stats') {
                                        iconName = focused ? 'stats-chart' : 'stats-chart';
                                    }else{
                                        iconName = focused ? 'grid' : 'grid';
                                    }

                                    // You can return any component that you like here!
                                    return <Icon name={iconName} size={24} color={'#A1A1A1'}/>
                                }
                            })}
                        >
                            <Tab.Screen name="Home" component={screenStack.HomeScreen} />
                            <Tab.Screen name="Books" component={screenStack.BooksScreen} />
                            <Tab.Screen name="Stats" component={screenStack.StatsScreen} />
                            <Tab.Screen name="Other" component={screenStack.OtherScreen} />
                        </Tab.Navigator>

        </NavigationContainer>

        // <>
        //     <StatusBar barStyle="dark-content"/>
        //     <SafeAreaView>
        //         <View style={styles.container}>
        //
        //
        //             <Text style={styles.h1}>
        //                 Kukaldosh Boutique Hotel</Text>
        //
        //             <View style={styles.chartContainer}>
        //
        //
        //             </View>
        //             <View style={styles.revenueContainer}>
        //
        //             </View>
        //             <View style={styles.totalsContainer}>
        //                 <View style={styles.arrival}>
        //                     <View style={styles.greenIconContainer}>
        //
        //                     </View>
        //                 </View>
        //                 <View style={styles.exits}>
        //                     <View style={styles.skyBlueIconContainer}>
        //
        //                     </View>
        //                 </View>
        //                 <View style={styles.breakRow}></View>
        //                 <View style={styles.reside}>
        //                     <View style={styles.yellowIconContainer}>
        //
        //                     </View>
        //                 </View>
        //                 <View style={styles.free}>
        //                     <View style={styles.orangeIconContainer}>
        //
        //                     </View>
        //                 </View>
        //             </View>
        //
        //         </View>
        //     </SafeAreaView>
        // </>
    );
};

const PX =(px)=>{return perfectSize(px*3)};
const black = '#000';
const lightBlue = '#F2F2F7';
const lightGray = '#8E8E93';
const red = '#FF2D55';
const orange = '#FF9500';
const green = '#34C759';
const yellow = '#FFCC00';
const skyBlue = '#5AC8FA';
const blue = '#007AFF';

const blockStyles = {
    backgroundColor: lightBlue,
    borderRadius: PX(14),
    marginBottom: PX(17),
};

const iconContainer = {
    width:PX(40),
    height:PX(40),
    borderRadius: PX(10)
}
const styles = StyleSheet.create({
    h1: {
        fontSize: PX(24), // 3 * designSize
        lineHeight: 28,
        fontWeight: '700',
        color: black,
    },
    h2: {
        fontSize: PX(54), // 3 * designSize
        lineHeight: 28,
        fontWeight: '700',
    },
    h3: {
        fontSize: PX(42), // 3 * designSize
        lineHeight: 28,
        fontWeight: '400',
        color: lightGray,
    },
    container: {
        paddingLeft: PX(17),
        paddingRight: PX(17),
        backgroundColor: 'white',
    },
    chartContainer: {
        width: '100%',
        height: PX(157),
        marginTop:PX(17),
        alignSelf: 'center',
        ...blockStyles,
    },
    revenueContainer: {
        width: '100%',
        height: PX(74),

        ...blockStyles,
    },
    totalsContainer:{
        width: '100%',
        flexWrap:'wrap',
        flexDirection:'row',

    },
    breakRow:{
        height:0,
        flexBasis:'100%'
    },
    arrival:{
        backgroundColor: lightBlue,
        borderRadius:PX(10),
        padding:PX(8),
        flex:1,
    },
    exits:{
        backgroundColor: lightBlue,
        borderRadius:PX(10),
        padding:PX(8),
        marginLeft:PX(17),
        flex:1,
    },
    reside:{
        backgroundColor: lightBlue,
        borderRadius:PX(10),
        padding:PX(8),
        marginTop:PX(17),
        flex:1,
    },
    free:{
        backgroundColor: lightBlue,
        borderRadius:PX(10),
        padding:PX(8),
        marginTop:PX(17),
        marginLeft:PX(17),
        flex:1,
    },
    greenIconContainer:{
        ...iconContainer,
        backgroundColor:green
    },
    skyBlueIconContainer:{
        ...iconContainer,
        backgroundColor:skyBlue
    },
    yellowIconContainer:{
        ...iconContainer,
        backgroundColor:yellow
    },
    orangeIconContainer:{
        ...iconContainer,
        backgroundColor:orange
    }

});

export default App;
