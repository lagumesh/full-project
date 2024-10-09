namespace SWB240603.Models
{
    public class ApplicantKalyanaKarnatakaDetail
    {
        public int ApplicationNo { get; set; }
        public DateTime KalyanaKarnatakaCertificateIssuedDate { get; set; }
        public bool IsClaimingLocalPost { get; set; }
        public string? KalyanaKarnatakaPriorityCode { get; set; }
        //
        //parent entities
        //
        public KalyanaKarnatakaDistrict? KalyanaKarnatakaDistrict { get; set; } 
    }
}
