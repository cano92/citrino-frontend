import React, { Component } from 'react';
import {Row,Col, Container} from 'react-bootstrap';

import FormProduct from '../components/formProduct';

class CompraProduct extends Component
{

    render()
    {
        return( 
        <Container>
            <Row >
                <Col >
                    <h4>compra nueva</h4>
                    <FormProduct></FormProduct>
                </Col>
            </Row> 
        </Container>
        );
    }
}


export default CompraProduct;