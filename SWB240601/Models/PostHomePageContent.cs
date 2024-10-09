namespace SWB240601.Models
{
    public class PostHomePageContent
    {
        public string? PostCode { get; set; }
        public string? KeyDates { get; set; }
        public string? AgeCriteria { get; set; }
        public string? PaymentDetail { get; set; }
        public string? Notes { get; set; }
        //
        //parent entities
        //
        public Post? Post { get; set; }
    }
}
