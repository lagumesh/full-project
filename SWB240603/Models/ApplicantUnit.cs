namespace SWB240603.Models
{
    public class ApplicantUnit
    {
        public int ApplicationNo { get; set; }
        public string? PostUnitCode { get; set; }
        public int Priority { get; set; }
        //
        //parent entities
        //
        public Applicant? Applicant { get; set; } 
        public PostUnit? PostUnit { get; set; } 
    }
}
