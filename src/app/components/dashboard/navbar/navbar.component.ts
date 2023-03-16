import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/menu';
import { LoggedService } from 'src/app/services/logged.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private _menuService: MenuService,
              private loggedService: LoggedService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  logout() {
    this.loggedService.logout();
  }

  cargarMenu() {
    this._menuService.getMenu().subscribe(data => {
      //console.log(data)
      this.menu = data;
    })
  }

  
}
