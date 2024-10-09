namespace SWB240603.Models
{
    public class PostMenu
    {
        public string? Code { get; set; }
        public string? ApplyingTypeCode { get; set; }
        public string? Title { get; set; }
        public string? DisplayTitle { get; set; }
        public string? Url { get; set; }
        public string? Status { get; set; }
        public string? PostCode { get; set; }
        //
        //parent entities
        //
        public Post? Post { get; set; }
    }
}
