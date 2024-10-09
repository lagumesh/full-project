namespace SWB240605.Models
{
	public class ApplicantStenographerAssistant
	{
        public int ApplicationNo { get; set; }
        public bool IsPassedInQualifyExam { get; set; }
        public string? QualificationCode { get; set; }
        //
        //parent entitty
        //
        public Applicant? Applicant { get; set; } 
        public PostUnitQualification? Qualification { get; set; } 
    }
}
