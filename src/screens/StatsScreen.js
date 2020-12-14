import React, {useState, useEffect} from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {Header} from 'react-native-elements';

import {create, PREDEF_RES} from 'react-native-pixel-perfect';


const perfectSize = create(PREDEF_RES.iphoneX.px);

const PX = (px) => {
    return perfectSize(px * 3);
};
const StatsScreen = ({navigation}) => {

    return (
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
            <StatusBar backgroundColor="white"/>
            <SafeAreaView>
                <ScrollView>
                    <Header
                        backgroundColor={'white'}
                        containerStyle={{
                            padding: 0,
                            margin: 0,
                            top: 0,
                            height: PX(100),
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            flex: 1,
                            borderBottomWidth: 0,
                            //backgroundColor: '#333',
                        }}
                        leftContainerStyle={{
                            paddingTop: 10,
                            height: PX(100),
                            margin: 0,
                            top: 0,
                        }}
                        leftComponent={<View style={{paddingLeft: PX(8), width: PX(200)}}>

                            <Text style={{...styles.h1, padding: 0}}>
                                Kukaldosh Boutique Hotel</Text>
                        </View>}
                        placement={'left'}
                    >

                    </Header>
                    <View style={styles.container}>
                        <Text>{'STATS'}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
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
    alignItems: 'center',
    justifyContent: 'center',
};
const totalBlock ={
    flex: 1,
    flexDirection:"row",
};

const styles = StyleSheet.create({
    h1: {
        fontSize: PX(24), // 3 * designSize
        lineHeight: PX(28),
        fontWeight: '700',
        color: black,
    },
    h2: {
        fontSize: PX(18), // 3 * designSize
        lineHeight: PX(18),
        fontWeight: '700',
    },
    h3: {
        fontSize: PX(14), // 3 * designSize
        lineHeight: PX(18),
        fontWeight: '400',
        color: lightGray,
    },
    h4: {
        fontSize: PX(12), // 3 * designSize
        lineHeight: PX(18),
        fontWeight: '400',
        color: lightGray,
    },
    totalValue:{
        fontSize: PX(18), // 3 * designSize
        fontWeight: '700',
    },
    container: {
        paddingLeft: PX(17),
        paddingRight: PX(17),
        backgroundColor: 'white',
        flex: 1,
    },
    chartContainer: {
        width: '100%',
        height: PX(157),
        marginTop: PX(17),
        alignSelf: 'center',
        ...blockStyles,
        paddingBottom: 0,
    },
    revenueContainer: {
        width: '100%',
        padding: PX(17),
        flexDirection: 'row',
        flexWrap: 'wrap',
        ...blockStyles,
    },
    title: {
        flexDirection: 'row',
        paddingBottom: PX(11),
    },
    revenueBlock: {
        flex: 1,
        padding: PX(1),
    },
    revenueText: {
        fontSize: PX(18), // 3 * designSize
        lineHeight: PX(18),
        fontWeight: '700',
        color: red,
    },
    totalsContainer: {
        marginTop: PX(7),
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

        ...totalBlock,
    },
    exits: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginLeft: PX(17),
        flex: 1,
        ...totalBlock,
    },
    reside: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginTop: PX(17),
        flex: 1,
        ...totalBlock,
    },
    free: {
        backgroundColor: lightBlue,
        borderRadius: PX(10),
        padding: PX(8),
        marginTop: PX(17),
        marginLeft: PX(17),
        flex: 1,
        ...totalBlock,
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
export default StatsScreen;
