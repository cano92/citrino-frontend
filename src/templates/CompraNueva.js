import React, { Component } from 'react';
import {Row,Col, Container} from 'react-bootstrap';

import FormCompra from '../components/formCompra';

class CompraNueva extends Component
{

    render()
    {
        return( 
        <Container>
            <Row >
                <Col>
                    <h4>compra nueva</h4>
                </Col>
            </Row>
            <Row >
                <Col>
                    <FormCompra></FormCompra>
                </Col>
            </Row> 
        </Container>
        );
    }
}


export default CompraNueva;