import React, { Component } from 'react';
import SearchInput from './Components/SearchInput';
import styles from './App.module.css';
import Cards from './Components/Cards';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: [],
      responseHasError: false,
    }
  }

  removeHandler = (id) => {
    this.setState(prevState => {
      return {
        weatherData: prevState.weatherData.filter(item => item.id !== id)
      };
    })
  }

  addData = (searchedWeather) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedWeather}&appid=3601ee5e9a6c3e458b91afd676c13d5f&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then(json => this.setState(prevState => ({
        weatherData: [...prevState.weatherData, json],
        responseHasError: false,
      })))
      .catch(() => {
        this.setState({ responseHasError: true });
      })
  }

  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.appHeader}>Weather App</h1>
        <SearchInput addData={this.addData} hasError={this.state.responseHasError} />
        <Cards weatherData={this.state.weatherData} removeHandler={this.removeHandler} />
      </div>
    )
  }
}

export default App;
