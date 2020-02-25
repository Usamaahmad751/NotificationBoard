using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotificationBoardUet.Data;
using NotificationBoardUet.Models;

namespace NotificationBoardUet.Controllers
{
   [Authorize(Roles ="Manager")]
    [Route("[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {

        private readonly ApplicationDbContext context;
        private readonly IWebHostEnvironment ihostingEnvironment;
        public JobController(ApplicationDbContext _context, IWebHostEnvironment _ihostingEnvironment)
        {
            context = _context;
            ihostingEnvironment = _ihostingEnvironment;
        }


        // GET: api/Job
        [HttpGet]
        public IEnumerable<Job> Get()
        {
            List<Job> jobs = new List<Job>();
            jobs = context.Jobs.OrderBy(a => a.JobTitle).ToList();
            return jobs;
        }

        // GET: api/Job/5
        [HttpGet("{id}", Name = "GetJobs")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Job
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Job/5
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
