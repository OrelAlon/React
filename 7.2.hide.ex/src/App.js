import './App.css';
import React from 'react';

class App extends React.Component {
  state = { hidden: true };

  handleClick = () => {
    this.setState((state) => ({
      hidden: !state.hidden,
    }));
  };

  render() {
    console.log(this.state);

    return (
      <div className='App'>
        <button onClick={this.handleClick}>Click Me</button>
        {this.state.hidden ? <Box></Box> : null}
      </div>
    );
  }
}

const Box = () => {
  return <div className='colorMe'></div>;
};

export default App;
