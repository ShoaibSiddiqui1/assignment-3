// src/components/Debits.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      amount: ''
    };
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDebit(this.state.description, this.state.amount);
    this.setState({ description: '', amount: '' });
  }

  render() {
    return (
      <div>
        <h1>Debits</h1>

        <AccountBalance accountBalance={this.props.accountBalance} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Description: </label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              required
            />
          </div>
          <div>
            <label>Amount: </label>
            <input
              type="number"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleAmountChange}
              required
            />
          </div>
          <button type="submit">Add Debit</button>
        </form>

        <h3>Debit List</h3>
        <ul>
          {this.props.debits.map((debit) => (
            <li key={debit.id}>
              {debit.description} — ${Number(debit.amount).toFixed(2)} — {debit.date.slice(0, 10)}
            </li>
          ))}
        </ul>

        <br />
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Debits;
