namespace SWB240603.Models
{
    public class ApplicantReservation
    {
        public int ApplicationNo { get; set; }
        public string? CategoryCode { get; set; }
        public string? SubCaste { get; set; }
        public DateTime CategoryCertificateIssuedDate { get; set; }
        public bool IsClaimingRuralReservation { get; set; }
        public DateTime RuralCertificateIssuedDate { get; set; }
        public bool IsClaimingExServicemenReservation { get; set; }
        public bool IsClaimingExServicemenRelationReservation { get; set; }
        public bool IsClaimingPDPReservation { get; set; }
        public DateTime PDPCertificateIssuedDate { get; set; }
        public bool IsClamingKannadaMediumReservation { get; set; }
        public DateTime KannadaMediumCertificateIssuedDate { get; set; }
        public bool IsBelongToKalyanaKarnataka { get; set; }
        public string? KalyanaKarnatakaDistrictCode { get; set; }
        public bool IsClamingKalyanaKarnatakaReservation { get; set; }
        public string? KalyanaKarnatakaPriorityCode { get; set; }
        public string? GenderCode { get; set; }
        public bool AreYouAGovermentEmployee { get; set; }
        public bool IsExServicemenFamily { get; set; }
		public bool IsClamingTransgenderReservation { get; set; }
		public DateTime TransgenderCertificateIssuedDate { get; set; }
		//
		//parent entities
		//
		public Applicant? Applicant { get; set; }
        public Category? Category { get; set; }
        public Gender? Gender { get; set; }

		//
		//child entities
		//
		public ApplicantGovernmentService? GovermentServiceDetail { get; set; }
		public ApplicantExServiceFamily? ExServiceFamily { get; set; }
		public ApplicantExService? ExService { get; set; }
	}
}
