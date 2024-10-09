using SWB240601.Pages.Common;

namespace SWB240601.Pages.Common
{
    public class BaseAuthorizedPageModel : BasePage
    {
        #region " constructor "

        public BaseAuthorizedPageModel(IConfiguration configuration) : base(configuration)
        {
            _configuration = configuration;

            if (HttpContext == null) return;

            if (HttpContext.Session.GetString("visitorId") == null || HttpContext.Session.GetInt32("visitorId") == 0)
            {
                RedirectToPage("session-expired");
            }
        }

        #endregion

        #region " definitions "

        private readonly IConfiguration _configuration;

        #endregion

        #region " properties "

        #endregion

        #region " methods "

        #endregion
    }
}
