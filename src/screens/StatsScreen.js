import React from 'react';
import {View,  StatusBar, ScrollView, Text,  SafeAreaView} from 'react-native';
import styles from '../styles/styles';
const StatsScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="white"/>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text>{'STATS'}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};


export default StatsScreen;
