import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import PX from '../styles/pixelPerfectProvider'; // for pixel perfect
import styles from '../styles/styles';

//the chart gradient
const Gradient = ({index}) => (
    <Defs key={index}>
        <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
            <Stop offset={'0%'} stopColor={'rgba(0, 122, 255,0.22)'} stopOpacity={0.3}/>
            <Stop offset={'100%'} stopColor={'rgba(0, 122, 255,0)'} stopOpacity={0.0}/>
        </LinearGradient>
    </Defs>
);

// for pixel perfect styles use PX function and flex boxes

const HomeScreen = () => {
    const data = [0, 5, 15, 30, 10, 40, 60]; // for the chart

    return (

        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="white"/>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>

                        {/*    CHART    */}

                        <View style={styles.chartContainer}>
                            <View style={styles.chartTitle}>
                                <View style={{flex: 1}}>
                                    <Text style={styles.h2}>{'Загрузка'}</Text>
                                    <Text style={styles.h3}>{'за текущий месяц'}</Text>
                                </View>
                                <Text style={{...styles.revenueText, flex: 1, textAlign: 'right'}}>{'35%'}</Text>

                            </View>

                            <AreaChart
                                numberOfTicks={0}
                                style={{height: PX(87), borderRadius: PX(6)}}
                                data={data}
                                curve={shape.curveNatural}
                                showGrid={true}
                                contentInset={{left: PX(2), bottom: PX(-1.8), right: PX(-2)}}
                                svg={{
                                    strokeWidth: PX(2),
                                    stroke: 'rgba(0, 122, 255, 1)',
                                    fill: 'url(#gradient)',
                                }}
                            >
                                <Gradient/>
                            </AreaChart>
                        </View>


                        {/*    REVENUES    */}


                        <View style={styles.revenueContainer}>
                            <Text style={{...styles.h2, ...styles.revenueBlock}}>Доход</Text>
                            <Text style={{...styles.revenueText}}>450 000 000</Text>
                            <Text style={{...styles.h4}}>{'  UZS'}</Text>
                            <View style={styles.breakRow}></View>
                            <Text style={{...styles.h3, ...styles.revenueBlock}}>за текущий месяц</Text>
                        </View>


                        {/*    TOTALS    */}


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


                        {/*    ELEMENTS LIST  TODO: duplicates row code. Need to move component  */}


                        <View
                            style={styles.listElement}
                            key={1}>

                            <View style={{flex: 1}}>
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

                            <View style={{flex: 1}}>
                                <Text style={styles.textListElement}>{'Отмененные Брони'}</Text>
                            </View>
                            <View style={styles.bubleCount}>
                                <Text style={styles.textBubleListElement}>{'3'}</Text>
                            </View>
                            <Icon size={PX(16)} name={'arrow-forward-ios'} color={'#C8C7CC'}/>
                        </View>
                        <View
                            style={{...styles.listElement, borderBottomWidth: 0}}
                            key={3}>

                            <View style={{flex: 1}}>
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


export default HomeScreen;

