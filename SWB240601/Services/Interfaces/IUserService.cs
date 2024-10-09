using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
    public interface IUserService
    {
        Task<APIAuthorizedUserResponse?> LoginAsync(string username, string password);
    }
}
