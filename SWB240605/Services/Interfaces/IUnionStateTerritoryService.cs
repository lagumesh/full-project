using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IUnionStateTerritoryService
    {
        Task<IEnumerable<qvwUnionStateTerritory>?> GetUnionStateTerritoriesAsync();
    }
}
