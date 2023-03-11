import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Medicine} from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar,
              ) { 
    this.form = this.fb.group({
      quantity: ['', Validators.required],
      name: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  addDrugs() {
    console.log(this.form);
    const user: Medicine = {
      quantity: this.form.value.quantity,
      name: this.form.value.name,
      date: this.form.value.date,
      category: this.form.value.category,
      price: this.form.value.price,
    }


    this._usuarioService.addDrug(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('Drug has been successfully added', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }

}
