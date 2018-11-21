import React from 'react';


class Weather extends React.Component {
  render() {
    return (
      <div className="text-center mt-5">
      { this.props.city && this.props.country && <p class="text-white">Location: {this.props.country}, {this.props.city}</p>}
      { this.props.temperture && <p class="text-white">temperture: { this.props.temperture }</p>}
      { this.props.humidity && <p class="text-white">Humidity: { this.props.humidity } </p>}
      { this.props.conditions && <p class="text-white">this.props.description</p> }
      </div>

    );
  }
}


export default Weather;
