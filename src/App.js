import React, { Component } from 'react';
import './App.css';
import Fetch from 'react-fetch'
import Request from 'superagent';

const pathParams = {
  a: 'a'
}


class App extends Component {

  constructor(props) {
  super(props);

  this.state = {}
}

  componentWillMount() {
    fetch('https://maps.googleapis.com/maps/api/directions/json?mode=bicycling&origin=38.8713700,-104.8221310&destination=38.9091780,-104.7828480&&waypoints=key=AIzaSyB6mjYhp5ca_RPpOdHu_Ul7E-YY6BYzmms')
  }


  render() {
    return (
      <div>
        <div className="container">
          <h1 className="Header">Bike Path Me</h1>
        <div>
          <form>
            <label>
              How many destinations?
              <select>
                <option defaultValue value="0">0</option>
                <option value="1-3">1-3</option>
                <option value="4-5">4-5</option>
                <option value="6+">6+</option>
              </select>
            </label>
            <br></br>
            <label>
            What kind of places do you want to go to?
              <select>
                <option defaultValue value="all">All</option>
                <option value="restaurants">Restaurants</option>
                <option value="bars">Bars</option>
                <option value="coffee shops">Coffee shops</option>
              </select>
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
