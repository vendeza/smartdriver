import React from 'react';
import {
    StyleSheet, View, Text,
} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Screen from './src/screens';
import PX from './src/styles/pixelPerfectProvider';

const screenStack = {
    HomeScreen: Screen.HomeScreen,
    BooksScreen: Screen.BooksScreen,
    StatsScreen: Screen.StatsScreen,
    OtherScreen: Screen.OtherScreen,
};
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const styles = StyleSheet.create({
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0,
        paddingTop: PX(20),
        paddingBottom: PX(0),
        paddingRight: 0,
    },
    headerTitleText: {
        width: PX(200),
        height: PX(60),
        fontSize: PX(24),
        fontWeight: '700',
    },
    headerStyle: {
        shadowColor: 'transparent',
        borderColor: '#fff',
        borderBottomWidth: 0,
        height: PX(110),
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: PX(24),
        color: 'black',
        borderBottomWidth: 0,
    },

});

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Главная"
                component={screenStack.HomeScreen}
                options={headerOptions}
            />
        </HomeStack.Navigator>
    );
}

function BooksStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Брони"
                component={screenStack.BooksScreen}
                options={headerOptions}
            />
        </HomeStack.Navigator>
    );
}

function StatsStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Сатистика"
                component={screenStack.StatsScreen}
                options={headerOptions}
            />
        </HomeStack.Navigator>
    );
}

function OtherStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Еще"
                component={screenStack.OtherScreen}
                options={headerOptions}
            />
        </HomeStack.Navigator>
    );
}


const headerOptions = {
    headerTitle: (
        <View style={
            styles.headerTitle
        }>
            <Text style={styles.headerTitleText}>{'Kukaldosh Boutique Hotel'}</Text>
        </View>
    ),
    headerStyle: {
        ...styles.headerStyle,
    },
    headerTitleAlign: 'left',
    headerTintColor: '#fff',
    headerTitleStyle: {
        ...styles.headerTitleStyle,
    },

};

const tabNavigatorOptions = {
    title: 'My home',
    headerStyle: {
        backgroundColor: '#555',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const tabBarOptions = {
    activeTintColor: '#007AFF',
    tabStyle: {
        paddingVertical: 5,
    },
    style: {
        backgroundColor: '#e9e9e9',

    },
};


const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Главная') {
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
});

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
                options={tabNavigatorOptions}
                tabBarOptions={tabBarOptions}
                screenOptions={screenOptions}
            >
                <Tab.Screen

                    name="Главная" component={HomeStackScreen}/>
                <Tab.Screen name="Брони" component={BooksStackScreen}/>
                <Tab.Screen name="Статистика" component={StatsStackScreen}/>
                <Tab.Screen
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Icon name="grid" color={color} size={size}/>
                        ),
                    }}
                    name="Еще" component={OtherStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default App;
