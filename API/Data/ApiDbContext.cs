using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Data
{
    public class ApiDbContext : DbContext
    {
        
        public ApiDbContext(DbContextOptions options) : base(options){

        }

        public DbSet<User> Users{get; set;}
        public DbSet<Product> Products{get; set;}
        public DbSet<Movimentacao> Movimentacaos{get; set;}
    }
}