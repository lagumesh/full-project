using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
    public interface IDistrictService
    {
        Task<IEnumerable<qvwDistrict>?> GetDistrictsAsync(string stateCode);
    }
}
