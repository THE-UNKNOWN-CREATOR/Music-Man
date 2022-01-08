import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AppHeader extends React.Component
{

    render(){
        return(

            <SafeAreaView style={styles.HeaderContainor}>
                <Text style={styles.HeaderText}>MUSIC MAN</Text>
            </SafeAreaView>

        )
    }    

}

const styles = StyleSheet.create({
    HeaderContainor: {
        backgroundColor: "darkorange",
        width: "100%",
        height: Platform.OS === 'android' ? "10%" : "100%",
        justifyContent: "center",
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(2)
    },

    HeaderText: {textAlign: "center", fontSize: 20}
})