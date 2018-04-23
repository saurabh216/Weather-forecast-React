import React from "react";
import { geolocated } from "react-geolocated";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.confirm = this.confirm.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentWillMount(){
    this.props.clear();
}

  confirm() {
    if (this.props.coords) {
      this.props.add(this.props.coords.latitude, this.props.coords.longitude);
    }
  }

  toggle(){
      this.props.toggle();
  }
  render() {
    return (
      <div>
        {!this.props.isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
          <table>
            <tbody>
              <tr>
                <td>latitude</td>
                <td>{this.props.coords.latitude}</td>
              </tr>
              <tr>
                <td>longitude</td>
                <td>{this.props.coords.longitude}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div>Getting the location data&hellip; </div>
        )}
        {this.props.coords && <div><button onClick={this.confirm}>Confirm Location</button> <h5>or</h5></div>}  <h5 onClick={this.toggle}>Choose a City</h5>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Location);