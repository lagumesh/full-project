using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IKannadaStudiedModeService
    {
        Task<IEnumerable<qvwKannadaStudiedMode>?> GetKannadaStudiedModesAsync();
    }
}
