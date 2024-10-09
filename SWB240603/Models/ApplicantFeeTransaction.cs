namespace SWB240603.Models
{
    public class ApplicantFeeTransaction
    {
        public string? ID { get; set; }
        public int ApplicationNo { get; set; }
        public DateTime TransactionDate { get; set; }
        public double FeeAmount { get; set; }
        public int VisitorId { get; set; }
        //
        //parent entities
        //
        public ApplicantFee? ApplicantFee { get; set; } 
        public Visitor? Visitor { get; set; } 
        //
        //child entities
        //
        public ApplicantFeeReceipt? FeeReceipts { get; set; } 
    }
}
