import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { VehicleViewComponent } from '../vehicle-view/vehicle-view.component';
let CheckOutComponent = class CheckOutComponent {
    constructor(vehicleService, formBuilder, dialog) {
        this.vehicleService = vehicleService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.checkOutForm = this.formBuilder.group({
            plateId: ["", Validators.required]
        });
    }
    /**
     * Checks out the selected vehicle
     */
    checkOut() {
        this.vehicleService.checkOutVehicle(this.selectedVehicle.LicensePlateID).subscribe(answer => {
            alert(`Vehicle ${this.selectedVehicle.LicensePlateID} was checked out.`);
        });
    }
    /**
     * Opens a dialog with the selected vehicle to confirm the check-out.
     */
    onSubmit() {
        const plateId = this.checkOutForm.value.plateId;
        this.vehicleService.getVehicleByLicenseNumber(plateId).subscribe({
            next: (vehicle) => {
                this.selectedVehicle = vehicle;
                this.dialog.open(VehicleViewComponent, { data: { vehicleId: vehicle.LicensePlateID } });
            }, error: (err) => alert(`No Vehicle Found With License Plate ${plateId}`)
        });
    }
};
CheckOutComponent = __decorate([
    Component({
        selector: 'app-check-out',
        templateUrl: './check-out.component.html',
        styleUrls: ['./check-out.component.css']
    })
], CheckOutComponent);
export { CheckOutComponent };
//# sourceMappingURL=check-out.component.js.map