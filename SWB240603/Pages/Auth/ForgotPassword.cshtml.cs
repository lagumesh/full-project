using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SWB240603.Models;
using SWB240603.Pages.Common;
using SWB240603.Services.Interfaces;

namespace SWB240603.Pages.Auth
{
    public class ForgotPasswordModel : BasePage
    {
        #region " constructor "

        public ForgotPasswordModel(IConfiguration configuration,
                                    IApplicantService applicantService) : base(configuration)
        {
            _applicantService = applicantService;
        }

        #endregion

        #region " definitions "

        private readonly IApplicantService _applicantService;

        #endregion

        #region " properties "

        [BindProperty]
        public qvwApplicant? ApplicantDetails { get; set; }

        #endregion

        #region " methods "
        private async Task<qvwApplicant> GetApplicantsByAadhar(string aadharNo, DateTime dateOfBirth)
        {
            return await _applicantService.GetApplicantsByAadharAsync(aadharNo, dateOfBirth);
        }
        #endregion

        #region " events "

        public async Task<IActionResult> OnGetGetApplicantsAsync(string aadharNo, DateTime dateOfBirth)
        {
            qvwApplicant applicants = await GetApplicantsByAadhar(aadharNo, dateOfBirth);
            return new JsonResult(applicants);
        }
        #endregion
    }
}
