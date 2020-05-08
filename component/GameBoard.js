import React from 'react';
import Card from './Card.js';
import Color from '../constants/Color.js'
import { StyleSheet, View, Text } from 'react-native';

const cardsList = [[Color.color1, false], [Color.color1, false],[Color.color2, false],[Color.color2, false], 
[Color.color3, false],[Color.color3, false],[Color.color4, false],[Color.color4, false], 
[Color.color5, false],[Color.color5, false],[Color.color6, false], [Color.color6, false], 
[Color.color7, false], [Color.color7, false], [Color.color8, false], [Color.color8, false]];
shuffleArray(cardsList);

export default class GameBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chosenItem: null,
            step: 0,
            time: 100,
            cards: cardsList, // [[color, isMatched], [...], ...]
        }

    }

    handlePress(i){
        const chosenItem = this.state.chosenItem;
        const cards = this.state.cards;
        console.log(chosenItem);
        if (chosenItem==null) {
            // do animation
            this.setState({chosenItem: i});
        } else if (i!=chosenItem){ // cannot store the same card again
            // do something
            this.setState({chosenItem: null});
        }
    }

    renderCard(i){
        return(
            <Card color={this.state.cards[i][0]} 
            isMatched={this.state.cards[i][1]} 
            onPress={()=>this.handlePress(i)}/>
        )
    }

    render(){
        const step = this.state.step;
        const time = this.state.time;
        return(
        <View style={styles.container}>
        <Text style={styles.text}>Step: {step}</Text>
        <Text style={styles.text}>Time: {time}</Text>
        <View style={styles.row}>
            {this.renderCard(0)}
            {this.renderCard(1)}
            {this.renderCard(2)}
            {this.renderCard(3)}
        </View>
        <View style={styles.row}>
            {this.renderCard(4)}
            {this.renderCard(5)}
            {this.renderCard(6)}
            {this.renderCard(7)}
        </View>

        <View style={styles.row}>
            {this.renderCard(8)}
            {this.renderCard(9)}
            {this.renderCard(10)}
            {this.renderCard(11)}
        </View>
        <View style={styles.row}>
            {this.renderCard(12)}
            {this.renderCard(13)}
            {this.renderCard(14)}
            {this.renderCard(15)}
        </View>
        </View>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

