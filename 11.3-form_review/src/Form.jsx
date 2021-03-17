import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valFirst: '',
      valLast: '',
      valAge: '',
      valFree: '',
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   handleChange(event) {
  //     this.setState({ valFirst: event.target.value });
  //   }
  handleSubmit(event) {
    const c = window.confirm(
      'confirmed your data: your name: ' +
        this.state.valFirst +
        ' ' +
        this.state.valLast +
        ' you are: ' +
        this.state.valAge +
        ' did you forget to say something? ' +
        this.state.valFree +
        ''
    );
    c ? alert('thx') : event.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='text'>name:</label>
          <input
            value={this.state.valFirst}
            onChange={(e) => this.setState({ valFirst: e.target.value })}
            type='text'
          />
          <label htmlFor='text'>last:</label>
          <input
            type='text'
            value={this.state.valLast}
            onChange={(e) => this.setState({ valLast: e.target.value })}
          />
          <label htmlFor='text'>age:</label>
          <select
            id='age'
            value={this.state.valAge}
            onChange={(e) => this.setState({ valAge: e.target.value })}
          >
            <option value=' '> </option>
            <option value='old'>Old</option>
            <option value='Young'>Young</option>
          </select>
          what on your mind?
          <textarea
            id='textarea'
            rows='4'
            cols='12'
            value={this.state.valFree}
            onChange={(e) => this.setState({ valFree: e.target.value })}
          ></textarea>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
// (e) => this.setState({ valFirst: e.target.value })
