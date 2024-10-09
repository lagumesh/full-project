using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
	public interface IPostService
	{
		Task<IEnumerable<qvwPost>?> GetPostsAsync();
	}
}
