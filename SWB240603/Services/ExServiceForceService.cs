using Newtonsoft.Json;
using SWB240603.Models;
using SWB240603.Services.Common;
using SWB240603.Services.Interfaces;

namespace SWB240603.Services
{
	public class ExServiceForceService : BaseService, IExServiceForceService
	{
		#region " constructor "

		public ExServiceForceService(IHttpContextAccessor session,
									 IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " definitions "
		#endregion

		#region " properties "

		private string ExServiceForceURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/ExServiceForce";
		}




		#endregion

		#region " commands "
		#endregion

		#region " queries "

		public async Task<IEnumerable<qvwExServiceForce>?> GetExServiceForcesAsync()
		{
			HttpResponseMessage message = await httpClient.GetAsync(ExServiceForceURLPath);

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

			if (response.Data == null) return null;
			string? data = response.Data.ToString();

			if (data == null) return null;

			IEnumerable<qvwExServiceForce>? exServiceForces = JsonConvert.DeserializeObject<IEnumerable<qvwExServiceForce>>(data);
			return exServiceForces;
		}

		#endregion
	}
}
