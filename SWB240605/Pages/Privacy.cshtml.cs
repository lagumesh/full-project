namespace SWB240605.Pages
{
    public class PrivacyModel : BasePage
    {
        #region " constructor "

        public PrivacyModel(IConfiguration configuration, ILogger<PrivacyModel> logger) : base(configuration)
        {
            _logger = logger;
        }

        #endregion

        #region " definitions "

        private readonly ILogger<PrivacyModel> _logger;

        #endregion

        #region " properties "
        #endregion

        #region " methods "
        #endregion

        #region " events "

        public void OnGet()
        {
        }

        #endregion
    }
}