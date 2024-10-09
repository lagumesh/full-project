namespace SWB240601.Models
{
    public class ApplicantSSLCQualification
    {
        public int ApplicationNo { get; set; }
        public string? QualificationBoardCode { get; set; }
        public string? OtherBoardName { get; set; }
        public string? RegistrationNo { get; set; }
        public string? KannadaLanguagePaper { get; set; }
        public string? YearOfPassing { get; set; }
        public string? MarkType { get; set; }
        public double ScoredPercentage { get; set; }
        //
        //parent entities
        //
        public ApplicantEducationalQualification? EducationalQualification { get; set; }
        public QualificationBoard? QualificationBoard { get; set; }
        public KannadaStudiedMode? KannadaStudiedMode { get; set; }
        //
        //child entities
        //
        public ApplicantSSLCGrade? Grade { get; set; }
        public ApplicantSSLCScore? Score { get; set; }
    }
}
