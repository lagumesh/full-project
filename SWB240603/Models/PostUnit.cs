namespace SWB240603.Models
{
    public class PostUnit
    {
        public string? Code { get; set; }
        public string? Title { get; set; }
        public int StartingApplicationNo { get; set; }
        public int CurrentApplicationNo { get; set; }
        public int EndApplicationNo { get; set; }
        public string? PostCode { get; set; }
        public int OrderIndex { get; set; }
        public int Vacancy { get; set; }
        // Parent entity
        public Post? Post { get; set; }
    }
}