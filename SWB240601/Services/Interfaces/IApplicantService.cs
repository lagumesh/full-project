using SWB240601.Models;

namespace SWB240601.Services.Interfaces
{
    public interface IApplicantService
    {
        Task<int> SaveAsync(Applicant applicant);
        Task<qvwApplicant?> GetApplicantAsync(int id);
        Task<qvwApplicant> GetApplicantsByAadharAsync(string aadharNo, DateTime dateOfBirth);
        Task<string> GetApplicationAsync(int id, int visitorId);
    }
}
