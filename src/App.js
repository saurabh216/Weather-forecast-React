import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Location from './Location';
import Cities from './City';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auto: false,
      lat: '',
      lan: '',
      city: ''
    }
    this.addLoc = this.addLoc.bind(this);
    this.addCity = this.addCity.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getData = this.getData.bind(this);
    this.clearData = this.clearData.bind(this);
  }
  toggle(){
    this.setState({
      auto: !this.state.auto
    })
  }
  addLoc(lat,lan){
    this.setState({
      lat: lat,
      lan: lan,
      city: '',
      data: ''
    })
  }
  addCity(city){
    console.log(city)
    this.setState({
      lat: '',
      lan: '',
      city: city
    })
  }
  clearData(){
    this.setState({
      data: '',
      lan: '',
      lat: '',
      city: ''
    })
  }
  getData(){
    var url = "";
    if(this.state.city == ''){
      url = "https://api.openweathermap.org/data/2.5/weather?lat="+ this.state.lat +"&lon="+ this.state.lan + "&APPID=b475396cf1cb9bbf4d12eb614ae3b536"      
    }else if(this.state.lan == ''){
      url = "https://api.openweathermap.org/data/2.5/weather?q="+ this.state.city +"&APPID=b475396cf1cb9bbf4d12eb614ae3b536"
    }
    Axios.get(url).then(
      (response) => {
        console.log(response.data);
        this.setState({
          data: response.data
        })
      }
    ).catch((error)=>{
      alert("Error. Check console for details");
      console.log(error);
    })

  }
  render() {
    return (
      <div>
        {this.state.auto ? <Location clear={this.clearData} toggle={this.toggle} add={this.addLoc}></Location> : <Cities clear={this.clearData} toggle={this.toggle} add={this.addCity}></Cities>}
        {(this.state.city || this.state.lan) && <button id="btn" onClick={this.getData}>Get Weather Data</button>}
        {this.state.data &&
          <div id="result">
            <p>Temperature : {this.state.data.main.temp}</p>
            <p>Wind Speed : {this.state.data.wind.speed}</p>
            <p>Humidity : {this.state.data.main.humidity}</p>
          </div>
        }
     </div>
    );
  }
}

export default App;