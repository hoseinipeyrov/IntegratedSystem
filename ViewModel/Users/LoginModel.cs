using System.ComponentModel.DataAnnotations;

namespace ViewModels.Users
{
    public class LoginModel
    {
        [Required, MinLength(4)]
        public string UserName { get; set; }

        [Required, MinLength(4)]
        public string Password { get; set; }
    }
}
