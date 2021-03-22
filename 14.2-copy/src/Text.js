import React from 'react';

class Text extends React.Component {
  constructor() {
    super();
    this.textareaRef = React.createRef();
  }

  copyText = () => {
    this.textareaRef.current.select();
    document.execCommand('cut'); ///cool!
  };
  render() {
    return (
      <div>
        <label htmlFor='someTeat'>What do you want to copy??</label>
        <textarea
          ref={this.textareaRef}
          id='someTeat'
          name='someTeat'
          rows='4'
          cols='30'
        ></textarea>
        <button onClick={this.copyText}>Copy</button>
      </div>
    );
  }
}

export default Text;
