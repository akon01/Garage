using System.Linq;
using System.Runtime.Serialization;

namespace Parking_Garage_Management_System.Models
{
    /// <summary>A Class that represents a Value Ticket</summary>
    /// <seealso cref="Parking_Garage_Management_System.Models.ITicketType" />
    [KnownType(typeof(ValueTicket))]
    public class ValueTicket :ITicketType


    {
        public  int[] Lots { get;} = Enumerable.Range(11, 20).ToArray();
        public  VehicleDimentions Dimentions { get; } = new VehicleDimentions(2500, 2400, 5000);
        public  VehicleClass[] VehicleClasses { get; } = new VehicleClass[2] { VehicleClass.CLASS_A, VehicleClass.CLASS_B };
        public  int Cost { get; }= 100;
        public  int TimeLimit { get;  } = 72;

        public TICKET_TYPE Type { get; } = TICKET_TYPE.VALUE;


    }
}