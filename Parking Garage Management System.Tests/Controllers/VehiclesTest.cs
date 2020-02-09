using System;
using System.Collections;
using System.Collections.Generic;
using System.Web.Http.Results;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Parking_Garage_Management_System;
using Parking_Garage_Management_System.Controllers;
using Parking_Garage_Management_System.Data;
using Parking_Garage_Management_System.Models;
using System.Linq;
using System.Web.Http;
using System.Threading.Tasks;

namespace Parking_Garage_Management_System.Tests.Controllers
{
    [TestClass]
    public class VehiclesTest
    {

        [TestMethod]
        public async Task checkInVehicle()
        {
            VehiclesController vc = new VehiclesController();
            Random random = new Random();
            Array tikcets = Enum.GetValues(typeof(TICKET_TYPE));
            TICKET_TYPE ticketType = TICKET_TYPE.VIP;
            Array vehicles = Enum.GetValues(typeof(VehicleType));
            VehicleType vehicleType = (VehicleType)vehicles.GetValue(random.Next(0, vehicles.Length - 1));
            long licensePlateID = random.Next(0, 100) * 1000 + random.Next(0, 100);
            Vehicle vehicleToCheckIn = new Vehicle("test" + random.Next(0, 100),
                licensePlateID,
                054 * 1000 + random.Next(0, 100).ToString(),
                vehicleType,
                ticketType,
                random.Next(0, 2),
                random.Next(0, 2),
                random.Next(0, 2)
                );
            IHttpActionResult result = await vc.checkInVehicle(vehicleToCheckIn);

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(CreatedAtRouteNegotiatedContentResult<Vehicle>));
            Assert.IsNotNull((result as CreatedAtRouteNegotiatedContentResult<Vehicle>).Content);
            Assert.AreNotEqual<int>(0, (result as CreatedAtRouteNegotiatedContentResult<Vehicle>).Content.LotNumber);
        }


        [TestMethod]
        public void GetAllVehicles()
        {
            VehiclesController vc = new VehiclesController();
         IEnumerable<Vehicle> vehicles =  vc.GetVehicles();
            

           // Assert.AreEqual<int>(2, vehicles.ToArray().Length);
            foreach(Vehicle v in vehicles)
            {
                Assert.IsNotNull(v);
                Assert.AreNotEqual<string>("Default", v.Name);
            }
        }

        [TestMethod]
        public async Task GetAVehicle()
        {
            VehiclesController vc = new VehiclesController();
            Random random = new Random();
            Vehicle[] vehicles = vc.GetVehicles().ToArray<Vehicle>();

            if(vehicles.Length > 0)
            {    
            var vehicleResult = await vc.GetVehicle( vehicles[random.Next(0, vehicles.Length-1)].LicensePlateID);

            

            Assert.IsNotNull(vehicleResult);
            Assert.IsNotInstanceOfType(vehicleResult, typeof(NotFoundResult));
            Assert.IsInstanceOfType(vehicleResult, typeof(OkNegotiatedContentResult<Vehicle>));
            }

        }

       
        [TestMethod]
        public async Task checkOutVehicle()
        {
            VehiclesController vc = new VehiclesController();
            Random random = new Random();
            Vehicle[] vehicles = vc.GetVehicles().ToArray<Vehicle>();
            if(vehicles.Length > 0)
            {
            Vehicle vehicle = vehicles[random.Next(0,vehicles.Length-1)];

            IHttpActionResult checkOutResult = await vc.checkOutVehicle(vehicle.LicensePlateID);
            IHttpActionResult afterCheckOutVheicle = await vc.GetVehicle(vehicle.LicensePlateID);
           
            Assert.IsNotNull(checkOutResult);
            Assert.IsInstanceOfType(checkOutResult, typeof(OkNegotiatedContentResult<Vehicle>));
            Assert.IsNotNull((checkOutResult as OkNegotiatedContentResult<Vehicle>).Content);

            Assert.IsInstanceOfType(afterCheckOutVheicle, typeof(NotFoundResult));
            } 



        }
    }
}
