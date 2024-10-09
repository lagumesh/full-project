namespace SWB240603.Models
{
    public class ExServiceEducationalQualification
    {
        public string? Code { get; set; }
        public string? Title { get; set; }
        //
        //parent entities
        //
        public ApplicantExService? ApplicantExService { get; set; } 
        //
        //child entities
        //
        public ICollection<ApplicantReservation>? Reservations { get; set; }
        public ICollection<ApplicantExService>? ExServices { get; set; }
    }
}
