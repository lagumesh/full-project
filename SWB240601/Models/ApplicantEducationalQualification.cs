namespace SWB240601.Models
{
    public class ApplicantEducationalQualification
    {
        public int ApplicationNo { get; set; }
		public bool IsSSLCHolder { get; set; }
        public bool IsPUCHolder { get; set; }
        public bool IsDegreeHolder { get; set; }
        //
        //parent entities
        //
        public Applicant? Applicant { get; set; }
        //
        // child entities
        //
        public ApplicantSSLCQualification? SSLCQualification { get; set; }
    }
}
