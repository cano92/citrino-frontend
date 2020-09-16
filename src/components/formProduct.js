import React, { Component } from 'react';
import {Form,Col,Button} from 'react-bootstrap';


class FormProduct extends Component
{

    render()
    {
        return( 
            <Form>
                <Form.Row className="row justify-content-around">
                    <Form.Group as={Col} md={5} controlId="formGridEmail">

                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />

                        <Form.Label>genero</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Femenino</option>
                            <option>Masculino</option>
                            <option>Unisex</option>
                        </Form.Control>

                        <Form.Label>Temporada</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>verano</option>
                            <option>otoño</option>
                            <option>invierno</option>
                            <option>primavera</option>
                        </Form.Control>

                        <Form.Label>Codigo</Form.Label>
                        <Form.Control type="text" placeholder="cod01" />

                    </Form.Group>

                    <Form.Group as={Col} md={7} controlId="formGridPassword">
                       

                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="text" placeholder="0" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>precio</Form.Label>
                        <Form.Control type="text" placeholder="0" />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>venta</Form.Label>
                        <Form.Control type="text" placeholder="0" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className="justify-content-start">
                    <Form.Group as={Col} md={5}>
                        <Form.Label>Categorias</Form.Label>
                        <Form.Control type="text" placeholder="agregar" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className="justify-content-center">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="Descripcion" />
                    </Form.Group>
                </Form.Row>
                    
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
            </Form>
        );
    }
}


export default FormProduct;