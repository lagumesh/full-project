using Newtonsoft.Json;
using SWB240603.Models;
using SWB240603.Services.Common;
using SWB240603.Services.Interfaces;

namespace SWB240603.Services
{
	public class CategoryService : BaseService, ICategoryService
	{
		#region " constructor "

		public CategoryService(IHttpContextAccessor session,
								IConfiguration configuration) : base(session, configuration)
		{ }

		#endregion

		#region " definitions "
		#endregion

		#region " properties "

		private string CategoryURLPath
		{
			get => $"{BaseURL}/v{BaseVersion}/Category";
		}




		#endregion

		#region " commands "
		#endregion

		#region " queries "

		public async Task<IEnumerable<qvwCategory>?> GetCategoriesAsync()
		{
			HttpResponseMessage message = await httpClient.GetAsync(CategoryURLPath);

			string result = await message.Content.ReadAsStringAsync();
			APIResponse? response = JsonConvert.DeserializeObject<APIResponse>(result);
			if (response == null) throw new Exception("Server is Offline.");

			if (!response.Succeed) throw new Exception(GetErrorMessage(response));

			if (response.Data == null) return null;
			string? data = response.Data.ToString();

			if (data == null) return null;

			IEnumerable<qvwCategory>? cateagories = JsonConvert.DeserializeObject<IEnumerable<qvwCategory>>(data);
			return cateagories;
		}

		#endregion
	}
}
