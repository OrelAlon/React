import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.ref.current.focus();
  }

  render() {
    return (
      <div>
        <input placeholder='What is your Name?' ref={this.ref} type='text' />
      </div>
    );
  }
}

export default Input;
