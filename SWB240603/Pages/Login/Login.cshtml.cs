using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SWB240603.Models;
using SWB240603.Pages.Common;
using SWB240603.Services.Interfaces;

namespace SWB240603.Pages.Login
{
    public class LoginModel : BasePage
    {
        #region " constructor "

        public LoginModel(IConfiguration configuration,
                          IUserService userService,
                          IVisitorService visitorService) : base(configuration)
        {
            _userService = userService;
            _visitorService = visitorService;
        }

        #endregion

        #region " definitions "

        private readonly IUserService _userService;
        private readonly IVisitorService _visitorService;

        #endregion

        #region " properties "

        [BindProperty]
        public Applicant? ApplicantModel { get; set; }

        #endregion

        #region " methods "

        private void initApplicant()
        {
            ApplicantModel = new Applicant();
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

        private async Task<APIAuthorizedUserResponse?> IsLoginCredentialsValid(int applicationNo, DateTime dateOfBirth)
        {
            return await _userService.LoginAsync(applicationNo.ToString(), dateOfBirth.ToString("ddMMMyyyy"));
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

        #region " events "

        public void OnGet()
        {
            try
            {

            }
            catch (Exception ex)
            {
                TempData["ErrorMessage"] = ex.Message;
            }
        }

        public async Task<IActionResult> OnPostAsync()
        {
            try
            {
                if (ApplicantModel == null)
                    throw new Exception("Invalid Application No. and Date of Birth.");

                APIAuthorizedUserResponse? user = await IsLoginCredentialsValid(ApplicantModel.ApplicationNo, ApplicantModel.DateOfBirth);
                if (user == null || string.IsNullOrEmpty(user.JWToken)) throw new Exception("Invalid Login Credentials.");

                StoreApplicationNo(ApplicantModel.ApplicationNo);
                StoreToken(user.JWToken.ToString());
                bool isSaved = await ValidateVisitorAsync();

                return RedirectToPage("../home/myapplication");
            }
            catch (Exception ex)
            {
                TempData["ErrorMessage"] = ex.Message;
                return Page();
            }
        }

        #endregion
    }
}

