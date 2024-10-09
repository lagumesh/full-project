using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
    public interface IApplyingTypeService
    {
        Task<IEnumerable<qvwApplyingType>?> GetApplyingTypesAsync();
    }
}
