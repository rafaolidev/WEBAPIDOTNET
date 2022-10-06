using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Models;

namespace API.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]
    public class MovimentacaoController :Controller
    {
        
        private readonly ApiDbContext dbContext;
        public MovimentacaoController(ApiDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
         public IActionResult GetMovimentacoes(){

          return  Ok(dbContext.Movimentacaos.ToList());

         }

        [HttpGet]
        [Route("{id:guid}")]
        public IActionResult GetMovimentacao([FromRoute] Guid id)
        {
            
            var movimentacao = dbContext.Movimentacaos.Find(id);

            if (movimentacao == null)
            {
                return NotFound();
            }

            return Ok(movimentacao);
        }
         [HttpPost]
          public async Task<IActionResult> AddMovimentacao(AddMovimentacaoRequest addMovimentacaoRequest ){

           
            var movimetacao = new Movimentacao()
            {
                
                Tipo = addMovimentacaoRequest.Tipo,
                ProductId = addMovimentacaoRequest.ProductId,
                UserId = addMovimentacaoRequest.UserId,
                CriadoEm = DateTime.Now,
                Quantidade = addMovimentacaoRequest.Quantidade

            };

            var product = dbContext.Products.Find(movimetacao.ProductId);

            if (product == null)
            {
                return NotFound();
            }
            
            if (movimetacao.Tipo == "venda")
            {
                if (product.Quantidade < movimetacao.Quantidade)
                {
                    
                    return NotFound("Quantidade em estoque, {product.Quantidade}, menor que a venda.");

                }

                product.Quantidade = product.Quantidade - movimetacao.Quantidade;

            }

            if (movimetacao.Tipo == "compra")
            {
                
                product.Quantidade = product.Quantidade + movimetacao.Quantidade;

            }

            await dbContext.Movimentacaos.AddAsync(movimetacao);
            await dbContext.SaveChangesAsync();

            return Ok("Movimentação Concluida");
            
         }


        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteMovimentacao([FromRoute] Guid id)
        {
            
            var movimentacao = dbContext.Movimentacaos.FindAsync(id);

            if (movimentacao != null)
            {   
                await dbContext.SaveChangesAsync();
                return Ok();
            }

            return NotFound();

        }

    }
}