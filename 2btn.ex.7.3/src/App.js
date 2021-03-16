import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { count: 0, class: '' };

  handleClickP = () => {
    this.setState({ count: this.state.count + 1, class: 'green' });
  };
  handleClickM = () => {
    this.setState({ count: this.state.count - 1, class: 'red' });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickP}>Click +</button>
        {this.handleClickP.count}
        <button onClick={this.handleClickM}>Click -</button>
        {this.handleClickM.count}
        <p className={this.state.class}>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
