using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {   

        private readonly ApiDbContext dbContext;
        public UsersController(ApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
         public IActionResult GetUsers(){

          return  Ok(dbContext.Users.ToList());

         }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetUser([FromRoute] Guid id)
        {
            
            var user = dbContext.Users.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }
         [HttpPost]
          public async Task<IActionResult> AddUser(AddUserRequest addUserRequest ){
            
            var user = new User()
            {
                token = Guid.NewGuid().ToString(),
                UserName = addUserRequest.UserName,
                Email = addUserRequest.Email,
                Senha = addUserRequest.Senha

            };
            
            var eita = user.Email;


            await dbContext.Users.AddAsync(user);
            await dbContext.SaveChangesAsync();

            return Ok(eita);
            
         }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateUser([FromRoute] Guid id,UpdateUserRequest updateUserRequest)
        {

            var user = await dbContext.Users.FindAsync(id);

            if (user != null)
            {
                user.UserName = updateUserRequest.UserName;
                user.Email = updateUserRequest.Email;

                await dbContext.SaveChangesAsync();

                return Ok(user);
            }

        return NotFound();

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteUser([FromRoute] Guid id)
        {
            
            var user = dbContext.Users.FindAsync(id);

            if (user != null)
            {   
                var removedUser = user;
                await dbContext.SaveChangesAsync();
                return Ok("Usuário deletado com sucesso");
            }

            return NotFound();

        }
    }
}