import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Vehicle } from 'src/models/Vehicle';

@Component({
  selector: 'app-async-test',
  templateUrl: './async-test.component.html',
  styleUrls: ['./async-test.component.css']
})
export class AsyncTestComponent implements OnInit {

  private vehicles: Vehicle[] = []

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit() {

  }

  testAsyncCheckIn() {
    this.vehicleService.CheckInAsyc().subscribe({ next: (vehicles) => this.vehicles = vehicles, error: (err) => alert(err) })
  }

}
