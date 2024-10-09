// ********** MODAL PREVIEW *************** //

$(document).ready(function () {



    $("#preview-btn").on("click", function (event) {

        event.preventDefault()

        if ($("input[name='Applicant.EducationalQualification.IsSSLCHolder']:checked").val() === "False") {
            Swal.fire({
                title: "SSLC Required",
                text: "SSLC Education Required.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            }); return false;
        }
        if ($("input[name='Applicant.EducationalQualification.IsPUCHolder']:checked").val() === "False") {
            Swal.fire({
                title: "PUC Required",
                text: "PUC Education Required.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            }); return false;
        }

        if ($("input[name='Applicant.ApplicantTypistAssistant']:checked").val() === "False") {
            Swal.fire({
                title: "You are Not Eligibel",
                text: "Senior Typist Qualification is Required.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            }); return false;
        }
        if ($("input[name='Applicant.ApplicantStenographerAssistant']:checked").val() === "False") {
            Swal.fire({
                title: "You are Not Eligibel",
                text: "Kannada Shorthand Qualification is Required..",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            }); return false;
        }

        if (!$('#applicationForm').valid()) {
            Swal.fire({
                title: "Field's Missing",
                text: "Fill all the required details.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            return false;
        }
         

        var candidateType = $("#Applicant_PostUnitCode option:selected").text();
        var unitName = $('#Applicant_UnitCode option:selected').text();


        var candidateName = $("#Applicant_FullName").val();
        var FatherName = $("#Applicant_FatherName").val();
        var MotherName = $("#Applicant_MotherName").val();
        var MobileNumber = $("#Applicant_MobileNo").val();
        var Emailid = $("#Applicant_EmailId").val();
        var AddharNo = $("#Applicant_AadharNo").val();
        var gender = $("#Applicant_Reservation_GenderCode option:selected").text();
        var HeightofCandidate = $("#Applicant_PhysicalDetail_Height").val();

        var DoorNo = $("#Applicant_ContactAddress_DoorNo").val();
        var StreetName = $("#Applicant_ContactAddress_Street").val();
        var Landmark = $("#Applicant_ContactAddress_Landmark").val();
        var Taluk = $("#Applicant_ContactAddress_Taluk").val();
        var City = $("#Applicant_ContactAddress_City").val();
        var District = $("#Applicant_ContactAddress_DistrictCode option:selected").text();    
        var OtherDistrict = $("#Applicant_ContactAddress_OtherDistrictName").val();
        var NativeDistrict = $("#Applicant_NativeDistrict").val();
        var State = $('#Applicant_ContactAddress_UnionStateCode option:selected').text();
        var PinCode = $("#pincodeInput").val();
        var postaladdress = $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val();

        var PerDoorNo = $("#Applicant_PermanentAddress_DoorNo").val(); //20a
        var PerStreet = $("#Applicant_PermanentAddress_Street").val(); //20b
        var NearbyLandmark = $("#Applicant_PermanentAddress_Landmark").val(); //20c
        var PerTaluk = $("#Applicant_PermanentAddress_Taluk").val(); //20d
        var PerCity = $("#Applicant_PermanentAddress_City").val(); //20e var District = $("perdistrictper").val(); //20f
        var PerDistrict = $("#Applicant_PermanentAddress_OtherDistrictName").val(); //20g
        var PerOtherDist = $("#Applicant_PermanentAddress_DistrictCode option:selected").text(); //20g
        var PerState = $("#Applicant_PermanentAddress_UnionStateCode option:selected").text(); //20g
        var PerPinCode = $("#Applicant_PermanentAddress_Pincode").val(); //20h =

        var Category = $("#Applicant_Reservation_CategoryCode").val(); //21 var SubCaste $("subcaste").val(); //21a =
        var Subcaste = $("#Applicant_Reservation_SubCaste").val(); //21 var SubCaste $("subcaste").val(); //21a =
        var DateofSubcaste = $("#Applicant_Reservation_CategoryCertificateIssuedDate").val(); //21b


        var GovernmentEmployee = $("input[name='Applicant.Reservation.AreYouAGovermentEmployee']:checked").val(); //29
        var GovtDateofJoining = $("#Applicant_Reservation_GovermentServiceDetail_JoiningDate").val(); //29A
        var GovtDepartment = $("#Applicant_Reservation_GovermentServiceDetail_Department").val(); //29B    
        var GovtYears = $("#Applicant_Reservation_GovermentServiceDetail_YearsInService").val(); //29C
        var GovtMonth = $("#Applicant_Reservation_GovermentServiceDetail_MonthsInService").val(); //29C
        var GovtDays = $("#Applicant_Reservation_GovermentServiceDetail_DaysInService").val(); //29C
        var GovtDateofNoc = $("#Applicant_Reservation_GovermentServiceDetail_NoCIssuedDate").val(); //29d
        var GovtDesignation = $("#Applicant_Reservation_GovermentServiceDetail_Designation").val(); //29d

        var CriminalCases = $("input[name='Applicant.CriminalActivity.IsInvolvedInCriminalActivity']:checked").val();  //31
        var CriminalCasesdetails = $("#Applicant_CriminalActivity_CaseDetail").val(); //31a
        var DepartmentalEnquiry = $("input[name='Applicant.CriminalActivity.HasDepartmentEnquiry']:checked").val();  //32
        var Deptenqdetails = $("#Applicant_CriminalActivity_DepartmentEnquiryDetail").val(); //32a
        var ConvictedinaCriminal = $("input[name='Applicant.CriminalActivity.IsConvictedInCriminalCase']:checked").val(); //33
        var ConvictedCriminalDetails = $("#Applicant_CriminalActivity_ConvictionDetail").val(); //33a

        var PassedSSLC = $("input[name='Applicant.EducationalQualification.IsSSLCHolder']:checked").val();  //31
        var KannadaLanguage = $("#Applicant_EducationalQualification_SSLCQualification_KannadaLanguagePaper option:selected").text(); //31a
        var YearofPassingSSLC = $("#Applicant_EducationalQualification_SSLCQualification_YearOfPassing").val();  //32
        var BoardofSslc = $("#Applicant_EducationalQualification_SSLCQualification_QualificationBoardCode option:selected").text(); //32a
        var OtherSslcBoard = $("#Applicant_EducationalQualification_SSLCQualification_OtherBoardName").val(); //33
        var SSLCRegistrationNo = $("#Applicant_EducationalQualification_SSLCQualification_RegistrationNo").val(); //33a

        // Retrieve values from both inputs
        var SSLCPercentage1 = $("#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage").val();
        var SSLCPercentage2 = $(".manual-percentage").val();
        
        var SSLCGradesObtained = $("#Applicant_EducationalQualification_SSLCQualification_Grade").val(); //33a
        var SSLCMarksorGrades = $("input[name='Applicant.EducationalQualification.SSLCQualification.MarkType']:checked").val(); //33a
        var SSLCMaxMarks = $("#Applicant_EducationalQualification_SSLCQualification_Score_Maximum").val(); //33a
        var SSLCMarksObtained = $("#Applicant_EducationalQualification_SSLCQualification_Score_Obtained").val(); //33a

        var PassedPUC = $("input[name='Applicant.EducationalQualification.IsPUCHolder']:checked").val();  //31
        var PassedPucBoard = $("#Applicant_EducationalQualification_PUCQualification_QualificationBoardCode option:selected").text(); //31a
        var PucOtherBord = $("#Applicant_EducationalQualification_PUCQualification_OtherBoardName").val();
        var YearofPassingPUC = $("#Applicant_EducationalQualification_PUCQualification_YearOfPassing").val();  //32
        var MarksorGradePUC = $("input[name='Applicant.EducationalQualification.PUCQualification.MarkType']:checked").val(); //32a
        var MaxMarksPUC = $("#Applicant_EducationalQualification_PUCQualification_Score_Maximum").val(); //33
        var MarksobtainedPUC = $("#Applicant_EducationalQualification_PUCQualification_Score_Obtained").val(); //33a
        var GradesObtainedPUC = $("#Applicant_EducationalQualification_PUCQualification_Grade_Grade").val(); //33a
        var CGPAPUC = $("#Applicant_EducationalQualification_PUCQualification_ScorePercentage").val(); //33a

        var typist1 = $("input[name='Applicant.ApplicantTypistAssistant']:checked").val();
        var shorthandtypist1 = $('input[name="Applicant.ApplicantStenographerAssistant"]:checked').val();

        var steno = $("#Applicant_ApplicantStenographerAssistant_QualificationCode option:selected").text();
        var kanshorttypist = $("#Applicant_ApplicantTypistAssistant_QualificationCode option:selected").text();

        // Retrieve values from both PUC input fields
        var PUCPercentage1 = $("#Applicant_EducationalQualification_PUCQualification_ScorePercentage").val();
        var PUCPercentage2 = $(".puc-manual-percentage").val();

       

        var PUCRegistrationsno = $("#Applicant_EducationalQualification_PUCQualification_RegistrationNo").val(); //33a

        var BridgeCource = $("input[name='Applicant.EducationalQualification.PUCQualification.IsBridgeCourseFromKSOU']:checked").val(); //33a
        var BridgeCourceRegistrationsno = $("#bridgecourceregistrationno").val(); //33a

        var DegHolder = $("input[name='Applicant.EducationalQualification.IsDegreeHolder']:checked").val();  //31
        var DegreeRegNo = $("#Applicant_EducationalQualification_DegreeQualification_RegistrationNo").val(); //31a
        var YearofPassingDegree = $("#Applicant_EducationalQualification_DegreeQualification_YearOfPassing").val();  //32
        var MarksorGradeDeg = $("input[name='Applicant.EducationalQualification.DegreeQualification.Score']").val(); //32a
        var MaxMarksDegree = $("#Applicant_EducationalQualification_DegreeQualification_Score_Maximum").val(); //33
        var MarksobtainedDeg = $("#Applicant_EducationalQualification_DegreeQualification_Score_Obtained").val(); //33a
        var GradesObtainedDeg = $("#Applicant_EducationalQualification_DegreeQualification_Grade_Grade").val(); //33a
        var AutoDegPercentage = $("#Applicant_EducationalQualification_DegreeQualification_ScorePercentage").val(); //33a
        var ManualDegPercentage = $("#Applicant_EducationalQualification_DegreeQualification_ScorePercentage").text(); //33a
     
       
        var DateofBirth = $("#Applicant_DateOfBirth").val(); //33a
        var DateofBirthason = $("#ageof40").val(); //33a

        var IDCardSelected = $("#Applicant_Uploads_CardType option:selected").text(); //33a
        var SelectedIDCardNo = $("#Applicant_UploadedIDNo").val(); //33a

        var Identitymark01 = $("#Applicant_IdentificationMark_01").val(); //33a
        var Identitymark02 = $("#Applicant_IdentificationMark_02").val(); //33a



        $("#candidateTypePreview").text(candidateType);
        $("#unitNamePreview").text(unitName);
        $("#candidatenameTypePreview").text(candidateName);
        $("#fatherNamePreview").text(FatherName);
        $("#MotherNamePreview").text(MotherName);
        $("#MobileNoPreview").text(MobileNumber);
        $("#emailPreview").text(Emailid);
        $("#aadharPreview").text(AddharNo);
        $("#genderPreview").text(gender);
        $("#HeightPreview").text(HeightofCandidate);

        $("#DoorPreview").text(DoorNo);
        $("#StreetPreview").text(StreetName);
        $("#landmarkPreview").text(Landmark);
        $("#talukPreview").text(Taluk);
        $("#cityPreview").text(City);
        $("#districtPreview").text(District);
        $("#otherdistrictPreview").text(OtherDistrict);
        $("#nativeDistrictPreview").text(NativeDistrict);
        $("#statePreview").text(State);
        $("#pincodePreview").text(PinCode);

        if (postaladdress == "False") {
            $("#postaladdressPreview").text("No");
        } else if (postaladdress == "True") {
            $("#postaladdressPreview").text("Yes");
        }

        $("#PerDoorNoPreview").text(PerDoorNo);
        $("#PerStreetPreview").text(PerStreet);
        $("#NearbyLandmarkPreview").text(NearbyLandmark);
        $("#PerTalukPreview").text(PerTaluk);
        $("#PerCityPreview").text(PerCity);
        $("#PerDistrictPreview").text(PerDistrict);
        $("#PerotherDistrictPreview").text(PerOtherDist);
        $("#perstatePreview").text(PerState);
        $("#PerPincodePreview").text(PerPinCode);

        $("#CategoryPreview").text(Category);
        $("#SubcastePreview").text(Subcaste);
        $("#DateofSubcastePreview").text(DateofSubcaste);

        if (GovernmentEmployee == "False") {
            $("#GovernmentEmployeePreview").text("No");
        } else if (GovernmentEmployee == "True") {
            $("#GovernmentEmployeePreview").text("Yes");
        }

        $("#GovtDateofJoiningPreview").text(GovtDateofJoining);
        $("#GovtDepartmentPreview").text(GovtDepartment);
        $("#GovtYearsPreview").text(GovtYears);
        $("#GovtMonthPreview").text(GovtMonth);
        $("#GovtDaysPreview").text(GovtDays);
        $("#dateofnocgovtdept").text(GovtDateofNoc);
        $("#GovtDesignationPreview").text(GovtDesignation);

        if (CriminalCases == "False") {
            $("#CriminalCasesPreview").text("No");
        } else if (CriminalCases == "True") {
            $("#CriminalCasesPreview").text("Yes");
        }
        $("#CriminalCasesdetailsPreview").text(CriminalCasesdetails);

        if (DepartmentalEnquiry == "False") {
            $("#DepartmentalEnquirPreview").text("No");
        } else if (DepartmentalEnquiry == "True") {
            $("#DepartmentalEnquirPreview").text("Yes");
        }
        $("#DeptenqdetailsPreview").text(Deptenqdetails);

        if (ConvictedinaCriminal == "False") {
            $("#ConvictedinaCriminalPreview").text("No");
        } else if (ConvictedinaCriminal == "True") {
            $("#ConvictedinaCriminalPreview").text("Yes");
        }
        $("#ConvictedCriminalDetailsPreview").text(ConvictedCriminalDetails);

        if (PassedSSLC == "False") {
            $("#PassedSSLCPreview").text("No");
        } else if (PassedSSLC == "True") {
            $("#PassedSSLCPreview").text("Yes");
        }
        $("#KannadaLanguagePreview").text(KannadaLanguage);
        $("#YearofPassingSSLCPreview").text(YearofPassingSSLC);
        $("#BoardofSslcPreview").text(BoardofSslc);
        $("#OtherSslcBoarPreview").text(OtherSslcBoard);
        $("#SSLCRegistrationNoPreview").text(SSLCRegistrationNo);
        $("#SSLCPercentageObtainedPreview").text(SSLCPercentage1);
        $("#GradeSSLCPercentageObtainedPreview").text(SSLCPercentage2);

        if (SSLCMarksorGrades == "M") {
            $("#SSLCMarksorGradesPreview").text("Marks");
        } else if (SSLCMarksorGrades == "G") {
            $("#SSLCMarksorGradesPreview").text("Grade");
        }
        $("#SSLCGradesObtainedPreview").text(SSLCGradesObtained);
        $("#SSLCMaxMarksPreview").text(SSLCMaxMarks);
        $("#SSLCMarksObtainedPreview").text(SSLCMarksObtained);

        if (PassedPUC == "False") {
            $("#PassedPUCPreview").text("No");
        } else if (PassedPUC == "True") {
            $("#PassedPUCPreview").text("Yes");
        };
        $("#PassedPucBoardPreview").text(PassedPucBoard);
        $("#PucOtherBoardPreview").text(PucOtherBord);
        $("#YearofPassingPUCPreview").text(YearofPassingPUC);

        if (MarksorGradePUC == "M") {
            $("#MarksorGradePUCPreview").text("Marks");
        } else if (MarksorGradePUC == "G") {
            $("#MarksorGradePUCPreview").text("Grade");
        };
        $("#MaxMarksPUCPreview").text(MaxMarksPUC);
        $("#MarksobtainedPUCPreview").text(MarksobtainedPUC);
        $("#GradesObtainedPUCPreview").text(GradesObtainedPUC);
        $("#CGPAPUCPreview").text(CGPAPUC);
        $("#PercentagePUCPreview").text(PUCPercentage1);
        $("#GradePercentagePUCPreview").text(PUCPercentage2);

        if (typist1 == "False") {
            $("#modaltypist").text("No");
        } else if (typist1 == "True") {
            $("#modaltypist").text("Yes");
        };
        $("#Typsitqualimaxmarks").text(steno);

        if (shorthandtypist1 == "False") {
            $("#modalseniorshorthand").text("No");
        } else if (shorthandtypist1 == "True") {
            $("#modalseniorshorthand").text("Yes");
        };
        $("#Typsitqualiminimarks").text(kanshorttypist)
        

        $("#PUCRegistrationsnoPreview").text(PUCRegistrationsno);

        $("#BridgeCourcePreview").text(BridgeCource);
        $("#BridgeCourceRegistrationsnoPreview").text(BridgeCourceRegistrationsno);

        if (DegHolder == "False") {
            $("#DegHolderPreview").text("No");
        } else if (DegHolder == "True") {
            $("#DegHolderPreview").text("Yes");
        };
        $("#DegreeRegNoPreview").text(DegreeRegNo);
        $("#YearofPassingDegreePreview").text(YearofPassingDegree);
        $("#MarksorGradeDegPreview").text(MarksorGradeDeg);
        $("#MaxMarksDegreePreview").text(MaxMarksDegree);
        $("#MarksobtainedDegPreview").text(MarksobtainedDeg);
        $("#GradesObtainedDegPreview").text(GradesObtainedDeg);
        $("#AutoDegPercentagePreview").text(AutoDegPercentage);
        $("#ManualDegPercentagePreview").text(ManualDegPercentage);
       
        $("#DateofBirthPreview").text(DateofBirth);
        $("#DateofBirthasonPreview").text(DateofBirthason);

        $("#IDCardSelectedPreview").text(IDCardSelected);
        $("#SelectedIDCardNoPreview").text(SelectedIDCardNo);

        $("#Identitymark01Preview").text(Identitymark01);
        $("#Identitymark02Preview").text(Identitymark02);


        var previewModal = new bootstrap.Modal($("#exampleModalCenter"));
        previewModal.show();
    });

});