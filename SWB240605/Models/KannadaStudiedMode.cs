﻿namespace SWB240605.Models
{
    public class KannadaStudiedMode
    {
        public string? Code { get; set; } 
        public string? Title { get; set; } 
        //
        //child entities
        //
        public ApplicantSSLCQualification? SSLCQualification { get; set; } 
    }
}
