using SWB240603.Models;

namespace SWB240603.Services.Interfaces
{
	public interface IDistrictService
	{
		Task<IEnumerable<qvwDistrict>?> GetDistrictsAsync(string stateCode);
	}
}
