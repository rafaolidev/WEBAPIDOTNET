using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
namespace API.Models
{
    public class User
    {
        public int Id  {get; set;}
        public string? token {get; set;}
        public string? UserName {get; set;}
        public string? Email {get; set;}
        public string? Senha {get; set;}


       [IgnoreDataMember]
        public List<Movimentacao>? Movimentacaos {get; set;}
    }
}