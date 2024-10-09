namespace SWB240603.Models
{
    public class DocumentType
    {
        public string? Code { get; set; }
        public string? Title { get; set; }
        public string? FileExtension { get; set; }
        public bool IsApplicableForDownload { get; set; }
        public bool IsApplicableForUpload { get; set; }
        public bool CanUploadMultipleFiles { get; set; }
        //
        //child entities
        //
        public ICollection<ApplicantDownload>? ApplicantDownloads { get; set; }
        public ICollection<ApplicantUpload>? ApplicantUploads { get; set; }
    }
}
