using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IPostUnitQualificationService
	{
		Task<IEnumerable<qvwPostUnitQualification>?> GetPostUnitQualificationsAsync(string postUnitCode);
	}
}
