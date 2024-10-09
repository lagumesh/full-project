using SWB240603.Models;

namespace SWB240603.Services.Interfaces
{
    public interface IUserService
    {
        Task<APIAuthorizedUserResponse?> LoginAsync(string username, string password);
    }
}
