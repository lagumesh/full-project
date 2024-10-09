namespace SWB240601.Models
{
    public class ApplicantETPSTSchedule
    {
        public int ApplicationNo { get; set; }
        public int SlNo { get; set; }
        public DateTime ScheduleDate { get; set; }
        public string? GroundCode { get; set; }
        public string? ExamTime { get; set; }
        public string? ReportingTime { get; set; }
        public string? Remarks { get; set; }
        public string? Status { get; set; }
        public string? ETResult { get; set; }
        public string? PSTResult { get; set; }
        public string? FinalResult { get; set; }
        public string? Default { get; set; }
        //
        //parent entities
        //
        public Applicant? Applicant { get; set; }
        public ETPSTGround? ETPSTGround { get; set; }
    }
}
