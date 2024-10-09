using Newtonsoft.Json;
using SWB240601.Models;
using SWB240601.Services.Common;
using SWB240601.Services.Interfaces;

namespace SWB240601.Services
{
	public class ExServiceEducationalQualificationService : BaseService, IExServiceEducationalQualificationService
	{
		#region " constructor "

		public ExServiceEducationalQualificationService(IHttpContextAccessor session,
														 IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " definitions "
		#endregion

		#region " properties "

		private string EducationalQualificationURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/ExServiceEducationalQualification";
		}

		#endregion

		#region " commands "
		#endregion

		#region " queries "

		public async Task<IEnumerable<qvwExServiceEducationalQualification>?> GetExServiceEducationalQualificationsAsync()
		{
			HttpResponseMessage message = await httpClient.GetAsync(EducationalQualificationURLPath);

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

			if (response.Data == null) return null;
			string? data = response.Data.ToString();

			if (data == null) return null;

			IEnumerable<qvwExServiceEducationalQualification>? qualifications = JsonConvert.DeserializeObject<IEnumerable<qvwExServiceEducationalQualification>>(data);
			return qualifications;
		}

		#endregion
	}
}
