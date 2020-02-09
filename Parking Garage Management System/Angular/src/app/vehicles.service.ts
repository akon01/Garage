import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/models/Vehicle';
import { TicketType, Ticket, ITicket } from 'src/models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a Get request that checks if the vehicle is legal based on his ticket.
   * @return True if the vehicle is legal,falase otherwise.
   * @param vehicleToCheck The vehicle to check for.
   */
  checkVehicleLegal(vehicleToCheck: Vehicle) {
    return this.httpClient.post<boolean>("https://localhost:44344/api/Tickets/CheckLegal", vehicleToCheck)
  }

  /**
   * Sends a Get request that gets all vehicles
   */
  getVehicles() {
    return this.httpClient.get<Vehicle[]>("https://localhost:44344/api/Vehicles/")
  }

  /**
  *Sends a Get request that gets a vehicle by his license number.
  *@param licenseNumber The License Number of the vehicle to get.
  */
  getVehicleByLicenseNumber(licenseNumber: number) {
    return this.httpClient.get<Vehicle>(`https://localhost:44344/api/Vehicles/${licenseNumber}`)
  }

  /**
  *Sends a Delete request that checks-out a vehicle by his license number
  *@param licenseNumber The License Number of the vehicle to get.
   */
  checkOutVehicle(licenseNumber: number) {
    return this.httpClient.delete<Vehicle>(`https://localhost:44344/api/Vehicles/CheckOut/${licenseNumber}`)
  }

  /**
  *Sends a Post request that checks-in a vehicle.
  *@param vehicle The Vehicle to check-in.
   */
  checkInVehicle(vehicle: Vehicle) {
    return this.httpClient.post<Vehicle>(`https://localhost:44344/api/Vehicles/CheckIn`, vehicle);
  }

  /**
  *Sends a Get request that gets the types of available tickets
   */
  getTicketTypes() {
    return this.httpClient.get<string[]>("https://localhost:44344/api/Tickets")
  }
  /**
  *Sends a Get request that gets the available types of vehicles.
   */
  getVehicleTypes() {
    return this.httpClient.get<string[]>("https://localhost:44344/api/Vehicles/types")
  }

  /**
  *Sends a Get request that gets a ticket info by its type
  *@param ticketType The type of ticket to get.
   */
  getTicketInfo(ticketType: TicketType) {
    return this.httpClient.get<ITicket>(`https://localhost:44344/api/Tickets/${ticketType}`);
  }

  CheckInAsyc() {
    return this.httpClient.post<Vehicle[]>(`https://localhost:44344/api/Vehicles/CheckInAsyncTest`, null);
  }


}
