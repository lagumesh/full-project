namespace SWB240601.Models
{
    public class ApplicantFee
    {
        public int ApplicationNo { get; set; }
        public double FeeAmount { get; set; }
        //
        //parent entities
        //
        public Applicant? Applicant { get; set; } 
        //
        //child entities
        //
        public ApplicantFeeTransaction? FeeTransactions { get; set; } 
        public OfflinePaymentReceipt? OfflinePaymentReceipt { get; set; } 
        public ICollection<PostOfficeRequestLog>? PostOfficeRequestLogs { get; set; }
        public ICollection<PostOfficeFeeReceipt>? PostOfficeFeeReceipts { get; set; }
    }
}
