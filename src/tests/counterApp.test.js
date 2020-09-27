const { shallow } = require("enzyme");
const { default: CounterApp } = require("../CounterApp");
import React from 'react'

describe('Pruebas en el counter app',()=>{

    //lo inicializo 2 veces solo para poder acceder a los recomendados de codigo al escribi
    let wrapper = shallow(<CounterApp/>)

    //esto se ejecuta antes de cada una de las pruebas
    beforeEach(()=>{
        wrapper = shallow(<CounterApp/>)
    });

    test('Mostrar componente por defecto',()=>{

        expect(wrapper).toMatchSnapshot();

    });

    test('Mostrar el counter con un valor inicial de 100', ()=>{

        const wrapper = shallow(
            <CounterApp
                value={100}
            />)

        const valorContador = wrapper.find('p').text().trim(); //trim borra los espacios de los lados
        
        expect(valorContador).toBe('100');
    });

    test('debe de incrementar el valor con el boton +',()=>{

        const btnPlus = wrapper.find('button').at(2)

        btnPlus.simulate('click');

        const valorContador = wrapper.find('p').text().trim();

        expect(valorContador).toBe('124');
    });

    
    test('debe de restar el valor con el boton -',()=>{

        //recordar que como el wrapper es global los cambios afectan entre las otras pruebas
        //en la prueba anterior se incremento 1
        const btnLess = wrapper.find('button').at(0)

        btnLess.simulate('click');

        const valorContador = wrapper.find('p').text().trim();

        expect(valorContador).toBe('122');
    });


    test('El boton de reset debe regresar al valor inical',()=>{

        const wrapper = shallow(
            <CounterApp
                value={100}
            />)

            
        //primero cambiamos el valor inicial
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        

        const valorContador = wrapper.find('p').text().trim();

        expect(valorContador).toBe('100');
    });


})