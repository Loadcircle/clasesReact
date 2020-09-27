const { getImagen } = require("../../base/11-async-await");

describe('Pruebas async await', ()=>{

    test('Debe retornar el url de la imagen', async ()=>{

        //como es una promesa no podemos ejectuar el expect como si fuera un string
        //hay que esperar la promesa con un then o ASYNC

        const url = await getImagen();

        expect(typeof url).toBe('string');

    });

});