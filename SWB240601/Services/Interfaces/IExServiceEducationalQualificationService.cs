using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
	public interface IExServiceEducationalQualificationService
	{
		Task<IEnumerable<qvwExServiceEducationalQualification>?> GetExServiceEducationalQualificationsAsync();
	}
}
