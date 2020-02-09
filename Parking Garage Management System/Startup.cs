using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Calabonga.Owin.Angular;
using Parking_Garage_Management_System;
using System.Web.Http.Cors;
using Parking_Garage_Management_System.Data;

[assembly: OwinStartup(typeof(Startup))]
namespace Parking_Garage_Management_System
{

    /// <summary>
    /// Start for Owin
    /// </summary>
    public class Startup
    {

        public void Configuration(IAppBuilder app)
        {


            var config = new HttpConfiguration();
            config.EnableCors();
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // use WebAPI
            app.UseWebApi(config);

            //create a new vehicle context, for the first run will run migration and create DB.
            var vehicleContext = new VehicleContext();
       

            //use angular as the client side.
            app.UseSinglePageApplicationOverWebApi("/Angular/dist/ParkingGarage", "/", "/index.html");
        }
    }
}