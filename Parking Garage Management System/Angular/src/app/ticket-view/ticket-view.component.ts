import { Component, OnInit, Inject } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Ticket, TicketType, ITicket } from 'src/models/Ticket';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Vehicle } from 'src/models/Vehicle';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {


  private isForUpgrade: boolean = false;
  private vehicleToCheckIn: Vehicle;
  private ticketType: TicketType;
  private errorString: string;
  private ticketTypeToUpgradeFrom: TicketType

  private ticket: ITicket;
  private ticketToUpgradeFrom: ITicket

  constructor(
    private dialogRef: MatDialogRef<TicketViewComponent>,
    private vehicleService: VehiclesService,
    @Inject(MAT_DIALOG_DATA) data: { isForUpgrade: boolean, ticketType: number, ticketTypeToUpgradeFrom: number, vehicleToCheckIn: Vehicle, errorString: string }) {
    if (data) {
      this.ticketType = data.ticketType;
      this.isForUpgrade = data.isForUpgrade;
      this.vehicleToCheckIn = data.vehicleToCheckIn;
      this.errorString = data.errorString;
      this.ticketTypeToUpgradeFrom = data.ticketTypeToUpgradeFrom
    }
  }

  /**
   * Checks if the vehicle is legal for the current ticket, if not tries with the next value.
   */
  getNextValueTicket() {

    const numberOfEnumKeys = Object.keys(TicketType).length / 2 - 1;
    //if the enum value is bigger than coded values

    if (numberOfEnumKeys <= this.vehicleToCheckIn.TicketType) {
      this.dialogRef.close(false);
      throw new Error(`Vehicle Enum Value is Bigger than ${numberOfEnumKeys},it is ${this.vehicleToCheckIn.TicketType}`)
    }
    this.vehicleToCheckIn.TicketType += 1;
    this.vehicleService.checkVehicleLegal(this.vehicleToCheckIn).subscribe(isLegal => {
      if (isLegal == true) {
        this.dialogRef.close(this.vehicleToCheckIn.TicketType);
      }
    }, err => {
      //check if ticket type can go one up, if not alert (should not happen,vip covers everything)
      this.getNextValueTicket()
    })

  }

  /**
   * Confirm using this ticket
   */
  confirm() {
    this.dialogRef.close(true);
  }

  ngOnInit() {
    this.vehicleService.getTicketInfo(this.ticketType).subscribe(ticket => {
      this.ticket = ticket;
    })


    if (this.ticketTypeToUpgradeFrom != null) {
      this.vehicleService.getTicketInfo(this.ticketTypeToUpgradeFrom).subscribe(ticket => {
        this.ticketToUpgradeFrom = ticket;
      })
    }
  }

}
