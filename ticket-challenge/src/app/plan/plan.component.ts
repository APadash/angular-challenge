import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/service/api.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    // You should get the plan array from the: base-url/map/<map_id>
  }

}
