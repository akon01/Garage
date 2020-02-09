import { Pipe, PipeTransform } from '@angular/core';
import { TicketType } from 'src/models/Ticket';
import { VehicleClass } from 'src/models/Vehicle';

@Pipe({
  name: 'enumConverter'
})
/**
 * Converts an Enum value to a string.
 */
export class EnumConverterPipe implements PipeTransform {

  transform(value: number, args?: string): any {
    console.log(args);

    if (args == "Ticket") {
      return TicketType[value]
    }
    if (args == "VehicleClass")
      return VehicleClass[value]
  }

}
