﻿using Newtonsoft.Json;
using SWB240605.Models;

namespace SWB240605.Services
{
    public class KannadaStudiedModeService : BaseService, IKannadaStudiedModeService
    {
        #region " constructor "

        public KannadaStudiedModeService(IHttpContextAccessor session,
                                         IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "
        #endregion

        #region " properties "

        private string KannadaStudiedModeURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/KannadaPaperType";
        }

        #endregion

        #region " commands "
        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwKannadaStudiedMode>?> GetKannadaStudiedModesAsync()
        {
            HttpResponseMessage message = await httpClient.GetAsync(KannadaStudiedModeURLPath);

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwKannadaStudiedMode>? kannadaStudiedModes = JsonConvert.DeserializeObject<IEnumerable<qvwKannadaStudiedMode>>(data);
            return kannadaStudiedModes;
        }

        #endregion
    }
}
