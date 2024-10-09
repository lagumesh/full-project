using Newtonsoft.Json;
using SWB240601.Models;
using SWB240601.Services.Common;
using SWB240601.Services.Interfaces;

namespace SWB240601.Services
{
    public class QualificationBoardService : BaseService, IQualificationBoardService
    {
        #region " constructor "

        public QualificationBoardService(IHttpContextAccessor session,
                                         IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "
        #endregion

        #region " properties "

        private string QualificationBoardURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/QualificationBoard";
        }

        #endregion

        #region " commands "
        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwQualificationBoard>?> GetQualificationBoardsAsync(string qualificationBoard)
        {
            HttpResponseMessage message = await httpClient.GetAsync($"{QualificationBoardURLPath}/{qualificationBoard}");

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwQualificationBoard>? qualificationBoards = JsonConvert.DeserializeObject<IEnumerable<qvwQualificationBoard>>(data);
            return qualificationBoards;
        }

        #endregion
    }
}
