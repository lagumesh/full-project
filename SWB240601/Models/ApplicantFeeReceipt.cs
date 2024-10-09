namespace SWB240601.Models
{
    public class ApplicantFeeReceipt
    {
        public string? ID { get; set; }
        public string? ApplicantFeeTransactionID { get; set; }
        public double PaidAmount { get; set; }
        public string? PGReferenceNo { get; set; }
        public string? BankReferenceNo { get; set; }
        public DateTime TransactionDate { get; set; }
        public string? ImportReferenceCode { get; set; }
        public DateTime ImportDate { get; set; }
        public int Status { get; set; }
        public int VisitorId { get; set; }
        //
        //parent entities
        //
        public ApplicantFeeTransaction? ApplicantFeeTransaction { get; set; } 
        public Visitor? Visitor { get; set; }
    }
}
