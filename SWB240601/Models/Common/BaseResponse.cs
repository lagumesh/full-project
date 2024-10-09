namespace SWB240601.Models
{
    public class BaseResponse
    {
        public bool Succeed { get; set; }
        public string? Message { get; set; }
        public List<string>? Errors { get; set; }
    }
}
