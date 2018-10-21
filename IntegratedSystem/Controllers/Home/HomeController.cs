using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ViewModels;

namespace IntegratedSystem.Controllers.Home {
    [Authorize]
    [ApiController]
    [Route ("api/[controller]/[action]")]
    public class HomeController : ControllerBase {
        
        [HttpGet]
        public IActionResult Index () {

            return Ok (new Settings {
                AppTitle = "صفحه اصلی",
                    ToolbarTitle = "دفتر مرکزی",
                    Menus = null
            });
        }
    }
}