import React, { Component } from 'react';
import Employee from './Employee';
import EmployeeModel from './employeeModel';

type EmployeeListProps = {
   employees: EmployeeModel[];
}


class EmployeeList extends Component<EmployeeListProps> {
   render() {
      return (
         <table className="table table-bordered table-striped table-sm">
            <thead>
               <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Description</th>
               </tr>
            </thead>
            <tbody>
               {this.props.employees.map(e => (
                  <Employee key={e.href} employee={e} />
               ))}
            </tbody>
         </table>
      )
   }
}



export default EmployeeList;