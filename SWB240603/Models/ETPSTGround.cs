namespace SWB240603.Models
{
    public class ETPSTGround
    {
        public string? Code { get; set; }
        public string? Name { get; set; }
        public string? ETPSTDistrictCode { get; set; }
        //
        //parent entities
        //
        public ETPSTDistrict? ETPSTDistrict { get; set; } 
        public ApplicantETPSTSchedule? ETPSTSchedule { get; set; } 
    }
}
