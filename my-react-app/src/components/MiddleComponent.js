import React, {Component} from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Button,
  Dropdown,
  DropdownItem,
    DropdownToggle,
    DropdownMenu,
    CardBlock
} from "reactstrap";

class Middle extends Component{
    render(){
        return(
        <div class="container"> 
        <div class="card-group"> 
  
          
            <div class="row"> 
                <div class="card col-md-9"> 
                <Card>
                <div>
                    <div>
                        <Button className="col-md-3" color="">
                            <img src="" style={{}}/>
                            <h4>
                                Total Generator
                            </h4>
                            <br></br>
                            200
                        </Button>&nbsp;&nbsp;
                        <Button className="col-md-3" color="">
                            <img src="" style={{}}/>
                            <h4>
                                On Generator
                            </h4>
                            <br></br>
                            180
                        </Button>&nbsp;&nbsp;
                        <Button className="col-md-3" color="">
                            <img src="" style={{}}/>
                            <h4>
                                Off Generator
                            </h4>
                            <br></br>
                            20
                        </Button>
                    </div>
                    <img className="cimg" src="./crop.png"/>
                </div>
            </Card>
                
                </div> 
  
                <div class="card col-md-3"> 
               
                    <div className="row">
                    <Button className="col-7" color="light">
                        <span className="fa fa-search">Search by Generator ID</span>
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className="col-4" color="light">
                    <span className="fa fa-sort-desc">All Devices</span>
                    
                    </Button>
                    </div>
                    <Card>
                    <CardBlock>
                        <div className="row">
                        <span className="fa fa-cog cardtxt col-md-">Generoter id
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">NHT87898</span>
                        </span>

                        <span className="fa fa-shield cardtxt col-md-">Status
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">On</span>
                        </span>
                       </div><br></br>
                       <div>
                        <span className="fa fa-cog cardtxt col-md-5">Active Alarm
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive2">Yes</span></span>
                        <span className="fa  fa-line-chart cardtxt col-md-6">Running
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">Yes</span></span>
                       </div><br></br>
                       <div>
                        <span className="fa fa-comment-o cardtxt col-md">Last message read
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">20th sep 10:05 AM</span></span>
                        </div><br></br>
                        <div>
                        <span className="fa fa-tint cardtxt col-md-5">Fuel Volume
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">30%</span></span>
                        <Button color="danger" className="col-md-6">
                            <span>View</span>
                        </Button>
                        </div>
                       </CardBlock>
                       <hr></hr>
                       <CardBlock>
                       <div className="row">
                        <span className="fa fa-cog cardtxt col-md-">Generoter id
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">NHT87898</span>
                        </span>

                        <span className="fa fa-shield cardtxt col-md-">Status
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">Off</span>
                        </span>
                       </div><br></br>
                       <div>
                        <span className="fa fa-cog cardtxt col-md-5">Active Alarm
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive2">Yes</span></span>
                        <span className="fa  fa-line-chart cardtxt col-md-6">Running
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">Yes</span></span>
                       </div><br></br>
                       <div>
                        <span className="fa fa-comment-o cardtxt col-md">Last message read
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">20th sep 10:05 AM</span></span>
                        </div><br></br>
                        <div>
                        <span className="fa fa-tint cardtxt col-md-5">Fuel Volume
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">30%</span></span>
                        <Button color="danger" align='right' className="col-md-6">
                            <span>View</span>
                        </Button>
                        </div>
                       </CardBlock>
                        <hr></hr>
                        <CardBlock>
                        <div className="row">
                        <span className="fa fa-cog cardtxt col-md-">Generoter id
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">NHT87898</span>
                        </span>

                        <span className="fa fa-shield cardtxt col-md-">Status
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">On</span>
                        </span>
                       </div><br></br>
                       <div>
                        <span className="fa fa-cog cardtxt col-md-5">Active Alarm
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive2">Yes</span></span>
                        <span className="fa  fa-line-chart cardtxt col-md-6">Running
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="inactive1">Yes</span></span>
                       </div><br></br>
                       
                        </CardBlock>
                </Card>
                </div> 
                  
               
            </div> 
        </div> 
    </div> 
        );
}
}
export default Middle;