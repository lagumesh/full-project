﻿namespace SWB240605.Models
{
    public class Gender
    {
        public string? Code { get; set; } 
        public string? Title { get; set; } 
        public string? PostCode { get; set; } 
        //
        //parent entities
        //
        public Post? Post { get; set; } 
        //
        //child entities
        //
        public ApplicantReservation? Reservation { get; set; } 
    }
}
