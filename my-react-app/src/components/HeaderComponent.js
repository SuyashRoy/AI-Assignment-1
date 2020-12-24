import React, { Component } from 'react';
import { Navbar, NavbarBrand,Collapse,Nav,NavItem,NavLink,NavbarToggler,Jumbotron, Col} from 'reactstrap';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";

    class Header extends Component {
    
        state = {
          collapseID: ''
        };
      
        toggleCollapse = collapseID => () => {
          this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
          }));
        };
      
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container col-md-12 col-sm-4">
            <NavbarBrand href="/" className="logo"><img src= '/Ooredoo.png'  style={{ height: "5.9rem"}}/></NavbarBrand>
            <NavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              
       <Nav class="col-sm-6">

                <NavItem className="active1">
                    <span className="fa fa-home fa-lg" /> Dashboard
                    &nbsp;&nbsp;  &nbsp;&nbsp; 
                </NavItem>
                <NavItem>
                     &nbsp;&nbsp;  &nbsp;&nbsp;
                    <span className="fa fa-television inactive1" /> Monitoring
                    &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                </NavItem>
                <NavItem>
                 
                    <span className="fa  fa-line-chart  inactive1" /> Analytics
                    &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                </NavItem>
                <NavItem>
                 
                    <span className="fa fa-pie-chart  inactive1" /> Reports
                    &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                </NavItem>
                <NavItem>
                 
                 <span className="fa fa-bell-o  inactive1" /> Alarms
                 &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
             </NavItem>
             
              </Nav>
              <Nav className="ml-auto" navbar>
              <NavLink>
            <img class="img-circle rounded-circle img1" src="https://bootdey.com/img/Content/avatar/avatar5.png" />
            
               <span className="img1">Admin</span>
                </NavLink>
              </Nav>
       
        </div>
      </Navbar>
       {/* <Jumbotron className="body">
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                    </div>
               </div>
           </div>
       </Jumbotron> */}
       
    </React.Fragment>
    );
  }
}

export default Header;