import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    fourSushis: [],
    eatenSushis: [],
    balance: 100,
    additionalFunds: 0
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    let funds = event.target.value
    this.setState({
      additionalFunds: funds
    }, () => console.log(this.state.additionalFunds))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // debugger
    let oldBalance = this.state.balance
    let newFunds = this.state.additionalFunds
    let newBalance = parseInt(oldBalance, 10) + parseInt(newFunds,10)
    // console.log(newBalance)
    this.setState({
      balance: newBalance
    })
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({
      allSushis: data,
      fourSushis: data.slice(0,4)
    }))
  }

  eatSushi = (sushi) => {
    // console.log(sushi.id)
    // console.log(this.state)
    // first set up the eatenSushis setState to pass as props
    // second refactored to place a price check BEFORE setting the state
    let sushis = this.state.fourSushis;
    let newBalance = this.state.balance;
    if (this.state.balance >= sushi.price) {
      for( let i = 0; i < sushis.length; i++){ 
        if ( sushis[i].id === sushi.id) {
          this.setState({ 
            eatenSushis: [...this.state.eatenSushis, sushis[i]]
          })
          // sushis.splice(i, 1); 
        }
      }
      newBalance-=sushi.price
      this.setState({balance: newBalance})
    } 
  }

  addSushi = () => {
    // console.log("I hit the add sushi button")
    let lastSushi = this.state.fourSushis[3]
    let lastSushiId = lastSushi.id
    let nextSushis = this.state.allSushis
    let newArray = nextSushis.slice(lastSushiId,lastSushiId+4)
    this.setState({
      fourSushis: newArray
    })
  }

  render() {
    // console.log(this.state.allSushis)
    // console.log(this.state.fourSushis)
    return (
      <div className="app">
        <SushiContainer sushi={this.state.fourSushis} eatSushi={this.eatSushi} eatenSushis={this.state.eatenSushis} addSushi={this.addSushi}/>
        <Table balance={this.state.balance} eatenSushis={this.state.eatenSushis} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        {/* <AddMoney balance={this.state.balance} /> */}
      </div>
    );
  }
}

export default App;