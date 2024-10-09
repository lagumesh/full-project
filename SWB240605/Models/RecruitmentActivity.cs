namespace SWB240605.Models
{
    public class RecruitmentActivity
    {
        public string? Code { get; set; }
        public string? Title { get; set; } 
        public int OrderIndex { get; set; }
        public string? Status { get; set; } 
        public string? PostCode { get; set; } 
        //
        //parent entities
        //
        public Post? Post { get; set; } 
        //
        //child entities
        //
        public ICollection<ApplicantEligibilityStatus>? EligibilityStatuses { get; set; }
    }
}
