using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IQualificationBoardService
    {
        Task<IEnumerable<qvwQualificationBoard>?> GetQualificationBoardsAsync(string qualificationBoard);
    }
}
