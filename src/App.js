import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Header from "./Components/Header/Header";
import HomePage from "./Pages/Home/Homepage";
import ShopPage from "./Pages/Shap/ShopPage";
import SignInAndSignUpPage from "./Pages/SignInAndSignUp/SignInAndSignUpPage";

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/sign' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
