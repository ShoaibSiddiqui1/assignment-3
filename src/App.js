// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      credits: [],
      debits: [],
      accountBalance: 0,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99'
      }
    };
  }

  // load credits and debits from the APIs
  async componentDidMount() {
    const creditsRes = await fetch('https://johnnylaicode.github.io/api/credits.json');
    const creditsData = await creditsRes.json();

    const debitsRes = await fetch('https://johnnylaicode.github.io/api/debits.json');
    const debitsData = await debitsRes.json();

    const accountBalance = this.calculateAccountBalance(creditsData, debitsData);

    this.setState({
      credits: creditsData,
      debits: debitsData,
      accountBalance: accountBalance
    });
  }

  // helper to always do totalCredits - totalDebits
  calculateAccountBalance = (creditsArray, debitsArray) => {
    const totalCredits = creditsArray.reduce((sum, item) => sum + Number(item.amount), 0);
    const totalDebits = debitsArray.reduce((sum, item) => sum + Number(item.amount), 0);
    // keep as number, but rounded to 2 decimals
    return Number((totalCredits - totalDebits).toFixed(2));
  }

  // called from Login.js
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  }

  // called from Credits.js
  addCredit = (description, amount) => {
    const newCredit = {
      id: Date.now(),
      description: description,
      amount: Number(amount),
      date: new Date().toISOString()
    };

    const updatedCredits = [newCredit, ...this.state.credits];
    const newBalance = this.calculateAccountBalance(updatedCredits, this.state.debits);

    this.setState({
      credits: updatedCredits,
      accountBalance: newBalance
    });
  }

  // called from Debits.js
  addDebit = (description, amount) => {
    const newDebit = {
      id: Date.now(),
      description: description,
      amount: Number(amount),
      date: new Date().toISOString()
    };

    const updatedDebits = [newDebit, ...this.state.debits];
    const newBalance = this.calculateAccountBalance(this.state.credits, updatedDebits);

    this.setState({
      debits: updatedDebits,
      accountBalance: newBalance
    });
  }

  render() {
    // routes so we can pass props
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );

    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );

    const CreditsComponent = () => (
      <Credits
        accountBalance={this.state.accountBalance}
        credits={this.state.credits}
        addCredit={this.addCredit}
      />
    );

    const DebitsComponent = () => (
      <Debits
        accountBalance={this.state.accountBalance}
        debits={this.state.debits}
        addDebit={this.addDebit}
      />
    );

    // basename is important for GitHub Pages
    return (
      <Router basename="/assignment-3">
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
