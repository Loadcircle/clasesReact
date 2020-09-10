import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en template string', ()=>{

    test('getSaludo debe retornar hola fernando ', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    })
    


});