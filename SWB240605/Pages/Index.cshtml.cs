using Microsoft.AspNetCore.Mvc;
using SWB240605.Models;
using SWB240605.Services;

namespace SWB240605.Pages
{
    public class IndexModel : BasePage
    {
        #region " constructor "

        public IndexModel(IConfiguration configuration, 
                          IVisitorService visitorService) : base(configuration)
        {
            _visitorService = visitorService;
        }

        #endregion

        #region " definitions "

        private readonly IVisitorService _visitorService;

        #endregion

        #region " properties "
        #endregion

        #region " methods "

        private async Task<int> SaveVisitorAsync(string visitorIPAddress, string browserInfo, string device)
        {
            Visitor visitor = new Visitor()
            {
                IPAddress = visitorIPAddress,
                VisitedOn = DateTime.Now,
                Browser = browserInfo,
                Device = device,
            };

            return await _visitorService.SaveAsync(visitor);
        }

        #endregion

        #region " events "

        public async Task<IActionResult> OnGetAsync()
        {
            try
            {
                int visitorId = await SaveVisitorAsync(ClientIPAddress,
                                                       Request.Headers["User-Agent"].ToString(),
                                                       "testing");
                StoreVisitorId(visitorId);

                return Page();
            }
            catch (Exception ex) 
            {
                TempData["ErrorMessage"] = ex;
                return Page();
            }
        }

        #endregion
    }
}