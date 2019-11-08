import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/root';

export default class Tasks extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.taskContainer}>
                <FlatList data={this.props.taskList}
                    renderItem={({ item }) =>
                        <View style={styles.taskItems}>
                            <Text style={styles.taskText}>{item.text}</Text>
                        </View>
                    } keyExtractor={(item, index) => index.toString()} />
            </View>
        );
    }
}