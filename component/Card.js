import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Color from '../constants/Color.js'

export default class Card extends React.Component{
    constructor(props){
        super(props);
    }

    cardStyle=()=>{
        return {
            backgroundColor: (this.props.isMatched||this.props.showColor)?this.props.color:Color.default,
            width: 80,
            height: 80,
            margin: 5,
            borderRadius: 10,
        };
    };

    render(){
        return(
        <TouchableOpacity style={this.cardStyle()} onPress={()=>this.props.onPress()}></TouchableOpacity>
        );
    }
}
