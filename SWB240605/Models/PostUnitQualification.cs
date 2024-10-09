namespace SWB240605.Models
{
	public class PostUnitQualification
	{
        public string? Code { get; set; }
        public string? Qualification { get; set; }
        public int OrderIndex { get; set; }
        public string? PostUnitCode { get; set; }
        //
        //parent entity
        //
        public PostUnit? PostUnit { get; set; }
    }
}
