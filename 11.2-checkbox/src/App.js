import React from 'react';
import Input from './Input';
import './App.css';

class App extends React.Component {
  createCheck() {
    const texts = ['1', '2', '3', '4'];
    return texts.map((t, i) =>
      i < 2 ? (
        <Input text={t} checked={false} />
      ) : (
        <Input text={t} checked={true} />
      )
    );
  }
  render() {
    return (
      <div>
        <form action=''></form>
        bla bla bla:
        {this.createCheck()}
        {/* <Input /> */}
      </div>
    );
  }
}
export default App;
