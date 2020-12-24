import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Middle from './MiddleComponent';
import Example from './FooterComponent';
 
class Main extends Component{
  render() {
    return (
      <div>
         <Header/>
          <br>
          </br>
          <Middle/>
          <br></br>
          <Example/>
      </div>
      
      
    );
  }
}

export default Main;