import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Drug } from 'src/app/interfaces/usuario';
import { TreatmentsService } from 'src/app/services/treatments.service';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userIdSignned: string = '';
  userSignned: User | undefined;
  displayedColumns: string[] = ['quantity', 'name', 'date', 'category', 'price'];
  dataSource: MatTableDataSource<Drug> = new MatTableDataSource<Drug>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar,
              private treatmentsService: TreatmentsService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.userIdSignned = localStorage.getItem('userId') || "";

    this.treatmentsService.getCustomer(this.userIdSignned)
    .subscribe(data => {
      this.userSignned = data;
      const { drugs } = this.userSignned as User;
      this.dataSource = new MatTableDataSource(drugs);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
