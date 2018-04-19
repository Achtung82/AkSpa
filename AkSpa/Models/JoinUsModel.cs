using System.ComponentModel.DataAnnotations;

namespace AkSpa.Models
{
    public class JoinUsModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Tel { get; set; }
        public string Instrument { get; set; }
        public string Other { get; set; }
    }
}
