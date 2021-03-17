import React from 'react';
class CustomButton extends React.Component {
  ///
  ///
  render() {
    return (
      <button
        onClick={(e) => this.props.onClick(e.target.textContent)}
        className={this.props.nameBtn}
      >
        {this.props.nameBtn}
      </button>
    );
  }
}

export default CustomButton;
