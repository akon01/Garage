namespace Parking_Garage_Management_System.Models

{
    /// <summary>An Interface of A Ticket</summary>
    public interface ITicketType
    {

        /// <summary>Gets the lots.</summary>
        /// <value>The lots numbers of the ticket.</value>
        int[] Lots { get; }
        /// <summary>Gets the dimentions allowed in the Ticket.</summary>
        /// <value>The vehicle dimentions allowed.</value>
        VehicleDimentions Dimentions { get; }
        /// <summary>Gets the vehicle classes allowed in the ticket.</summary>
        /// <value>The vehicle classes allowed.</value>
        VehicleClass[] VehicleClasses { get; }
        /// <summary>Gets the cost of the ticket.</summary>
        /// <value>The cost of the ticket.</value>
        int Cost { get;  }
        /// <summary>Gets the time limit of the ticket.</summary>
        /// <value>The time limit of the ticket.</value>
        int TimeLimit { get; }
        /// <summary>Gets the type of the ticket.</summary>
        /// <value>The type of the ticket.</value>
        TICKET_TYPE Type { get; }
    }
}