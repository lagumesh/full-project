namespace SWB240603.Models
{
    public class ApplicantDownload
    {
        public int ApplicationNo { get; set; }
        public string? DocumentTypeCode { get; set; }
        public string? DocumentPath { get; set; }
        public int VisitorId { get; set; }
        //
        // parent entities
        //
        public Applicant? Applicant { get; set; }
        public DocumentType? DocumentType { get; set; }
        public Visitor? Visitor { get; set; }
    }
}
