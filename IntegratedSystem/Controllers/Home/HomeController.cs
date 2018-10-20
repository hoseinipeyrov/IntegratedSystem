using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntegratedSystem.Model;
using IntegratedSystem.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IntegratedSystem.Controllers.Home {
    [Authorize]
    [ApiController]
    [Route ("api/[controller]/[action]")]
    public class HomeController : ControllerBase {
        
        [HttpGet]
        public IActionResult Index () {
            var a = HttpContext.Session;
            return Ok (new Option {
                AppTitle = "صفحه اصلی",
                    ToolbarTitle = "دفتر مرکزی",
                    Menus = null
            });
        }
    }
}