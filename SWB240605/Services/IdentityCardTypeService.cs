using Newtonsoft.Json;
using SWB240605.Models;

namespace SWB240605.Services
{
    public class IdentityCardTypeService : BaseService, IIdentityCardTypeService
    {
        #region " constructor "

        public IdentityCardTypeService(IHttpContextAccessor session,
                                       IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " properties "

        private string IdentityCardTypeURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/IdentityCardType";
        }

        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwIdentityCardType>?> GetIdentityCardTypesAsync()
        {
            HttpResponseMessage message = await httpClient.GetAsync(IdentityCardTypeURLPath);

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwIdentityCardType>? cardTypes = JsonConvert.DeserializeObject<IEnumerable<qvwIdentityCardType>>(data);
            return cardTypes;
        }

        #endregion
    }
}
