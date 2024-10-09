namespace SWB240601.Models
{
    public class AuthorizedUser
    {
        public string? Id { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? UserCode { get; set; }
        public string[]? Roles { get; set; }
    }
}
