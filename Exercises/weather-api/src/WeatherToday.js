import React, { Component } from "react";
import "./App.css";

export default class WeatherToday extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="weather-today">
        <h5>{this.props.time}</h5>
        <img src={this.props.src} alt ="weather"></img>
        <h5>{this.props.temp}°C</h5>
      </div>
    );
  }
}
