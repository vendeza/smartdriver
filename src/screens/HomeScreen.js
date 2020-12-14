/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ListItem, Header} from 'react-native-elements';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape';

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

const PX = (px) => {
    return perfectSize(px * 3);
};

const list = [
    {
        title: 'Новые Бронирование',
        icon: 'arrow-forward-ios',
    },
    {
        title: 'Отмененные брони',
        icon: 'arrow-forward-ios',
    },
    {
        title: 'Незаезды',
        icon: 'arrow-forward-ios',
    },
];


const HomeScreen = () => {
    const data = [0,20,15, 30, 10, 40, 60]

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
                            height: PX(80),
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            flex: 1,
                            //backgroundColor: '#333',
                        }}
                        leftContainerStyle={{
                            padding: 0,
                            height: PX(80),
                            margin: 0,
                            top: 0,
                        }}
                        leftComponent={<View style={{paddingLeft: PX(8),width:PX(200)}}>

                            <Text style={{...styles.h1,padding:0}}>
                                Kukaldosh Boutique Hotel </Text>
                        </View>}
                        placement={'left'}
                    >

                    </Header>
                    <View style={styles.container}>


                        <View style={styles.chartContainer}>

                            <AreaChart
                                numberOfTicks={0}
                                style={{ height: "100%" }}
                                data={data}
                                curve={shape.curveNatural}
                                showGrid={true}
                                svg={{
                                    stroke: 'rgba(0, 122, 255, 1)',
                                    fill: 'rgba(0, 122, 255, 0.2)' }}
                            >
                                <Grid />
                            </AreaChart>
                        </View>
                        <View style={styles.revenueContainer}>
                            <Text style={{...styles.h2, ...styles.revenueBlock}}>Доход</Text>
                            <Text style={{...styles.revenueText}}>450 000 000</Text>
                            <Text style={{...styles.h4}}>{'  UZS'}</Text>
                            <View style={styles.breakRow}></View>
                            <Text style={{...styles.h3, ...styles.revenueBlock}}>за текущий месяц</Text>
                        </View>
                        <View style={styles.totalsContainer}>
                            <View style={styles.title}>
                                <Text style={styles.h2}>{'Сводка'}</Text>
                                <Text style={styles.h3}>{'  за сегодня'}</Text>
                            </View>

                            <View style={styles.breakRow}></View>
                            <View style={styles.arrival}>
                                <View style={styles.greenIconContainer}>
                                    <Icon name={'login'} size={PX(24)} color={'white'}/>
                                </View>
                            </View>

                            <View style={styles.exits}>
                                <View style={styles.skyBlueIconContainer}>
                                    <Icon name={'logout'} size={24} color={'white'}/>
                                </View>
                            </View>
                            <View style={styles.breakRow}></View>
                            <View style={styles.reside}>
                                <View style={styles.yellowIconContainer}>
                                    <Icon name={'person-outline'} size={24} color={'white'}/>
                                </View>
                            </View>
                            <View style={styles.free}>
                                <View style={styles.orangeIconContainer}>
                                    <Icon name={'add'} size={24} color={'white'}/>
                                </View>
                            </View>
                        </View>


                        <View>
                            {
                                list.map((item, i) => (
                                    <ListItem style={{color: blue, paddingLeft:0,marginLeft:0}} key={i} bottomDivider>

                                        <ListItem.Content style={{color: blue, paddingLeft:0, marginLeft:0}}>
                                            <ListItem.Title style={{color: blue, paddingLeft:0,marginLeft:0}}>{item.title}</ListItem.Title>
                                        </ListItem.Content>
                                        <View style={{
                                            borderRadius: 30,
                                            backgroundColor: '#C8C7CC',
                                            padding: PX(4),
                                            paddingLeft: PX(20),
                                            paddingRight: PX(20),
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                fontWeight: '700',
                                                fontSize: PX(14),
                                            }}>{'3'}</Text>
                                        </View>
                                        <Icon size={PX(16)} name={item.icon} color={'#C8C7CC'}/>
                                    </ListItem>
                                ))
                            }
                        </View>

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
const styles = StyleSheet.create({
    h1: {
        fontSize: PX(24), // 3 * designSize
        lineHeight: 28,
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
        fontWeight: '700',
        color: lightGray,
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
        paddingBottom: 0
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
        paddingBottom: PX(17),
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

