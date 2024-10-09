using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SWB240601.Models;
using SWB240601.Pages.Common;
using SWB240601.Services;
using SWB240601.Services.Interfaces;

namespace SWB240601.Pages.Application
{
    public class NewApplicationModel : BasePage
    {
        #region " constructor "
        public NewApplicationModel(IConfiguration configuration,
                                  IApplicantService applicantService,
                                  ICategoryService categoryService,
                                  IDistrictService districtService,
                                  //IExServiceEducationalQualificationService exServiceEducationalQualificationService,
                                  //IExServiceForceService exServiceForceService,
                                  //IExServicemenRelationService exServicemenRelationService,
                                  IGenderService genderService,
                                  IIdentityCardTypeService identityCardTypeService,
                                  IApplyingTypeService applyingTypeService,
                                  //IKalyanaKarnatakaDistrictService kalyanaKarnatakaDistrictService,
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
            //_exServiceEducationalQualificationService = exServiceEducationalQualificationService;
            //_exserviceForceService = exServiceForceService;
            _applyingTypeService = applyingTypeService;
            //_exServicemenRelationService = exServicemenRelationService;
            _genderService = genderService;
            _identityCardTypeService = identityCardTypeService;
            //_kalyanaKarnatakaDistrictService = kalyanaKarnatakaDistrictService;
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
        private readonly IApplyingTypeService _applyingTypeService;
        //private readonly IExServiceEducationalQualificationService _exServiceEducationalQualificationService;
        //private readonly IExServiceForceService _exserviceForceService;
        //private readonly IExServicemenRelationService _exServicemenRelationService;
        private readonly IGenderService _genderService;
        private readonly IIdentityCardTypeService _identityCardTypeService;
        //private readonly IKalyanaKarnatakaDistrictService _kalyanaKarnatakaDistrictService;
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
        
        public IEnumerable<SelectListItem>? PostUnits { get; set; }
        public IEnumerable<SelectListItem>? Genders { get; set; }
        public IEnumerable<SelectListItem>? UnionStateTerritoryies { get; set; }
        public IEnumerable<SelectListItem>? Districts { get; set; }
        public IEnumerable<SelectListItem>? Categories { get; set; }
        public IEnumerable<SelectListItem>? KannadaStudiedModes { get; set; }
        public IEnumerable<SelectListItem>? SSLCBoards { get; set; }
        public IEnumerable<SelectListItem>? IdentityCardTypes { get; set; }
        public IEnumerable<SelectListItem>? ServicesList { get; set; }
        public IEnumerable<SelectListItem>? ExServiceEducationalQualifications { get; set; }
        public IEnumerable<SelectListItem>? ExServicemenRelations { get; set; }

        public string? IPAddress { get; set; } = "128.0.0.1";

        #endregion

        #region " methods "

        #region "master  records loading"

        #region "appllyingtype"
        private async Task<bool> LoadApplyingTypeAsync()
        {
            IEnumerable<qvwApplyingType>? applyingTypes = await _applyingTypeService.GetApplyingTypesAsync();
            if (applyingTypes == null) throw new Exception("ApplyingType is not intialized.");

            ApplyingTypes = applyingTypes.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        #region "Unit name"
        private async Task<bool> LoadUnitNameAsync()
        {
            IEnumerable<qvwPostUnit>? postunits = await _postUnitService.GetPostUnitsAsync();
            if (postunits == null) throw new Exception("PostUnit is not initialized");

            PostUnits = postunits.Select(d => new SelectListItem()
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
            IEnumerable<qvwGender>? genders = await _genderService.GetGendersAsync();
            if (genders == null) throw new Exception("gender is not inialized");

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
            IEnumerable<qvwUnionStateTerritory>? states = await _unionStateTerritoryService.GetUnionStateTerritoriesAsync();
            if (states == null) throw new Exception("state is not initialized");

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
            IEnumerable<qvwDistrict>? districts = await _districtService.GetDistrictsAsync(stateCode);
            if (districts == null) throw new Exception($"Districts are not initialized for {stateCode}.");

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
            IEnumerable<qvwCategory>? categories = await _categoryService.GetCategoriesAsync();
            if (categories == null) throw new Exception("Categories is not intialized");

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
            IEnumerable<qvwQualificationBoard>? sslcboard = await _qualificationBoardService.GetQualificationBoardsAsync("SSLC");
            if (sslcboard == null) throw new Exception("SSLC Boards are not initialized.");

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
            IEnumerable<qvwKannadaStudiedMode>? sslclanguage = await _kannadaStudiedModeService.GetKannadaStudiedModesAsync();
            if (sslclanguage == null) throw new Exception("SSLC languages are not initialized.");

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
            IEnumerable<qvwIdentityCardType>? document =await _identityCardTypeService.GetIdentityCardTypesAsync();
            if (document == null) throw new Exception("documents are not initialized.");

            IdentityCardTypes = document.Select(d => new SelectListItem()
            {
                Text = d.Title,
                Value = d.Code,
            });
            return true;
        }
        #endregion

        //#region " exservicemen relation "
        //private async Task<bool> LoadExServicemenRelationAsync()
        //{
        //    IEnumerable<qvwExServicemenRelation>? exServicemenRelations = await _exServicemenRelationService.GetExServicemenRelationsAsync();
        //    if (exServicemenRelations == null) throw new Exception("ExServicemenRelations are not initialized.");

        //    ExServicemenRelations = exServicemenRelations.Select(d => new SelectListItem()
        //    {
        //        Text = d.Title,
        //        Value = d.Code,
        //    });
        //    return true;
        //}
        //#endregion

        //#region " exservice force service "
        //private async Task<bool> LoadExServiceForceAsync()
        //{
        //    IEnumerable<qvwExServiceForce>? exServiceForces = await _exserviceForceService.GetExServiceForcesAsync();
        //    if (exServiceForces == null) throw new Exception("ServicesList are not initialized.");

        //    ServicesList = exServiceForces.Select(d => new SelectListItem()
        //    {
        //        Text = d.Title,
        //        Value = d.Code,
        //    });
        //    return true;
        //}
        //#endregion

        //#region " exservice education qualification "
        //private async Task<bool> LoadExServiceEducationQualificationAsync()
        //{
        //    IEnumerable<qvwExServiceEducationalQualification>? exServiceEducationalQualifications = await _exServiceEducationalQualificationService.GetExServiceEducationalQualificationsAsync();
        //    if (exServiceEducationalQualifications == null) throw new Exception("ExServiceEducationalQualifications are not initialized.");

        //    ExServiceEducationalQualifications = exServiceEducationalQualifications.Select(d => new SelectListItem()
        //    {
        //        Text = d.Title,
        //        Value = d.Code,
        //    });
        //    return true;
        //}
        //#endregion

        #endregion

        #region " common "

        private async Task<bool> InitPageAsync()
        {
            bool isLoaded;

            isLoaded = await LoadApplyingTypeAsync();
            isLoaded = await LoadUnitNameAsync();
            isLoaded = await LoadGenderAsync();
            isLoaded = await LoadStateAsync();
            isLoaded = await LoadCategoryAsync();
            isLoaded = await LoadSSLCBoardAsync();
            isLoaded = await LoadSSLCLanguageAsync();
            isLoaded = await LoadDocumentAsync();
            //isLoaded = await LoadExServicemenRelationAsync();
            //isLoaded = await LoadExServiceForceAsync();
            //isLoaded = await LoadExServiceEducationQualificationAsync();

            return true;
        }

        #endregion

        #region " visitor "

        private async Task<int> SaveVisitorAsync(string ipAddress, string browserInfo)
        {
            Visitor visitor = new Visitor()
            {
                IPAddress = ipAddress,
                VisitedOn = DateTime.Now,
                Browser = browserInfo
            };

            return await _visitorService.SaveAsync(visitor);
        }

        #endregion

        #region  " new applicants "

        private async Task<bool> ProcessApplicantDetailsAsync()
        {
            if (Applicant.EducationalQualification == null)
                throw new Exception("Invalid Educational Qualification.");

            if (Applicant.ContactAddress == null)
                throw new Exception("Contact Address cannot be Empty.");

            if ((bool)Applicant.ContactAddress.IsPermanentAddressSame)
                Applicant.PermanentAddress = null;

            if (Applicant.Reservation == null)
                throw new Exception("Reservation cannot be Empty.");

            if (!(bool)Applicant.Reservation.AreYouAGovermentEmployee)
                Applicant.Reservation.GovermentServiceDetail = null;

            if (Applicant.Reservation.CategoryCode == "GM")
            {
                Applicant.Reservation.CategoryCertificateIssuedDate = null;
                Applicant.Reservation.SubCaste = null;
            }

            if (Applicant.EducationalQualification.SSLCQualification != null &&
                !(Applicant.EducationalQualification.SSLCQualification.QualificationBoardCode == "EQUV"))
                Applicant.EducationalQualification.SSLCQualification.OtherBoardName = null;

            if (Applicant.ContactAddress.DistrictCode != "OTH")
                Applicant.ContactAddress.OtherDistrictName = null;

            if (Applicant.PermanentAddress != null && Applicant.PermanentAddress.DistrictCode != "OTH")
                Applicant.PermanentAddress.OtherDistrictName = null;

            if (Applicant.CriminalActivity == null)
                throw new Exception("Criminal Activity Cannot be Empty.");

            if (!(bool)Applicant.CriminalActivity.IsConvictedInCriminalCase)
                Applicant.CriminalActivity.ConvictionDetail = null;

            if (!(bool)Applicant.CriminalActivity.IsInvolvedInCriminalActivity)
                Applicant.CriminalActivity.CaseDetail = null;

            if (!(bool)Applicant.CriminalActivity.HasDepartmentEnquiry)
                Applicant.CriminalActivity.DepartmentEnquiryDetail = null;

            if ((bool)Applicant.EducationalQualification.IsPUCHolder)
            {
                if (Applicant.EducationalQualification.SSLCQualification == null)
                    throw new Exception("PUC Qualification cannot be Empty.");

                if (Applicant.EducationalQualification.SSLCQualification.MarkType == "M")
                {
                    Applicant.EducationalQualification.SSLCQualification.ScoredPercentage = ((Convert.ToDouble(Applicant.EducationalQualification.SSLCQualification.Score.Obtained) / Convert.ToDouble(Applicant.EducationalQualification.SSLCQualification.Score.Maximum)) * 100.0);
                    Applicant.EducationalQualification.SSLCQualification.Grade = null;
                }
                else if (Applicant.EducationalQualification.SSLCQualification.MarkType == "G")
                {
                    Applicant.EducationalQualification.SSLCQualification.Score = null;
                }
            }

            Applicant.PostCode = "KSRP"; //ProjectCode;
            Applicant.VisitorId = Convert.ToInt32(GetCurrentVisitorId());

            if (Applicant.VisitorId == 0)
            {
                Applicant.VisitorId = await SaveVisitorAsync(HttpContext.Connection.RemoteIpAddress?.ToString(),
                                                             Request.Headers["User-Agent"].ToString());
                StoreVisitorId(Applicant.VisitorId);
            }

            return true;
        }


        private async Task<bool> UploadImagesAsync()
        {
            if (!Directory.Exists(Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "photo", DateTime.Now.ToString("ddMMMyyyy"))))
                Directory.CreateDirectory(Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "photo", DateTime.Now.ToString("ddMMMyyyy")));

            if (!Directory.Exists(Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "sign", DateTime.Now.ToString("ddMMMyyyy"))))
                Directory.CreateDirectory(Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "sign", DateTime.Now.ToString("ddMMMyyyy")));

            if (!Directory.Exists(Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "thumb", DateTime.Now.ToString("ddMMMyyyy"))))
                Directory.CreateDirectory(Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "thumb", DateTime.Now.ToString("ddMMMyyyy")));

            if (!Directory.Exists(Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "idcard", DateTime.Now.ToString("ddMMMyyyy"))))
                Directory.CreateDirectory(Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "idcard", DateTime.Now.ToString("ddMMMyyyy")));

            if (Applicant.Uploads == null)
                Applicant.Uploads = new List<ApplicantUpload>();

            if (Applicant.Photo == null)
                throw new Exception("Uploading Photo Image cannot be Empty.");

            if (Applicant.Signature == null)
                throw new Exception("Uploading Signature Image cannot be Empty.");

            if (Applicant.Thumb == null)
                throw new Exception("Uploading Left-hand Thumb Impression Image cannot be Empty.");

            if (Applicant.IdentityCard == null)
                throw new Exception("Uploading Identity Card Image cannot be Empty.");

            var photoPath = Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "photo", DateTime.Now.ToString("ddMMMyyyy"), $@"{Guid.NewGuid()}" + System.IO.Path.GetExtension(Applicant.Photo.FileName));
            var signaturePath = Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "sign", DateTime.Now.ToString("ddMMMyyyy"), $@"{Guid.NewGuid()}" + System.IO.Path.GetExtension(Applicant.Signature.FileName));
            var thumbPath = Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "thumb", DateTime.Now.ToString("ddMMMyyyy"), $@"{Guid.NewGuid()}" + System.IO.Path.GetExtension(Applicant.Thumb.FileName));
            var idCardPath = Path.Combine(_webHostEnvironment.WebRootPath, "uploads", "idcard", DateTime.Now.ToString("ddMMMyyyy"), $@"{Guid.NewGuid()}" + System.IO.Path.GetExtension(Applicant.IdentityCard.FileName));

            using (var photoFileStream = new FileStream(photoPath, FileMode.Create))
                await Applicant.Photo.CopyToAsync(photoFileStream);

            using (var signFileStream = new FileStream(signaturePath, FileMode.Create))
                await Applicant.Signature.CopyToAsync(signFileStream);

            using (var thumbFileStream = new FileStream(thumbPath, FileMode.Create))
                await Applicant.Thumb.CopyToAsync(thumbFileStream);

            using (var idCardFileStream = new FileStream(idCardPath, FileMode.Create))
                await Applicant.IdentityCard.CopyToAsync(idCardFileStream);

            ApplicantUpload photoUpload = new ApplicantUpload()
            {
                DocumentTypeCode = "PH",
                DocumentPath = photoPath.Replace(Path.Combine(_webHostEnvironment.WebRootPath, "uploads"), ""),
                OrderIndex = 1
            };

            ApplicantUpload signatureUpload = new ApplicantUpload()
            {
                DocumentTypeCode = "SG",
                DocumentPath = signaturePath.Replace(Path.Combine(_webHostEnvironment.WebRootPath, "uploads"), ""),
                OrderIndex = 1
            };

            ApplicantUpload thumbUpload = new ApplicantUpload()
            {
                DocumentTypeCode = "TB",
                DocumentPath = thumbPath.Replace(Path.Combine(_webHostEnvironment.WebRootPath, "uploads"), ""),
                OrderIndex = 1
            };

            ApplicantUpload idUpload = new ApplicantUpload()
            {
                DocumentTypeCode = "ID",
                DocumentPath = idCardPath.Replace(Path.Combine(_webHostEnvironment.WebRootPath, "uploads"), ""),
                OrderIndex = 1
            };

            Applicant.Uploads.Add(photoUpload);
            Applicant.Uploads.Add(signatureUpload);
            Applicant.Uploads.Add(thumbUpload);
            Applicant.Uploads.Add(idUpload);

            Applicant.Photo = null;
            Applicant.Signature = null;
            Applicant.Thumb = null;
            Applicant.IdentityCard = null;

            return true;
        }
        #endregion

        #endregion

        #region " events "

        public async Task<JsonResult> OnGetDistrictsAsync(string stateCode)
        {
            bool isLoaded = await LoadDistrictAsync(stateCode);
            return new JsonResult(Districts);
        }

        #endregion

        #region " get "
        public async Task<IActionResult> OnGetAsync()
        {
            try
            {
                bool isLoaded = await InitPageAsync();

                return Page();
            }
            catch (Exception ex)
            {
                TempData["ErrorMsg"] = ex.Message;
                return Page();
            }
        }

        #endregion

        #region " post "

        public async Task<IActionResult> OnPostAsync()
        {
            try
            {
                if (Applicant == null)
                    throw new Exception("Invalid Session, try again. No Data exists in the Entities.");

                Applicant.AadharNo = Applicant.AadharNo?.Replace("-", string.Empty);
                Applicant.UploadedIDNo = Applicant.UploadedIDNo?.Replace("-", string.Empty);

                bool isProcessed = await ProcessApplicantDetailsAsync();
                bool isUploaded = await UploadImagesAsync();

                int applicationNo = await _applicantService.SaveAsync(Applicant);

                StoreApplicationNo(applicationNo);

                return RedirectToPage("..\\auth\\login");
            }
            catch (Exception ex)
            {
                TempData["ErrorMessage"] = ex.Message;

                bool isLoaded = await InitPageAsync();
                return Page();
            }
        }

        #endregion
    }
}
