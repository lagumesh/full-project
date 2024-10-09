namespace SWB240603.Models
{
	public class qvwVisitor
	{
		public int VisitorID { get; set; }
		public string? IPAddress { get; set; }
		public string? Browser { get; set; }
		public string? Device { get; set; }
		public DateTime VisitedOn { get; set; }
	}
}
