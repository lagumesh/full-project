namespace SWB240605.Models
{
    public class ApplicantPUCGrade
    {
        public int ApplicationNo { get; set; }
        public string? Grade { get; set; }
        //
        //parent entities
        //
        public ApplicantPUCQualification? PUCQualification { get; set; } 
    }
}
