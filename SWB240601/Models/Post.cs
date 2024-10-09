namespace SWB240601.Models
{
    public class Post
    {
        public string? Code { get; set; }
        public string? Title_Eng { get; set; }
        public string? Title_Lng { get; set; }
        public string? NotificationNo_Eng { get; set; }
        public string? NotificationNo_Lng { get; set; }
        public int Vacancy { get; set; }
        public DateTime ApplicationStartDate { get; set; }
        public DateTime ApplicationEndDate { get; set; }
        public int ApplicationNoGenerationMode { get; set; }
        public DateTime MaximumNoCIssuedDate { get; set; }
        public DateTime MinimumNoCIssuedDate { get; set; }
        public DateTime MaximumDischargeDate { get; set; }
        public DateTime MinimumDischargeDate { get; set; }
        public DateTime MaximumDependentCertificateDate { get; set; }
        public DateTime MinimumDependentCertificateDate { get; set; }
        public DateTime MaximumJoiningDate { get; set; }
        public DateTime MinimumJoiningDate { get; set; }
        public DateTime MaximumKalyanaKarnatakaCertificateIssuedDate { get; set; }
        public DateTime MinimumKalyanaKarnatakaCertificateIssuedDate { get; set; }
        public DateTime MaximumPhysicallyDisabledCertificateIssuedDate { get; set; }
        public DateTime MinimumPhysicallyDisabledCertificateIssuedDate { get; set; }
        public DateTime MaximumTransgenderCertificateIssuedDate { get; set; }
        public DateTime MinimumTransgenderCertificateIssuedDate { get; set; }
        public DateTime MaximumPDPCertificateIssuedDate { get; set; }
        public DateTime MinimumPDPCertificateIssuedDate { get; set; }
        public DateTime MaximumRuralCertificateIssuedDate { get; set; }
        public DateTime MinimumRuralCertificateIssuedDate { get; set; }
        public DateTime MaximumKannadaMediumCertificateIssuedDate { get; set; }
        public DateTime MinimumKannadaMediumCertificateIssuedDate { get; set; }
        //
        //Child entities
        //
        public ICollection<Category>? Categories { get; set; }
        public ICollection<Gender>? Genders { get; set; }
        public ICollection<IdentityCardType>? identityCardTypes { get; set; }
        public ICollection<PostMenu>? PostMenus { get; set; }
        public ICollection<RecruitmentActivity>? recruitmentActivities { get; set; }
        public ICollection<Applicant>? applicants { get; set; }
        public ICollection<PostHomePageContent>? HomePageContents { get; set; }
        public ICollection<PostUnit>? postUnits { get; set; }
    }
}
