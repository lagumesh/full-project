namespace SWB240603.Models
{
    public class ApplyingType
    {
        public string? Code { get; set; }
        public string? Title { get; set; }
        public int OrderIndex { get; set; }
        public string? PostCode { get; set; }
        //
        //parent entities
        //
        public Post? Post { get; set; } 
        //
        //child entities
        //
        public ICollection<Applicant>? Applicants { get; set; }
        public ICollection<PostMenu>? PostMenus { get; set; }
        public ICollection<PostNewsEvent>? PostNewsEvents { get; set; }
    }
}
