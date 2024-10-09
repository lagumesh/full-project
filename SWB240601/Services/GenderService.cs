using Newtonsoft.Json;
using SWB240601.Models;
using SWB240601.Services.Common;
using SWB240601.Services.Interfaces;

namespace SWB240601.Services
{
    public class GenderService : BaseService, IGenderService
    {
        #region " constructor "

        public GenderService(IHttpContextAccessor session,
                             IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "
        #endregion

        #region " properties "

        private string GenderURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/Gender";
        }

        #endregion

        #region " commands "
        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwGender>?> GetGendersAsync()
        {
            HttpResponseMessage message = await httpClient.GetAsync(GenderURLPath);

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwGender>? genders = JsonConvert.DeserializeObject<IEnumerable<qvwGender>>(data);
            return genders;
        }

        #endregion
    }
}
