import React, { Component } from "react";
import "./App.css";

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <img src={this.props.src} alt={this.props.alt}></img>
        <p> {this.props.weather}</p>
        <h4>
          Temperature{" "}
          <span>
            {this.props.mintemp}°C to {this.props.maxtemp}°C
          </span>
        </h4>
        <h6>
          Humidity<span>{this.props.humidity}%</span>Pressure
          <span>{this.props.pressure}</span>
        </h6>
      </>
    );
  }
}
