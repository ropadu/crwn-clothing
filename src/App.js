import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

class App extends React.Component {
  constructor(){
    super()
    this.state={
    }
  }

  render() {
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path ='/shop' component={ShopPage} />
      </Switch>
      </div>
    );

  }

}

export default App;
