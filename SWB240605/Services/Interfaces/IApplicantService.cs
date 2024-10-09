using SWB240605.Models;

namespace SWB240605.Services
{
    public interface IApplicantService
    {
        Task<int> SaveAsync(Applicant applicant);
        Task<qvwApplicant?> GetApplicantAsync(int id);
        Task<qvwApplicant> GetApplicantsByAadharAsync(string aadharNo, DateTime dateOfBirth);
        Task<string> GetApplicationAsync(int applicationNo, int visitorId);
    }
}
