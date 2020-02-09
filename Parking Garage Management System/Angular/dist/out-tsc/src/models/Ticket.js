export var TicketType;
(function (TicketType) {
    TicketType[TicketType["REGULAR"] = 0] = "REGULAR";
    TicketType[TicketType["VALUE"] = 1] = "VALUE";
    TicketType[TicketType["VIP"] = 2] = "VIP";
})(TicketType || (TicketType = {}));
export class VehicleDimentions {
    constructor(height, width, length) {
        this.Height = height;
        this.Width = width;
        this.Length = length;
    }
}
export class Ticket {
    constructor(lots, dimentions, vehicleClasses, cost, timeLimit, type) {
        this.Lots = lots;
        this.Dimentions = dimentions;
        this.VehicleClasses = vehicleClasses;
        this.Cost = cost;
        this.TimeLimit = timeLimit;
        this.Type = type;
    }
}
//# sourceMappingURL=Ticket.js.map