import { obtenerUsuarios } from "./arreglos"

describe( 'Pruebas de arreglos', () => {

    it( 'Debe de retornar al menos a 4 usuarios', () => {

        const res = obtenerUsuarios();
        expect( res.length ).toBeGreaterThanOrEqual(4);
    });

    it( 'Debe de existir Juanjo y Salva', () => {

        const res = obtenerUsuarios();
        expect ( res ).toContain('Juanjo');
        expect ( res ).toContain('Salva');
    });
});