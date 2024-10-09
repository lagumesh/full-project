using Microsoft.AspNetCore.Mvc;
using SWB240605.Models;
using SWB240605.Services;

namespace SWB240605.Pages.Home
{
    public class MyApplicationModel : BasePage
    {
        #region " constructor "

        public MyApplicationModel(IConfiguration configuration, IApplicantService applicantService) : base(configuration)
        {
            _applicantService = applicantService;
        }

        #endregion

        #region " definitions "

        private readonly IApplicantService _applicantService;   

        #endregion

        #region " properties "

        public qvwApplicant? ApplicantDetails { get; set; }

        #endregion

        #region " methods "
        
        private async Task<qvwApplicant?> GetApplicantAsync(int applicationNo)
        {
            return await _applicantService.GetApplicantAsync(applicationNo);
        }

        private async Task<bool> LoadApplicantAsync(int applicationNo)
        {
            ApplicantDetails = await GetApplicantAsync(applicationNo);

            return true;
        }

        private async Task<string> GetApplicationPDFPathAsync(int applicationNo, int visitorId)
        {
            return await _applicantService.GetApplicationAsync(applicationNo, visitorId);
        }

        #endregion

        #region " events "

        public async Task<IActionResult> OnGet()
        {
            try
            {
                int applicationNo = GetLoggedApplicationNo();
                if (applicationNo == -1)
                    throw new Exception("Session Expired. Login Again");

                bool isLoaded = await LoadApplicantAsync(applicationNo);

                return Page();
            }
            catch (Exception ex) 
            {
                return RedirectToPage("../index");
            }
        }

        public async Task<IActionResult> OnPostGetApplicationPathAsync(string appNo)
        {
            int visitorId = GetCurrentVisitorId();
            int applicationNo = GetLoggedApplicationNo();

            string applicationPath = await GetApplicationPDFPathAsync(applicationNo, visitorId);

            return new JsonResult(applicationPath);
        }
        #endregion
    }
}
