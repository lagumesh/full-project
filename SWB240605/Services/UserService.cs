using Newtonsoft.Json;
using SWB240605.Models;
using System.Text;

namespace SWB240605.Services
{
    public class UserService : BaseService, IUserService
    {
        #region " constructor "

        public UserService(IHttpContextAccessor session,
                                IConfiguration configuration) : base(session, configuration) 
        { }

        #endregion

        #region " properties "

        private string URLPath
        {
            get => $"{BaseURL}/Account";
        }

        #endregion

        #region " commands "

        public async Task<APIAuthorizedUserResponse?> LoginAsync(string userName, string password)
        {
            string jsonData = JsonConvert.SerializeObject(new
            {
                userName = userName,
                password = password
            });
            StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

            HttpResponseMessage message = await httpClient.PostAsync($"{URLPath}/authenticate", content);

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception($"Errors occured. {GetErrorMessage(response)}");

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            APIAuthorizedUserResponse? userResponse = JsonConvert.DeserializeObject<APIAuthorizedUserResponse>(data);
            return userResponse;
        }

        #endregion
    }
}
