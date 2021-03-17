import './App.css';
import React from 'react';
import CustomButton from './components/CustomButton';

class App extends React.Component {
  state = { color: '' };

  /////simple create btns function with set state on the way

  handleMapBtns() {
    const colors = ['blue', 'red', 'yellow']; ///the color ==num of btn
    return colors.map((
      pickColor /// map on this arr colors
    ) => (
      <CustomButton ////create btn
        onClick={(setColor) => this.setState({ color: setColor })} //and for each btn do on click to change the set state
        nameBtn={pickColor} ///name each btn
      />
    ));
  }

  // arr.map(i=> {<div>{i}</div>});

  render() {
    return (
      <div>
        {this.handleMapBtns()}
        <h1 className={this.state.color}>
          YOU PUSH ON THE COLOR: {this.state.color}
        </h1>
      </div>
    );
  }
}

export default App;

//////////////////////////////////////////////////
