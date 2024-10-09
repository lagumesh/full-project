namespace SWB240605.Models
{
    public class PostNewsEventDocument
    {
        public int ID { get; set; }
        public string? PostNewsEventCode { get; set; } 
        public string? Caption { get; set; } 
        public string? FilePath { get; set; } 
        public int OrderIndex { get; set; }
        //
        //parent entities
        //
        public PostNewsEvent? PostNewsEvent { get; set; } 
    }
}
