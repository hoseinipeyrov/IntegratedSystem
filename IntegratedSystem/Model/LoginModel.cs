using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IntegratedSystem.Model
{
    public class LoginModel
    {
        [Required, MinLength(4)]
        public string UserName { get; set; }

        [Required, MinLength(4)]
        public string Password { get; set; }
    }
}
