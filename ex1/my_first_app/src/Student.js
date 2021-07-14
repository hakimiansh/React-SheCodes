import React from 'react';
  
export class Student extends React.Component {
    render() {
        if (this.props.detials!==null) {
          return (
            <li>the name is {this.props.detials.name} and the average grade is {this.props.detials.grade} </li>
          )
        } else {
            return null;
        }
    }
  }
  export default Student;