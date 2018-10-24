using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Automation;
using Services.Users;
using ViewModels;
using ViewModels.Automation;

namespace IntegratedSystem.Controllers.Automation
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AutomationController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IContactService _contactService;

        public AutomationController(
            IUserService userService, 
            IContactService contactService)
        {
            _userService = userService;
            _contactService = contactService;
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
                        Title = "کارپوشه",
                        MenuItems = new List<MenuItems>
                        {
                            new MenuItems{Status =true, Link="/automation/compose",  Title="ارسال نامه"},
                            new MenuItems{Status =true, Link="/automation/inbox",    Title="نامه های دریافتی"},
                            new MenuItems{Status =true, Link="/automation/outbox",   Title="نامه های ارسالی"},
                            new MenuItems{Status =true, Link="/automation/drafts",   Title="پیش نویس ها"},
                            new MenuItems{Status =true, Link="/automation/category", Title="دسته بندی ها"},
                        }
                    },

                }
            };
        }

        public IEnumerable<ContactModel> GetContacts()
        {
            var contacts = _contactService.GetAll();

            return contacts.AsEnumerable();
        }
    }
}