using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
    public interface IGenderService
    {
        Task<IEnumerable<qvwGender>?> GetGendersAsync();
    }
}
