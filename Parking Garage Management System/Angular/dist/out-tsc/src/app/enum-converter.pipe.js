import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { TicketType } from 'src/models/Ticket';
import { VehicleClass } from 'src/models/Vehicle';
let EnumConverterPipe = 
/**
 * Converts an Enum value to a string.
 */
class EnumConverterPipe {
    transform(value, args) {
        console.log(args);
        if (args == "Ticket") {
            return TicketType[value];
        }
        if (args == "VehicleClass")
            return VehicleClass[value];
    }
};
EnumConverterPipe = __decorate([
    Pipe({
        name: 'enumConverter'
    })
    /**
     * Converts an Enum value to a string.
     */
], EnumConverterPipe);
export { EnumConverterPipe };
//# sourceMappingURL=enum-converter.pipe.js.map