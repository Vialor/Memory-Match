import React from 'react';
import Card from './Card.js';
import { StyleSheet, View, Text } from 'react-native';

export default class GameBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chosenItems: [],
            step: 0,
            time: 100,
            cards: [['orange', false], ['orange', false],['orange', false],['orange', false], 
            ['orange', false],['orange', false],['orange', false],['orange', false], 
            ['orange', false],['orange', false],['orange', false], ['orange', false], 
            ['orange', false], ['orange', false], ['orange', false], ['orange', false]],
            // random generated color and isMatched
        }

    }

    handlePress(i){
        const chosenItems = this.state.chosenItems
        this.setState({chosenItems: chosenItems.concat([i])});
        const chosenNum = chosenItems.length;
        console.log(chosenNum);
        if (chosenNum==1){
            console.log("Store one item");
        } else if (chosenNum==2){

            this.setState({chosenItems: []});
        } else{
            console.log("Numbers of chosen items should be 1 or 2.");
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