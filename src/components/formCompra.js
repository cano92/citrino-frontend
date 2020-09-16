import React, { Component } from 'react';
import {Form,Col,Button} from 'react-bootstrap';


class FormCompra extends Component
{

    render()
    {
        return( 
            <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Nombre"
                />
              </Col>
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Description
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="descripcion"
                />
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                    Preference
                </Form.Label>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                    >
                        <option value="0">efectivo</option>
                        <option value="1">Tarjeta</option>
                        <option value="2">otros</option>
                    </Form.Control>
                </Col>
              <Col xs="auto">
                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        );
    }
}


export default FormCompra;