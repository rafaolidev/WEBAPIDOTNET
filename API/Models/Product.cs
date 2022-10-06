namespace API.Models
{
    public class Product
    {
        public int Id  {get; set;}
        public string Name {get; set;}
        public int Quantidade {get; set;}

        public ICollection<Movimentacao> Movimentacaos {get; set;}
    }
}