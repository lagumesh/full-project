namespace SWB240601.Models
{
    public class KalyanaKarnatakaDistrict
    {
        public string? Code { get; set; }
        public string? Name { get; set; }
        public int OrderIndex { get; set; }
        //
        //child entities
        //
        public ApplicantKalyanaKarnatakaDetail? KalyanaKarnatakaDetail { get; set; } 
        public ApplicantReservation? Reservation { get; set; } 
    }
}
