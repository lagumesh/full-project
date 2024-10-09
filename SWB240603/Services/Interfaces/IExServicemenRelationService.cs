using SWB240603.Models;

namespace SWB240603.Services.Interfaces
{
	public interface IExServicemenRelationService
	{
		Task<IEnumerable<qvwExServicemenRelation>?> GetExServicemenRelationsAsync();
	}
}
