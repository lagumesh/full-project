namespace SWB240601.Models
{
    public class District
    {
        public string? Code { get; set; }
        public string? Title { get; set; }
        public string? UnionStateCode { get; set; }
        //
        //parent entities
        //
        public UnionStateTerritory? unionStateTerritory { get; set; }
        //
        //child entities
        //
        public ApplicantContactAddress? ContactAddress { get; set; }
        public ApplicantPermanentAddress? PermanentAddress { get; set; }
    }
}
