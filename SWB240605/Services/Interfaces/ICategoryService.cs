using SWB240605.Models;

namespace SWB240605.Services
{
    public interface ICategoryService
    {
        Task<IEnumerable<qvwCategory>?> GetCategoriesAsync(string postUnitCode);
    }
}
