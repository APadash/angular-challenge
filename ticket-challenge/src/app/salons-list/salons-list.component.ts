import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/service/api.service';

@Component({
  selector: 'app-salons-list',
  templateUrl: './salons-list.component.html',
  styleUrls: ['./salons-list.component.scss']
})
export class SalonsListComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit(): void {
  }

}
