import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class BeatButton extends React.Component{

    constructor(){

        super();

        this.state = {

            beat: "",

        }

    }

    render(){

        return(
            <View>
                <TouchableOpacity>
                    <Image source={require("./assets/" + this.props.note + ".png")} />
                </TouchableOpacity>
            </View>
        )

    }

}