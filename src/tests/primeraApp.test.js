const { render } = require("@testing-library/react");
import { shallow } from 'enzyme';
import React from 'react';
const { default: PrimeraApp } = require("../PrimeraApp");
// import '@testing-library/jest-dom'; necesario para el snatshop

describe('Pruebas en primera app',()=>{

    test('debe mostrar el mensaej "Hola, Soy Goku"', ()=>{
       
        const mensaje = "Hola, Soy Goku";

        // Esta es una forma 
        // const wrapper = render( <PrimeraApp saludo={mensaje} /> )
        // wrapper.getByText()
        
        //También se puede destructurar

        const {getByText} = render( <PrimeraApp saludo={mensaje} /> )

        //para utilizar el toBeInTheDocument e tiene que expandir el document
        expect(getByText(mensaje)).toBeInTheDocument();

    });

    
    test('Debe de mostrar primeraApp correctamente', ()=>{

        const mensaje = "Hola, Soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={mensaje} />);

        expect(wrapper).toMatchSnapshot()

    });


    test('debe de mostrar el primer parrafo del componente', ()=>{
    
        const mensaje = "Hola, Soy Goku";
        // const subtitulo = "Este es un subtitulo";
        const wrapper = shallow(
            <PrimeraApp
                saludo={mensaje} 
            />);

        const textoParrafo = wrapper.find('p').first().text();

        console.log(textoParrafo)

        expect(textoParrafo).toBe('123456')

    });

});