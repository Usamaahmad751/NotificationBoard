using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotificationBoardUet.Data;
using NotificationBoardUet.Models;

namespace NotificationBoardUet.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("[controller]")]
    [ApiController]
    public class BikeController : ControllerBase
    {
        private readonly IWebHostEnvironment ihostingEnvironment;
        private readonly ApplicationDbContext _context;

        public BikeController(ApplicationDbContext context, IWebHostEnvironment ihostingEnvironment)
        {
            this.ihostingEnvironment = ihostingEnvironment;
            _context = context;
        }

        // GET: api/Bike
        

        [HttpGet]
        public IEnumerable<Bike> Get()
        {
            List<Bike> bikes = new List<Bike>();
                bikes = _context.Bikes.OrderBy(a => a.BikeName).ToList();

            return bikes;
            
        }

        // GET: api/Bike/5
        [HttpGet("{id}", Name = "GetBike")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Bike
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Bike/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
