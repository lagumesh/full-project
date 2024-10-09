using System.Net.Http.Headers;
using System.Net;
using SWB240601.Models;

namespace SWB240601.Services.Common
{
    public abstract class BaseService
    {
        #region " constructor "

        public BaseService(IHttpContextAccessor session,
                           IConfiguration configuration)
        {
            _configuration = configuration;

            ipAddress = session.HttpContext.Connection.RemoteIpAddress;
            _session = session.HttpContext.Session;
        }

        #endregion

        #region " defnetion "

        private readonly IConfiguration _configuration;

        private readonly IPAddress ipAddress;
        private readonly ISession _session;

        private HttpClient _httpClient;

        #endregion

        #region " properties "

        protected string BaseURL
        {
            get
            {
                return _configuration.GetValue<string>("WebAPIURL");
            }
        }

        protected string BaseVersion
        {
            get => _configuration.GetValue<string>("CurrentVersion");
        }

        protected HttpClient httpClient
        {
            get
            {
                if (string.IsNullOrEmpty(JWTToken))
                {
                    _httpClient = new HttpClient();
                }
                else
                {
                    _httpClient = new HttpClient();
                    AuthenticationHeaderValue authHeader = new AuthenticationHeaderValue("bearer", JWTToken);
                    _httpClient.DefaultRequestHeaders.Authorization = authHeader;
                }

                return _httpClient;
            }
        }

        private string JWTToken
        {
            get
            {
                string projectCode = _configuration.GetValue<string>("ProjectCode");
                return _session.GetString($"_{projectCode}_Token");
            }
        }
        #endregion

        #region " methods "

        protected string GetErrorMessage(BaseResponse response)
        {
            if ((response.Errors != null && response.Errors.Count > 0) ||
               (response.Message == null || string.IsNullOrEmpty(response.Message)))
            {
                if (response.Errors == null || response.Errors.Count == 0)
                {
                    return string.Empty;
                }
                else
                {
                    return string.Join("", response.Errors.ToArray());
                }
            }
            else
            {
                return response.Message;
            }
        }

        #endregion
    }
}
