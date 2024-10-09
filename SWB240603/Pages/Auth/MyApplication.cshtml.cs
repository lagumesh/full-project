using SWB240603.Pages.Common;
using SWB240603.Models;
using SWB240603.Services.Interfaces;

namespace SWB240603.Pages.Auth
{
    public class MyApplicationModel : BaseAuthorizedPageModel
    {
        #region " constructor "

        public MyApplicationModel(IConfiguration configuration,
                                  IApplicantService applicantService,
           IVisitorService visitorService) : base(configuration)
        {
            _applicantService = applicantService;
        }

        #endregion

        #region " definitions "

        private readonly IApplicantService _applicantService;
        private readonly IVisitorService _visitorService;

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

        private async Task<int> SaveVisitorAsync(string ipAddress, string browserInfo)
        {
            Visitor visitor = new Visitor()
            {
                IPAddress = ipAddress,
                VisitedOn = DateTime.Now,
                Browser = browserInfo
            };

            return await _visitorService.SaveAsync(visitor);
        }
        private async Task<bool> ValidateVisitorAsync()
        {
            int visitorId = GetCurrentVisitorId();
            if (visitorId == 0)
            {
                visitorId = await SaveVisitorAsync(HttpContext.Connection.RemoteIpAddress?.ToString(),
                                                             Request.Headers["User-Agent"].ToString());
                StoreVisitorId(visitorId);
            }

            return true;
        }

        #endregion

        //#region " events " 

        //public async Task<IActionResult> OnGet()
        //{
        //    try
        //    {
        //        int applicationNo = GetLoggedApplicationNo();
        //        if (applicationNo == -1)
        //            throw new Exception("Session Expired. Login Again");

        //        bool isLoaded = await LoadApplicantAsync(applicationNo);

        //        return Page();
        //    }
        //    catch (Exception ex)
        //    {
        //        return RedirectToPage("../index");
        //    }
        //}

        //#endregion
    }
}
