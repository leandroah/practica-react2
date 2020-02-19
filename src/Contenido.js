import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Contenido(){
    return(
        <div>


<Container>
  <Row>
    <Col></Col>
    <Col xs={8}>

        <Jumbotron>
            <h1>Hola, Mundo</h1>
            <p>
                Esto es una aplicacion creada en React, implementado tambien Bootstrap, siguiendo los pasos que encontre en la documentsacion de React-Bootstrap
            </p>
            <p>
                <Button variant="primary">Boton</Button>
            </p>
        </Jumbotron>   
    
    </Col>
    <Col></Col>
  </Row>
</Container>


        

        </div>
    );
}

export default Contenido;