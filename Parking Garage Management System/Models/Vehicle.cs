using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Parking_Garage_Management_System.Models
{
    /// <summary>A Class That Represents A Vehicle</summary>
    public class Vehicle
    {
        private string _Name;
        private long _LicensePlateID;
        private string _PhoneNumber;
        private VehicleType _vehicleType;
        private TICKET_TYPE _ticketType;
        private int _Height;
        private int _Width;
        private int _Length;
        private int _LotNumber;

        /// <summary>Gets or sets the name of the owner.</summary>
        /// <value>The name of the owner.</value>
        [Required]
        public string Name { get => _Name; set => _Name = value; }

        /// <summary>Gets or sets the license plate identifier.</summary>
        /// <value>The license plate identifier.</value>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long LicensePlateID { get => _LicensePlateID; set => _LicensePlateID = value; }
        /// <summary>Gets or sets the phone number.</summary>
        /// <value>The phone number of the owner.</value>
        [Required]
        public string PhoneNumber { get => _PhoneNumber; set => _PhoneNumber = value; }
        /// <summary>Gets or sets the type of the vehicle.</summary>
        /// <value>The type of the vehicle.</value>
        [Required]
        public VehicleType VehicleType { get => _vehicleType; set => _vehicleType = value; }
        /// <summary>Gets or sets the type of the ticket.</summary>
        /// <value>The type of the ticket.</value>
        [Required]
        public TICKET_TYPE TicketType { get => _ticketType; set => _ticketType = value; }
        /// <summary>Gets or sets the lot number.</summary>
        /// <value>The lot number the vehicle is parket in.</value>
        [Required]
        public int LotNumber { get => _LotNumber; set => _LotNumber = value; }
        /// <summary>Gets or sets the length.</summary>
        /// <value>The length of the vehicle.</value>
        [Required]
        public int Length { get => _Length; set => _Length = value; }
        /// <summary>Gets or sets the width.</summary>
        /// <value>The width of the vehicle.</value>
        [Required]
        public int Width { get => _Width; set => _Width = value; }
        /// <summary>Gets or sets the height.</summary>
        /// <value>The height of the vehicle.</value>
        [Required]
        public int Height { get => _Height; set => _Height = value; }

        /// <summary>Initializes a new deafult instance of the <see cref="Vehicle"/> class.</summary>
        public Vehicle()
        {
            Name = "Default";
            LicensePlateID = 123;
            PhoneNumber = "054";
            this.VehicleType = VehicleType.CROSSOVER;
            this.TicketType = TICKET_TYPE.REGULAR;
            this.Height = 100;
            this.Width = 100;
            this.Length = 100;
            this.LotNumber = 0;
        }

        /// <summary>Initializes a new instance of the <see cref="Vehicle"/> class.</summary>
        /// <param name="name">The name of owner.</param>
        /// <param name="licensePlateID">The license plate identifier.</param>
        /// <param name="phoneNumber">The phone number of owner.</param>
        /// <param name="vehicleType">Type of the vehicle.</param>
        /// <param name="ticketType">Type of the ticket.</param>
        /// <param name="lotNumber">The lot number the vehicle is stored in.</param>
        /// <param name="heigth">The heigth of the vehicle.</param>
        /// <param name="width">The width of the vehicle.</param>
        /// <param name="length">The length of the vehicle.</param>
        public Vehicle(string name, long licensePlateID, string phoneNumber, VehicleType vehicleType, TICKET_TYPE ticketType, int lotNumber,int heigth, int width, int length)
        {
            Name = name;
            LicensePlateID = licensePlateID;
            PhoneNumber = phoneNumber;
            this.VehicleType = vehicleType;
            this.TicketType = ticketType;
            Height = heigth;
            Width = width;
            Length = length;
            LotNumber = lotNumber;
        }

        /// <summary>Initializes a new instance of the <see cref="Vehicle"/> class.</summary>
        /// <param name="name">The name of owner.</param>
        /// <param name="licensePlateID">The license plate identifier.</param>
        /// <param name="phoneNumber">The phone number of owner.</param>
        /// <param name="vehicleType">Type of the vehicle.</param>
        /// <param name="ticketType">Type of the ticket.</param>
        /// <param name="heigth">The heigth of the vehicle.</param>
        /// <param name="width">The width of the vehicle.</param>
        /// <param name="length">The length of the vehicle.</param>
        public Vehicle(string name, long licensePlateID, string phoneNumber, VehicleType vehicleType, TICKET_TYPE ticketType, int heigth, int width, int length )
        {
            Name = name;
            LicensePlateID = licensePlateID;
            PhoneNumber = phoneNumber;
            this.VehicleType = vehicleType;
            this.TicketType = ticketType;
            Height = heigth;
            Width = width;
            Length = length;
        }

        /// <summary>Gets the vehicle class.</summary>
        /// <returns>Returns This Vehicle Class</returns>
        /// <exception cref="Exception">This Vehicle Type is not known</exception>
        public VehicleClass getVehicleClass()
        {
            switch (this.VehicleType)
            {
                case VehicleType.MOTORCYCLE:
                case VehicleType.PRIVATE:
                case VehicleType.CROSSOVER:
                    return VehicleClass.CLASS_A;
                case VehicleType.SUV:
                case VehicleType.VAN:
                    return VehicleClass.CLASS_B;
                case VehicleType.TRUCK:
                    return VehicleClass.CLASS_C;
            }

            throw new Exception("This Vehicle Type is not known");
        }

        public override string ToString()
        {
            return "name:" + this.Name + " licence:" + this.LicensePlateID + " phone:" + this.PhoneNumber + " vType:" + this.VehicleType + " TType:" + this.TicketType + " dim:" + this.Height + " " + this.Width + " " + this.Length + " Lot:" + this.LotNumber; 
        }
    }
}