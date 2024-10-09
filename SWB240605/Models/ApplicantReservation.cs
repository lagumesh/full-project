namespace SWB240605.Models
{
    public class ApplicantReservation
    {
        public int ApplicationNo { get; set; }
        public string? CategoryCode { get; set; }
        public string? SubCaste { get; set; }
        public DateTime? CategoryCertificateIssuedDate { get; set; }
        public string? GenderCode { get; set; }
        public bool AreYouAGovermentEmployee { get; set; }
        //
        //parent entities
        //
        public Applicant? Applicant { get; set; } 
        public Category? Category { get; set; } 
        public Gender? Gender { get; set; } 

        //
        //child entities
        //
        public ApplicantGovermentService? GovermentServiceDetail { get; set; }
    }
}
