namespace SWB240603.Models
{
    public class OfflinePaymentReceipt
    {
        public int ID { get; set; }
        public int ApplicationNo { get; set; }
        public string? BranchCode { get; set; }
        public string? BranchName { get; set; }
        public string? TransactionNo { get; set; }
        public DateTime TransactionDate { get; set; }
        public double FeeAmount { get; set; }
        public string? ImportedFileName { get; set; }
        public DateTime ImportedOn { get; set; }
        public string? IPAddress { get; set; }
        //
        //parent entities
        //
        public ApplicantFee? ApplicantFee { get; set; }
    }
}
