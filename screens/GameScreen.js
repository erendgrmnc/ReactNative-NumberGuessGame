import React, { useState ,useRef,useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import  NumberContainer  from "../components/NumberContainer"
import Card from "../components/Card";
import Colors from "../constants/colors";

const generateRandomBetween = (min, max, exclude) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    const randNum = Math.random() * ((max - min) + min);

    if (randNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }

    else {
        return Math.floor(randNum);
    }
};

const GameScreen = props => {

    console.log(props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const [rounds,setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    

    const {userChoice,onGameOver} = props;
    useEffect(() =>{
        if(currentGuess === userChoice){

           onGameOver();



        }
    },[currentGuess,userChoice,onGameOver]);

    const nextGuessHandler = direction =>{

        if((direction == "lower" && currentGuess < props.userChoice) || direction == "greater" && currentGuess > props.userChoice ){


            Alert.alert("Don't Lie !!","You know that this is wrong ヽ(ಠ_ಠ)ノ",[{text:"Sorry :(",style: "cancel"}]);
            return;

        }

        if(direction == "lower"){
            currentHigh.current = currentGuess;
        }
        else{
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);

        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);

    }

    return (


        <View style={styles.screen}>
            <Text>Opponent's Guess: </Text>
            <NumberContainer selectedNumber = {currentGuess}/>
            <Card style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Lower" color={Colors.primary} onPress={ nextGuessHandler.bind(this,"lower")} />
                </View>
                <View style={styles.button}>
                    <Button title="Greater" color = {Colors.accent} onPress={  nextGuessHandler.bind(this,"greater")}/>
                </View>


            </Card>
        </View>


    );
};

const styles = StyleSheet.create({

    screen: {
       
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"

    },
    button: {
        width: 100,
       
    },
  


});

export default GameScreen;