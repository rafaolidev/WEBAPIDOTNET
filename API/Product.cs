
using System.Runtime.Serialization;

namespace API.Models
{
    public class Product
    {
        public int Id  {get; set;}
        public string Name {get; set;}
        public int Quantidade {get; set;}

        [IgnoreDataMember]
        public ICollection<Movimentacao> Movimentacaos {get; set;}
    }
}