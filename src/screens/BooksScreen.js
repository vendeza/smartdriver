import React from "react";
import {
    View,
    StatusBar,
    ScrollView,
    Text,
    SafeAreaView,
} from "react-native";
import styles from "../styles/styles";

const BooksScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="white"/>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text>{"BOOKS"}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default BooksScreen;
