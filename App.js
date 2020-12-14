import React from 'react';
import {
    StyleSheet, View, Text,
} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Screen from './src/screens';


const screenStack = {
    HomeScreen: Screen.HomeScreen,
    BooksScreen: Screen.BooksScreen,
    StatsScreen: Screen.StatsScreen,
    OtherScreen: Screen.OtherScreen,
};
const Tab = createBottomTabNavigator();
const perfectSize = create(PREDEF_RES.iphoneX.px);
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Главная"
                component={screenStack.HomeScreen}
                options={{
                    headerTitle: (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 0,
                            paddingTop: PX(20),
                            paddingBottom: PX(0),
                            paddingRight: 0,
                        }}>
                            <Text style={{
                                width: PX(200),
                                height:PX(60),
                                fontSize: PX(24),
                                fontWeight: '700',
                            }}>{'Kukaldosh Boutique Hotel'}</Text>
                        </View>

                    ),

                    headerStyle: {
                        shadowColor: 'transparent',
                        borderColor: '#fff',
                        borderBottomWidth: 0,
                        height: PX(110),

                    },
                    headerTitleAlign: 'left',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: PX(24),
                        color: 'black',
                        borderBottomWidth: 0,
                    },
                }}
            />
        </HomeStack.Navigator>
    );
}

const App = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'rgb(255, 45, 85)',
            background: '#fff',
        },
    };

    return (
        <NavigationContainer theme={MyTheme}>

            <Tab.Navigator
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#555',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                tabBarOptions={{
                    activeTintColor: '#007AFF',
                    tabStyle: {
                        paddingVertical: 5
                    },
                    style: {
                        backgroundColor: '#e9e9e9',

                    },
                }}
                screenOptions={({route}) => ({

                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Главная') {
                            iconName = focused
                                ? 'home-filled'
                                : 'home-filled';
                            return <MaterialIcons name={'home-filled'} size={30}
                                                  color={focused ? '#007AFF' : '#A1A1A1'}/>;
                        } else if (route.name === 'Брони') {
                            iconName = focused ? 'ios-layers' : 'ios-layers';
                        } else if (route.name === 'Статистика') {
                            iconName = focused ? 'stats-chart' : 'stats-chart';
                        } else {
                            return;
                        }

                        return <Icon name={iconName} size={24} color={focused ? '#007AFF' : '#A1A1A1'}/>;
                    },
                })}
            >
                <Tab.Screen

                    name="Главная" component={HomeStackScreen}/>
                <Tab.Screen name="Брони" component={screenStack.BooksScreen}/>
                <Tab.Screen name="Статистика" component={screenStack.StatsScreen}/>
                <Tab.Screen

                    options={{
                        tabBarLabel: 'Еще',
                        tabStyle: {top: 0, lineHeight: 0, margin: 0, bottom: 0},
                        labelStyle: {top: 0, lineHeight: 0, margin: 0, color: '#333'},

                        safeAreaInsets: {top: 0, bottom: 0},
                        tabBarIcon: ({color, size}) => (
                            <Icon name="grid" color={color} size={size}/>
                        ),
                    }}
                    name="Еще" component={screenStack.OtherScreen}/>
            </Tab.Navigator>

        </NavigationContainer>


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

export default App;
