import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas de desestructuración',()=>{
    test('Debe retornar un string y un numero', () => {

        const [letras, numero] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numero).toBe(123);
        expect(typeof numero).toBe('number')

        
    })
    
})