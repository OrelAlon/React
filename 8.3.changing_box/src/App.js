import './App.css';
import React from 'react';
import { logDOM } from '@testing-library/dom';

class App extends React.Component {
  state = { className: '' };

  componentDidMount() {
    setInterval(() => {
      this.setState({ className: 'box' });
    }, 500);
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      this.setState({ className: 'circleMe' });
    }, 5000);
  }

  render() {
    const Rcolor = '#' + Math.random().toString(16).substr(-6);
    console.log('run');
    return (
      <div>
        <Box
          className={this.state.className}
          width='100px'
          height='100px'
          color={Rcolor}
        />
      </div>
    );
  }
}
const Box = (props) => {
  return (
    <div
      className={props.className}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
      }}
    ></div>
  );
};

export default App;
