describe('Pruebas en el archivo demo.test.js', ()=>{
    test('Los strings deben ser iguales', ()=>{
        //1 - inicialización
        const mensaje = 'Hola Mundo';
    
        //2 - estimulo
        const mensaje2 = 'Hola Mundo'
    
        //3 - observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); // esto es un if (a === b)
    
    });
});

//el describe es un agrupador opcional, para agregar un titulo a un grupo de pruebas