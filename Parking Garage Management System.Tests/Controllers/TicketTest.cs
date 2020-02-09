using System;
using System.Linq;
using System.Web.Http.Results;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Parking_Garage_Management_System.Controllers;
using Parking_Garage_Management_System.Models;
using Parking_Garage_Management_System.Models.Tickets;

namespace Parking_Garage_Management_System.Tests.Controllers
{
    [TestClass]
    public class TicketTest
    {
        [TestMethod]
        public void GetTickets()
        {
            TicketController tc = new TicketController();

          var returnedTypes= tc.GetTicketTypes();
            var enumTypes = Enum.GetNames(typeof(TICKET_TYPE));

            Assert.IsNotNull(returnedTypes);
            CollectionAssert.AreEqual(enumTypes, returnedTypes);

        }


        [TestMethod]
        public void GetTicket()
        {
            TicketController tc = new TicketController();

            var values = Enum.GetValues(typeof(TICKET_TYPE)).Cast<TICKET_TYPE>();

            foreach (var value in values)
            {

            var returnTicket = tc.GetTicketInfo(value);
            var ticket = Ticket.getTicketByType(value);


                Assert.IsNotNull(returnTicket);
                Assert.AreEqual(ticket, returnTicket);
            }        
        }

        [TestMethod]
        public void CheckVehicleLegal()
        {
            TicketController tc = new TicketController();

            var testLegalVehicle = new Vehicle("test", 1, "1", VehicleType.PRIVATE, TICKET_TYPE.REGULAR, 1, 1, 1);
            var testNotLegalVehicle = new Vehicle("test", 1, "1", VehicleType.PRIVATE, TICKET_TYPE.REGULAR, 100000, 1, 1);

            var legalResult = tc.isVehicleLegal(testLegalVehicle);
            var illigalResultSize = tc.isVehicleLegal(testNotLegalVehicle);

            Assert.IsNotNull(legalResult);
            Assert.IsInstanceOfType(legalResult, typeof(OkNegotiatedContentResult<bool>));


            Assert.IsNotNull(illigalResultSize);
            Assert.IsInstanceOfType(illigalResultSize, typeof(BadRequestErrorMessageResult));
        }
    }
}
