using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Threading.Tasks;

namespace Services.Security
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