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
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';


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

];

const Gradient = ({ index }) => (
    <Defs key={index}>
        <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
            <Stop offset={'0%'} stopColor={'rgba(0, 122, 255,0.22)'} stopOpacity={0.3} />
            <Stop offset={'100%'} stopColor={'rgba(0, 122, 255,0)'} stopOpacity={0.0} />
        </LinearGradient>
    </Defs>
)

const HomeScreen = () => {
    const data = [0, 5, 15, 30, 10, 40, 60];

    return (
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
            <StatusBar backgroundColor="white"/>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>


                        <View style={styles.chartContainer}>
                            <View style={{
                                flexDirection: 'row',
                                padding: PX(17),
                                height: '44%',

                                borderBottomWidth: PX(1),
                                borderBottomColor: '#E5E5EA',
                            }}>
                                <View style={{flex: 1}}>
                                    <Text style={styles.h2}>{'Загрузка'}</Text>
                                    <Text style={styles.h3}>{'за текущий месяц'}</Text>
                                </View>
                                <Text style={{...styles.revenueText, flex: 1, textAlign: 'right'}}>{'35%'}</Text>

                            </View>

                            <AreaChart
                                numberOfTicks={0}
                                style={{height: PX(87),borderRadius:PX(6)}}
                                data={data}
                                curve={shape.curveNatural}
                                showGrid={true}
                                contentInset={{ left:PX(2), bottom: PX(-1.8),right:PX(-2) }}
                                svg={{
                                    strokeWidth:PX(2),
                                    stroke: 'rgba(0, 122, 255, 1)',
                                    fill: 'url(#gradient)'
                                }}
                            >
                                <Gradient />
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
                                <View style={{marginLeft: PX(12)}}>
                                    <Text style={styles.h4}>{'Заезд'}</Text>
                                    <Text style={styles.totalValue}>{'2'}</Text>
                                </View>
                            </View>

                            <View style={styles.exits}>
                                <View style={styles.orangeIconContainer}>
                                    <Icon name={'logout'} size={24} color={'white'}/>
                                </View>
                                <View style={{marginLeft: PX(12)}}>
                                    <Text style={styles.h4}>{'Выезд'}</Text>
                                    <Text style={styles.totalValue}>{'2'}</Text>
                                </View>
                            </View>
                            <View style={styles.breakRow}></View>
                            <View style={styles.reside}>
                                <View style={styles.yellowIconContainer}>
                                    <Icon name={'person-outline'} size={24} color={'white'}/>
                                </View>
                                <View style={{marginLeft: PX(12)}}>
                                    <Text style={styles.h4}>{'Проживают'}</Text>
                                    <Text style={styles.totalValue}>{'4'}</Text>
                                </View>
                            </View>
                            <View style={styles.free}>
                                <View style={styles.skyBlueIconContainer}>
                                    <Icon name={'add'} size={24} color={'white'}/>
                                </View>
                                <View style={{marginLeft: PX(12)}}>
                                    <Text style={styles.h4}>{'Свободных'}</Text>
                                    <Text style={styles.totalValue}>{'3'}</Text>
                                </View>
                            </View>
                        </View>

                        <View
                            style={styles.listElement}
                            key={1}>

                            <View style={{flex:1}}>
                               <Text style={styles.textListElement}>{'Новое Бронирование'}</Text>
                            </View>
                            <View style={styles.bubleCount}>
                                <Text style={styles.textBubleListElement}>{'3'}</Text>
                            </View>
                            <Icon size={PX(16)} name={'arrow-forward-ios'} color={'#C8C7CC'}/>
                        </View>
                        <View
                            style={styles.listElement}
                            key={2}>

                            <View style={{flex:1}}>
                                <Text style={styles.textListElement}>{'Отмененные Брони'}</Text>
                            </View>
                            <View style={styles.bubleCount}>
                                <Text style={styles.textBubleListElement}>{'3'}</Text>
                            </View>
                            <Icon size={PX(16)} name={'arrow-forward-ios'} color={'#C8C7CC'}/>
                        </View>
                        <View
                            style={{...styles.listElement, borderBottomWidth:0}}
                            key={3}>

                            <View style={{flex:1}}>
                                <Text style={styles.textListElement}>{'Незаезд'}</Text>
                            </View>
                            <View style={styles.bubleCount}>
                                <Text style={styles.textBubleListElement}>{'0'}</Text>
                            </View>
                            <Icon size={PX(16)} name={'arrow-forward-ios'} color={'#C8C7CC'}/>
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
const totalBlock = {
    flex: 1,
    flexDirection: 'row',
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
    totalValue: {
        fontSize: PX(18), // 3 * designSize
        fontWeight: '700',
    },
    listElement:{
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
        color: blue,
        paddingTop: PX(10),
        paddingBottom: PX(10),
        flexDirection:'row',
        alignItems:'center'
    },
    bubleCount:{
        borderRadius: PX(12),
        backgroundColor: '#C8C7CC',
        padding: PX(6),
        paddingLeft: PX(20),
        paddingRight: PX(20),
        marginRight:PX(10)
    },
    textListElement:{
        color: blue,
        fontWeight: '400',
        fontSize: PX(17),
    },
    textBubleListElement:{
        color: 'white',
        fontWeight: '700',
        fontSize: PX(14),
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
        marginBottom: PX(17)
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

export default HomeScreen;

