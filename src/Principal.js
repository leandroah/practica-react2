import React from 'react';
//import Pelicula from './Pelicula';
//import Descripcion from './Descripcion';
//import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Contenido from './Contenido';

function Principal(){
    return(
        <div>
            <NavBar />
            <Contenido />
        </div>
    );
}

export default Principal;
