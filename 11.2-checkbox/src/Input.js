import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div>
        <input checked={this.props.checked} type='checkbox' name='op1'></input>
        <label htmlFor='op1'>{this.props.text}</label>
      </div>
    );
  }
}

export default Input;
