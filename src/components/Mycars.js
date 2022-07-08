import React, { Component } from "react";
import Car from './Cars';

class Mycars extends Component {
  render() {

    return (
    <div>
        <h1>{this.props.title}</h1>
        <Car color="Black"></Car>
        <Car color="Grey">FORD</Car>
        <Car >AUDI</Car>


    </div>)

  }
}

export default Mycars;
