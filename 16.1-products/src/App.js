import { BrowserRouter as BR, Route } from 'react-router-dom';

import React from 'react';
import Homepage from './Homepage';
import Products from './Products';
import OneProduct from './OneProduct';
import Header from './Header';
// import Notfound from './Notfound';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BR>
        <Header />

        {/* <Switch> */}
        <Route path='/' exact component={Homepage} />
        <Route path='/products' exact component={Products} />
        <Route path='/products/:id' exact component={OneProduct} />
        {/* <Route component={Notfound} /> */}
        {/* </Switch> */}
      </BR>
    </div>
  );
}

export default App;
