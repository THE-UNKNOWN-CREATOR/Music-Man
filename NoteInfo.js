import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class NoteInfo extends React.Component{

    constructor(){

        super();

        this.state = {

            beat: "",

        }

    }

    render(){

        return(
            <View style={styles.ButtonsContainor}>

                <View style={styles.ButtonContainor}>
                    <TouchableOpacity>
                        <Image source={require('./assets/full.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                </View>
                    
                <View style={styles.ButtonContainor}>
                    <TouchableOpacity>
                        <Image source={require('./assets/half.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                </View>

                    
                <View style={styles.ButtonContainor}>
                    <TouchableOpacity>
                        <Image source={require('./assets/half.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                </View>

                    
                <View style={styles.ButtonContainor}>
                    <TouchableOpacity>
                        <Image source={require('./assets/half.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                </View>

            </View>
        )

    }

}


const styles = StyleSheet.create(
    {
        ButtonsContainor: {
            flexDirection: 'row', 
            justifyContent: "space-between",
        },

        ButtonContainor: {
            //paddingRight: 30
        },

        buttonImage: {
            width: RFValue(50),
            height: RFValue(50)
        }
    }
)