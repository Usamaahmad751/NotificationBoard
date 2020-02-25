import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

class Roles extends Component {
    static displayName = Roles.name;

    constructor(props) {
        super(props);
        this.state = { roles: [], loading: true };
    }

    componentDidMount() {
        this.populateRolesData();
    }

    static renderRolesTable(roles) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {roles.map(bike =>
                        <tr key={bike.id}>

                            <td>{bike.id}</td>
                            <td>{bike.name}</td>
                   
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Roles.renderRolesTable(this.state.roles);

        return (
            <div>
                <h1 id="tabelLabel" >ROles</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateRolesData() {
        const token = await authService.getAccessToken();
        const response = await fetch('Role', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({ roles: data, loading: false });

    }
}
export default Roles
