import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather} class="form-group">
        <input type="text" name="city" placeholder="City.." class="form-control"/><br/>
        <input type="text" name="country" placeholder="Country..." class="form-control"/><br/>
        <button class="btn btn-danger btn-md d-flex justify-content-center" style={buttonStyle}>GET WEATHER</button>
      </form>
    );
  }
}

const buttonStyle = {
  textAlign:'center',
  paddingLeft: '15px',
  paddingRight: '15px',

};


export default Form;
