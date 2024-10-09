using SWB240603.Models;

namespace SWB240603.Services.Interfaces
{
	public interface IQualificationBoardService
	{
		Task<IEnumerable<qvwQualificationBoard>?> GetQualificationBoardsAsync(string qualificationBoard);
	}
}
