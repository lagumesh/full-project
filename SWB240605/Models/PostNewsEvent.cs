namespace SWB240605.Models
{
    public class PostNewsEvent
    {
        public string? Code { get; set; } 
        public DateTime Date { get; set; }
        public string? Title { get; set; } 
        public string? Description { get; set; } 
        public string? Status { get; set; } 
        //
        //child entities
        //
        public PostNewsEventDocument? PostNewsEventDocuments { get; set; } 
    }
}
