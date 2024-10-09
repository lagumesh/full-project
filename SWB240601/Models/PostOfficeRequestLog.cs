namespace SWB240601.Models
{
    public class PostOfficeRequestLog
    {
        public int ID { get; set; }
        public string? BillerID { get; set; }
        public int ApplicationNo { get; set; }
        public string? PostOfficeCode { get; set; }
        public DateTime RequestedOn { get; set; }
        public string? IPAddress { get; set; }
        public string? PostCode { get; set; }
        //
        //parent entities
        //
        public Post? Post { get; set; }
    }
}
