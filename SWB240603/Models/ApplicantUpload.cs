namespace SWB240603.Models
{
    public class ApplicantUpload
    {
        public int ApplicationNo { get; set; }
        public string? DocumentTypeCode { get; set; }
        public string? DocumentPath { get; set; }
        public int OrderIndex { get; set; }
        //
        // local properties
        //
        public IFormFile? Photo { get; set; }
        public IFormFile? Signature { get; set; }
        public IFormFile? Thumb { get; set; }
        public IFormFile? IdentityCard { get; set; }
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
