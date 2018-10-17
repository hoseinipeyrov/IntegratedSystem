using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IntegratedSystem.Model;
using IntegratedSystem.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IntegratedSystem.Controllers
{
    [Route("api/[controller]/[action]")]
    public class UsersController : Controller
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login(LoginModel model)
        {
            try
            {
                if (!ModelState.IsValid)
                    throw new Exception("اطلاعات به درستی وارد کنید");

                var user = _userService.Login(model.UserName, model.Password);

                if (user == null)
                    return NotFound(new { message = "نام کاربری یافت نشد" });

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest (new { message = ex.Message });
            }
        }
    }
}
