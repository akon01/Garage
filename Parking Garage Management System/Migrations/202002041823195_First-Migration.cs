namespace Parking_Garage_Management_System.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class FirstMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Vehicles",
                c => new
                {
                    LicensePlateID = c.Long(nullable: false),
                    Name = c.String(nullable: false),
                    PhoneNumber = c.String(nullable: false),
                    VehicleType = c.Int(nullable: false),
                    TicketType = c.Int(nullable: false),
                    LotNumber = c.Int(nullable: false),
                    Length = c.Int(nullable: false),
                    Width = c.Int(nullable: false),
                    Height = c.Int(nullable: false),
                })
                .PrimaryKey(t => t.LicensePlateID);

            CreateStoredProcedure("GetAllVehiclesByTicketType2", v => new
            {
                ticketType = v.Int()
            },
            @"
            SELECT * FROM dbo.Vehicles WHERE TicketType = @ticketType
            ");
        }
        
        public override void Down()
        {
            DropTable("dbo.Vehicles");
        }
    }
}
