export var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["MOTORCYCLE"] = 0] = "MOTORCYCLE";
    VehicleType[VehicleType["PRIVATE"] = 1] = "PRIVATE";
    VehicleType[VehicleType["SUV"] = 2] = "SUV";
    VehicleType[VehicleType["CROSSOVER"] = 3] = "CROSSOVER";
    VehicleType[VehicleType["VAN"] = 4] = "VAN";
    VehicleType[VehicleType["TRUCK"] = 5] = "TRUCK";
})(VehicleType || (VehicleType = {}));
export var VehicleClass;
(function (VehicleClass) {
    VehicleClass[VehicleClass["CLASS_A"] = 0] = "CLASS_A";
    VehicleClass[VehicleClass["CLASS_B"] = 1] = "CLASS_B";
    VehicleClass[VehicleClass["CLASS_C"] = 2] = "CLASS_C";
})(VehicleClass || (VehicleClass = {}));
export class Vehicle {
    constructor(name, licensePlateID, phoneNumber, vehicleType, ticketType, height, width, length, lotNumber) {
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
//# sourceMappingURL=Vehicle.js.map