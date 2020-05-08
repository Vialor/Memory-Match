import React from 'react';
import Card from './Card.js';
import Color from '../constants/Color.js'
import { StyleSheet, View, Text, Button } from 'react-native';

const cardsList = [[Color.color1, false, false],[Color.color1, false, false],[Color.color2, false, false],[Color.color2, false, false], 
                [Color.color3, false, false],[Color.color3, false, false],[Color.color4, false, false],[Color.color4, false, false], 
                [Color.color5, false, false],[Color.color5, false, false],[Color.color6, false, false],[Color.color6, false, false], 
                [Color.color7, false, false],[Color.color7, false, false],[Color.color8, false, false],[Color.color8, false, false]];
                // [[color, isMatched, showColor], [...], ...]

export default class GameBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chosenItem: null,
            step: 0,
            cards: shuffleArray(cardsList), // [[color, isMatched, showColor], [...], ...]
        }

    }

    handlePress(i){ // what if I press an already matched card
        const chosenItem = this.state.chosenItem;
        const cards = this.state.cards;
        console.log(chosenItem);
        if (chosenItem==null) {
            cards[i][2] = true;
            this.setState({
                chosenItem: i,
                cards: cards,
            });
        } else if (i!=chosenItem){ // cannot store the same card again
            cards[i][2] = true;
            if (cards[i][0]==cards[chosenItem][0]){ // same color
                cards[i][1] = true;
                cards[chosenItem][1] = true;
            } else{ // different color
                // wait and do:
                cards[i][2] = false;
                cards[chosenItem][2] = false;
            }
            this.setState({
                chosenItem: null,
                cards: cards,
            });
        }
    }

    renderCard(i){
        return(
            <Card color={this.state.cards[i][0]} 
            isMatched={this.state.cards[i][1]} 
            showColor={this.state.cards[i][2]}
            onPress={()=>this.handlePress(i)}/>
        )
    }

    render(){
        const step = this.state.step;
        return(
        <View style={styles.container}>
        {checkWin(this.state.cards) &&
        <>
         <Text style={styles.text}>Congratulation! You Did It!</Text>
         <Button title="Play Again" 
         onPress={() => {this.setState({
            chosenItem: null,
            step: 0,
            cards: shuffleArray(cardsList)});
            }}
         />
        </>
        }
        <Text style={styles.text}>Step: {step}</Text>
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
    let shuffledArr = JSON.parse(JSON.stringify(array)); // deep copy
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
}

function checkWin(cards){
    for (let i=0; i<cards.length; i++){
        if (!cards[i][1]) return false;
    }
    return true;
}

