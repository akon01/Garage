import { Component, OnInit, Input, Inject } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Vehicle } from 'src/models/Vehicle';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.css']
})
export class VehicleViewComponent implements OnInit {

  private vehicle: Vehicle

  @Input()
  private vehicleLicenseId: number

  constructor(private vehicleService: VehiclesService,
    private dialogRef: MatDialogRef<VehicleViewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { vehicleId: number }) { }

  ngOnInit() {

    //if was opened as a dialog , sets the input
    if (this.data != null && this.data != undefined && this.vehicleLicenseId == undefined) {
      this.vehicleLicenseId = this.data.vehicleId;
    }

    this.vehicleService.getVehicleByLicenseNumber(this.vehicleLicenseId).subscribe(vehicle => {
      this.vehicle = vehicle;
    })
  }

  /**
   * Checks-out a vehicle.
   */
  checkOut() {
    this.vehicleService.checkOutVehicle(this.vehicleLicenseId).subscribe({
      next: (vehicle) => {
        alert(`vehicle ${vehicle.Name} - ${vehicle.LicensePlateID} was checked-out`)
      }, error: (err) => {
        alert(err)
        alert(err.message.message)
      }, complete: () => {

        this.dialogRef.close()
      }
    })
  }

}
