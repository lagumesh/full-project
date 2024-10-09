namespace SWB240601.Models
{
    public class ApplicantPermanentAddress
    {
        public int ApplicationNo { get; set; }
        public string? DoorNo { get; set; }
        public string? Street { get; set; }
        public string? Landmark { get; set; }
        public string? Taluk { get; set; }
        public string? City { get; set; }
        public string? DistrictCode { get; set; }
        public string? OtherDistrictName { get; set; }
        public string? UnionStateCode { get; set; }
        public string? Pincode { get; set; }
        //
        //parent entities
        //
        public Applicant? applicant { get; set; }
        public District? District { get; set; }
        public UnionStateTerritory? UnionStateTerritory { get; set; }
    }
}
