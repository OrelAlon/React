import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    option: [],
    oneOption: '',
    joke: '',
  };

  createOption = async () => {
    console.log('work');
    const responseOption = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    );

    this.setState({
      option: responseOption.data,
    });
    this.renderOptions();
  };

  renderOptions = () => {
    const options = this.state.option;
    return options.map((oneOption) => {
      return <option value={oneOption}>{oneOption}</option>;
    });
  };
  giveAjoke = async () => {
    const catgory = this.state.oneOption;
    const getJoke = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${catgory}`
    );
    this.setState({
      joke: getJoke.data.value,
    });
  };
  //activ
  componentDidMount() {
    this.createOption();
  }
  render() {
    console.log(this.state.oneOption);
    return (
      <div className='App'>
        <h1>Chuck Norris Jokes</h1>
        <select onChange={(e) => this.setState({ oneOption: e.target.value })}>
          <option value=''></option>
          {this.renderOptions()}
        </select>
        <button onClick={this.giveAjoke}>give a joke</button>
        <h2>{this.state.joke}</h2>
      </div>
    );
  }
}

export default App;
