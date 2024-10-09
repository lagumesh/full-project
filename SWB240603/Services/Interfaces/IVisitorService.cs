using SWB240603.Models;

namespace SWB240603.Services.Interfaces
{
	public interface IVisitorService
	{
		Task<int> SaveAsync(Visitor visitor);
	}
}
