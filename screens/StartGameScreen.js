import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "../components/Card"
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const startGameScreen = props => {


    const [enteredValue, setEnteredValue] = useState("");

    const [confirmed, setConfirmed] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g, ""));



    };

    const resetInputHandler = inputText => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const confirmInputHandler = () => {

        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {

            Alert.alert("Invalid Number !", "Number has to be number between 1 and 99", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]);
            return

        }

        setConfirmed(true);
        setEnteredValue("");
        setSelectedNumber(parseInt(chosenNumber));
        Keyboard.dismiss();
       




    };

    let confirmedOuput;

    if (confirmed) {
        confirmedOuput = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer selectedNumber = {selectedNumber} />
                <Button title="Start Game !" onPress ={() => {props.onStartGame(selectedNumber) }}  />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.header}>Start A New Game ! </Text>

                <Card styles={styles.inputContainer}>
                    <Text>Select A Number :</Text>

                    <Input placeholder="Enter A Number" blurOnSubmit keyboardType="numeric" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                        </View>

                        <View style={styles.button}>
                            <Button title="Start" onPress={confirmInputHandler} color={Colors.primary} />
                        </View>




                    </View>

                </Card>

                {confirmedOuput}
            </View>

        </TouchableWithoutFeedback>

    );
};


const styles = StyleSheet.create({
    screen: {

        marginVertical: 20,
        padding: 5,
        alignItems: "center",

    },

    header: {

        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,


    },



    buttonContainer: {

        marginVertical: 20,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",

    },

    button: {
        width: 100
    },
    summaryContainer: {
        marginVertical: 20,
        alignItems:"center"
    }

});

export default startGameScreen;