import logo from './logo.svg';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavbarPage from './components/HeaderComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Main/>
      </div>
      
     );
  }
}
export default App;
