using Newtonsoft.Json;
using SWB240603.Models;
using SWB240603.Services.Common;
using SWB240603.Services.Interfaces;

namespace SWB240603.Services
{
	public class KalyanaKarnatakaDistrictService : BaseService, IKalyanaKarnatakaDistrictService
	{
		#region " constructor "

		public KalyanaKarnatakaDistrictService(IHttpContextAccessor session,
											   IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " definitions "
		#endregion

		#region " properties "

		private string KalyanaKarnatakaDistrictURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/KalyanaKarnatakaDistrict";
		}




		#endregion

		#region " commands "
		#endregion

		#region " queries "

		public async Task<IEnumerable<qvwKalyanaKarnatakaDistrict>?> GetKalyanaKarnatakaDistrictsAsync()
		{
			HttpResponseMessage message = await httpClient.GetAsync(KalyanaKarnatakaDistrictURLPath);

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

			if (response.Data == null) return null;
			string? data = response.Data.ToString();

			if (data == null) return null;

			IEnumerable<qvwKalyanaKarnatakaDistrict>? districts = JsonConvert.DeserializeObject<IEnumerable<qvwKalyanaKarnatakaDistrict>>(data);
			return districts;
		}

		#endregion
	}
}
