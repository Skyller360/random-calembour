import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      first: ['Tromblon', 'Piston', 'Coulis', 'Pompier', 'Pangolin', 'Bourru'],
      second: ['avacheur', 'tripoteur', 'rouilleur', 'sculpteur', 'sussoteur', 'titilleur'],
      third: ['de slip', 'du Nord', 'du syphon', 'de fesse droite', 'ouzbek']
    };
  }
  render() {
    const first = Math.floor((Math.random() * this.state.first.length));
    const second = Math.floor((Math.random() * this.state.second.length));
    const third = Math.floor((Math.random() * this.state.third.length));

    return (
      <div className="App">
        <p>{this.state.first[first]} {this.state.second[second]} {this.state.third[third]}</p>
      </div>
    );
  }
}

export default App;
