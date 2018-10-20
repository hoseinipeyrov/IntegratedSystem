using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntegratedSystem.Model;
using IntegratedSystem.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IntegratedSystem.Controllers.Automation
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AutomationController : ControllerBase
    {
        private readonly IUserService _userService;

        public AutomationController(IUserService userService)
        {
            _userService = userService;
        }


        [HttpGet]
        public Option GetMenus()
        {
            var user = _userService.GetUser(HttpContext.User.Identity.Name);
            
            return new Option
            {
                AppTitle = "اتوماسیون و مکاتبات",
                ToolbarTitle = $"{user.FirstName} {user.LastName}",
                Menus = new List<Menus>
                {
                    new Menus
                    {
                        Title = "عملیات جاری",
                        MenuItems = new List<MenuItems>
                        {
                            new MenuItems{Link="/automation/department", Title="چارت سازمانی", Status =true}
                        }
                    }
                }
            };
        }
    }
}