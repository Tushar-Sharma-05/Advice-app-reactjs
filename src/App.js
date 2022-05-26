import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  state = { advice: "" };
  componentDidMount(){
    this.fetchadvice();
  
  }

  fetchadvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      const {advice} = response.data.slip
      this.setState({advice})

    })
    .catch((error) =>{
      console.log(error)


    })
  }
  render() {
    return (
      <div>

        <div className="app">
          <div className="card">
        <h1 className='heading'>{this.state.advice}</h1>
        <button class="custom-btn btn-9" onClick={this.fetchadvice}>Read More</button>
      

          </div>
        </div>
      </div>
    )
  }
}

