import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

class Bikes extends Component {
    static displayName = Bikes.name;

  constructor(props) {
      super(props);
      this.state = { bikes: [], loading: true };
  }

  componentDidMount() {
    this.populateBikesData();
  }

  static renderBikesTable(bikes) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
            <tbody>
                {bikes.map(bike =>
                    <tr key={bike.bikeName}>
                        <td>{bike.bikeDescription}</td>
              <td>{bike.fare}</td>
              <td>{bike.mobileNumber}</td>
              <td>{bike.imagePath}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Bikes.renderBikesTable(this.state.bikes);

    return (
      <div>
        <h1 id="tabelLabel" >Bikes On Rent</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

     async populateBikesData() {
         const token = await authService.getAccessToken();
         const response = await fetch('Bike', {
             headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
         });
         console.log(response)
         const data = await response.json();
         console.log(data)
         this.setState({ bikes: data, loading: false });

     }
}
export default Bikes
