namespace API.Models
{
    public class Movimentacao
    {   
        public int Id  {get; set;}
        public string Tipo {get; set;}
        public DateTime CriadoEm {get; set;}
        public int Quantidade {get; set;}

        public int? ProductId {get; set;}

        public int? UserId {get; set;}
    }
}