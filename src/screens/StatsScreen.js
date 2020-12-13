import React, {useState, useEffect} from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Text, Image, TouchableOpacity} from 'react-native';


const StatsScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#212121" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>StatsScreen</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        color: '#111',
        width: '100%',
    },
    wrap: {
        marginRight: 12,
        marginLeft: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 12,
        paddingLeft: 12,
        borderRadius: 6,
        shadowColor: '#333',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.10,
        shadowRadius: 5.68,
        elevation: 11,
    },
    text: {
        color: '#111',
    },
});
export default StatsScreen;
