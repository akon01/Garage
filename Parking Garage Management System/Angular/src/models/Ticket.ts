import { VehicleClass } from "./Vehicle";

export enum TicketType {
    REGULAR,
    VALUE,
    VIP
}


export class VehicleDimentions {
    Height: number;
    Width: number;
    Length: number;

    constructor(height: number, width: number, length: number) {
        this.Height = height;
        this.Width = width;
        this.Length = length;
    }
}

export interface ITicket {
    Lots: number[];
    Dimentions: VehicleDimentions
    VehicleClasses: VehicleClass[];
    Cost: number;
    TimeLimit: number;
    Type: TicketType;
}

export class Ticket implements ITicket {
    Lots: number[];
    Dimentions: VehicleDimentions
    VehicleClasses: VehicleClass[];
    Cost: number;
    TimeLimit: number;
    Type: TicketType;

    constructor(
        lots?: number[],
        dimentions?: VehicleDimentions,
        vehicleClasses?: VehicleClass[],
        cost?: number,
        timeLimit?: number,
        type?: TicketType) {
        this.Lots = lots;
        this.Dimentions = dimentions
        this.VehicleClasses = vehicleClasses;
        this.Cost = cost;
        this.TimeLimit = timeLimit;
        this.Type = type;
    }


}