namespace SWB240605.Models
{
    public class APIAuthorizedUserResponse : AuthorizedUser
    {
        public bool IsVerified { get; set; }
        public string? JWToken { get; set; }
    }
}
