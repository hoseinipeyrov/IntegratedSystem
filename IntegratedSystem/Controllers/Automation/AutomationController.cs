using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Users;
using ViewModels;

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
        public Settings GetMenus()
        {
            var claim = HttpContext.User.Claims
                .FirstOrDefault(t=> t.Type == ClaimTypes.NameIdentifier);

            var user = _userService.GetUser(int.Parse(claim.Value));
            
            return new Settings
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
                    },
                    new Menus
                    {
                        Title = "کارتابل نامه ها",
                        MenuItems = new List<MenuItems>
                        {
                            new MenuItems{Icon = "mail",      Status =true, Link="/automation/compose",  Title="ارسال نامه"},
                            new MenuItems{Icon = "archive",   Status =true, Link="/automation/inbox",    Title="نامه های دریافتی"},
                            new MenuItems{Icon = "unarchive", Status =true, Link="/automation/outbox",   Title="نامه های ارسالی"},
                            new MenuItems{Icon = "drafts",    Status =true, Link="/automation/drafts",   Title="پیش نویس ها"},
                            new MenuItems{Icon = "bookmarks", Status =true, Link="/automation/category", Title="دسته بندی ها"},
                        }
                    },

                }
            };
        }
    }
}