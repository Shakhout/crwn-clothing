import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from "./Components/Header/Header";
import HomePage from "./Pages/Home/Homepage";
import ShopPage from "./Pages/Shap/ShopPage";
import SignInAndSignUpPage from "./Pages/SignInAndSignUp/SignInAndSignUpPage";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signIn' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
