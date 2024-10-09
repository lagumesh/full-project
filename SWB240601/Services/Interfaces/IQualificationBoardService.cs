using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
    public interface IQualificationBoardService
    {
        Task<IEnumerable<qvwQualificationBoard>?> GetQualificationBoardsAsync(string qualificationBoard);
    }
}
