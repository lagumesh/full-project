// ********** MODAL PREVIEW *************** //

$(document).ready(function () {
    $('#Applicant_Reservation_IsClaimingExServicemenReservation').on('change', function () {
        //alert('hh')
        var selectedValue = $(this).val();
        if (selectedValue === 'No') {
            Swal.fire({
                title: "Not Eligible",
                text: "If Applying as Ex-Servicemen then select 'Yes'.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            //alert('Values you entered in some inputs are not valid!, kindly enter the valid input.');
            return false;
        }
    })
    $('input[name="Applicant.Reservation.KalyanaKarnatakaDistrictCode"]').on('change', function () {
        //alert($(this).val())
        var selectedValue = $('input[name="Applicant.Reservation.KalyanaKarnatakaDistrictCode"]:checked').val();
        //var isClamingKalyanaKarnatakaReservation = $('#Applicant_Reservation_IsClamingKalyanaKarnatakaReservation').val();

        if (selectedValue === 'No') {
            Swal.fire({
                title: "Not Eligible",
                text: "371J Kalyana Karnataka Certificate Required.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            return false;
        }
    });
    $("#preview-btn").on("click", function () {
        if ($("input[name='Applicant.Reservation.KalyanaKarnatakaDistrictCode']:checked").val() === 'No') {
            Swal.fire({
                title: "Not Eligible",
                text: "371J Kalyana Karnataka Certificate Required.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            //alert('Values you entered in some inputs are not valid!, kindly enter the valid input.');
            return false;
        }

        if ($("input[name='Applicant.Reservation.IsClaimingExServicemenReservation']:checked").val() === 'No') {
            Swal.fire({
                title: "Not Eligible",
                text: "If Applying as Ex-Servicemen then select 'Yes'.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            //alert('Values you entered in some inputs are not valid!, kindly enter the valid input.');
            return false;
        }


        if ($("input[name='Applicant.EducationalQualification.IsSSLCHolder']:checked").val() === "No") {
            Swal.fire({
                title: "You are Not Eligibel",
                text: "SSLC Education Required for this post.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            }); return false;
        }
        if (!$('#applicationForm').valid()) {
            Swal.fire({
                title: "Field's Missing",
                text: "Fill all the  required details..",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            //alert('Values you entered in some inputs are not valid!, kindly enter the valid input.');
           return false;
        }


        var candidateType = $("#Applicant_ApplyingTypeCode option:selected").text();
        var unitName = $('#Applicant_PostUnitCode option:selected').text();


        var candidateName = $("#Applicant_FullName").val();
        var FatherName = $("#Applicant_FatherName").val();
        var MotherName = $("#Applicant_MotherName").val();
        var MobileNumber = $("#Applicant_MobileNo").val();
        var Emailid = $("#Applicant_EmailId").val();
        var AddharNo = $("#Applicant_AadharNo").val();
        var gender = $("#Applicant_Reservation_GenderCode option:selected").text();
        var HeightofCandidate = $("#Applicant_PhysicalDetail_Height").val();
        var WeightofCandidate = $("#Applicant_PhysicalDetail_Weight").val();

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
        var PerDistrict = $("#Applicant_PermanentAddress_DistrictCode option:selected").text(); //20g
        var PerOtherDist = $("#Applicant_PermanentAddress_OtherDistrictName ").val(); //20g
        var PerState = $("#Applicant_PermanentAddress_UnionStateCode option:selected").text(); //20g
        var PerPinCode = $("#Applicant_PermanentAddress_Pincode").val(); //20h =

        var Category = $("#Applicant_Reservation_CategoryCode option:selected").text(); //21 var SubCaste $("subcaste").val(); //21a =
        var Subcaste = $("#Applicant_Reservation_SubCaste").val(); //21 var SubCaste $("subcaste").val(); //21a =
        var DateofSubcaste = $("#Applicant_Reservation_CategoryCertificateIssuedDate").val(); //21b

        var ClaimingRuralMedium = $("input[name='Applicant.Reservation.IsClaimingRuralReservation']:checked").val(); //22 DateofIssue = $("dateofissueofruralmedium").val(); //22a
        var ClaimingRuralMediumDate = $("#Applicant_Reservation_RuralCertificateIssuedDate").val(); //22 DateofIssue = $("dateofissueofruralmedium").val(); //22a

        var ExServicemen = $("input[name='Applicant.Reservation.IsClaimingExServicemenReservation']:checked").val(); //23
        var presentlyExServicemen = $("input[name='Applicant.Reservation.ExService.ExServiceForceCode']:checked").val(); //23
        var ExservicemenBenefit = $("input[name='Applicant.Reservation.ExService.IsAvaliedExServiceBenefit']:checked").val();
        var Exservicemenqualification = $("#Applicant_Reservation_ExService_ExServiceEducationalQualificationCode option:selected").text();
        var DateofJoiningExServicemen = $("#Applicant_Reservation_ExService_DateOfJoining").val(); //23b
        var DateofNocExServicemen = $("#Applicant_Reservation_ExService_NoCIssuedDate").val(); //23b

        var ExServicemenServiceRendered = $("#Applicant_Reservation_ExService_ExServiceForce_Code option:selected").text();
        var DateofDischargeExServicemen = $("#Applicant_Reservation_ExService_DischargeDate").val(); //23e
        var yearsOfExServicemen = $("#Applicant_Reservation_ExService_YearsInService").val(); //23f
        var MonthsOfExServicemen = $("#Applicant_Reservation_ExService_MonthsInService").val(); //23f
        var DaysOfExServicemen = $("#Applicant_Reservation_ExService_DaysInService").val(); //23f

        //var RelationShipwithExServicemen = $("#famrelation").val(); //24a
        var RelatedExservicemenDeadorDis = $("input[name='Applicant.Reservation.IsClaimingExServicemenRelationReservation']:checked").val();
        var ExServicemenDiedinAction = $("input[name='Applicant.Reservation.ExServiceFamily.IsDiedInService']:checked").val();   //24b
        var ExServicemenDisabled = $("input[name='Applicant.Reservation.ExServiceFamily.IsDisabledInService']:checked").val(); //24c
        var ExServicemenRelation = $("#Applicant_Reservation_ExServiceFamily_ExServicemenRelationCode option:selected").text(); //24

        var PDPReservation = $("input[name='Applicant.Reservation.IsClaimingPDPReservation']:checked").val(); //25
        var PDPCertificate = $("#Applicant_Reservation_PDPCertificateIssuedDate").val(); //25a

        var KannadaMediumReservation = $("input[name='Applicant.Reservation.IsClamingKannadaMediumReservation']:checked").val(); //26
        var KannadaMediuCertificate = $("#Applicant_Reservation_KannadaMediumCertificateIssuedDate").val(); //26a

        var TransgenderReservation = $("input[name='Applicant.Reservation.IsClamingTransgenderReservation']:checked").val(); //27
        var TransgenderReservationCertificate = $("#Applicant_Reservation_TransgenderCertificateIssuedDate").val(); //27a

        var KalyanaKarnataka = $("input[name='Applicant.Reservation.IsClamingKalyanaKarnatakaReservation']:checked").val(); //28
        var KalyanaKarnatakaDistrict = $("input[name='Applicant.Reservation.KalyanaKarnatakaDistrictCode']:checked").val();//28a

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
        var YearofPassingSSLC = $("#Applicant_EducationalQualification_SSLCQualification_YearOfPassing option:selected").text();
        var BoardofSslc = $("#Applicant_EducationalQualification_SSLCQualification_QualificationBoardCode option:selected").text(); //32a
        var OtherSslcBoard = $("#Applicant_EducationalQualification_SSLCQualification_OtherBoardName").val(); //33
        var SSLCRegistrationNo = $("#Applicant_EducationalQualification_SSLCQualification_RegistrationNo").val(); //33a
        var SSLCPercentageObtained = $("#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage").val(); //33a
        var SSLCGradesObtained = $("#Applicant_EducationalQualification_SSLCQualification_Grade").val(); //33a
        var SSLCMarksorGrades = $("input[name='Applicant.EducationalQualification.SSLCQualification.MarkType']:checked").val(); //33a
        var SSLCMaxMarks = $("#Applicant_EducationalQualification_SSLCQualification_Score_Maximum").val(); //33a
        var SSLCMarksObtained = $("#Applicant_EducationalQualification_SSLCQualification_Score_Obtained").val(); //33a

        var PassedPUC = $("input[name='Applicant.EducationalQualification.IsPUCHolder']:checked").val();  //31
        var PassedPucBoard = $("#Applicant_EducationalQualification_PUCQualification_QualificationBoardCode").val(); //31a
        var PucOtherBord = $("#Applicant_EducationalQualification_PUCQualification_OtherBoardName").val();
        var YearofPassingPUC = $("#Applicant_EducationalQualification_PUCQualification_YearOfPassingval").val();  //32
        var MarksorGradePUC = $("input[name='Applicant.EducationalQualification.PUCQualification.Score']").val(); //32a
        var MaxMarksPUC = $("#Applicant_EducationalQualification_PUCQualification_Score_Maximum").val(); //33
        var MarksobtainedPUC = $("#Applicant_EducationalQualification_PUCQualification_Score_Obtained").val(); //33a
        var GradesObtainedPUC = $("#Applicant_EducationalQualification_PUCQualification_Grade_Grade").val(); //33a
        var CGPAPUC = $("#Applicant_EducationalQualification_PUCQualification_ScorePercentage").val(); //33a
        var PercentagePUC = $("#Applicant_EducationalQualification_PUCQualification_ScorePercentage").val(); //33a
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

        var IDCardSelected = $("#Applicant_UploadedIdentityCardType option:selected").text(); //33a
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
        $("#WeightPreview").text(WeightofCandidate);

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
        $("#postaladdressPreview").text(postaladdress);

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

        $("#ClaimingRuralMediumPreview").text(ClaimingRuralMedium);
        $("#ClaimingRuralMediumDatePreview").text(ClaimingRuralMediumDate);

        $("#exServicemenPreview").text(ExServicemen);
        $("#presentlyExServicemenPreview").text(presentlyExServicemen);
        $("#availedBenefitPreview").text(ExservicemenBenefit);
        $("#eduQualificationexserPreview").text(Exservicemenqualification);
        $("#dateofjoiningexserPreview").text(DateofJoiningExServicemen);
        $("#dateofNocexserPreview").text(DateofNocExServicemen);
        $("#ExServicemenServiceRenderedPreview").text(ExServicemenServiceRendered);
        $("#ExServicemendateofdisexserPreview").text(DateofDischargeExServicemen);
        $("#yearsOfExServicemenPreview").text(yearsOfExServicemen);
        $("#MonthsOfExServicemenPreview").text(MonthsOfExServicemen);
        $("#DaysOfExServicemenPreview").text(DaysOfExServicemen);

        $("#RelationShipwithExServicemenPreview").text(RelatedExservicemenDeadorDis);
        $("#ExServicemenRelationPreview").text(ExServicemenRelation);
        $("#ExServicemenDiedinActionPreview").text(ExServicemenDiedinAction);
        $("#ExServicemenDisabledPreview").text(ExServicemenDisabled);

        $("#PDPReservationPreview").text(PDPReservation);
        $("#PDPCertificatePreview").text(PDPCertificate);

        $("#KannadaMediumReservationPreview").text(KannadaMediumReservation);
        $("#KannadaMediuCertificatePreview").text(KannadaMediuCertificate);

        $("#TransgenderReservationPreview").text(TransgenderReservation);
        $("#TransgenderReservationCertificatePreview").text(TransgenderReservationCertificate);

        $("#KalyanaKarnatakaPreview").text(KalyanaKarnataka);
        $("#KalyanaKarnatakaDistrictPreview").text(KalyanaKarnatakaDistrict);

        $("#GovernmentEmployeePreview").text(GovernmentEmployee);
        $("#GovtDateofJoiningPreview").text(GovtDateofJoining);
        $("#GovtDepartmentPreview").text(GovtDepartment);
        $("#GovtYearsPreview").text(GovtYears);
        $("#GovtMonthPreview").text(GovtMonth);
        $("#GovtDaysPreview").text(GovtDays);
        $("#GovtDateofNocPreview").text(GovtDateofNoc);
        $("#GovtDesignationPreview").text(GovtDesignation);

        $("#CriminalCasesPreview").text(CriminalCases);
        $("#CriminalCasesdetailsPreview").text(CriminalCasesdetails);
        $("#DepartmentalEnquirPreview").text(DepartmentalEnquiry);
        $("#DeptenqdetailsPreview").text(Deptenqdetails);
        $("#ConvictedinaCriminalPreview").text(ConvictedinaCriminal);
        $("#ConvictedCriminalDetailsPreview").text(ConvictedCriminalDetails);

        $("#PassedSSLCPreview").text(PassedSSLC);
        $("#KannadaLanguagePreview").text(KannadaLanguage);
        $("#YearofPassingSSLCPreview").text(YearofPassingSSLC);
        $("#BoardofSslcPreview").text(BoardofSslc);
        $("#OtherSslcBoarPreview").text(OtherSslcBoard);
        $("#SSLCRegistrationNoPreview").text(SSLCRegistrationNo);
        $("#SSLCPercentageObtainedPreview").text(SSLCPercentageObtained);



        if (SSLCMarksorGrades == "Yes") {
            $("#SSLCMarksorGradesPreview").text("Marks");
        } else if (SSLCMarksorGrades == "No") {
            $("#SSLCMarksorGradesPreview").text("Grade");
        }

        $("#SSLCGradesObtainedPreview").text(SSLCGradesObtained);
        $("#SSLCMaxMarksPreview").text(SSLCMaxMarks);
        $("#SSLCMarksObtainedPreview").text(SSLCMarksObtained);

        $("#PassedPUCPreview").text(PassedPUC);
        $("#PassedPucBoardPreview").text(PassedPucBoard);
        $("#PucOtherBoardPreview").text(PucOtherBord);
        $("#YearofPassingPUCPreview").text(YearofPassingPUC);
        $("#MarksorGradePUCPreview").text(MarksorGradePUC);
        $("#MaxMarksPUCPreview").text(MaxMarksPUC);
        $("#MarksobtainedPUCPreview").text(MarksobtainedPUC);
        $("#GradesObtainedPUCPreview").text(GradesObtainedPUC);
        $("#CGPAPUCPreview").text(CGPAPUC);
        $("#PercentagePUCPreview").text(PercentagePUC);
        $("#PUCRegistrationsnoPreview").text(PUCRegistrationsno);

        $("#BridgeCourcePreview").text(BridgeCource);
        $("#BridgeCourceRegistrationsnoPreview").text(BridgeCourceRegistrationsno);

        $("#DegHolderPreview").text(DegHolder);
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


        var previewModal = new bootstrap.Modal($("#previewModal"));
        previewModal.show();
    });

});