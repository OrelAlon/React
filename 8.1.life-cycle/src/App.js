import './App.css';
import React from 'react';

class App extends React.Component {
  state = { favoriteColor: 'Red', text: null };

  componentDidMount() {
    // console.log('componentDidMount');
    setTimeout(() => this.setState({ favoriteColor: 'Pink!' }), 1000);
  }
  componentDidUpdate(x, prevState) {
    // console.log('componentDidUpdate');

    // console.log(x);
    // console.log(prevState);
    // console.log(this.state.favoriteColor);
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      this.setState({
        text: `The updated favorite color is ${this.state.favoriteColor}`,
      });
    }
  }
  render() {
    // console.log('render');

    return (
      <div>
        <h1>Orel fav color: {this.state.favoriteColor}</h1>
        <div id='bla'>{this.state.text}</div>
      </div>
    );
  }
}

export default App;
