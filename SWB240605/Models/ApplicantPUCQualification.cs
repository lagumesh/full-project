namespace SWB240605.Models
{
    public class ApplicantPUCQualification
    {
        public int ApplicationNo { get; set; }
        public string? QualificationBoardCode { get; set; }
        public string? OtherBoardName { get; set; }
        public string? RegistrationNo { get; set; }
        public string? YearOfPassing { get; set; }
        public string? MarkType { get; set; }
        public double ScorePercentage { get; set; }
        public bool HasPassedFromNIOS_PUCBoard { get; set; }
        public bool IsBridgeCourseFromKSOU { get; set; }
        //
        //parent entities
        //
        public ApplicantEducationalQualification? EducationalQualification { get; set; } 
        public QualificationBoard? QualificationBoard { get; set; } 
        //
        //child entities
        //
        public ApplicantPUCGrade? Grade { get; set; } 
        public ApplicantPUCScore? Score { get; set; } 
    }
}
