import '@testing-library/jest-dom';
import { getHeroeById } from '../../base/08-imp-exp';
import { getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en el archivo 08 imp exp', () => {

    test('Debe retornar un heroe por id', ()=>{

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h=> h.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('Debe retornar undefined', ()=>{

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });
    
    test('Debe retornar todos los heroes de marvel', ()=>{

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( (heroe) => heroe.owner === owner );

        expect(heroes).toEqual(heroesData);
        expect(heroes.length).toBe(2);

    });
    
    test('Debe retornar todos los heroes de DC', ()=>{

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( (heroe) => heroe.owner === owner );

        expect(heroes).toEqual(heroesData);
        expect(heroes.length).toBe(3);

    });
    
});
