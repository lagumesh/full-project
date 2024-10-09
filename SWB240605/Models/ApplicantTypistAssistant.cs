namespace SWB240605.Models
{
	public class ApplicantTypistAssistant
	{
        public int ApplicationNo { get; set; }
        public bool IsPassedInQualifyExam { get; set; }
        public string? QualificationCode { get; set; }
        //
        //parent entity
        //
        public Applicant? Applicant { get; set; } 
        public PostUnitQualification? Qualification { get; set; } 
    }
}
