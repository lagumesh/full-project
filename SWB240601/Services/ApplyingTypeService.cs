using Newtonsoft.Json;
using SWB240601.Models;
using SWB240601.Services.Common;
using SWB240601.Services.Interfaces;

namespace SWB240601.Services
{
    public class ApplyingTypeService : BaseService, IApplyingTypeService
    {
        #region " constructor "

        public ApplyingTypeService(IHttpContextAccessor session,
                                   IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "
        #endregion

        #region " properties "

        private string ApplyingTypeURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/ApplyingType";
        }

        #endregion

        #region " commands "
        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwApplyingType>?> GetApplyingTypesAsync()
        {
            HttpResponseMessage message = await httpClient.GetAsync(ApplyingTypeURLPath);

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwApplyingType>? applyingTypes = JsonConvert.DeserializeObject<IEnumerable<qvwApplyingType>>(data);
            return applyingTypes;
        }

        #endregion
    }
}
