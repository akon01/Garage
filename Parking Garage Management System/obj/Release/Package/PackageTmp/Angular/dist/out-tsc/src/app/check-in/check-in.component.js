import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Vehicle, VehicleType } from 'src/models/Vehicle';
import { TicketType } from 'src/models/Ticket';
import { TicketViewComponent } from '../ticket-view/ticket-view.component';
import { ErrorStrings } from 'src/models/ErrorStrings';
const TicketVehicleClassError = "Ticket Does Not Cover Vehicle";
const TicketVehicleDimentionsError = "Vehicle Dimentions Are Too Big For This Ticket";
const VehhicleExsistsError = "Vehicle Already In Garage";
const TicketLotFullError = "Ticket Lots Are Full";
let CheckInComponent = class CheckInComponent {
    constructor(formBuilder, vehiclesService, dialog) {
        this.formBuilder = formBuilder;
        this.vehiclesService = vehiclesService;
        this.dialog = dialog;
        this.vehicle = new Vehicle();
        this.vehicleTypes = [];
        this.ticketTypes = [];
    }
    ngOnInit() {
        //Get Strings of the available types of tickets and vehicles
        this.vehiclesService.getTicketTypes().subscribe(types => {
            this.ticketTypes.push(...types);
        });
        this.vehiclesService.getVehicleTypes().subscribe(types => {
            this.vehicleTypes.push(...types);
        });
        this.checkInForm = this.formBuilder.group({
            name: ["", Validators.required],
            LicensePlateId: ["", Validators.required],
            PhoneNumber: ["", Validators.required, Validators],
            VehicleType: ["", Validators.required],
            TicketType: ["", Validators.required],
            Height: ["", Validators.required],
            Width: ["", Validators.required],
            Length: ["", Validators.required],
        });
    }
    /**
     * Opens a dialog which lets the user upgrade his ticket
     * @param ticketType selected ticket to upgrade from
     * @param errorString Error message to show why you need to upgrade your ticket
     */
    openUpgradeDialog(ticketType, errorString) {
        //opens the upgrade dialog
        const dialogRef = this.dialog.open(TicketViewComponent, { data: { ticketType: ticketType, isForUpgrade: true, vehicleToCheckIn: this.vehicle, errorString: errorString } });
        //if the dialog resulted in a confirm on the upgrade pass the upgraded ticket to confirm Check-In.
        dialogRef.afterClosed().subscribe(result => {
            //if the chosen ticket type is one of the available ticket types.
            if (result in TicketType) {
                const confirmDialogRef = this.dialog.open(TicketViewComponent, { data: { ticketType: result, ticketTypeToUpgradeFrom: ticketType, isForUpgrade: false, vehicleToCheckIn: this.vehicle } });
                //if the confirm dialog ended with confrim, check-in the vehicle
                confirmDialogRef.afterClosed().subscribe(confirmResult => {
                    if (confirmResult == true) {
                        this.checkInForm.get('TicketType').setValue(this.ticketTypes[result]);
                        this.onSubmit();
                    }
                });
            }
        });
    }
    /**
     * Opens a dialog which shows the selected ticket info
     */
    openTicketView() {
        const ticketType = TicketType[(this.checkInForm.get('TicketType').value)];
        const dialogRef = this.dialog.open(TicketViewComponent, { data: { ticketType: ticketType, isForUpgrade: false, vehicleToCheckIn: this.vehicle } });
    }
    /**
     * Checks-in the vehicle, if can't will show an upgrade dialog
     */
    onSubmit() {
        this.vehicle.LotNumber = 0;
        this.vehicle.VehicleType = VehicleType[(this.checkInForm.get('VehicleType').value)];
        this.vehicle.TicketType = TicketType[(this.checkInForm.get('TicketType').value)];
        this.vehiclesService.checkInVehicle(this.vehicle).subscribe(vehicle => {
            alert(`Vehicle ${vehicle.Name} - ${vehicle.LicensePlateID} was created successfully`);
        }, (err) => {
            if (err.error.message == ErrorStrings.VehhicleExsistsError) {
                alert(ErrorStrings.VehhicleExsistsError);
            }
            else {
                this.openUpgradeDialog(this.vehicle.TicketType, err.error.Message);
            }
        });
        // this.vehiclesService.getTicketInfo(TicketType.VALUE).subscribe(ticket => {
        //   console.log(ticket);
        // })
    }
};
CheckInComponent = __decorate([
    Component({
        selector: 'app-check-in',
        templateUrl: './check-in.component.html',
        styleUrls: ['./check-in.component.css']
    })
], CheckInComponent);
export { CheckInComponent };
//# sourceMappingURL=check-in.component.js.map