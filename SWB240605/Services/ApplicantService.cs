using Newtonsoft.Json;
using SWB240605.Models;
using System.Text;

namespace SWB240605.Services
{
    public class ApplicantService : BaseService, IApplicantService
    {
        #region " constructor "

        public ApplicantService(IHttpContextAccessor session,
                               IConfiguration configuration) : base(session, configuration)
        { }

        #endregion

        #region " definitions "

        private IWebHostEnvironment _environment;

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

        public async Task<qvwApplicant?> GetApplicantsByAadharAsync(string aadharNo, DateTime dateOfBirth)
        {
            HttpResponseMessage message = await httpClient.GetAsync($"{ApplicantURLPath}/{aadharNo}/{dateOfBirth}");

            string result = await message.Content.ReadAsStringAsync();
            APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
            if (response == null) throw new Exception("Server is offline.");

            if (!response.Succeed) throw new Exception( GetErrorMessage(response));

            if(response.Data == null) return null;
            string? data = response.Data.ToString();
            
            if (data == null) return null;

            qvwApplicant? applicant = JsonConvert.DeserializeObject<qvwApplicant>(data);
            return applicant;
        }

        public async Task<string> GetApplicationAsync(int applicationNo, int visitorId)
        {
            HttpResponseMessage message = await httpClient.GetAsync($"{ApplicantURLPath}/{applicationNo}/{visitorId}/pdf");

            string result = await message.Content.ReadAsStringAsync();
            DocumentResponse response = JsonConvert.DeserializeObject<DocumentResponse>(result);
            if (!response.Succeed) throw new System.Exception(GetErrorMessage(response));

            if (response.Data == null) return string.Empty;

            var fileContent = Encoding.ASCII.GetBytes(response.Data.ToString());
            byte[] bytes = Convert.FromBase64String(response.Data.ToString());

            string folderDate = System.DateTime.Now.ToString("ddMMMyyyy");
            string fileDirectory = System.IO.Path.Combine(_environment.WebRootPath, "Downloads", "Application", folderDate);
            string fileName = $"{applicationNo}_{System.Guid.NewGuid().ToString()}.pdf";
            string filePath = System.IO.Path.Combine(fileDirectory, fileName);
            if (!System.IO.Directory.Exists(fileDirectory)) System.IO.Directory.CreateDirectory(fileDirectory);

            await System.IO.File.WriteAllBytesAsync(filePath, bytes);

            string PDFURLPath = string.Empty;
            PDFURLPath = $"{ApplicantURLPath}Downloads/Application/{folderDate}/{fileName}";
            return PDFURLPath;
        }
        #endregion
    }
}
