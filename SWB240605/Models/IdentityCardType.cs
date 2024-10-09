namespace SWB240605.Models
{
    public class IdentityCardType
    {
        public string? Code { get; set; } 
        public string? Title { get; set; } 
        public int OrderIndex { get; set; }
        public string? PostCode { get; set; } 
        //
        // parent entities
        //
        public ApplicantUpload? ApplicantUpload { get; set; } 
        public Post? Post { get; set; } 
        //
        // child entities
        //
        public ICollection<Applicant>? Applicants { get; set; }
    }
}
