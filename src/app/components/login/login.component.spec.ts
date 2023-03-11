import { LoginComponent } from "./login.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

describe( 'Formularios', () => {

  let componente: LoginComponent;

  beforeEach( () => {
    componente = new LoginComponent( new FormBuilder(),);
  });

  it( 'Debe de crear un formulario con dos campos, email y password', () => {
    expect( componente.form.contains('usuario') ).toBeTruthy();
    expect( componente.form.contains('password') ).toBeTruthy();

  });

  it( 'El usuario debe de ser obligatorio', () => {
    const control = componente.form.get('usuario');
    control?.setValue('');

    expect( control?.valid ).toBeFalsy();
  });

  
});