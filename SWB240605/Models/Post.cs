namespace SWB240605.Models
{
    public class Post
    {
        public string? Code { get; set; } 
        public string? Title { get; set; } 
        public string? Title_Eng { get; set; } 
        public string? Title_Lng { get; set; } 
        public string? NotificationNo_Eng { get; set; } 
        public string? NotificationNo_Lng { get; set; } 
        public int Vacancy { get; set; }
        public DateTime ApplicationStartDate { get; set; }
        public DateTime ApplicationEndDate { get; set; }
        public int ApplicationNoGenerationMode { get; set; }
        //
        //Child entities
        //
        public ICollection<Category>? Categories { get; set; }
        public ICollection<Gender>? Genders { get; set; }
        public ICollection<IdentityCardType>? identityCardTypes { get; set; }
        public ICollection<PostMenu>? PostMenus { get; set; }
        public ICollection<RecruitmentActivity>? recruitmentActivities { get; set; }
        public ICollection<Applicant>? applicants { get; set; }
        public ICollection<PostHomePageContent>? HomePageContents { get; set; }
        public ICollection<PostUnit>? postUnits { get; set; } 

    }
}
