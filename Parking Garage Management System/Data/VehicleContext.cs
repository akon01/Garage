using Parking_Garage_Management_System.Migrations;
using Parking_Garage_Management_System.Models;
using System.Data.Entity;

namespace Parking_Garage_Management_System.Data
{
    /// <summary>A Class That Handels the DB Connection.</summary>
    /// <seealso cref="System.Data.Entity.DbContext" />
    public class VehicleContext :DbContext
    {
        /// <summary>Gets or sets the vehicles in the DB.</summary>
        /// <value>The vehicles saved in the DB.</value>
        public DbSet<Vehicle> Vehicles { get; set; }
    
        public VehicleContext() : base("Server=localhost;Database=ParkingManegment;Trusted_Connection=True;")
        {
            System.Data.Entity.Database.SetInitializer(new MigrateDatabaseToLatestVersion<VehicleContext, Configuration>());
        }


     
    

  
    }
}
