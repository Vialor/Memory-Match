import React from 'react';
import Card from './Card.js';
import { StyleSheet, View, Text } from 'react-native';

export default class GameBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clickedItem: [],
            score: 0,
            time: 100,
        }
    }

    render(){
        return(
        <>
        <Text style={styles.text}>Score: {this.state.score}</Text>
        <Text style={styles.text}>Time: {this.state.time}</Text>
        <View style={styles.row}>
        <Card/><Card/><Card/><Card/>
        </View>

        <View style={styles.row}>
        <Card/><Card/><Card/><Card/>
        </View>

        <View style={styles.row}>
        <Card/><Card/><Card/><Card/>
        </View>
        <View style={styles.row}>
        <Card/><Card/><Card/><Card/>
        </View>
        </>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    text: {
        fontSize: 20,
    },
  });