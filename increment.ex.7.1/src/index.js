import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = { count: 0 };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {this.handleClick.count}
        <p>{this.state.count}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
