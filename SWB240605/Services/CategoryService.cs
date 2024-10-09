using Newtonsoft.Json;
using SWB240605.Models;

namespace SWB240605.Services
{
    public class CategoryService : BaseService, ICategoryService
    {
        #region " constructor "

        public CategoryService(IHttpContextAccessor session,
                                IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "
        #endregion

        #region " properties "

        private string CategoryURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/Category";
        }

        #endregion

        #region " commands "
        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwCategory>?> GetCategoriesAsync(string postUnitCode)
        {
            HttpResponseMessage message = await httpClient.GetAsync($"{CategoryURLPath}/{postUnitCode}");

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwCategory>? cateagories = JsonConvert.DeserializeObject<IEnumerable<qvwCategory>>(data);
            return cateagories;
        }

        #endregion
    }
}
