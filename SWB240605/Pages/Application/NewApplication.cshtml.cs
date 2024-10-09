using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using SWB240605.Models;
using SWB240605.Services;

namespace SWB240605.Pages
{
    public class NewApplicationModel : BasePage
    {
        #region " constructor "


        public NewApplicationModel(IConfiguration configuration,
                                   IUnionStateTerritoryService unionstateservice,
                                   IGenderService genderservice,
                                   IDistrictService districtservice,
                                   ICategoryService categoryservice,
                                   IIdentityCardTypeService identitycardtypeservice,
                                   IPostService postservice,
                                   IPostUnitService postunitservice,
                                   IQualificationBoardService qualificationboardservice,
                                   IPostUnitQualificationService postunitqualificationservice,
                                   IKannadaStudiedModeService kannadastudiedmodeservice,
                                   IVisitorService visitorservice,
                                   IApplicantService applicantservice,
                                   IWebHostEnvironment environment) : base(configuration)
        {
            _unionStateService = unionstateservice;
            _genderService = genderservice;
            _districtService = districtservice;
            _categoryService = categoryservice;
            _identityCardTypeService = identitycardtypeservice;
            _postService = postservice;
            _postUnitService = postunitservice;
            _qualificationBoardService = qualificationboardservice;
            _postUnitQualificationService = postunitqualificationservice;
            _kannadaStudiedModeService = kannadastudiedmodeservice;

            _visitorService = visitorservice;
            _applicantService = applicantservice;

            _environment = environment;
        }

        #endregion

        #region " definitions "

        private readonly IUnionStateTerritoryService _unionStateService;
        private readonly IGenderService _genderService;
        private readonly IDistrictService _districtService;
        private readonly ICategoryService _categoryService;
        private readonly IIdentityCardTypeService _identityCardTypeService;
        private readonly IPostService _postService;
        private readonly IPostUnitService _postUnitService;
        private readonly IQualificationBoardService _qualificationBoardService;
        private readonly IPostUnitQualificationService _postUnitQualificationService;
        private readonly IKannadaStudiedModeService _kannadaStudiedModeService;

        private readonly IVisitorService _visitorService;
        private readonly IApplicantService _applicantService;

        private readonly IWebHostEnvironment _environment;

        #endregion

        #region " properties "

        [BindProperty]
        public Applicant Applicant { get; set; }

        public IEnumerable<SelectListItem>? ApplyingPosts { get; set; }
        public IEnumerable<SelectListItem>? Genders { get; set; }
        public IEnumerable<SelectListItem>? UnionStateTerritories { get; set; }
        public IEnumerable<SelectListItem>? Districts { get; set; }
        public IEnumerable<SelectListItem>? Categories { get; set; }
        public IEnumerable<SelectListItem>? SSLCBoards { get; set; }
        public IEnumerable<SelectListItem>? PUCBoards { get; set; }
        public IEnumerable<SelectListItem>? IdentityCardTypes { get; set; }
        public IEnumerable<SelectListItem>? QualificationBoards { get; set; }
        public IEnumerable<SelectListItem>? KannadaStudiedModes { get; set; }
        public IEnumerable<SelectListItem>? TypistQualificationExams { get; set; }
        public IEnumerable<SelectListItem>? StenoQualificationExams { get; set; }
        public string? IPAddress { get; set; } = "128.0.0.1";

        #endregion

        #region " methods "

        #region " master records loading "

        #region " applying post "

        private async Task<bool> LoadApplyingPostsAsync()
        {
            IEnumerable<qvwPostUnit>? posts = await _postUnitService.GetPostUnitsAsync();
            if (posts == null) throw new Exception("Posts are not initialized.");

            ApplyingPosts = posts.Select(p => new SelectListItem()
            {
                Text = p.Title,
                Value = p.Code
            });

            return true;
        }

        #endregion

        #region " kannadaStudied mode "

        private async Task<bool> LoadKannadaStudiedModesAsync()
        {
            IEnumerable<qvwKannadaStudiedMode>? modes = await _kannadaStudiedModeService.GetKannadaStudiedModesAsync();
            if (modes == null) throw new Exception("Kannada Papers are not initialized.");

            KannadaStudiedModes = modes.Select(m => new SelectListItem()
            {
                Text = m.Title,
                Value = m.Code
            }).ToList();

            return true;
        }


        #endregion

        #region " gender "

        private async Task<bool> LoadGendersAsync()
        {
            IEnumerable<qvwGender>? genders = await _genderService.GetGendersAsync();
            if (genders == null) throw new Exception("Genders are not initialized.");

            Genders = genders.Select(g => new SelectListItem()
            {
                Text = g.Title,
                Value = g.Code
            }).ToList();

            return true;
        }

        #endregion

        #region " categories "

        private async Task<bool> LoadCategoriesAsync(string postUnitCode)
        {
            IEnumerable<qvwCategory>? categories = await _categoryService.GetCategoriesAsync(postUnitCode);
            if (categories == null) throw new Exception("Categories are not initialized.");

            Categories = categories.Select(c => new SelectListItem()
            {
                Text = c.Title,
                Value = c.Code
            }).ToList();

            return true;
        }


        #endregion

        #region " sslc board "

        private async Task<bool> LoadSSLCBoardsAsync()
        {
            IEnumerable<qvwQualificationBoard>? sslcBoards = await _qualificationBoardService.GetQualificationBoardsAsync("SSLC");
            if (sslcBoards == null) throw new Exception("SSLC Boards are not initialized.");

            SSLCBoards = sslcBoards.Select(board => new SelectListItem()
            {
                Text = board.Title,
                Value = board.Code
            }).ToList();

            return true;
        }

        #endregion

        #region " puc board "

        private async Task<bool> LoadPUCBoardsAsync()
        {
            IEnumerable<qvwQualificationBoard>? pucBoards = await _qualificationBoardService.GetQualificationBoardsAsync("PUC");
            if (pucBoards == null) throw new Exception("PUC Boards are not Initialized.");

            PUCBoards = pucBoards.Select(board => new SelectListItem()
            {
                Text = board.Title,
                Value = board.Code
            }).ToList();

            return true;
        }

        #endregion

        #region " Technical QUALIFICATION "

        private async Task<bool> LoadTypistQualificationsAsync()
        {
            IEnumerable<qvwPostUnitQualification>? postUnitQualifications = await _postUnitQualificationService.GetPostUnitQualificationsAsync("TY");
            if (postUnitQualifications == null) throw new Exception("Job Qualifications are not initialized.");

            TypistQualificationExams = postUnitQualifications.Select(pq => new SelectListItem()
            {
                Text = pq.Qualification,
                Value = pq.PostUnitCode
            }).ToList();

            return true;
        }

        private async Task<bool> LoadStenoQualificationsAsync()
        {
            IEnumerable<qvwPostUnitQualification>? postUnitQualifications = await _postUnitQualificationService.GetPostUnitQualificationsAsync("ST");
            if (postUnitQualifications == null) throw new Exception("Job Qualifications are not initialized.");

            StenoQualificationExams = postUnitQualifications.Select(pq => new SelectListItem()
            {
                Text = pq.Qualification,
                Value = pq.PostUnitCode
            }).ToList();

            return true;
        }

        #endregion

        #region " ID Card "

        private async Task<bool> LoadIdentityCardTypesAsync()
        {
            IEnumerable<qvwIdentityCardType>? cardTypes = await _identityCardTypeService.GetIdentityCardTypesAsync();
            if (cardTypes == null) throw new Exception("Identity Card Types are not initialized.");

            IdentityCardTypes = cardTypes.Select(ct => new SelectListItem()
            {
                Text = ct.Title,
                Value = ct.Code
            }).ToList();

            return true;
        }

        #endregion

        #region " state and district load "

        #region " state "

        private async Task<bool> LoadUnionStateTerritoriesAsync()
        {
            IEnumerable<qvwUnionStateTerritory>? states = await _unionStateService.GetUnionStateTerritoriesAsync();
            if (states == null) throw new Exception("States are not initialized.");

            UnionStateTerritories = states.Select(s => new SelectListItem()
            {
                Text = s.Name,
                Value = s.Code
            }).ToList();

            return true;
        }

        #endregion

        #region " district "

        private async Task<bool> LoadDistrictsByState(string stateCode)
        {
            IEnumerable<qvwDistrict>? stateDistricts = await _districtService.GetDistrictsAsync(stateCode);
            if (stateDistricts == null) throw new Exception($"Districts are not initialized for {stateCode}.");

            Districts = stateDistricts.Select(sd => new SelectListItem()
            {
                Text = sd.Title,
                Value = sd.Code
            }).ToList();

            return true;
        }

        #endregion

        #endregion

        #endregion

        #region " common "

        private async Task<bool> InitPageAsync()
        {
            bool isLoaded;

            isLoaded = await LoadApplyingPostsAsync();
            isLoaded = await LoadGendersAsync();
            isLoaded = await LoadUnionStateTerritoriesAsync();
            isLoaded = await LoadIdentityCardTypesAsync();
            isLoaded = await LoadStenoQualificationsAsync();
            isLoaded = await LoadTypistQualificationsAsync();
            isLoaded = await LoadKannadaStudiedModesAsync();
            isLoaded = await LoadSSLCBoardsAsync();
            isLoaded = await LoadPUCBoardsAsync();

            Applicant = new Applicant()
            {
                ContactAddress = new ApplicantContactAddress(),

                PermanentAddress = new ApplicantPermanentAddress(),

                CriminalActivity = new ApplicantCriminalActivity(),

                Downloads = new ApplicantDownload(),

                EducationalQualification = new ApplicantEducationalQualification()
                {
                    SSLCQualification = new ApplicantSSLCQualification(),
                    PUCQualification = new ApplicantPUCQualification()
                },

                Reservation = new ApplicantReservation()
                {
                    GovermentServiceDetail = new ApplicantGovermentService()
                },
            };

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

        #region " new application "

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
            
            if (Applicant.EducationalQualification.PUCQualification != null &&
                !(Applicant.EducationalQualification.PUCQualification.QualificationBoardCode == "EQUV"))
                Applicant.EducationalQualification.PUCQualification.OtherBoardName = null;

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
                if (Applicant.EducationalQualification.PUCQualification == null)
                    throw new Exception("PUC Qualification cannot be Empty.");

                if (Applicant.EducationalQualification.PUCQualification.MarkType == "M")
                {
                    Applicant.EducationalQualification.PUCQualification.ScorePercentage = ((Convert.ToDouble(Applicant.EducationalQualification.PUCQualification.Score.Obtained) / Convert.ToDouble(Applicant.EducationalQualification.PUCQualification.Score.Maximum)) * 100.0);
                    Applicant.EducationalQualification.PUCQualification.Grade = null;
                }
                else if (Applicant.EducationalQualification.PUCQualification.MarkType == "G")
                {
                    Applicant.EducationalQualification.PUCQualification.Score = null;
                }
            }

            Applicant.PostCode = "STTY"; //ProjectCode;
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
            if (!Directory.Exists(Path.Combine(_environment.WebRootPath, "uploads", "photo", DateTime.Now.ToString("ddMMMyyyy"))))
                Directory.CreateDirectory(Path.Combine(_environment.WebRootPath, "uploads", "photo", DateTime.Now.ToString("ddMMMyyyy")));

            //if (!Directory.Exists(Path.Combine(_environment.WebRootPath, "uploads", "sign", DateTime.Now.ToString("ddMMMyyyy"))))
            //    Directory.CreateDirectory(Path.Combine(_environment.WebRootPath, "uploads", "sign", DateTime.Now.ToString("ddMMMyyyy")));

            if (!Directory.Exists(Path.Combine(_environment.WebRootPath, "uploads", "thumb", DateTime.Now.ToString("ddMMMyyyy"))))
                Directory.CreateDirectory(Path.Combine(_environment.WebRootPath, "uploads", "thumb", DateTime.Now.ToString("ddMMMyyyy")));

            if (!Directory.Exists(Path.Combine(_environment.WebRootPath, "uploads", "idcard", DateTime.Now.ToString("ddMMMyyyy"))))
                Directory.CreateDirectory(Path.Combine(_environment.WebRootPath, "uploads", "idcard", DateTime.Now.ToString("ddMMMyyyy")));

            if (Applicant.Uploads == null)
                Applicant.Uploads = new List<ApplicantUpload>();

            if (Applicant.Photo == null)
                throw new Exception("Uploading Photo Image cannot be Empty.");

            /*
             * 
             * photo & signature will be in a single image (mentioned in the notification) 
             * for this project, 
             * hence signature is not required.
             * 
             */
            //if (Applicant.Signature == null)
            //    throw new Exception("Uploading Signature Image cannot be Empty.");

            if (Applicant.Thumb == null)
                throw new Exception("Uploading Left-hand Thumb Impression Image cannot be Empty.");

            if (Applicant.IdentityCard == null)
                throw new Exception("Uploading Identity Card Image cannot be Empty.");

            var photoPath = Path.Combine(_environment.WebRootPath, "uploads", "photo", DateTime.Now.ToString("ddMMMyyyy"), $@"{Guid.NewGuid()}" + System.IO.Path.GetExtension(Applicant.Photo.FileName));
            //var signaturePath = Path.Combine(_environment.WebRootPath, "uploads", "sign", DateTime.Now.ToString("ddMMMyyyy"), $@"{Guid.NewGuid()}" + System.IO.Path.GetExtension(Applicant.Signature.FileName));
            var thumbPath = Path.Combine(_environment.WebRootPath, "uploads", "thumb", DateTime.Now.ToString("ddMMMyyyy"), $@"{Guid.NewGuid()}" + System.IO.Path.GetExtension(Applicant.Thumb.FileName));
            var idCardPath = Path.Combine(_environment.WebRootPath, "uploads", "idcard", DateTime.Now.ToString("ddMMMyyyy"), $@"{Guid.NewGuid()}" + System.IO.Path.GetExtension(Applicant.IdentityCard.FileName));

            using (var photoFileStream = new FileStream(photoPath, FileMode.Create))
                await Applicant.Photo.CopyToAsync(photoFileStream);

            //using (var signFileStream = new FileStream(signaturePath, FileMode.Create))
            //    await Applicant.Signature.CopyToAsync(signFileStream);

            using (var thumbFileStream = new FileStream(thumbPath, FileMode.Create))
                await Applicant.Thumb.CopyToAsync(thumbFileStream);

            using (var idCardFileStream = new FileStream(idCardPath, FileMode.Create))
                await Applicant.IdentityCard.CopyToAsync(idCardFileStream);

            ApplicantUpload photoUpload = new ApplicantUpload()
            {
                DocumentTypeCode = "PH",
                DocumentPath = photoPath.Replace(Path.Combine(_environment.WebRootPath, "uploads"), ""),
                OrderIndex = 1
            };

            //ApplicantUpload signatureUpload = new ApplicantUpload()
            //{
            //    DocumentTypeCode = "SG",
            //    DocumentPath = signaturePath.Replace(Path.Combine(_environment.WebRootPath, "uploads"), ""),
            //    OrderIndex = 1
            //};

            ApplicantUpload thumbUpload = new ApplicantUpload()
            {
                DocumentTypeCode = "TB",
                DocumentPath = thumbPath.Replace(Path.Combine(_environment.WebRootPath, "uploads"), ""),
                OrderIndex = 1
            };

            ApplicantUpload idUpload = new ApplicantUpload()
            {
                DocumentTypeCode = "ID",
                DocumentPath = idCardPath.Replace(Path.Combine(_environment.WebRootPath, "uploads"), ""),
                OrderIndex = 1
            };

            Applicant.Uploads.Add(photoUpload);
            //Applicant.Uploads.Add(signatureUpload);
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

        public async Task<JsonResult> OnGetDistrictsAsync(string stateCode)
        {
            bool isLoaded = await LoadDistrictsByState(stateCode);
            return new JsonResult(Districts);
        }

        public async Task<JsonResult> OnGetCategoriesAsync(string postUnitCode)
        {
            bool isLoaded = await LoadCategoriesAsync(postUnitCode);
            return new JsonResult(Categories);
        }

        public async Task<IActionResult> OnPostAsync()
        {
            try
            {
                if (Applicant == null)
                    throw new Exception("Invalid Session, try again. No Data exists in the Entities.");
                
                Applicant.AadharNo = Applicant.AadharNo?.Replace("-", string.Empty);
                Applicant.UploadedIDNo = Applicant.UploadedIDNo?.Replace("-", string.Empty);

                //Applicant.VisitorId = GetCurrentVisitorId();
                //Applicant.PostCode = "STTY";

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
