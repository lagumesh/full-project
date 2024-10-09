namespace SWB240603.Models
{
    public class Visitor
    {
        public int Id { get; set; }
        public string? IPAddress { get; set; }
        public string? Browser { get; set; }
        public string? Device { get; set; }
        public DateTime VisitedOn { get; set; }
        //
        //child entrities 
        //
        public ICollection<Applicant>? Applicants { get; set; }
        public ICollection<ApplicantDownload>? Downloads { get; set; }
    }
}