using Services.Users;
using System;
using System.Collections.Generic;
using System.Text;
using ViewModels.Automation;

namespace Services.Automation
{
    public interface IContactService
    {
        ContactModel GetById(int id);
        List<ContactModel> GetAll();

    }
    public class ContactService: IContactService
    {
        private readonly IUserService _userService;

        public ContactService(IUserService userServices)
        {
            _userService = userServices;
        }

        public ContactModel GetById(int id)
        {
            var user = new ContactModel { Id = 1, Name = "سعید احمدوند" };

            return user;
        }

        public List<ContactModel> GetAll()
        {
            var list = new List<ContactModel>
            {
                new ContactModel { Id = 1, Name = "کاربر 1" },
                new ContactModel { Id = 2, Name = "کاربر 2" },
                new ContactModel { Id = 3, Name = "کاربر 3" },
                new ContactModel { Id = 4, Name = "کاربر 4" },
                new ContactModel { Id = 5, Name = "کاربر 5" },
                new ContactModel { Id = 6, Name = "کاربر 6" },
                new ContactModel { Id = 7, Name = "کاربر 7" },
                new ContactModel { Id = 8, Name = "کاربر 8" },
                new ContactModel { Id = 9, Name = "کاربر 9" },
                new ContactModel { Id = 10, Name = "کاربر 10" },
            };

            return list;
        }
    }
}
