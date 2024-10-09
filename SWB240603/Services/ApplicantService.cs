using Newtonsoft.Json;
using SWB240603.Models;
using SWB240603.Services.Common;
using SWB240603.Services.Interfaces;
using System.Text;

namespace SWB240603.Services
{
	public class ApplicantService : BaseService, IApplicantService
	{
		#region " constructor "

		public ApplicantService(IHttpContextAccessor session,
							   IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " definitions "
		#endregion

		#region " properties "

		private string ApplicantURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/Applicant";
		}

		#endregion

		#region " commands "

		public async Task<int> SaveAsync(Applicant applicant)
		{
			string jsonData = JsonConvert.SerializeObject(applicant);
			StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

			HttpResponseMessage message = await httpClient.PostAsync(ApplicantURLPath, content);

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);

			if (response == null) throw new Exception("Server is Offline.");
			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

			int applicationNo = System.Convert.ToInt32(response.Data);
			return applicationNo;
		}




		#endregion

		#region " queries "

		public async Task<qvwApplicant?> GetApplicantAsync(int applicationNo)
		{
			HttpResponseMessage message = await httpClient.GetAsync($"{ApplicantURLPath}/{applicationNo}/details");

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

			if (response.Data == null) return null;
			string? data = response.Data.ToString();

			if (data == null) return null;

			qvwApplicant? applicant = JsonConvert.DeserializeObject<qvwApplicant>(data);
			return applicant;
		}
        public async Task<string> GetApplicationAsync(int applicationNo, int visitorId)
        {
            HttpResponseMessage message = await httpClient.GetAsync($"{ApplicantURLPath}/{applicationNo}/{visitorId}/pdf");

            string result = await message.Content.ReadAsStringAsync();
            APIResponse response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("INvalid");

            string PDFURLPath = response.Data.ToString();
            return PDFURLPath;
        }
        public async Task<qvwApplicant?> GetApplicantsByAadharAsync(string aadharNo, DateTime dateOfBirth)
        {
            HttpResponseMessage message = await httpClient.GetAsync($"{ApplicantURLPath}/{aadharNo}/{dateOfBirth}");

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is offline.");

            if (!response.Succeed) throw new Exception(GetErrorMessage(response));

            if (response.Data == null) return null;
            string? data = response.Data.ToString();

            if (data == null) return null;

            qvwApplicant? applicant = JsonConvert.DeserializeObject<qvwApplicant>(data);
            return applicant;
        }
        #endregion
    }
}
