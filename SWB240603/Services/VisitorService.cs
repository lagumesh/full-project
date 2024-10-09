using Newtonsoft.Json;
using SWB240603.Models;
using SWB240603.Services.Common;
using SWB240603.Services.Interfaces;
using System.Text;

namespace SWB240603.Services
{
	public class VisitorService : BaseService, IVisitorService
	{
		#region " constructor "

		public VisitorService(IHttpContextAccessor session,
							  IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " definitions "
		#endregion

		#region " properties "

		private string VisitorURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/Visitor";
		}

		#endregion

		#region " commands "

		public async Task<int> SaveAsync(Visitor visitor)
		{
			string jsonData = JsonConvert.SerializeObject(visitor);
			StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

			HttpResponseMessage message = await httpClient.PostAsync(VisitorURLPath, content);

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

			int visitorId = System.Convert.ToInt32(response.Data);
			return visitorId;
		}

		#endregion

		#region " queries "
		#endregion
	}
}
