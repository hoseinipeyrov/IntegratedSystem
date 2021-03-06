﻿using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using ViewModels.Users;

namespace Services.Users
{
    public interface IUserService
    {
        UserModel GetUser(int id);
        UserModel Login(string username, string password);
    }

    public class UserServices : IUserService
    {
        private readonly AppSettings _appSettings;

        private List<UserModel> _user;

        public UserServices(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
            _user = new List<UserModel>
            {
                new UserModel{Id=1, FirstName="سعید", LastName="احمدوند" , UserName="saeed", Password="12345"},
                new UserModel{Id=2456, FirstName="وحید", LastName="احمدوند" , UserName="vahid", Password="12345"}
            };

        }

        public UserModel GetUser(int id)
        {
            var user = _user.Find(t => t.Id == id);

            if (user == null)
                throw new NullReferenceException("user not fount");

            return user;
        }

        public UserModel Login(string username, string password)
        {
            try
            {
                var user = _user.FirstOrDefault(t => t.UserName == username && t.Password == password);
                if (user == null)
                    return null;

                var key = Encoding.UTF8.GetBytes(_appSettings.Secret);
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                        new Claim(ClaimTypes.Name, user.UserName),
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(30),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);

                user.Token = tokenHandler.WriteToken(token);
                user.Password = null;

                return user;
            }
            catch
            {
                throw;
            }
        }
    }
}
