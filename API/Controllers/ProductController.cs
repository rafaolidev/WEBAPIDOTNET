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
        [Route("{id:guid}")]
        public IActionResult GetProduct([FromRoute] Guid id)
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
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid id,UpdatProductRequest updatProductRequest)
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
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] Guid id)
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