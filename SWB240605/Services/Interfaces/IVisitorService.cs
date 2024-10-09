using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IVisitorService
    {
        Task<int> SaveAsync(Visitor visitor);
    }
}
