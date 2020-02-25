using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using NotificationBoardUet.Data;
using NotificationBoardUet.Models;

namespace NotificationBoardUet.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IWebHostEnvironment ihostingEnvironment;
            public PostController(ApplicationDbContext _context , IWebHostEnvironment _ihostingEnvironment) {
            context = _context;
            ihostingEnvironment = _ihostingEnvironment;
        }


        // GET: api/Post
        [HttpGet]
        public IEnumerable<Post> Get()
        {
            List<Post> posts = new List<Post>();
            posts = context.Posts.OrderBy(a => a.PostTitle).ToList();

            return posts;

        }

        // GET: api/Post/5
        [HttpGet("{id}", Name = "GetPost")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Post
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Post/5
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
