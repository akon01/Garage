using System;

namespace Parking_Garage_Management_System.Models.Tickets
{

    /// <summary>A Static Class That Holds The Tickets Singelton</summary>
    public static class Ticket
    {
       static Ticket() { }
        public static ITicketType regularTicket { get; } = new RegularTicket();
        public static ITicketType valueTicket { get; } = new ValueTicket();
        public static ITicketType vipTicket { get; } = new VipTicket();

        /// <summary>Gets A ticket by Type</summary>
        /// <param name="type">The type of the ticket To Get.</param>
        /// <returns>A Ticket Singelton</returns>
        public static ITicketType getTicketByType(TICKET_TYPE type)
        {
            switch (type)
            {
                case TICKET_TYPE.VIP:
                    return vipTicket;
                case TICKET_TYPE.VALUE:
                    return valueTicket;
                case TICKET_TYPE.REGULAR:
                    return regularTicket;
            }
            return null;
        }
        /// <summary>Checks if the dimentions of a Vehicle match allowed dimentions of Ticket.</summary>
        /// <param name="height">The height of the Vehicle.</param>
        /// <param name="width">The width of the vehicle.</param>
        /// <param name="length">The length of the vehicle.</param>
        /// <param name="ticketType">Type of the ticket to check against.</param>
        /// <returns>true if the dimentions are valid for the ticket, false otherwise.</returns>
        public static bool checkDimentions(int height, int width, int length, TICKET_TYPE ticketType)
        {
            //Vip Doesn't have dimentions limitations.
            if(ticketType == TICKET_TYPE.VIP)
            {
                return true;
            }
            ITicketType ticket = Ticket.getTicketByType(ticketType);
            if (height > ticket.Dimentions.Height || width > ticket.Dimentions.Width || length > ticket.Dimentions.Length)
            {
                return false;
            }
            return true;
        }

        /// <summary>Checks if the vehicle classis in allowed Vehicle classes of a specific ticket.</summary>
        /// <param name="vehicle">The vehicle to check the class of.</param>
        /// <returns>True if the class of the vehicle is one of the allowed of the ticket.</returns>
        public static bool checkVehicleClass(Vehicle vehicle)
        {
            ITicketType ticket = Ticket.getTicketByType(vehicle.TicketType);
            VehicleClass[] vehicleClasses = ticket.VehicleClasses;
            if (!Array.Exists<VehicleClass>(vehicleClasses, (vehicleClass) => vehicleClass == vehicle.getVehicleClass()))
            {
                return false;
            }
            return true;
        }
    }

}