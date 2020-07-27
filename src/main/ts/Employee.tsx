import React, { Component } from 'react';

type EmployeeProps = {
   employee: { firstName: string, lastName: string, description: string }
}

class Employee extends Component<EmployeeProps> {

   render() {
      const { firstName, lastName, description } = this.props.employee;
      return (
         <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{description}</td>
         </tr>
      );
   }
}

export default Employee;