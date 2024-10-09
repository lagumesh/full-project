namespace SWB240601.Models
{
    public class ApplicantSSLCGrade
    {
        public int ApplicationNo { get; set; }
        public string? Grade { get; set; }
        //
        //parent entities
        //
        public ApplicantSSLCQualification? SSLCQualification { get; set; }
    }
}
