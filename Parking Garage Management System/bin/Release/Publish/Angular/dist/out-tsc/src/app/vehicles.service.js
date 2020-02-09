import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let VehiclesService = class VehiclesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Sends a Get request that checks if the vehicle is legal based on his ticket.
     * @return True if the vehicle is legal,falase otherwise.
     * @param vehicleToCheck The vehicle to check for.
     */
    checkVehicleLegal(vehicleToCheck) {
        return this.httpClient.post("https://localhost:44391/api/Tickets/CheckLegal", vehicleToCheck);
    }
    /**
     * Sends a Get request that gets all vehicles
     */
    getVehicles() {
        return this.httpClient.get("https://localhost:44391/api/Vehicles/");
    }
    /**
    *Sends a Get request that gets a vehicle by his license number.
    *@param licenseNumber The License Number of the vehicle to get.
    */
    getVehicleByLicenseNumber(licenseNumber) {
        return this.httpClient.get(`https://localhost:44391/api/Vehicles/${licenseNumber}`);
    }
    /**
    *Sends a Delete request that checks-out a vehicle by his license number
    *@param licenseNumber The License Number of the vehicle to get.
     */
    checkOutVehicle(licenseNumber) {
        return this.httpClient.delete(`https://localhost:44391/api/Vehicles/CheckOut/${licenseNumber}`);
    }
    /**
    *Sends a Post request that checks-in a vehicle.
    *@param vehicle The Vehicle to check-in.
     */
    checkInVehicle(vehicle) {
        return this.httpClient.post(`https://localhost:44391/api/Vehicles/CheckIn`, vehicle);
    }
    /**
    *Sends a Get request that gets the types of available tickets
     */
    getTicketTypes() {
        return this.httpClient.get("https://localhost:44391/api/Tickets");
    }
    /**
    *Sends a Get request that gets the available types of vehicles.
     */
    getVehicleTypes() {
        return this.httpClient.get("https://localhost:44391/api/Vehicles/types");
    }
    /**
    *Sends a Get request that gets a ticket info by its type
    *@param ticketType The type of ticket to get.
     */
    getTicketInfo(ticketType) {
        return this.httpClient.get(`https://localhost:44391/api/Tickets/${ticketType}`);
    }
    CheckInAsyc() {
        return this.httpClient.post(`https://localhost:44391/api/Vehicles/CheckInAsyncTest`, null);
    }
};
VehiclesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], VehiclesService);
export { VehiclesService };
//# sourceMappingURL=vehicles.service.js.map