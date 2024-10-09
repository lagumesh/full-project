using Newtonsoft.Json;
using SWB240601.Models;
using SWB240601.Services.Common;
using SWB240601.Services.Interfaces;

namespace SWB240601.Services
{
    public class DistrictService : BaseService, IDistrictService
    {
        #region " constructor "

        public DistrictService(IHttpContextAccessor session,
                               IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "
        #endregion

        #region " properties "

        private string DistrictURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/District";
        }

        #endregion

        #region " commands "
        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwDistrict>?> GetDistrictsAsync(string stateCode)
        {
            HttpResponseMessage message = await httpClient.GetAsync($"{DistrictURLPath}/{stateCode}");

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwDistrict>? districts = JsonConvert.DeserializeObject<IEnumerable<qvwDistrict>>(data);
            return districts;
        }

        #endregion
    }
}
