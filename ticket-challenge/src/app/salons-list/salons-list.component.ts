import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/service/api.service';

@Component({
  selector: 'app-salons-list',
  templateUrl: './salons-list.component.html',
  styleUrls: ['./salons-list.component.scss']
})
export class SalonsListComponent implements OnInit {

  salonsList: string[] = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getSalons();
  }

  getSalons() {
    this.service.GetSalonsList().subscribe({
      next:(res) => {
        this.salonsList = res;
      },
      error:(err) => {
        console.error(err);
      }
    });
  }

}
