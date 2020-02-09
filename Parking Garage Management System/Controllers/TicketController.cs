using Parking_Garage_Management_System.Models;
using Parking_Garage_Management_System.Models.Tickets;
using Parking_Garage_Management_System.Strings;
using System;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace Parking_Garage_Management_System.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    /// <summary>A Class that Handles REST exposure of tickets actions.</summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    public class TicketController : ApiController
    {
        /// <summary>Gets the available ticket types.</summary>
        /// <returns>A String Array of the available Ticket types.</returns>
        [Route("api/Tickets")]
        [ResponseType(typeof(String[]))]
        [HttpGet]
        public string[] GetTicketTypes()
        {

            return Enum.GetNames(typeof(TICKET_TYPE));
        }

        /// <summary>Gets a ticket information by a ticket type.</summary>
        /// <param name="type">The type of the ticket to get.</param>
        /// <returns>A Ticket of the requested type.</returns>
        [Route("api/Tickets/{type}")]
        [ResponseType(typeof(ITicketType))]
        [HttpGet]
        public ITicketType GetTicketInfo(TICKET_TYPE type)
        {
            return Ticket.getTicketByType(type);
        }

        /// <summary>Determines whether the vehicle is legal for its requested Ticket.</summary>
        /// <param name="vehicle">The vehicle to test legality of.</param>
        /// <returns>Ok HttpResult if the Vehicle is legal, BadRequest if not.</returns>
        [Route("api/Tickets/CheckLegal")]
        [ResponseType(typeof(IHttpActionResult))]
        [HttpPost]
        public IHttpActionResult isVehicleLegal(Vehicle vehicle)
        {
            if (!Ticket.checkVehicleClass(vehicle))
            {
                return BadRequest(ErrorStrings.TicketVehicleClassError);
            }
            if (!Ticket.checkDimentions(vehicle.Height, vehicle.Width, vehicle.Length, vehicle.TicketType))
            {
                return BadRequest(ErrorStrings.TicketVehicleDimentionsError);
            }
            return Ok<bool>(true);
        }

       


    }
}
