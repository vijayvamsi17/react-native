import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/root';

export default class Header extends Component {
    state = {
        text: ""
    }

    constructor(props) {
        super(props);
    }

    addTask = () => {
        alert(this.state.text);
    }

    changeTextHandler = text => {
        this.setState({
             text: text 
            });
    }
 
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter something..."
                    value={this.state.text}
                    onChangeText={this.changeTextHandler}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.addTask()}>
                    <Text style={styles.text}>
                        Go!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}