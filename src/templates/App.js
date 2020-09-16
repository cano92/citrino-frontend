//librarys
import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
//templates
import Home from './home';
import Info from './info';
import CompraNueva from './CompraNueva';
import CompraProduct from './compraProducto';
//components
import NavBarCitrino from '../components/navBarCitrino';


class App extends Component
{
  render()
  {
    return(
      <Container>
        <NavBarCitrino/>

        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/compras/nueva' component={CompraNueva} />
            <Route path='/compras/producto' component={CompraProduct} />
            <Route path='/info' component={Info} />
            <Route />
        </Switch> 
      </Container>
    );
  }
}

export default App;
