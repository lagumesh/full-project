namespace SWB240603.Models
{
    public class ApplicantGovernmentService
    {
        public int ApplicationNo { get; set; }
        public string? Department { get; set; }
        public string? Designation { get; set; }
        public int YearsInService { get; set; }
        public int MonthsInService { get; set; }
        public int DaysInService { get; set; }
        public DateTime JoiningDate { get; set; }
        //
        //parent entities
        //
        public ApplicantReservation? Reservation { get; set; }
    }
}
