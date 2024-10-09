namespace SWB240601.Models
{
    public class DocumentResponse : BaseResponse
    {
        public string? FileName { get; set; }
        public DateTime FileCreatedOn { get; set; }
        public object? Data { get; set; }
    }
}
