import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      first: ['Tromblon', 'Piston', 'Coulis', 'Pompier', 'Pangolin', 'Bourru', 'Steak', 'Rognon', 'Marcassin', 'SDF'],
      second: ['avacheur', 'tripoteur', 'rouilleur', 'sculpteur', 'sussoteur', 'titilleur', 'bricoleur', 'communiste', 'gratteur', 'voyeur', 'ivre'],
      third: ['de slip', 'du Nord', 'du syphon', 'de fesse droite', `d'insanités`, 'de tournevis', 'du flap', 'de la haute bourgeoisie'],
      firstR: 0,
      secondR: 0,
      thirdR: 0
    };
  }

  componentDidMount() {
    this.setState({
      firstR: this.randomizer(this.state.first.length),
      secondR: this.randomizer(this.state.second.length),
      thirdR: this.randomizer(this.state.third.length)
    });
  }

  reload = () => {
    this.setState({
      firstR: this.randomizer(this.state.first.length),
      secondR: this.randomizer(this.state.second.length),
      thirdR: this.randomizer(this.state.third.length)
    });
  }

  randomizer(length) {
    return Math.floor((Math.random() * length));
  }

  render() {
    const { first, second, third, firstR, secondR, thirdR } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>{first[firstR]} {second[secondR]} {third[thirdR]}</p>
          <Button
            onClick={this.reload}
            variant="contained"
            color="primary"
          >
            Reload
            <RefreshIcon />
          </Button>
        </header>
      </div>

    );
  }
}

export default App;
