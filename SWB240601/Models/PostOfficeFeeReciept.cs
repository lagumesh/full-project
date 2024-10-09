namespace SWB240601.Models
{
    public class PostOfficeFeeReceipt
    {
        public int ID { get; set; }
        public int ApplicationNo { get; set; }
        public string? ApplicantName { get; set; }
        public double FeeAmount { get; set; }
        public double Commission { get; set; }
        public double TotalFeeAmount { get; set; }
        public DateTime TransactionDate { get; set; }
        public string? ReceiptNo { get; set; }
        public int TransactionID { get; set; }
        public string? RandomNo { get; set; }
        public string? PostOfficeCode { get; set; }
        //
        //parent entities
        //
        public ApplicantFee? ApplicantFee { get; set; } = null;
    }
}