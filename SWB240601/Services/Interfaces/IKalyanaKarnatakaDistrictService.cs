using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
	public interface IKalyanaKarnatakaDistrictService
	{
		Task<IEnumerable<qvwKalyanaKarnatakaDistrict>?> GetKalyanaKarnatakaDistrictsAsync();
	}
}
