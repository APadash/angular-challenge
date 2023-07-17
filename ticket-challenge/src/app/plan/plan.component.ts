import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/service/api.service';
import { ReserveModel } from '../core/model/reserve.model';
import { SeatStatusEnum } from '../core/enum/seat-status.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  seatsList: number[][] = [];
  salonId!: string;

  constructor(
    private service: ApiService,
    private activatedRout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSalonId();
    this.getSeatsList();
  }

  getSalonId() {
    this.activatedRout.params.subscribe(params => {
      this.salonId = params['id'];
    });
  }

  getSeatsList() {
    this.service.GetSeats(this.salonId).subscribe({
      next: (res:number[][]) => {
       this.seatsList = res;
      },
      error:(err) => {
        console.error(err);
      }
    });
  }

  reserveSeat(seat: ReserveModel) {
    // prevent user from sending request frequently
    if (this.seatsList[seat.x][seat.y] == SeatStatusEnum.waiting || this.seatsList[seat.x][seat.y] == SeatStatusEnum.reserved) return;

    this.seatsList[seat.x][seat.y] = SeatStatusEnum.waiting;

    this.service.ReserveSeat(this.salonId, seat).subscribe({
      next: () => {
        this.seatsList[seat.x][seat.y] = SeatStatusEnum.reserved;
      },
      error:(err) => {
        console.error(err);
      }
    });
  }

}
