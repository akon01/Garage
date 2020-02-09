import { __decorate, __param } from "tslib";
import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
let VehicleViewComponent = class VehicleViewComponent {
    constructor(vehicleService, dialogRef, data) {
        this.vehicleService = vehicleService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        //if was opened as a dialog , sets the input
        if (this.data != null && this.data != undefined && this.vehicleLicenseId == undefined) {
            this.vehicleLicenseId = this.data.vehicleId;
        }
        this.vehicleService.getVehicleByLicenseNumber(this.vehicleLicenseId).subscribe(vehicle => {
            this.vehicle = vehicle;
        });
    }
    /**
     * Checks-out a vehicle.
     */
    checkOut() {
        this.vehicleService.checkOutVehicle(this.vehicleLicenseId).subscribe({
            next: (vehicle) => {
                alert(`vehicle ${vehicle.Name} - ${vehicle.LicensePlateID} was checked-out`);
            }, error: (err) => {
                alert(err);
                alert(err.message.message);
            }, complete: () => {
                this.dialogRef.close();
            }
        });
    }
};
__decorate([
    Input()
], VehicleViewComponent.prototype, "vehicleLicenseId", void 0);
VehicleViewComponent = __decorate([
    Component({
        selector: 'app-vehicle-view',
        templateUrl: './vehicle-view.component.html',
        styleUrls: ['./vehicle-view.component.css']
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], VehicleViewComponent);
export { VehicleViewComponent };
//# sourceMappingURL=vehicle-view.component.js.map