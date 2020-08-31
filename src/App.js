import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from "./Pages/Home/Homepage";
import ShopPage from "./Pages/Shap/ShopPage";
import Header from "./Components/Header/Header";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
