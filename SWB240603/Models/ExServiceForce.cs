namespace SWB240603.Models
{
    public class ExServiceForce
    {
        public string? Code { get; set; }
        public string? Title { get; set; }
        //
        //child entities
        //
        public ICollection<ApplicantExService>? ApplicantExServices { get; set; }
    }
}
