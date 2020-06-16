import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>Game Over !</Text>
        </View>

    );
};

const styles = StyleSheet.create({

    screen: {
        justifyContent: "center",
        alignItems: "center",

    }
});


export default GameOverScreen;