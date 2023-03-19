import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/services/logged.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  hasError: boolean = false;
  isLogged = false;
  
  constructor(private fb: FormBuilder, 
              private _snackBar: MatSnackBar,
              private router: Router,
              private loggedService: LoggedService
              ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    // Check if user is already logged in
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.isLogged = true;
    }
  }

  ingresar () {
    /* console.log(this.form); */
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    
  
  }

  error () {
    this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading () {
    this.loading = true;
    setTimeout(() => {

      //Redireccionamos al dashboard
      this.router.navigate(['dashboard']);
    }, 1500);
  }

  login(): void {
    if (this.form.invalid) {
      this.hasError = true;
      return;
    }

    const {usuario, password } = this.form.value;

    // Check if user is already logged in
    if (this.isLogged) {
      this._snackBar.open('El usuario ya se ha autenticado.', '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      return;
    }

    this.loggedService.purchaserExist(usuario, password)
    .subscribe((data: string | any[]) => {
      if (data.length > 0) {
        const { id } = data[0];
        localStorage.setItem('userId', JSON.stringify(id));
        this.isLogged = true;
        this.router.navigate(['dashboard']);
      }else {
        this.hasError = true;
      }
    })
  }
}
