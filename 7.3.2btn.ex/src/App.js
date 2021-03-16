import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { count: 0, class: '' };

  handleClickP = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  };
  handleClickM = () => {
    if (this.state.count > -10) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    const colorMe = () => {
      if (Math.sign(this.state.count) === 1) {
        return 'green';
      } else if (Math.sign(this.state.count) === -1) {
        return 'red';
      } else {
        return '';
      }
    };
    return (
      <div>
        <button onClick={this.handleClickP}>Click +</button>
        {this.handleClickP.count}
        <button onClick={this.handleClickM}>Click -</button>
        {this.handleClickM.count}
        <p className={colorMe()}>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
