import React from 'react';

class CustomButton extends React.Component {
  render() {
    return (
      <button
        onClick={(e) => this.props.onClick(e.target.textContent)}
        className={this.props.color}
      >
        {this.props.color}
      </button>
    );
  }
}

export default CustomButton;
