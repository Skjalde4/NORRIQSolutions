using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NORRIQ_Solutions.Data;
using NORRIQ_Solutions.Model;

namespace NORRIQ_Solutions.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly NORRIQ_SolutionsContext _context;

        public UsersController(NORRIQ_SolutionsContext context)
        {
            _context = context;
        }

        private ManageDB manageDb = new ManageDB();

       
        // GET: api/Users
        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return manageDb.GetAll();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public User GetOneUser([FromRoute] int id)
        {
            manageDb.GetAll();
            return manageDb.UserList.Find(i => i.CustomerId == id);
           
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser([FromRoute] int id, [FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            if (id != user.CustomerId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        [HttpPost]
        public void AddUser([FromBody] User value)
        {
            manageDb.Add(value);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public void DeleteUser( int id)
        {
            manageDb.GetAll();
            manageDb.UserList.Find(i => i.CustomerId == id);
            manageDb.Delete(id);
        }

        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.CustomerId == id);
        }
    }
}