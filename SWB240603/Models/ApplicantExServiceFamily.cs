namespace SWB240603.Models
{
    public class ApplicantExServiceFamily
    {
        public int ApplicationNo { get; set; }
        public bool IsDiedInService { get; set; }
        public bool IsDisabledInService { get; set; }
        public string? ExServicemenRelationCode { get; set; }
        public DateTime DependentCertificateDate { get; set; }
        //
        //parent entities
        //
        public ApplicantReservation? ApplicantReservation { get; set; }
        public ExServicemenRelation? ExServicemenRelation { get; set; } 
        //
        //child entities
        //
        public ExServicemenRelation? Relations { get; set; } 
    }
}
