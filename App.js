import React, {Component} from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Tasks from './src/components/Tasks';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskList: [{
          text: 'Hello'
      },{
          text: 'Hello'
      },{
          text: 'Hello'
      }]
  }

  }
  render() {
    return (
        <View>
          <Header />
          <Tasks taskList={this.state.taskList}/>
        </View>
    );
  }
}
