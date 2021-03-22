import React from 'react';
// import Name from './Name.js';
import Card from './Card';
import Data from './Data';
import './App.css';

class App extends React.Component {
  state = {
    names: [],
    old: [],
  };
  getData = () => Data.map((e) => <li>{e.name}</li>);
  getYear = () =>
    Data.map((e) => {
      const targetYear = e.birthday.split('-')[2];
      if (targetYear < 1990) {
        console.log(e);
        return e;
      }
    });
  componentDidMount() {
    console.log(Data);
    this.getYear();
    this.setState({ old: this.getYear() });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>names:</h1>
        {this.getData()}
        <h1>old people:</h1>
        <Card data={this.state.old} />
      </div>
    );
  }
}
export default App;
