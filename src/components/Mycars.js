import React, { Component } from "react";
import Car from './Cars';
import Header from "./Header";
import Wrapper from './Wrapper'
import Header from './Header'

class Mycars extends Component {
  render() {

    return (
    <div>
        <Wrapper>
          <Header>
            <h1>{this.props.title}</h1>
          </Header>

        </Wrapper>

        <Car color="Black"></Car>
        <Car color="Grey">FORD</Car>
        <Car >AUDI</Car>


    </div>)

  }
}

export default Mycars;
