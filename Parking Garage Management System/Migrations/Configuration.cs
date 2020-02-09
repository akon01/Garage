namespace Parking_Garage_Management_System.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Parking_Garage_Management_System.Data.VehicleContext>
    {
        public Configuration()
        {
            this.AutomaticMigrationsEnabled = true;
            
        }

        protected override void Seed(Parking_Garage_Management_System.Data.VehicleContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
        }
    }
}
