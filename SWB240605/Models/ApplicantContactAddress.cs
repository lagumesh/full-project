namespace SWB240605.Models
{
    public class ApplicantContactAddress
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
        public bool IsPermanentAddressSame { get; set; } 
        //
        // parent entities
        //
        public Applicant? Applicant { get; set; } 
        public District? District { get; set; } 
        public UnionStateTerritory? UnionState { get; set; } 
    }
}
