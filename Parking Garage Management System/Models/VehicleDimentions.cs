namespace Parking_Garage_Management_System.Models
{
    /// <summary>A Simple Class that represents A Vehicle Dimentions</summary>
    public class VehicleDimentions
    {
        private int _Height;
        private int _Width;
        private int _Length;

        public VehicleDimentions()
        {
            this.Height = 0;
            this.Width = 0;
            this.Length = 0;
        }

        public VehicleDimentions(int Height,int Width,int Length)
        {
            this.Height = Height;
            this.Width = Width;
            this.Length = Length;
        }

        public int Height { get => _Height; set => _Height = value; }
        public int Width { get => _Width; set => _Width = value; }
        public int Length { get => _Length; set => _Length = value; }
    }
}