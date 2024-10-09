using SWB240603.Models;

namespace SWB240603.Services.Interfaces
{
	public interface ICategoryService
	{
		Task<IEnumerable<qvwCategory>?> GetCategoriesAsync();
	}
}
