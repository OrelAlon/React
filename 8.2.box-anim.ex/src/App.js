import './App.css';
import Box from './Box';
import React from 'react';

class App extends React.Component {
  state = { className: '' };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ className: 'box' });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      this.setState({ className: 'hide' });
    }, 4000);
  }

  render() {
    return (
      <div>
        <Box
          className={this.state.className}
          width='100px'
          height='100px'
          color='green'
        />
        <Box
          className={this.state.className}
          width='80px'
          height='80px'
          color='red'
        />
        <Box
          className={this.state.className}
          width='40px'
          height='40px'
          color='blue'
        />
      </div>
    );
  }
}

export default App;
