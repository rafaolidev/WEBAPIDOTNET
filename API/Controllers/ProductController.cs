using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Models;

namespace API.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        
         private readonly ApiDbContext dbContext;
        public ProductController(ApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
         public IActionResult GetProducts(){

          return  Ok(dbContext.Products.ToList());

         }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetProduct([FromRoute] int id)
        {
            
            var product = dbContext.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }
         [HttpPost]
          public async Task<IActionResult> AddProduct(AddProductRequest addProductRequest ){
            
            var product = new Product()
            {
                Name = addProductRequest.Name,
                Quantidade = addProductRequest.Quantidade
            };
            
        
            await dbContext.Products.AddAsync(product);
            await dbContext.SaveChangesAsync();

            return Ok(product);
            
         }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] int id,UpdatProductRequest updatProductRequest)
        {

            var product = await dbContext.Products.FindAsync(id);

            if (product != null)
            {
                product.Quantidade = updatProductRequest.Quantidade;

                await dbContext.SaveChangesAsync();

                return Ok(product.Quantidade);
            }

        return NotFound();

        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id)
        {
            
            var product = dbContext.Products.FindAsync(id);

            if (product != null)
            {   
                await dbContext.SaveChangesAsync();
                return Ok(product);
            }

            return NotFound();

        }

    }
}