namespace SWB240601.Models
{
    public class ApplicantUpload
    {
        public int ApplicationNo { get; set; }
        public string? DocumentTypeCode { get; set; }
        public string? DocumentPath { get; set; }
        public int OrderIndex { get; set; }
        //
        //parent entities
        //
        public Applicant? Applicant { get; set; }
        public DocumentType? DocumentType { get; set; }
        //
        //child entities
        //
        public IdentityCardType? CardType { get; set; }
    }
}
