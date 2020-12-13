/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';


const designResolution = {
    width: 1125,
    height: 2436,
};

const perfectSize = create(PREDEF_RES.iphoneX.px);

const HomeScreen = () => {
    return (
        <View  style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <View style={styles.container}>


                    <Text style={styles.h1}>
                        Kukaldosh Boutique Hotel</Text>

                    <View style={styles.chartContainer}>


                    </View>
                    <View style={styles.revenueContainer}>

                    </View>
                    <View style={styles.totalsContainer}>
                        <View style={styles.arrival}>
                            <View style={styles.greenIconContainer}>

                            </View>
                        </View>
                        <View style={styles.exits}>
                            <View style={styles.skyBlueIconContainer}>

                            </View>
                        </View>
                        <View style={styles.breakRow}></View>
                        <View style={styles.reside}>
                            <View style={styles.yellowIconContainer}>

                            </View>
                        </View>
                        <View style={styles.free}>
                            <View style={styles.orangeIconContainer}>

                            </View>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </View>
    );
};

const PX = (px) => {
    return perfectSize(px * 3);
};
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
    width: PX(40),
    height: PX(40),
    borderRadius: PX(10),
};
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
        flex:1
    },
    chartContainer: {
        width: '100%',
        height: PX(157),
        marginTop: PX(17),
        alignSelf: 'center',
        ...blockStyles,
    },
    revenueContainer: {
        width: '100%',
        height: PX(74),

        ...blockStyles,
    },
    totalsContainer: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    breakRow: {
        height: 0,
        flexBasis: '100%',
    },
    arrival: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        flex: 1,
    },
    exits: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginLeft: PX(17),
        flex: 1,
    },
    reside: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginTop: PX(17),
        flex: 1,
    },
    free: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginTop: PX(17),
        marginLeft: PX(17),
        flex: 1,
    },
    greenIconContainer: {
        ...iconContainer,
        backgroundColor: green,
    },
    skyBlueIconContainer: {
        ...iconContainer,
        backgroundColor: skyBlue,
    },
    yellowIconContainer: {
        ...iconContainer,
        backgroundColor: yellow,
    },
    orangeIconContainer: {
        ...iconContainer,
        backgroundColor: orange,
    },

});

export default HomeScreen;

