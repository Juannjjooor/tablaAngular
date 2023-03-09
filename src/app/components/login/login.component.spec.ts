import { LoginComponent } from "./login.component";
import { FormBuilder } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

describe('Formularios', () => {
  let componente: LoginComponent;

  beforeEach(() => {
    componente = new LoginComponent(new FormBuilder(), new MatSnackBar(), new Router());
  });

  it('Debe de crear un formulario con dos campos, usuario y password', () => {
    expect(componente.form.contains('usuario')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });
});
