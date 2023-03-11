import { Injectable } from '@angular/core';
import { Medicine } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listdrugs: Medicine[] = [
    {quantity: 3, name: 'Beconase', date: '05/03/2023', category: 'Ear nose throal', price: 23},
    {quantity: 1, name: 'Glucosamina', date: '03/01/2023', category: 'Bone and joints', price: 25.99},
    {quantity: 1, name: 'Retilut', date: '22/01/2023', category: 'Eye care', price: 29.90},
    {quantity: 1, name: 'Himalaya', date: '03/03/2023', category: 'urinary', price: 12.41},
    {quantity: 1, name: 'Neuro-Nutrition', date: '03/03/2023', category: 'Nerves', price: 79},
    {quantity: 1, name: 'Anquilea', date: '03/03/2023', category: 'Digestive', price: 8.92},
    {quantity: 1, name: 'Eladiet Digest', date: '03/03/2023', category: 'Digestive', price: 11.77},
    
    
    
  ];

  constructor() { }

  getDrug() {
    return this.listdrugs.slice();
  }

  deleteDrug(index: number) {
    this.listdrugs.splice(index, 1);

  }

  addDrug(index: Medicine) {
    this.listdrugs.unshift(index);
  }
}
