using System.Linq;
using System.Runtime.Serialization;

namespace Parking_Garage_Management_System.Models
{

    /// <summary>A Class that represents a Regular Ticket</summary>
    /// <seealso cref="Parking_Garage_Management_System.Models.ITicketType" />
    [KnownType(typeof(RegularTicket))]
    public  class RegularTicket : ITicketType


    {
        public  int[] Lots { get; } = Enumerable.Range(31, 30).ToArray();
        public  VehicleDimentions Dimentions { get;  } = new VehicleDimentions(2000, 2000, 3000);
        public  VehicleClass[] VehicleClasses { get; } = new VehicleClass[1] { VehicleClass.CLASS_A };
        public  int Cost { get;  } = 50;
        public  int TimeLimit { get;  } = 24;

        public TICKET_TYPE Type { get; } = TICKET_TYPE.REGULAR;
   
    }
}