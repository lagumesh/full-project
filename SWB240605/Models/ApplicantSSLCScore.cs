namespace SWB240605.Models
{
    public class ApplicantSSLCScore
    {
        public int ApplicationNo { get; set; }
        public double Maximum { get; set; }
        public double Obtained { get; set; }
        //
        //parent entities
        //
        public ApplicantSSLCQualification? SSLCQualification { get; set; } 
    }
}
