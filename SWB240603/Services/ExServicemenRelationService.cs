using Newtonsoft.Json;
using SWB240603.Models;
using SWB240603.Services.Common;
using SWB240603.Services.Interfaces;

namespace SWB240603.Services
{
	public class ExServicemenRelationService : BaseService, IExServicemenRelationService
	{
		#region " constructor "

		public ExServicemenRelationService(IHttpContextAccessor session,
										   IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " definitions "
		#endregion

		#region " properties "

		private string ExServicemenRelationURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/ExServicemenRelation";
		}




		#endregion

		#region " commands "
		#endregion

		#region " queries "

		public async Task<IEnumerable<qvwExServicemenRelation>?> GetExServicemenRelationsAsync()
		{
			HttpResponseMessage message = await httpClient.GetAsync(ExServicemenRelationURLPath);

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

			if (response.Data == null) return null;
			string? data = response.Data.ToString();

			if (data == null) return null;

			IEnumerable<qvwExServicemenRelation>? exServicemenRelations = JsonConvert.DeserializeObject<IEnumerable<qvwExServicemenRelation>>(data);
			return exServicemenRelations;
		}

		#endregion
	}
}
