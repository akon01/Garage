import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private date: Date;

  ngOnInit(): void {
    this.date = new Date()
  }
  title = 'ParkingGarage';
}
