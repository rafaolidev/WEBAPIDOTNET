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
        [Route("{id:int}")]
        public IActionResult GetMovimentacao([FromRoute] int id)
        {

            var movimentacao = dbContext.Movimentacaos.Find(id);

            if (movimentacao == null)
            {
                return NotFound();
            }

            return Ok(movimentacao);
        }

        [HttpGet]
        [Route("/user/{id:int}")]
        public IActionResult GetMovimentacaoUser([FromRoute] int id)
        {

            var movimentacao = dbContext.Movimentacaos.Where(s => s.UserId == id);

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

            return Ok("Movimenta????o Concluida");

         }


        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteMovimentacao(int id)
        {

            var movimentacao = await dbContext.Movimentacaos.FindAsync(id);

            if (movimentacao != null)
            {
                dbContext.Remove(movimentacao);
                await dbContext.SaveChangesAsync();
                return Ok("Usu??rio deletado com sucesso");
            }

            return NotFound("Usu??rio n??o encontrado");

        }

    }
}