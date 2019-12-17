import React, {Component} from 'react';
import './App.css';
import Menu from './components/MenuComponent'
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from './shared/dishes';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Restaurante</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={DISHES}/>
            </div>

        );
    }
}

export default App;
