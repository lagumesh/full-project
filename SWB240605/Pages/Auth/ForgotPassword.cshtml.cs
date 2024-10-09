using Microsoft.AspNetCore.Mvc;
using SWB240605.Models;
using SWB240605.Services;

namespace SWB240605.Pages
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
