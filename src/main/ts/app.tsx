import React, { Component } from "react";
import { createClient, HalResource } from "hal-rest-client";
import EmployeeList from './employeeList';
import EmployeeModel from './employeeModel';

class App extends Component {

   state = {
      employees: [] as EmployeeModel[]
   }

   componentDidMount() {
      this.refreshEmployees();
   }

   refreshEmployees = () => {
      const client = createClient("/api");
      let resource = client.fetchArray("/employees", HalResource);
      resource.then((result) => {
         let employees = result.map(r => (r.props));
         this.setState({ employees });
      }).catch((err) => {
         console.log(err);
      });
   }

   render() {
      return (
         <React.Fragment>
            <EmployeeList employees={this.state.employees} />
            <i className="fas fa-sync float-right" onClick={this.refreshEmployees}></i>
         </React.Fragment>
      )
   }
}

export default App;