import { TicketType } from './Ticket';

export enum VehicleType {
    MOTORCYCLE,
    PRIVATE,
    SUV,
    CROSSOVER,
    VAN,
    TRUCK
}

export enum VehicleClass {
    CLASS_A,
    CLASS_B,
    CLASS_C,
}


export class Vehicle {
    Name: string;
    LicensePlateID: number;
    PhoneNumber: string;
    VehicleType: VehicleType;
    TicketType: TicketType;
    Height: number;
    Width: number;
    Length: number;
    LotNumber: number;

    public constructor(
        name?: string,
        licensePlateID?: number,
        phoneNumber?: string,
        vehicleType?: VehicleType,
        ticketType?: TicketType,
        height?: number,
        width?: number,
        length?: number,
        lotNumber?: number) {
        this.Name = name;
        this.LicensePlateID = licensePlateID;
        this.PhoneNumber = phoneNumber;
        this.VehicleType = vehicleType;
        this.TicketType = ticketType;
        this.Height = height;
        this.Width = width;
        this.Length = length;
        this.LotNumber = lotNumber;
    }

}