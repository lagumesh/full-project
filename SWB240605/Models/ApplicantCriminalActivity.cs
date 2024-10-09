namespace SWB240605.Models
{
    public class ApplicantCriminalActivity
    {
        public int ApplicationNo { get; set; }
        public bool IsInvolvedInCriminalActivity { get; set; }
        public string? CaseDetail { get; set; }
        public bool HasDepartmentEnquiry { get; set; }
        public string? DepartmentEnquiryDetail { get; set; }
        public bool IsConvictedInCriminalCase { get; set; }
        public string? ConvictionDetail { get; set; }
        //
        // parent entities
        //
        public Applicant? Applicant { get; set; } 
    }
}
