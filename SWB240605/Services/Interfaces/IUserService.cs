using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IUserService
    {
        Task<APIAuthorizedUserResponse?> LoginAsync(string username, string password);
    }
}
