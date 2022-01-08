import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform, SafeAreaView, StatusBar } from 'react-native';
import {Audio} from 'expo-av';
import Music from './Music.json'
import {RFValue} from 'react-native-responsive-fontsize'

export default class Note extends React.Component{

    constructor(){
        super();

        this.state = {
            noteval: "",
            noteLenght: "",
            noteIndex: "",
            isHilighted: false,
            sounds : {
                lowA: require("./assets/lowA.mp3"),
                lowB: require("./assets/lowB.mp3"),
                C: require("./assets/C.mp3"),
                D: require("./assets/D.mp3"),
                E: require("./assets/E.mp3"),
                F: require("./assets/F.mp3"),
                G: require("./assets/G.mp3"),
                A: require("./assets/A.mp3"),
                B: require("./assets/B.mp3"),
                highC: require("./assets/highC.mp3"),
                highD: require("./assets/highD.mp3"),
                highE: require("./assets/highE.mp3"),
            }
        }
    }

    componentDidMount(){
        this.setState({noteval: this.props.noteval, noteLenght: this.props.noteLenght, noteIndex: this.props.noteIndex});
    }

    render(){
        return(
            <View>
                <TouchableOpacity style={[styles.notes, {backgroundColor: !this.state.isHilighted ? "#ff50ff" : "rgba(255, 80, 255, 0.3)"} ]} onPress={ () => { this.hilight(); this.playSound(); this.addToMusic() }}>
                    <Text style={Platform === 'android'? null : styles.text}>{this.state.noteval}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    addToMusic(){
        var index = this.getIndex();
        Music[index.toString()] = { noteval: this.state.noteval, noteLenght: this.state.noteLenght };
        console.log(Music);
    }

    playSound(){
        Audio.Sound.createAsync( this.state.sounds[this.state.noteval], { shouldPlay: true });
    }

    hilight(){
        if(!this.state.isHilighted){
            this.setState({isHilighted: true});
            return;
        }
        
        if(this.state.isHilighted){
            this.setState({isHilighted: false});
            return;
        }
    }

    getIndex(){

        switch (this.state.noteIndex) {
            case 1: return "one"

                break;
        
            case 2: return "two"
                               
                break;

            case 3: return "three"
                               
                break;

            case 4: return "four"
                               
                break;

            case 5: return "five"
                               
                break;

            case 6: return "six"
                               
                break;

            case 7: return "seven"
                               
                break;

            case 8: return "eight"
                               
                break;

            default:
                break;
        }

    }

}

const styles = StyleSheet.create({


    notes: {
        width: Platform.OS === 'android' ? RFValue(43) : 100,
        height: Platform.OS === 'android' ? RFValue(30) : 40,
        borderWidth: 2,
        borderColor: "#f500f5",
        justifyContent: "center"
    },

    text: {
        fontSize: Platform.OS === 'android' ? RFValue(14) : 20,
        //opacity: 0.7,
        //color: 0,
        textAlign: 'center',
    }

})