import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

 class Jobs extends Component {
  static displayName = Jobs.name;

  constructor(props) {
      super(props);
      this.state = { jobs: [], loading: true };
  }

  componentDidMount() {
    this.populateJobData();
  }

  static renderJobTable(jobs) {
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
                {jobs.map(bike =>
                    <tr key={bike.id}>
                        <td>{bike.jobDescription}</td>
              <td>{bike.jobTitle}</td>
              <td>{bike.technologies}</td>
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
        : Jobs.renderJobTable(this.state.jobs);

    return (
      <div>
        <h1 id="tabelLabel" >Bikes On Rent</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

     async populateJobData() {
         const token = await authService.getAccessToken();
         const response = await fetch('Job', {
             headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
         });
         console.log(response)
         const data = await response.json();
         console.log(data)
         this.setState({ jobs: data, loading: false });

     }
}
export default Jobs
