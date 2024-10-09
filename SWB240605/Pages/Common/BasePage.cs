using Microsoft.AspNetCore.Mvc.RazorPages;

namespace SWB240605.Pages
{
    public class BasePage : PageModel
    {
        #region " constructor " 

        public BasePage(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        #endregion

        #region " definitions "

        private readonly IConfiguration _configuration;

        #endregion

        #region " properties "

        protected string ProjectCode
        {
            get => _configuration.GetValue<string>("ProjectCode");
        }

        public string ClientIPAddress
        {
            get => HttpContext.Connection.RemoteIpAddress?.ToString();
        }

        public bool IsLoggedIn
        {
            get => HttpContext.Session.GetInt32($"{ProjectCode}_ApplicationNo") > 0;
        }

        #endregion

        #region " methods "

        protected void StoreToken(string token)
        {
            HttpContext.Session.SetString($"{ProjectCode}_Token", token);
        }

        protected void StoreApplicationNo(int applicationNo)
        {
            HttpContext.Session.SetInt32($"{ProjectCode}_ApplicationNo", applicationNo);
        }

        protected void StoreVisitorId(int visitorId)
        {
            HttpContext.Session.SetInt32($"{ProjectCode}_VisitorId", visitorId);
        }

        protected int GetLoggedApplicationNo()
        {
            int? applicationNo = HttpContext.Session.GetInt32($"{ProjectCode}_ApplicationNo");
            if (applicationNo == null) return -1;

            return (int)applicationNo.Value;
        }

        protected int GetCurrentVisitorId()
        {
            int? visitorId = HttpContext.Session.GetInt32($"{ProjectCode}_VisitorId");
            if (visitorId == null) return -1;

            return (int)visitorId.Value;
        }

        protected void ClearSessionValues()
        {
            HttpContext.Session.Remove($"{ProjectCode}_ApplicationNo");
            HttpContext.Session.Remove($"{ProjectCode}_VisitorId");
            HttpContext.Session.Remove($"{ProjectCode}_Token");
        }

        #endregion
    }
}