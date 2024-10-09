namespace SWB240601.Models
{
    public class Category
    {
        public string? Code { get; set; }
        public string? Title { get; set; }
        public string? FeeGroupTitle { get; set; }
        public double FeeAmount { get; set; }
        public string? PostCode { get; set; }
        public DateTime MinimumValidCertificateDate { get; set; }
        public DateTime MaximumValidCertificateDate { get; set; }
        //
        //parent entities
        //
        public Post? Post { get; set; }
        //
        //child entities
        //
        public ICollection<ApplicantReservation>? Reservations { get; set; }
    }
}
