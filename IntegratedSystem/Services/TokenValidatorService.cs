using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Threading.Tasks;

namespace IntegratedSystem.Services
{
    public interface ITokenValidatorService
    {
        Task ValidateAsync(TokenValidatedContext context);
    }

    public class TokenValidatorService : ITokenValidatorService
    {
        public TokenValidatorService()
        {

        }
        public Task ValidateAsync(TokenValidatedContext context)
        {
            return Task.CompletedTask;
        }
    }
}