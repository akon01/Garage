import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Vehicle } from 'src/models/Vehicle';
import { MatDialog } from '@angular/material';
import { VehicleViewComponent } from '../vehicle-view/vehicle-view.component';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  private checkOutForm: FormGroup
  private selectedVehicle: Vehicle;

  constructor(private vehicleService: VehiclesService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.checkOutForm = this.formBuilder.group({
      plateId: ["", Validators.required]
    })
  }


  /**
   * Checks out the selected vehicle
   */
  checkOut() {
    this.vehicleService.checkOutVehicle(this.selectedVehicle.LicensePlateID).subscribe(answer => {
      alert(`Vehicle ${this.selectedVehicle.LicensePlateID} was checked out.`)
    })
  }

  /**
   * Opens a dialog with the selected vehicle to confirm the check-out.
   */
  onSubmit() {
    const plateId = this.checkOutForm.value.plateId
    this.vehicleService.getVehicleByLicenseNumber(plateId).subscribe({
      next: (vehicle) => {
        this.selectedVehicle = vehicle
        this.dialog.open(VehicleViewComponent, { data: { vehicleId: vehicle.LicensePlateID } })
      }, error: (err) => alert(`No Vehicle Found With License Plate ${plateId}`)
    })
  }

}
