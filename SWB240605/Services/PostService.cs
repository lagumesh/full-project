using Newtonsoft.Json;
using SWB240605.Models;

namespace SWB240605.Services
{
    public class PostService : BaseService, IPostService
    {
        #region " constructor "

        public PostService(IHttpContextAccessor session,
                           IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "
        #endregion

        #region " properties "

        private string PostURLPath
        {
            get => $"{BaseURL}/v{BaseVersion}/Post";
        }

        #endregion

        #region " commands "
        #endregion

        #region " queries "

        public async Task<IEnumerable<qvwPost>?> GetPostsAsync()
        {
            HttpResponseMessage message = await httpClient.GetAsync(PostURLPath);

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is Offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwPost>? posts = JsonConvert.DeserializeObject<IEnumerable<qvwPost>>(data);
            return posts;
        }

        #endregion
    }
}
