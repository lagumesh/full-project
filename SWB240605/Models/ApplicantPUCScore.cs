namespace SWB240605.Models
{
    public class ApplicantPUCScore
    {
        public int ApplicationNo { get; set; }
        public double Maximum { get; set; }
        public double Obtained { get; set; }
        //
        //parent entities
        //
        public ApplicantPUCQualification? PUCQualification { get; set; } 
    }
}
