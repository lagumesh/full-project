namespace SWB240601.Models
{
    public class ApplicantEligibilityStatus
    {
        public int ApplicationNo { get; set; }
        public string? RecruitmentActivityCode { get; set; }
        public bool IsEligible { get; set; }
        public string? StatusRemark { get; set; }
        public string? IconPath { get; set; }
        public DateTime UpdatedDate { get; set; }
        //
        //parent entities
        //
        public Applicant? Applicant { get; set; }
        public RecruitmentActivity? RecruitmentActivity { get; set; }
    }
}
