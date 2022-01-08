import React from 'react';
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native';
import Note from './Note';

export default class Notes extends React.Component{

    constructor(){
        super();

        this.state = {
            notes: [
                [
                    {noteval: "lowA", noteLenght: "quater", noteindex: 1},
                    {noteval: "lowB", noteLenght: "quater", noteindex: 1},
                    {noteval: "C", noteLenght: "quater", noteindex: 1},
                    {noteval: "D", noteLenght: "quater", noteindex: 1},
                    {noteval: "E", noteLenght: "quater", noteindex: 1},
                    {noteval: "F", noteLenght: "quater", noteindex: 1},
                    {noteval: "G", noteLenght: "quater", noteindex: 1},
                    {noteval: "A", noteLenght: "quater", noteindex: 1},
                    {noteval: "B", noteLenght: "quater", noteindex: 1},
                    {noteval: "highC", noteLenght: "quater", noteindex: 1},
                    {noteval: "highD", noteLenght: "quater", noteindex: 1},
                    {noteval: "highE", noteLenght: "quater", noteindex: 1}
                ],
                [
                {noteval: "lowA", noteLenght: "quater", noteindex: 2},
                {noteval: "lowB", noteLenght: "quater", noteindex: 2},
                {noteval: "C", noteLenght: "quater", noteindex: 2},
                {noteval: "D", noteLenght: "quater", noteindex: 2},
                {noteval: "E", noteLenght: "quater", noteindex: 2},
                {noteval: "F", noteLenght: "quater", noteindex: 2},
                {noteval: "G", noteLenght: "quater", noteindex: 2},
                {noteval: "A", noteLenght: "quater", noteindex: 2},
                {noteval: "B", noteLenght: "quater", noteindex: 2},
                {noteval: "highC", noteLenght: "quater", noteindex: 2},
                {noteval: "highD", noteLenght: "quater", noteindex: 2},
                {noteval: "highE", noteLenght: "quater", noteindex: 2},
                ],
                [
                    {noteval: "lowA", noteLenght: "quater", noteindex: 3},
                    {noteval: "lowB", noteLenght: "quater", noteindex: 3},
                    {noteval: "C", noteLenght: "quater", noteindex: 3},
                    {noteval: "D", noteLenght: "quater", noteindex: 3},
                    {noteval: "E", noteLenght: "quater", noteindex: 3},
                    {noteval: "F", noteLenght: "quater", noteindex: 3},
                    {noteval: "G", noteLenght: "quater", noteindex: 3},
                    {noteval: "A", noteLenght: "quater", noteindex: 3},
                    {noteval: "B", noteLenght: "quater", noteindex: 3},
                    {noteval: "highC", noteLenght: "quater", noteindex: 3},
                    {noteval: "highD", noteLenght: "quater", noteindex: 3},
                    {noteval: "highE", noteLenght: "quater", noteindex: 3}
                ],
                
                [{noteval: "lowA", noteLenght: "quater", noteindex: 4},
                {noteval: "lowB", noteLenght: "quater", noteindex: 4},
                {noteval: "C", noteLenght: "quater", noteindex: 4},
                {noteval: "D", noteLenght: "quater", noteindex: 4},
                {noteval: "E", noteLenght: "quater", noteindex: 4},
                {noteval: "F", noteLenght: "quater", noteindex: 4},
                {noteval: "G", noteLenght: "quater", noteindex: 4},
                {noteval: "A", noteLenght: "quater", noteindex: 4},
                {noteval: "B", noteLenght: "quater", noteindex: 4},
                {noteval: "highC", noteLenght: "quater", noteindex: 4},
                {noteval: "highD", noteLenght: "quater", noteindex: 4},
                {noteval: "highE", noteLenght: "quater", noteindex: 4}],
                
                [{noteval: "lowA", noteLenght: "quater", noteindex: 5},
                {noteval: "lowB", noteLenght: "quater", noteindex: 5},
                {noteval: "C", noteLenght: "quater", noteindex: 5},
                {noteval: "D", noteLenght: "quater", noteindex: 5},
                {noteval: "E", noteLenght: "quater", noteindex: 5},
                {noteval: "F", noteLenght: "quater", noteindex: 5},
                {noteval: "G", noteLenght: "quater", noteindex: 5},
                {noteval: "A", noteLenght: "quater", noteindex: 5},
                {noteval: "B", noteLenght: "quater", noteindex: 5},
                {noteval: "highC", noteLenght: "quater", noteindex: 5},
                {noteval: "highD", noteLenght: "quater", noteindex: 5},
                {noteval: "highE", noteLenght: "quater", noteindex: 5}],
                
                [{noteval: "lowA", noteLenght: "quater", noteindex: 6},
                {noteval: "lowB", noteLenght: "quater", noteindex: 6},
                {noteval: "C", noteLenght: "quater", noteindex: 6},
                {noteval: "D", noteLenght: "quater", noteindex: 6},
                {noteval: "E", noteLenght: "quater", noteindex: 6},
                {noteval: "F", noteLenght: "quater", noteindex: 6},
                {noteval: "G", noteLenght: "quater", noteindex: 6},
                {noteval: "A", noteLenght: "quater", noteindex: 6},
                {noteval: "B", noteLenght: "quater", noteindex: 6},
                {noteval: "highC", noteLenght: "quater", noteindex: 6},
                {noteval: "highD", noteLenght: "quater", noteindex: 6},
                {noteval: "highE", noteLenght: "quater", noteindex: 6}],
                
                [{noteval: "lowA", noteLenght: "quater", noteindex: 7},
                {noteval: "lowB", noteLenght: "quater", noteindex: 7},
                {noteval: "C", noteLenght: "quater", noteindex: 7},
                {noteval: "D", noteLenght: "quater", noteindex: 7},
                {noteval: "E", noteLenght: "quater", noteindex: 7},
                {noteval: "F", noteLenght: "quater", noteindex: 7},
                {noteval: "G", noteLenght: "quater", noteindex: 7},
                {noteval: "A", noteLenght: "quater", noteindex: 7},
                {noteval: "B", noteLenght: "quater", noteindex: 7},
                {noteval: "highC", noteLenght: "quater", noteindex: 7},
                {noteval: "highD", noteLenght: "quater", noteindex: 7},
                {noteval: "highE", noteLenght: "quater", noteindex: 7}],
                
                [{noteval: "lowA", noteLenght: "quater", noteindex: 8},
                {noteval: "lowB", noteLenght: "quater", noteindex: 8},
                {noteval: "C", noteLenght: "quater", noteindex: 8},
                {noteval: "D", noteLenght: "quater", noteindex: 8},
                {noteval: "E", noteLenght: "quater", noteindex: 8},
                {noteval: "F", noteLenght: "quater", noteindex: 8},
                {noteval: "G", noteLenght: "quater", noteindex: 8},
                {noteval: "A", noteLenght: "quater", noteindex: 8},
                {noteval: "B", noteLenght: "quater", noteindex: 8},
                {noteval: "highC", noteLenght: "quater", noteindex: 8},
                {noteval: "highD", noteLenght: "quater", noteindex: 8},
                {noteval: "highE", noteLenght: "quater", noteindex: 8}],
            ]
        }
    }

    render(){
        return(
            <View style={style.rowContainor}>
                {
                    this.state.notes.map( (item, index) => {
                        return (
                            <View key={item[index].noteIndex} style={style.columnContainor}>
                               {
                                    item.map( (item, index) => {
                                        return (
                                            <View key={index}>
                                                <Note noteval= {item.noteval} noteLenght={item.noteLenght} noteIndex={ item.noteindex} />
                                            </View>
                                        )
                                    } )
                                } 
                            </View>
                        )
                    } )
                } 
            </View>
        )
    }
}

const style = StyleSheet.create({
    rowContainor: {flexDirection: "row", justifyContent: 'center'},
    columnContainor: {flexDirection: "column", justifyContent: "center"}
})