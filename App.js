import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";


export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [guessRounds,setGuessRounds] = useState(0);


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds =>{
      setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame = {startGameHandler} />

  if(userNumber && guessRounds <= 0){
    console.log(userNumber);
    content =  <GameScreen userChoice = {userNumber} onGameOver={gameOverHandler} />
  }else if(guessRounds > 0){
    content = <GameOverScreen/>
  }

  return (
    <View>
      <Header title="Guess Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({

});
