import React, { Component } from "react";
import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather.js";
import WeatherToday from "./WeatherToday";





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],city:"Beirut"
    };
  }

  roundC = c => {
    return Math.round(c);
  };

  timeFun = timeInSec => {
    const array = timeInSec.split(" ");
    const newArray = array[1].split(":");
    return `${newArray[0]}:${newArray[1]}`;
  };

  getData(value){

    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+`${value}`+'&cnt=8&units=metric&appid=be759a526d138ed13d258b92b788b7fc')
    .then( response => {
    if (!response.ok) { throw response }
    return response.json()  
  })
    .then((data) => {
      this.setState({ todos: data })
      //console.log(this.state.todos.list[0].weather[0].description)
    })
    .catch( err => {
      
        console.log(err);
      }) 
  }

  

  



  componentDidMount() {
   
      this.getData(this.state.city);
     
    
    
  
}

inputChange = (value,e) => {
   e.preventDefault();
   
   this.getData(value);
 }; 

imagesChecker = (id) =>{
    
    
  if (id < 300){
    return storm;
  }else if(id >= 300 && id <= 499){
      return drizzle;
    }else if(id >= 500 && id <= 599){
      return rain;
    }else if(id >= 600 && id <= 699){
      return snow;

    }else if(id >= 700 && id <= 799){
      return fog;

    }else if(id === 800){
      return clear;

    }else if(id === 801){
      return partlycloudy;
    }else if(id > 801 && id <= 805){
      return mostlycloudy;
    }
    
  }


  render() {
    
      if(this.state.todos.length === 0){
        return <div></div>
    }else{
      return(
      <div className="app">
        <header className="app__header">
          <Search inputChange={this.inputChange} />
        </header>
        <main className="app__main">
          <div>
            <CurrentWeather
              src={this.imagesChecker(this.state.todos.list[0].weather[0].id)}
              alt={this.state.todos.list[0].weather[0].main}
              weather={this.state.todos.list[0].weather[0].description}
              mintemp={this.roundC(this.state.todos.list[0].main.temp_min)}
              maxtemp={this.roundC(this.state.todos.list[0].main.temp_max)}
              humidity={this.state.todos.list[0].main.humidity}
              pressure={this.state.todos.list[0].main.pressure}
            />
          </div>
          <div id="gridss">
            {this.state.todos.list.map((weath, i) => {
              i++;
              if (i < 9) {
                return (
                  <WeatherToday
                  key = {i}
                    time={this.timeFun(weath.dt_txt)}
                    src={this.imagesChecker(weath.weather[0].id)}
                    temp={this.roundC(weath.main.temp)}
                  />
                );
              }
            })}
          </div>
        </main>
      </div>

      );}
    
  }
      
}

export default App;
