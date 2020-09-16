import React,{ Component } from 'react';
import {Navbar,Nav, NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBarCitrino extends Component
{

    render()
    {
        return(
            <Navbar bg="light" variant="light" expand="sm" >
            <Navbar.Brand href="#home">Citrino</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link  to='/' className="nav-link" >  Home </Link>
                <Link  to='/' className="nav-link" >  Buscador </Link>
                <NavDropdown title="Compras" id="basic-nav-dropdown">
                    <Link  to='/compras/nueva' class="dropdown-item" > Nueva </Link>
                    <Link  to='/compras/listas' class="dropdown-item" > Listas </Link>
                    <NavDropdown.Divider />
                    <Link  to='/Info' class="dropdown-item" >  Info </Link>
                </NavDropdown>
                <Link  to='/info' className="nav-link" >  Info </Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
         </Navbar>
        );
    }
}


export default NavBarCitrino;