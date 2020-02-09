import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { TicketType } from 'src/models/Ticket';
import { MAT_DIALOG_DATA } from '@angular/material';
let TicketViewComponent = class TicketViewComponent {
    constructor(dialogRef, vehicleService, data) {
        this.dialogRef = dialogRef;
        this.vehicleService = vehicleService;
        this.isForUpgrade = false;
        if (data) {
            this.ticketType = data.ticketType;
            this.isForUpgrade = data.isForUpgrade;
            this.vehicleToCheckIn = data.vehicleToCheckIn;
            this.errorString = data.errorString;
            this.ticketTypeToUpgradeFrom = data.ticketTypeToUpgradeFrom;
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
            throw new Error(`Vehicle Enum Value is Bigger than ${numberOfEnumKeys},it is ${this.vehicleToCheckIn.TicketType}`);
        }
        this.vehicleToCheckIn.TicketType += 1;
        this.vehicleService.checkVehicleLegal(this.vehicleToCheckIn).subscribe(isLegal => {
            if (isLegal == true) {
                this.dialogRef.close(this.vehicleToCheckIn.TicketType);
            }
        }, err => {
            //check if ticket type can go one up, if not alert (should not happen,vip covers everything)
            this.getNextValueTicket();
        });
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
        });
        if (this.ticketTypeToUpgradeFrom != null) {
            this.vehicleService.getTicketInfo(this.ticketTypeToUpgradeFrom).subscribe(ticket => {
                this.ticketToUpgradeFrom = ticket;
            });
        }
    }
};
TicketViewComponent = __decorate([
    Component({
        selector: 'app-ticket-view',
        templateUrl: './ticket-view.component.html',
        styleUrls: ['./ticket-view.component.css']
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], TicketViewComponent);
export { TicketViewComponent };
//# sourceMappingURL=ticket-view.component.js.map