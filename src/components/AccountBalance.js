// src/components/AccountBalance.js
import React, { Component } from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div>
        Balance: {Number(this.props.accountBalance).toFixed(2)}
      </div>
    );
  }
}

export default AccountBalance;
