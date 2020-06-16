import React from "react";
import {TextInput,StyleSheet} from "react-native";

const Input = props => {

    return <TextInput {...props} placeholder={props.placeholder} style={{...styles.input,...props.styles}} />

};

const styles = StyleSheet.create({

    

        input: {
            borderWidth: 1,
            borderColor: "black",
            color: "black",
            padding: 10,
            borderRadius: 10,
            width: "100%"
    
    
        }

    
})

export default Input;