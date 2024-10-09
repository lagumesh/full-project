using SWB240603.Models;

namespace SWB240603.Services.Interfaces
{
	public interface IExServiceForceService
	{
		Task<IEnumerable<qvwExServiceForce>?> GetExServiceForcesAsync();
	}
}
