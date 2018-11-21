import React from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = "1f842937508daefb3972932e62989be3";


class App extends React.Component {
  state = {
    temperture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  // Weather API
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperture: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }
  render() {
    return (
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-8 col-lg-8">
              <Title />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <Form getWeather={this.getWeather}/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <Weather
                  temperture={this.state.temperture}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}/>
              </div>
            </div>
            </div>
    );
  }
};

export default App;
