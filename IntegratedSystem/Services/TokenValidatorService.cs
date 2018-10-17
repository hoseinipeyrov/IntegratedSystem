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
        private readonly ITokenValidatorService _tokenValidatorService;

        public TokenValidatorService(ITokenValidatorService tokenValidatorService)
        {
            _tokenValidatorService = tokenValidatorService;
        }
        public async Task ValidateAsync(TokenValidatedContext context)
        {
            
        }
    }
}