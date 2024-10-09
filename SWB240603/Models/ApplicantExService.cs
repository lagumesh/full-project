namespace SWB240603.Models
{
    public class ApplicantExService
    {
        public int ApplicationNo { get; set; }
        public double Height { get; set; }
        public bool IsPresentlyServing { get; set; }
        public DateTime NoCIssuedDate { get; set; }
        public DateTime DateOfJoining { get; set; }
        public DateTime DischargeDate { get; set; }
        public string? ExServiceEducationalQualificationCode { get; set; }
        public string? ExServiceForceCode { get; set; }
        public int YearsInService { get; set; }
        public int MonthsInService { get; set; }
        public int DaysInService { get; set; }
        public bool IsAvaliedExServiceBenefit { get; set; }
        //
        //parent entites
        //
        public ApplicantReservation? ApplicantReservation { get; set; }
        public ExServiceEducationalQualification? ExServiceEducationalQualification { get; set; } 
        public ExServiceForce? ExServiceForce { get; set; }
        //
        //child entities
        //
        public ExServiceEducationalQualification? EducationalQualifications { get; set; } 
    }
}
