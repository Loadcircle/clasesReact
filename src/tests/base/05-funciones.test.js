import '@testing-library/jest-dom';
import {getUser} from '../../base/05-funciones';

describe('Pruebas en 05-funciones', ()=>{

    test('get User debe de retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        
        //los objetos no se pueden comparar asi que se utiliza toEqual en vez de toBe
        expect( user ).toEqual(userTest)

    })
    


});