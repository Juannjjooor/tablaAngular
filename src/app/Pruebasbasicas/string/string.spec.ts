import { mensaje } from "./string";




describe( 'Pruebas de Strings', () => {

    it( 'Debe de regresar un string', () => {
        const resp = mensaje('Juanjo');
        expect( typeof resp ).toBe('string');
    });
    

    it( 'Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Juanjo';
        const resp = mensaje ( nombre );

        expect ( resp ).toContain( nombre );
    });

});



