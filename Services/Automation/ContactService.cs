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
                new ContactModel { Id = 1, Name = "سعید احمدوند" },
                new ContactModel { Id = 2, Name = "محسن زارع نژاد" },
                new ContactModel { Id = 3, Name = "امیر مهدی پور" },
                new ContactModel { Id = 4, Name = "علیرضا شلت" },
                new ContactModel { Id = 5, Name = "علی قمر نژاد" },
                new ContactModel { Id = 6, Name = "وحید غلامی" },
                new ContactModel { Id = 7, Name = "کامیار علامی" },
                new ContactModel { Id = 8, Name = "امید سجادی" },
                new ContactModel { Id = 9, Name = "رضا هاشمی" },
                new ContactModel { Id = 10, Name = "محمود آذر" },
            };

            return list;
        }
    }
}
