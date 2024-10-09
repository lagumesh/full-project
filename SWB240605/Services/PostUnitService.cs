using Newtonsoft.Json;
using SWB240605.Models;

namespace SWB240605.Services
{
    public class PostUnitService : BaseService, IPostUnitService
	{
		#region " constructor "

		public PostUnitService(IHttpContextAccessor session,
							   IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " definitions "
		#endregion

		#region " properties "

		private string PostUnitURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/PostUnit";
		}

		#endregion

		#region " commands "
		#endregion

		#region " queries "

		public async Task<IEnumerable<qvwPostUnit>?> GetPostUnitsAsync()
		{
			HttpResponseMessage message = await httpClient.GetAsync(PostUnitURLPath);

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

			IEnumerable<qvwPostUnit>? postUnits = JsonConvert.DeserializeObject<IEnumerable<qvwPostUnit>>(data);
			return postUnits;
		}

		#endregion
	}
}
