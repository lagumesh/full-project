﻿using Newtonsoft.Json;
using SWB240605.Models;

namespace SWB240605.Services
{
    public class UnionStateTerritoryService : BaseService, IUnionStateTerritoryService
    {
        #region " constructor "

        public UnionStateTerritoryService(IHttpContextAccessor session,
                                          IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "
        #endregion

        #region " properties "

        private string UnionStateTerritoryURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/UnionStateTerritory";
        }

        #endregion

        #region " commands "
        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwUnionStateTerritory>?> GetUnionStateTerritoriesAsync()
        {
            HttpResponseMessage message = await httpClient.GetAsync(UnionStateTerritoryURLPath);

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwUnionStateTerritory>? states = JsonConvert.DeserializeObject<IEnumerable<qvwUnionStateTerritory>?>(data);
            return states;
        }

        #endregion
    }
}
