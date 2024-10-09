using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IGenderService
	{
        Task<IEnumerable<qvwGender>?> GetGendersAsync();
    }
}
