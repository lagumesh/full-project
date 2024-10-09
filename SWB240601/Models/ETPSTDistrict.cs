namespace SWB240601.Models
{
    public class ETPSTDistrict
    {
        public string? Code { get; set; }
        public string? Name { get; set; }
        public string? Signature { get; set; }
        //
        //child entities
        //
        public ETPSTGround? Ground { get; set; } 
    }
}