//Funcional Component (es la forma actual de trabajar react, con hooks, no clases)
import React from 'react';
import PropTypes from 'prop-types'

// import React, { Fragment } from 'react';
const PrimeraApp = ( {saludo} )=>{

    
    // if(!saludo){
    //     throw 'Saludo es necesario, we'
    // }

    const arreglo = [1,2,3,4,5,6]
    const obj = {
        nombre: 'Jesus',
        apellido: 'Milano',
        edad: 24
    }
    //no se puede renderizar el objeto directamente

    return (
        // <Fragment>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera App</p>
        // </Fragment>
        //También se puede usar el fragment sin importar de esta forma 
        <>
            <h1>{saludo}</h1>
            <p>{arreglo}</p>
            <p>{obj.nombre}</p>
        </>
    )

}

//los proptypes definen los requerimentos de los componentes
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number
}

//esta es otra forma de setear propiedades por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Sou ume subtitule'
}

export default PrimeraApp;