namespace SWB240601.Models
{
    public class qvwPostUnit
    {
        public string Code { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public int StartingApplicationNo { get; set; }
        public int CurrentApplicationNo { get; set; }
        public int EndApplicationNo { get; set; }
        public string PostCode { get; set; } = string.Empty;
        public int OrderIndex { get; set; }
        public int Vacancy { get; set; }
    }
}
