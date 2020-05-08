import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default class Card extends React.Component{
    constructor(props){
        super(props);
    }

    cardStyle=()=>{
        return {
            backgroundColor: this.props.color,
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
