namespace SWB240603.Models
{
    public class ExServicemenRelation
    {
        public string? Code { get; set; }
        public string? Title { get; set; }
        public bool ApplicableForMale { get; set; }
        public bool ApplicableForFemale { get; set; }
        //
        //parent entities
        //
        public ApplicantExServiceFamily? ApplicantExServiceFamily { get; set; } 
        //
        //child entities
        //
        public ICollection<ApplicantExServiceFamily>? ExServiceFamilies { get; set; }
    }
}
