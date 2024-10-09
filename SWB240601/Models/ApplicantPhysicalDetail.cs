namespace SWB240601.Models
{
    public class ApplicantPhysicalDetail
    {
        public int ApplicationNo { get; set; }
        public double Height { get; set; }
        public double? Weight { get; set; }
        //
        //parent entities
        //
        public Applicant? Applicant { get; set; }
    }
}
