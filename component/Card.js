import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {color: "black", isHead: false};

        this.handleClick = this.handleClick.bind(this);
        this.cardStyle = this.cardStyle.bind(this);
    }

    handleClick(){
        this.setState((state)=>({isHead: !state.isHead}));
        this.setState({color: "blue"});
    }

    cardStyle(){
        return {
            backgroundColor: this.state.color,
            width: 80,
            height: 80,
            margin: 5,
            borderRadius: 10,
        };
    };

    render(){
        return(
        <TouchableOpacity style={this.cardStyle()} onPress={this.handleClick}></TouchableOpacity>
        );
    }
}
