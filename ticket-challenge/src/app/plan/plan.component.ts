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
    this.seatsList = [[0,0,1,0],[0,1,0,0],[1,1,1,1],[1,1,1,1]];
    // this.service.GetSeats(this.salonId).subscribe({
    //   next: (res:number[][]) => {
    //    this.seatsList = res;
    //   },
    //   error:(err) => {
    //     console.error(err);
    //   }
    // });
  }

  reserveSeat(seat: ReserveModel) {
    if (this.seatsList[seat.x][seat.y] == SeatStatusEnum.waiting || this.seatsList[seat.x][seat.y] == SeatStatusEnum.reserved) return; // prevent user from sending request frequently

    this.seatsList[seat.x][seat.y] = SeatStatusEnum.waiting;

    setTimeout(() => {
      this.seatsList[seat.x][seat.y] = SeatStatusEnum.reserved;
    }, 1000);
    // this.service.ReserveSeat(this.salonId, seat).subscribe({
    //   next: () => {
    //     this.seatsList[seat.x][seat.y] = SeatStatusEnum.reserved;
    //   },
    //   error:(err) => {
    //     console.error(err);
    //   }
    // });
  }

}
