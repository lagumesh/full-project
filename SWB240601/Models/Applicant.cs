namespace SWB240601.Models
{
    public class Applicant
    {
        public int ApplicationNo { get; set; }
        public string? ApplyingTypeCode { get; set; }
        public string? FullName { get; set; }
        public string? FatherName { get; set; }
        public string? MotherName { get; set; }
        public string? MobileNo { get; set; }
        public string? EmailId { get; set; }
        public string? AadharNo { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string? IdentificationMark_01 { get; set; }
        public string? IdentificationMark_02 { get; set; }
        public string? NativeDistrict { get; set; }
        public string? UploadedIDNo { get; set; }
        public string? IdentityCardTypeCode { get; set; }
        public string? PostCode { get; set; }
        public string? PostUnitCode {  get; set; }
        public int VisitorId { get; set; }
        //
        // local properties
        //
        public IFormFile? Photo { get; set; }
        public IFormFile? Signature { get; set; }
        public IFormFile? Thumb { get; set; }
        public IFormFile? IdentityCard { get; set; }
        //
        // parent entities
        //
        public Post? Post { get; set; }
        public Visitor? Visitor { get; set; }
        public IdentityCardType? IdentityCardType { get; set; }
        public PostUnit? PostUnit { get; set; }
        // 
        // child entities
        //
        public ApplicantContactAddress? ContactAddress { get; set; }
        public ApplicantPermanentAddress? PermanentAddress { get; set; }
        public ApplicantCriminalActivity? CriminalActivity { get; set; }
        public ApplicantDownload? Downloads { get; set; }
        public ApplicantEducationalQualification? EducationalQualification { get; set; }
        public ICollection<ApplicantEligibilityStatus>? EligibilityStatus { get; set; }
        public ApplicantReservation? Reservation { get; set; }
        public ICollection<ApplicantUpload>? Uploads { get; set; }
        public ApplicantETPSTSchedule? ETPSTSchedule { get; set; } 
        public ApplicantFee? Fee { get; set; } 
        public ApplicantPhysicalDetail? PhysicalDetail { get; set; } 
        public ApplicantUnit? ApplicantUnits { get; set; }
        public ICollection<PostOfficeRequestLog>? PostOfficeRequests { get; set; }
    }
}
