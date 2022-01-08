import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Music from './Music.json'
import {Audio} from 'expo-av'

export default class Controls extends React.Component{

    constructor(){
        super();

        this.state = {
            currentIndex : 1,
            isPlaying: true,
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

    render(){

        return(

            <View>
                <TouchableOpacity onPress={ () => {
                    this.setState({isPlaying: true});
                    var playing = setInterval( () => {  this.state.isPlaying ? this.playMusic() : clearInterval(playing)}, 600, );
                }}> 
                    <Image source={require("./assets/play.png")} style={styles.image} /> 
                </TouchableOpacity>

                <TouchableOpacity onPress = { () => {
                    this.stopMusic();
                }}> 
                    <Image source={require("./assets/pause.png")} style={styles.image} /> 
                </TouchableOpacity>
            </View>

        )

    }

    async playMusic(){
        
            var currentIndexNum = this.state.currentIndex;
            var currentIndex = this.getIndex(currentIndexNum);
            var currentNote = Music[currentIndex];
            currentNote = currentNote ? currentNote.noteval : null;

            if(currentNote) { 
                await Audio.Sound.createAsync( this.state.sounds[currentNote], { shouldPlay: true });
                this.state.currentIndex > 7 ? this.setState({currentIndex: 1}) : this.setState({currentIndex: currentIndexNum + 1}) ;
            }
            else console.log('poopoo');

    }

    stopMusic(){
        this.setState({isPlaying: false});
    }

    getIndex(val){

        switch (val) {
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

    image: {
        width: 50,
        height: 50
    }

})