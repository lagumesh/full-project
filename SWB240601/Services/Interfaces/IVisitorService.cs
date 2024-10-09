using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
    public interface IVisitorService
    {
        Task<int> SaveAsync(Visitor visitor);
    }
}
