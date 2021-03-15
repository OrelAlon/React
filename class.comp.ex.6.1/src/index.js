import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './component/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <Card
          img='https://cf.bstatic.com/images/hotel/max1024x768/241/241074112.jpg'
          h1='WOW'
          p='mUsT vISIT'
          link='https://github.com/OrelAlon/React/tree/main/card.4.2.ex'
          linkText='the prev ex'
        ></Card>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
