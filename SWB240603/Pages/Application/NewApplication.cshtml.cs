using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SWB240603.Models;
using SWB240603.Pages.Common;
using SWB240603.Services.Interfaces;

namespace SWB240603.Pages.Application
{
    public class NewApplicationModel : BasePage
    {
        #region " constructor "
        public NewApplicationModel(IConfiguration configuration,
                                    IApplicantService applicantService,
                                    ICategoryService categoryService,
                                    IDistrictService districtService,
                                    IExServiceEducationalQualificationService exServiceEducationalQualificationService,
                                    IExServiceForceService exServiceForceService,
                                    IExServicemenRelationService exServicemenRelationService,
                                    IGenderService genderService,
                                    IIdentityCardTypeService identityCardTypeService,
                                    IKalyanaKarnatakaDistrictService kalyanaKarnatakaDistrictService,
                                    IKannadaStudiedModeService kannadaStudiedModeService,
                                    IPostService postService,
                                    IPostUnitService postUnitService,
                                    IQualificationBoardService qualificationBoardService,
                                    IUnionStateTerritoryService unionStateTerritoryService,
                                    IVisitorService visitorService,
                                    IWebHostEnvironment webHostEnvironment) : base(configuration)
        {
            _applicantService = applicantService;
            _categoryService = categoryService;
            _districtService = districtService;
            _exServiceEducationalQualificationService = exServiceEducationalQualificationService;
            _exServiceForceService = exServiceForceService;
            _exServicemenRelationService = exServicemenRelationService;
            _genderService = genderService;
            _identityCardTypeService = identityCardTypeService;
            _kalyanaKarnatakaDistrictService = kalyanaKarnatakaDistrictService;
            _kannadaStudiedModeService = kannadaStudiedModeService;
            _postService = postService;
            _postUnitService = postUnitService;
            _qualificationBoardService = qualificationBoardService;
            _unionStateTerritoryService = unionStateTerritoryService;
            _visitorService = visitorService;
            _webHostEnvironment = webHostEnvironment;
        }
        #endregion

        #region " definitions "
        private readonly IApplicantService _applicantService;
        private readonly ICategoryService _categoryService;
        private readonly IDistrictService _districtService;
        private readonly IExServiceEducationalQualificationService _exServiceEducationalQualificationService;
        private readonly IExServiceForceService _exServiceForceService;
        private readonly IExServicemenRelationService _exServicemenRelationService;
        private readonly IGenderService _genderService;
        private readonly IIdentityCardTypeService _identityCardTypeService;
        private readonly IKalyanaKarnatakaDistrictService _kalyanaKarnatakaDistrictService;
        private readonly IKannadaStudiedModeService _kannadaStudiedModeService;
        private readonly IPostService _postService;
        private readonly IPostUnitService _postUnitService;
        private readonly IQualificationBoardService _qualificationBoardService;
        private readonly IUnionStateTerritoryService _unionStateTerritoryService;
        private readonly IVisitorService _visitorService;
        private readonly IWebHostEnvironment _webHostEnvironment;
        #endregion

        #region " properties "

        [BindProperty]
		public Applicant Applicant { get; set; }
		public IEnumerable<SelectListItem>? ApplyingTypes { get; set; }
		public IEnumerable<SelectListItem>? ApplicantUnits { get; set; }
		public IEnumerable<SelectListItem>? Genders { get; set; }
		public IEnumerable<SelectListItem>? UnionStateTerritoryies { get; set; }
		public IEnumerable<SelectListItem>? Districts { get; set; }
		public IEnumerable<SelectListItem>? Categories { get; set; }
		public IEnumerable<SelectListItem>? KannadaStudiedModes { get; set; }
		public IEnumerable<SelectListItem>? SSLCBoards { get; set; }
		public IEnumerable<SelectListItem>? IdentityCardTypes { get; set; }
		public IEnumerable<SelectListItem>? ServicesList { get; set; }
		public IEnumerable<SelectListItem>? ExServiceEducationalQualifications { get; set; }
		public IEnumerable<SelectListItem>? ExServiceRealation { get; set; }
		#endregion

 		#region " methods "

		#region " static records loading "

		#region " applyingtypes "

		//ApplyingTypes
		private static IEnumerable<ApplyingType> GetApplyingTypes()
		{
			List<ApplyingType> applyingTypes = new List<ApplyingType>();

			applyingTypes.Add(new ApplyingType()
			{
				Code = "DIR",
				Title = "Direct Candidate",
				PostCode = "APC2023"
			});
			applyingTypes.Add(new ApplyingType()
			{
				Code = "EXS",
				Title = "Ex-Servicemen",
				PostCode = "APC2023"
			});


			return applyingTypes;
		}

		private void LoadApplyingTypes()
		{
			IEnumerable<ApplyingType> applyingTypes = GetApplyingTypes();
			ApplyingTypes = applyingTypes.Select(at => new SelectListItem()
			{
				Text = at.Title,
				Value = at.Code
			});
		}

        #endregion

        #region " Exservicefamilyrelation "
        private static IEnumerable<ExServicemenRelation> GetExServicemenRelation()
        {
            List<ExServicemenRelation> exServicemenRelations = new List<ExServicemenRelation>();
            exServicemenRelations.Add(new ExServicemenRelation()
            {
                Code = "ch",
                Title = "child"

            });
            exServicemenRelations.Add(new ExServicemenRelation()
            {
                Code = "sc",
                Title = "step child"
            });

            return exServicemenRelations;

        }
        private void LoadExServicemenRelation()
        {
            IEnumerable<ExServicemenRelation> exServicemenRelations = GetExServicemenRelation();
            ExServiceRealation = exServicemenRelations.Select(q => new SelectListItem()
            {
                Value = q.Code,
                Text = q.Title
            });
        }
        #endregion

        #region " ExServiceEducationalQualification "
        private static IEnumerable<ExServiceEducationalQualification> GetExServiceEducationalQualification()
		{
			List<ExServiceEducationalQualification> exServiceEducationalQualifications = new List<ExServiceEducationalQualification>();
			exServiceEducationalQualifications.Add(new ExServiceEducationalQualification()
			{
                Code = "AE",
                Title = "Army education"
			});
            exServiceEducationalQualifications.Add(new ExServiceEducationalQualification()
            {
                Code = "OTR",
                Title = "OTHER"
               
            });

            return exServiceEducationalQualifications;

		}
		private void LoadExServiceEducationalQualifications()
		{
			IEnumerable<ExServiceEducationalQualification> exServiceEducationalQualifications = GetExServiceEducationalQualification();
			ExServiceEducationalQualifications = exServiceEducationalQualifications.Select(q => new SelectListItem()
			{
				Value = q.Code,
				Text = q.Title
			});
		}
		#endregion

		#region " UNIT NAME "
		private static IEnumerable<PostUnit> GetApplicantUnits()
		{
			List<PostUnit> applicantUnits = new List<PostUnit>();
			applicantUnits.Add(new PostUnit()
			{
				Code = "kal",
				Title = "kalburgi"
			});
			applicantUnits.Add(new PostUnit()
			{
				Code = "Bi",
				Title = "Bidar"
			});
			applicantUnits.Add(new PostUnit()
			{
				Code = "vij",
				Title = "Vijaypur"
			});
			return applicantUnits;

		}
		private void LoadApplicantUnits()
		{
			IEnumerable<PostUnit> applicantUnits = GetApplicantUnits();
			ApplicantUnits = applicantUnits.Select(u => new SelectListItem()
			{
				Value = u.Code,
				Text = u.Title
			});
		}
		#endregion

		#region " genders "

		// genders

		private static IEnumerable<Gender> GetGenders()
		{
			List<Gender> gender = new List<Gender>();
			gender.Add(new Gender()
			{
				Code = "M",
				Title = "Male"
			});
			gender.Add(new Gender()
			{
				Code = "MT",
				Title = "Transgender"
			});
			return gender;
		}

		private void LoadGenders()
		{
			IEnumerable<Gender> gender = GetGenders();
			Genders = gender.Select(g => new SelectListItem()
			{
				Value = g.Code,
				Text = g.Title
			});
		}

		#endregion

		#region " categories "

		//categories
		private static IEnumerable<Category> GetCategories()
		{
			List<Category> categories = new List<Category>();

			categories.Add(new Category()
			{
				Code = "GM",
				Title = "General"
			});
			categories.Add(new Category()
			{
				Code = "SC",
				Title = "SC"
			});
			categories.Add(new Category()
			{
				Code = "ST",
				Title = "ST"
			});
			categories.Add(new Category()
			{
				Code = "C1",
				Title = "CAT-1"
			});
			categories.Add(new Category()
			{
				Code = "2A",
				Title = "2A"
			});
			categories.Add(new Category()
			{
				Code = "2B",
				Title = "2B"
			});
			categories.Add(new Category()
			{
				Code = "3A",
				Title = "3A"
			});
			categories.Add(new Category()
			{
				Code = "3B",
				Title = "3B"
			});
			categories.Add(new Category()
			{
				Code = "FT",
				Title = "Forest Tribal"
			});

			return categories;
		}

		private void LoadCategories()
		{
			IEnumerable<Category> categories = GetCategories();
			Categories = categories.Select(c => new SelectListItem()
			{
				Text = c.Title,
				Value = c.Code
			});
		}

		#endregion

		#region " sslclanguage " 

		//sslcqualification language
		private static IEnumerable<QualificationBoard> GetSSLCLanguage()
		{
			List<QualificationBoard> sSLCLanguage = new List<QualificationBoard>();
			sSLCLanguage.Add(new QualificationBoard()
			{
				Code = "P1",
				Title = "Paper1"
			});
			sSLCLanguage.Add(new QualificationBoard()
			{
				Code = "P2",
				Title = "Paper2"
			});
			sSLCLanguage.Add(new QualificationBoard()
			{
				Code = "P3",
				Title = "Paper3"
			});
			return sSLCLanguage;
		}

		private void LoadSSLCLanguage()
		{
			IEnumerable<QualificationBoard> sSLCLanguage = GetSSLCLanguage();
			KannadaStudiedModes = sSLCLanguage.Select(s => new SelectListItem()
			{
				Text = s.Title,
				Value = s.Code
			});
		}

		#endregion

		#region " sslcboard "

		// sslcboard
		private static IEnumerable<QualificationBoard> GetSSLCQualificationBoard()
		{
			List<QualificationBoard> sSLCBoard = new List<QualificationBoard>();
			sSLCBoard.Add(new QualificationBoard()
			{
				Code = "KB",
				Title = "Karnataka State Board"
			});
			sSLCBoard.Add(new QualificationBoard()
			{
				Code = "IS",
				Title = "ICSE"
			});
			sSLCBoard.Add(new QualificationBoard()
			{
				Code = "CS",
				Title = "CBSE"
			});
			sSLCBoard.Add(new QualificationBoard()
			{
				Code = "OTR",
				Title = "Others"
			});

			return sSLCBoard;
		}

		private void LoadSSLCQualificationBoard()
		{
			IEnumerable<QualificationBoard> sSLCBoard = GetSSLCQualificationBoard();
			SSLCBoards = sSLCBoard.Select(s => new SelectListItem()
			{
				Text = s.Title,
				Value = s.Code
			});
		}

		#endregion

		#region " uploads "

		// uploads
		private static IEnumerable<DocumentType> GetUploads()
		{
			List<DocumentType> upload = new List<DocumentType>();

			upload.Add(new DocumentType()
			{
				Code = "AD",
				Title = "Aadhar"
			});
			upload.Add(new DocumentType()
			{
				Code = "DL",
				Title = "Driving License"
			});
			upload.Add(new DocumentType()
			{
				Code = "PN",
				Title = "PAN Card"
			});

			upload.Add(new DocumentType()
			{
				Code = "ID",
				Title = "Voter ID"
			});
			return upload;
		}

		private void LoadUploadTypes()
		{
			IEnumerable<DocumentType> uploads = GetUploads();
			IdentityCardTypes = uploads.Select(u => new SelectListItem()
			{
				Value = u.Code,
				Text = u.Title,
			});
		}

		#endregion

		#region " districts "

		private static IEnumerable<District> GetDistricts()
		{
			List<District> districts = new List<District>();
			districts.Add(new District()
			{
				Code = "TMK",
				Title = "Tumkur"
			});
			districts.Add(new District()
			{
				Code = "CTA",
				Title = "Chitradurga"
			});
			return districts;
		}

		private void LoadDistricts()
		{
			IEnumerable<District> districts = GetDistricts();
			Districts = districts.Select(d => new SelectListItem()
			{
				Value = d.Code,
				Text = d.Title,
			});
		}
		#endregion

		#region " states "

		private static IEnumerable<UnionStateTerritory> GetStates()
		{
			List<UnionStateTerritory> states = new List<UnionStateTerritory>();
			states.Add(new UnionStateTerritory()
			{
				Code = "KA",
				Name = "Karnataka"
			});
			states.Add(new UnionStateTerritory()
			{
				Code = "AP",
				Name = "Andra Pradesh"
			});
			return states;
		}

		private void LoadStates()
		{
			IEnumerable<UnionStateTerritory> states = GetStates();
			UnionStateTerritoryies = states.Select(d => new SelectListItem()
			{
				Value = d.Code,
				Text = d.Name,
			});
		}

		#endregion

		#region "services"

		private static IEnumerable<ExServiceForce> GetServices()
		{
			List<ExServiceForce> services = new List<ExServiceForce>();
			services.Add(new ExServiceForce()
			{
				Code = "ARM",
				Title = "Army"
			});
			services.Add(new ExServiceForce()
			{
				Code = "NAV",
				Title = "Navy"
			});
			services.Add(new ExServiceForce()
			{
				Code = "AIR",
				Title = "Airforce"
			});
			return services;
		}

		private void LoadServices()
		{
			IEnumerable<ExServiceForce> services = GetServices();
			ServicesList = services.Select(d => new SelectListItem()
			{
				Value = d.Code,
				Text = d.Title,
			});
		}

        #endregion

        #endregion

		#region " master records loading  "

        #region " applying type "

        private async Task<bool> LoadApplyingTypeAsync()
        {
            IEnumerable<qvwPost> post = await _postService.GetPostsAsync();
            if (post != null) throw new Exception("post is not intialized.");

            ApplyingTypes = post.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }

        #endregion

        #region "unit name "
        private async Task<bool> LoadUnitNameAsync()
        {
            IEnumerable<qvwPostUnit> postunits = await _postUnitService.GetPostUnitsAsync();
            if (postunits != null) throw new Exception("PostUnit is not initialized");

            ApplicantUnits = postunits.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region " Gender "
        private async Task<bool> LoadGenderAsync()
        {
            IEnumerable<qvwGender> genders = await _genderService.GetGendersAsync();
            if (genders != null) throw new Exception("gender is not inialized");

            Genders = genders.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region " State "
        private async Task<bool> LoadStateAsync()
        {
            IEnumerable<qvwUnionStateTerritory> states = await _unionStateTerritoryService.GetUnionStateTerritoriesAsync();
            if (states != null) throw new Exception("state is not initialized");

            UnionStateTerritoryies = states?.Select(d => new SelectListItem()
            {
                Text = d.Name,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region " District "
        private async Task<bool> LoadDistrictAsync(string stateCode)
        {
            IEnumerable<qvwDistrict> districts = await _districtService.GetDistrictsAsync(stateCode);
            if (districts != null) throw new Exception($"Districts are not initialized for {stateCode}.");

            Districts = districts.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region "Category"
        private async Task<bool> LoadCategoryAsync()
        {
            IEnumerable<qvwCategory> categories = await _categoryService.GetCategoriesAsync();
            if (categories != null) throw new Exception("Categories is not intialized");

            Categories = categories.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region "sslc board "
        private async Task<bool> LoadSSLCBoardAsync()
        {
            IEnumerable<qvwQualificationBoard> sslcboard = await _qualificationBoardService.GetQualificationBoardsAsync("SSLC");
            if (sslcboard != null) throw new Exception("SSLC Boards are not initialized.");

            SSLCBoards = sslcboard.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            }).ToList();
            return true;
        }
        #endregion

        #region "sslc language"
        private async Task<bool> LoadSSLCLanguageAsync()
        {
            IEnumerable<qvwKannadaStudiedMode> sslclanguage = await _kannadaStudiedModeService.GetKannadaStudiedModesAsync();
            if (sslclanguage != null) throw new Exception("SSLC languages are not initialized.");

            KannadaStudiedModes = sslclanguage.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region " documents "
        private async Task<bool> LoadDocumentAsync()
        {
            IEnumerable<qvwIdentityCardType> document = await _identityCardTypeService.GetIdentityCardTypesAsync();
            if (document != null) throw new Exception("documents are not initialized.");

            IdentityCardTypes = document.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region " exservicemen relation "
        private async Task<bool> LoadExServicemenRelationAsync()
        {
            IEnumerable<qvwExServicemenRelation> exServicemenRelations = await _exServicemenRelationService.GetExServicemenRelationsAsync();
            if (exServicemenRelations != null) throw new Exception("ExServicemenRelations are not initialized.");

            ExServiceRealation = exServicemenRelations.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region " exservice force service "
        private async Task<bool> LoadExServiceForceAsync()
        {
            IEnumerable<qvwExServiceForce> exServiceForces = await _exServiceForceService.GetExServiceForcesAsync();
            if (exServiceForces != null) throw new Exception("ServicesList are not initialized.");

            ServicesList = exServiceForces.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region " exservice education qualification "
        private async Task<bool> LoadExServiceEducationQualificationAsync()
        {
            IEnumerable<qvwExServiceEducationalQualification> exServiceEducationalQualifications = await _exServiceEducationalQualificationService.GetExServiceEducationalQualificationsAsync();
            if (exServiceEducationalQualifications != null) throw new Exception("ExServiceEducationalQualifications are not initialized.");

            ExServiceEducationalQualifications = exServiceEducationalQualifications.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #endregion

        #endregion

        #region " get "
        public IActionResult OnGet()
		{
			try
			{
				LoadApplyingTypes();
				LoadGenders();
				LoadCategories();
				LoadSSLCLanguage();
				LoadSSLCQualificationBoard();
				LoadUploadTypes();
				LoadDistricts();
				LoadStates();
				LoadServices();
				LoadApplicantUnits();
				LoadExServiceEducationalQualifications();
				LoadExServicemenRelation();


                return Page();
			}
			catch (Exception ex)
			{
				TempData["Error"] = ex.Message;
				return Page();
			}
		}
		#endregion

		#region " post "

		public IActionResult OnPost()
		{
			return Page();
		}

		#endregion
	}
}
