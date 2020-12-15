import React  from 'react';
import {View,  StatusBar, ScrollView, Text, SafeAreaView} from 'react-native';
import styles from '../styles/styles';
const OtherScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="white"/>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text>{'OTHER'}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default OtherScreen;
