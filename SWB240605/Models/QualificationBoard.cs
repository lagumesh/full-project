namespace SWB240605.Models
{
    public class QualificationBoard
    {
        public string? Code { get; set; } 
        public string? Title { get; set; } 
        public bool IsEquivalent { get; set; }
        public int OrderIndex { get; set; }
        public bool IsApplicableForPUC { get; set; }
        public bool IsApplicableForSSLC { get; set; }
        //
        //child entities
        //
        public ApplicantPUCQualification? PUCQualification { get; set; } 
        public ApplicantSSLCQualification? SSLCQualification { get; set; } 
    }
}
