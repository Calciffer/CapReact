import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/MenuComponent'

import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}
        <Menu></Menu>
      </div>
    );
  }
}

export default App;