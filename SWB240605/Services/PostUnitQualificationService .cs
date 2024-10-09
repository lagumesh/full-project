using Newtonsoft.Json;
using SWB240605.Models;

namespace SWB240605.Services
{
    public class PostUnitQualificationService : BaseService, IPostUnitQualificationService
    {
		#region " constructor "

		public PostUnitQualificationService(IHttpContextAccessor session,
							   IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " properties "

		private string PostUnitQualificationURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/PostUnitQualification";
		}

		#endregion

		#region " queries "

		public async Task<IEnumerable<qvwPostUnitQualification>?> GetPostUnitQualificationsAsync(string postUnitCode)
		{
			HttpResponseMessage message = await httpClient.GetAsync($"{PostUnitQualificationURLPath}/{postUnitCode}");

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            IEnumerable<qvwPostUnitQualification>? postUnitQualifications = JsonConvert.DeserializeObject<IEnumerable<qvwPostUnitQualification>>(data);
			return postUnitQualifications;
		}

		#endregion
	}
}
