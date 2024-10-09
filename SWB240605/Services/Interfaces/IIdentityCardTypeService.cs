using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IIdentityCardTypeService
	{
        Task<IEnumerable<qvwIdentityCardType>?> GetIdentityCardTypesAsync();
    }
}