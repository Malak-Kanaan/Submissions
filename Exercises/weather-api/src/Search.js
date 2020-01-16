import React, { Component } from "react";
import "./App.css";

export default class Search extends Component {
  
    state = {
      input: ""
    };
  

  render() {
    return (
      <>
        <input
          type="text"
          id="input"
          
          placeholder="Type in a city name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <button type="submit" name="find-weather" id="button"
        onClick={event => {
            this.props.inputChange(this.state.input,event);
          }}>
          FIND WEATHER
        </button>
      </>
    );
  }
}
