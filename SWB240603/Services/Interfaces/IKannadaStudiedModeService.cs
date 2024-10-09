using SWB240603.Models;

namespace SWB240603.Services.Interfaces
{
	public interface IKannadaStudiedModeService
	{
		Task<IEnumerable<qvwKannadaStudiedMode>?> GetKannadaStudiedModesAsync();
	}
}
