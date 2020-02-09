using System.Linq;
using System.Runtime.Serialization;

namespace Parking_Garage_Management_System.Models
{
    /// <summary>A Class that represents a Vip Ticket</summary>
    /// <seealso cref="Parking_Garage_Management_System.Models.ITicketType" />
    [KnownType(typeof(ValueTicket))]
    public class VipTicket : ITicketType


    {
        public int[] Lots { get; } = Enumerable.Range(1, 10).ToArray();
        public VehicleDimentions Dimentions { get; } = new VehicleDimentions(0, 0, 0);
        public VehicleClass[] VehicleClasses { get;  } = new VehicleClass[3] { VehicleClass.CLASS_A, VehicleClass.CLASS_B, VehicleClass.CLASS_C };
        public int Cost { get;  } = 200;
        public int TimeLimit { get;  } = 0;

        public TICKET_TYPE Type { get; } = TICKET_TYPE.VIP;

    }
}