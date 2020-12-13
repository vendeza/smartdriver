import React, {useState, useEffect} from 'react';
import {View, StyleSheet, StatusBar, ScrollView, Text} from 'react-native';

const OtherScreen = ({navigation}) => {


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#212121" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>OtherScreen</Text>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingRight: '6%',
        paddingLeft: '6%',
        paddingTop: '4%',
        backgroundColor: '#fff',
        flex: 1,
    },
});
export default OtherScreen;
