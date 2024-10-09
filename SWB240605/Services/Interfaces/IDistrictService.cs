using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IDistrictService
    {
        Task<IEnumerable<qvwDistrict>?> GetDistrictsAsync(string stateCode);
    }
}
