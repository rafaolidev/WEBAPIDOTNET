namespace API.Models
{
    public class AddMovimentacaoRequest
    {
        public string? Tipo {get; set;}
        public int ProductId {get; set;}
        public int UserId {get; set;}
        public int Quantidade {get; set;}
    }
}