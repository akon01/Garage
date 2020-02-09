using System;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Data.Entity;
using System.Web.Http.Description;
using Parking_Garage_Management_System.Data;
using Parking_Garage_Management_System.Models;
using Parking_Garage_Management_System.Models.Tickets;
using Parking_Garage_Management_System.Strings;
using System.Web.Http.Cors;

namespace Parking_Garage_Management_System.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    /// <summary>A Class that Handles REST exposure of Vehicle actions.</summary>
    /// <seealso cref="System.Web.Http.ApiController" />
    public class VehiclesController : ApiController
    {

        /// <summary>The database
        /// handler</summary>
        private VehicleContext db = new VehicleContext();





        /// <summary>Gets the available vehicle types.</summary>
        /// <returns>A String Array of the available vehicle types</returns>
        [Route("api/Vehicles/types")]
        [ResponseType(typeof(String[]))]
        [HttpGet]
        public string[] GetVehicleTypes()
        {
            return Enum.GetNames(typeof(VehicleType));
        }



        /// <summary>Gets the vehicles from the DB.</summary>
        /// <returns>An Iqueryable of the vehicles in the DB.</returns>
        [Route("api/Vehicles")]
        [ResponseType(typeof(IQueryable<Vehicle>))]
        [HttpGet]
        public IQueryable<Vehicle> GetVehicles()
        {
            return db.Vehicles;
        }


        /// <summary>Gets a vehicle by his License Plate Id.</summary>
        /// <param name="id">The License Plate Id of the Vehicle.</param>
        /// <returns>The Vehicle Object From the DB warped in An OK Http Result if found, NotFound Http Result otherwise.</returns>
        [Route("api/Vehicles/{id}",Name ="GetVehicle")]
        [ResponseType(typeof(Vehicle))]
        [HttpGet]
        public async Task<IHttpActionResult> GetVehicle(long id)
        {
            Vehicle vehicle = await db.Vehicles.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            return Ok(vehicle);
        }


        
        /// <summary>Checks-in the vehicle.</summary>
        /// <param name="vehicle">  A vehicle to check-in.</param>
        /// <returns>A CreatedAtRoute with the vehicle if check-in was succsessfull, BadRequest otherwise with a specific ErrorString.</returns>
        [Route("api/Vehicles/CheckIn")]
        [ResponseType(typeof(Vehicle))]
        [HttpPost]
        public async Task<IHttpActionResult> checkInVehicle(Vehicle vehicle)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Debug.WriteLine("check in vehicle");
            if (!Ticket.checkVehicleClass(vehicle))
            {
                return BadRequest(ErrorStrings.TicketVehicleClassError);
            }
            if(!Ticket.checkDimentions(vehicle.Height, vehicle.Width, vehicle.Length, vehicle.TicketType))
            {
                return BadRequest(ErrorStrings.TicketVehicleDimentionsError);
            }

            if (await this.VehicleExists(vehicle.LicensePlateID))
            {
                return BadRequest(ErrorStrings.VehhicleExsistsError);
            }
                
              try
            {
                //add Lot to car
                int lotNumber = await this.getAvailableLotByTicket(Ticket.getTicketByType(vehicle.TicketType)); 

                vehicle.LotNumber = lotNumber;
                //Write Car To DB

                Debug.Write("check in vehicle");

                db.Vehicles.Add(vehicle);
                await db.SaveChangesAsync();
            }
            catch (InvalidOperationException)
            {
                return BadRequest(ErrorStrings.TicketLotFullError);
            }

            return CreatedAtRoute("GetVehicle", new { id = vehicle.LicensePlateID }, vehicle);
        }


        /// <summary>Checks-in 5 hard-coded vehicles asynchronous.</summary>
        /// <returns>OK httpResult if checks-in succsessfully.</returns>
        [Route("api/Vehicles/CheckInAsyncTest")]
        [ResponseType(typeof(Vehicle[]))]
        [HttpPost]
        public async Task<IHttpActionResult> CheckInVehiclesAsync()
        {
            Vehicle[] vehicles = new Vehicle[5];
            var random = new Random();
            for (int i = 0; i < vehicles.Length; i++)
            {
                int randomName = random.Next(0, 40) * random.Next(1, 20);
                var vehicle = new Vehicle("rand" + randomName + i, i+ randomName, "num" + i, VehicleType.PRIVATE, TICKET_TYPE.VALUE, 100 + i, 100 + i, 100 + i);
                vehicles.SetValue(vehicle, i);
            
                await this.checkInVehicle(vehicle);
                
            }
            return Ok(vehicles);
        }

        /// <summary>Gets the first available lot of a ticket.</summary>
        /// <param name="ticket">The ticket to get the lot of.</param>
        /// <returns>The Number of the lot that's available.</returns>
        /// <exception cref="InvalidOperationException">No Available Lot In Ticket</exception>
        public async Task<int> getAvailableLotByTicket(ITicketType ticket)
        {
            //TODO: go to DB and check available lot and return the number
            int[] takenLots = await db.Database.SqlQuery<int>("SELECT LotNumber FROM dbo.Vehicles WHERE LotNumber BETWEEN @lowRange AND @highRange", new SqlParameter[] { new SqlParameter("lowRange", ticket.Lots[0]), new SqlParameter("highRange", ticket.Lots[ticket.Lots.Length - 1]) }).ToArrayAsync();
            int[] lots = ticket.Lots;
            int[] availableLots = lots.Except(takenLots).ToArray();
      
            if (availableLots.Length < 1)
            {
                throw new InvalidOperationException("No Available Lot In Ticket");
            }
            return availableLots[0];
        }


     

        // DELETE: api/Vehicles/CheckOut/5
        [Route("api/Vehicles/CheckOut/{id}")]
        [HttpDelete]
        [ResponseType(typeof(Vehicle))]
        public async Task<IHttpActionResult> checkOutVehicle(long id)
        {
            Vehicle vehicle = await db.Vehicles.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            db.Vehicles.Remove(vehicle);
            await db.SaveChangesAsync();

            return Ok(vehicle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private async Task<bool> VehicleExists(long id)
        {
            return await db.Vehicles.CountAsync(e => e.LicensePlateID == id) > 0;
        }

    }
}