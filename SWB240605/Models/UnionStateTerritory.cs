namespace SWB240605.Models
{
    public class UnionStateTerritory
    {
        public string? Code { get; set; } 
        public string? Name { get; set; } 
        public int OrderIndex { get; set; }
        //
        // child entities
        //
        public ApplicantContactAddress? ApplicantsContactAddresses { get; set; } 
        public ApplicantPermanentAddress? ApplicantsPermanentAddresses { get; set; } 
        public District? Districts { get; set; } 
    }
}
