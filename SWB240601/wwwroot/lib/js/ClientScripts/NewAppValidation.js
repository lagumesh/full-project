$(document).ready(function () {

    // Restrict Special Characters 
   function restrictSpecialCharacters(value, element) {
        // Regular expression to allow only letters, numbers, and spaces
        const regex = /^[a-zA-Z0-9\s]+$/;

        // Check each character in the value
        for (let i = 0; i < value.length; i++) {
            if (!regex.test(value[i])) {
                return false;
            }
        }

        return true;
    }

    $.validator.addMethod("customRestriction", function (value, element) {
        return restrictSpecialCharacters(value, element);
    }, "Invalid characters. Please use only letters, numbers, and spaces.");

    $.validator.addMethod("height", function (value, element) {
        var regex = /^\d{3}(\.\d)?$/;
        if (regex.test(value)) {
            return true;
        }
        return false;
    }, "Invalid height.");

    $.validator.addMethod("email_id", function (value, element) {
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return this.optional(element) || regex.test(value);
    }, "Please enter a valid email address.");


    $.validator.addMethod("minHeight", function (value, element, param) {

        let params = param.toString().split('*');

        let exs = params[0];
        let catg = params[1];
        let gender = params[2];

        //alert($(tribe).val());
        // Male Gender
        if ($(gender).val() === '1' || $(gender).val() === '3') {

            if ($(exs).val() === 'True') {
                if (value) {
                    return true;
                }
                return false;
            }
            else if ($(catg).val() == 'TB') {
                if (value >= 155) {
                    return true;
                }
                return false;
            }
            else {
                if (value >= 168) {
                    return true;
                }
                return false;
            }

        }
        else {

            if ($(exs).val() === 'True') {
                if (value) {
                    return true;
                }
                return false;
            }
            else if ($(catg).val() == 'TB') {
                if (value >= 150) {
                    return true;
                }
                return false;
            }
            else {
                if (value >= 157) {
                    return true;
                }
                return false;
            }

        }
    }, "Minimum height should be 168 for general & 155 for ST (Forest Area Tribe)");

    $.validator.addMethod("minInsYear", function (value, element) {

        if (value < 5) {
            return false;
        }

        return true;

    }, "invalid serviced years, should be minimum 5 years to claim in-service reservation.");

    $.validator.addMethod("percentage", function (value, element) {
        return this.optional(element) || /^\d{0,3}(\.\d{0,3})?$/i.test(value);
    }, "You must include two decimal places");

    $.validator.addMethod("noofmonths", function (value, element) {

        if (value < 0 || value > 11) {
            return false;
        }

        return true;

    }, "invalid month, should be between 0 and 11.");

    $.validator.addMethod("noofdays", function (value, element) {

        if (value < 0 || value > 30) {
            return false;
        }

        return true;

    }, "invalid days, should be between 0 and 30.");

    $.validator.addMethod("nozero", function (value, element, params) {
        // params is an array of corresponding field names
        var values = params.map(function (fieldName) {
            return parseFloat($("#" + fieldName).val());
        });

        // Check if all fields are zero
        if (values.every(function (fieldValue) { return fieldValue === 0; })) {
            // Return false to indicate validation failure
            return false;
        } else {
            // Return true to indicate validation success
            return true;
        }
    }, "At least one of the specified fields must be non-zero");


    //mobile no
    $.validator.addMethod("notAllSameDigits", function (value) {
        // Check if all digits in the input are the same
        return !/(.)\1{9}/.test(value);
    }, "Invalid number: All digits should not be the same.");

    // obtained marks
    $.validator.addMethod('obtainedMark', function (value, element, param) {
        if (parseFloat(value) > parseFloat($(param).val())) {
            return false;
        }
        return true;
    }, "Obtained marks cannot exceed Maximum marks.");

    // percentage
    $.validator.addMethod("percentage", function (value, element) {
        return this.optional(element) || /^\d{0,3}(\.\d{0,3})?$/i.test(value);
    }, "You must include two decimal places");

    // File Sizes

    $.validator.addMethod('fileSize', function (value, element, param) {
        // param = size (in bytes) 
        // element = element to validate (<input>)
        // value = value of the element (file name)
        return this.optional(element) || (element.files[0].size <= param)
    }, "The File is too Large.");

    $.validator.addMethod('signatureFileSize', function (value, element, param) {
        // param = size (in bytes) 
        // element = element to validate (<input>)
        // value = value of the element (file name)
        return this.optional(element) || (element.files[0].size <= param)
    }, "The File is too Large.");

    $.validator.addMethod('thumbFileSize', function (value, element, param) {
        // param = size (in bytes) 
        // element = element to validate (<input>)
        // value = value of the element (file name)
        return this.optional(element) || (element.files[0].size <= param)
    }, "The File is too Large.");

    $.validator.addMethod('idCardFileSize', function (value, element, param) {
        // param = size (in bytes) 
        // element = element to validate (<input>)
        // value = value of the element (file name)
        return this.optional(element) || (element.files[0].size <= param)
    }, "The File is too Large.");

    $("#applicationForm").validate({
        rules: {
            "Applicant.ApplyingTypeCode": {
                required: true,
            },
            "Applicant.UnitCode": {
                required: true,
            },
            "Applicant.FullName": {
                required: true,
                minlength: 2,
                maxlength: 60,
                pattern: "^[a-zA-Z ]+$", 
                //digits: false,
            },
            "Applicant.FatherName": {
                required: true,
                minlength: 2,
                maxlength: 60,
                pattern: "^[a-zA-Z ]+$",
            },
            "Applicant.MotherName": {
                required: true,
                minlength: 2,
                maxlength: 60,
                pattern: "^[a-zA-Z ]+$",
            },
            "Applicant.MobileNo": {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true,
                pattern: /^[6-9]\d{9}$/,
                notAllSameDigits: true, // Use the custom validator here
            },

            "Applicant.EmailId": {
                required: true,
                minlength: 6,
                maxlength: 50,
                email_id: true,
              
            },
            "Applicant.AadharNo": {
                required: true,
                //digits: true,
                minlength: 14,
                maxlength: 14,
            },
            "Applicant.Reservation.GenderCode": {
                required: true,
            },
            "Applicant.PhysicalDetail.Height": {
                required: true,
                //digits: true,
                height: true,
                range: [150, 200],
                //minHeight: '#Applicant_Reservation_IsClaimingExServicemen*#Applicant_Reservation_CategoryCode *#Applicant_Gender',
                minlength: 3,
                maxlength: 5,
                //pattern: "^(167(\.\d{1,2})?|1[78]\d(\.\d{1,2})?|2[0-8]\d(\.\d{1,2})?|29[0-9](\.\d{1,2})?)$", 

            },
            "Applicant.ContactAddress.DoorNo": {
                required: true,
                minlength: 1,
                maxlength: 50,
            },
            "Applicant.ContactAddress.Street": {
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            "Applicant.ContactAddress.Landmark": {
                required: true,
                minlength: 2,
                maxlength: 60,
            },
            "Applicant.ContactAddress.Taluk": {
                required: true,
                minlength: 2,
                maxlength: 50,
               
            },
            "Applicant.ContactAddress.City": {
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            "Applicant.ContactAddress.UnionStateCode": {
                required: true,
            },
            "Applicant.NativeDistrict": {
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            "Applicant.ContactAddress.DistrictCode": {
                required: true,
            },
            "Applicant.ContactAddress.OtherDistrictName": {
                required: function (element) {
                    return $('#Applicant_ContactAddress_DistrictCode').val() == 'OTR';
                },
                minlength: 3,
                maxlength: 50,
                pattern: "^[a-zA-Z ]+$", 
            },
            "Applicant.ContactAddress.Pincode": {
                required: true,
                digits: true,
                minlength: 6,
                maxlength: 6,
            },
            "Applicant.ContactAddress.IsPermanentAddressSame": {
                required: true,
            },
            "Applicant.PermanentAddress.DoorNo": {   
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
                minlength: 1,
                maxlength: 50,
            },

            "Applicant.PermanentAddress.Street": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
                minlength: 2,
                maxlength: 50,
            },
            "Applicant.PermanentAddress.Landmark": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
                minlength: 2,
                maxlength: 60,
            },
            "Applicant.PermanentAddress.Taluk": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
                minlength: 2,
                maxlength: 50,
            },
            "Applicant.PermanentAddress.City": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
                minlength: 2,
                maxlength: 50,
            },
            "Applicant.PermanentAddress.UnionStateCode": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No'; 
                },
            },
            "Applicant.PermanentAddress.DistrictCode": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
            },
            "Applicant.PermanentAddress.OtherDistrictName": {
                required: function (element) {
                    return $('#Applicant_PermanentAddress_DistrictCode').val() == 'OTR';
                },
                minlength: 3,
                maxlength: 50,
                pattern: "^[a-zA-Z ]+$", 
            },
            "Applicant.PermanentAddress.Pincode": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
                digits: true,
                minlength: 6,
                maxlength: 6,
                customRestriction: true,
            },

            "Applicant.Reservation.CategoryCode": {
                required: true,
            },
            "Applicant.Reservation.SubCaste": {
                required: function (element) {
                    return $('#Applicant.Reservation.CategoryCode').val() !== 'GM';
                },
                minlength: 2,
                maxlength: 50,
                pattern: "^[a-zA-Z0-9-]+$", // Including hyphen (-) in the pattern
            },
            "Applicant.Reservation.CategoryCertificateIssuedDate": {
                required: function (element) {
                    return $('#Applicant.Reservation.CategoryCode').val() !== 'GM';
                },
            },
            "Applicant.Reservation.IsClaimingRuralReservation": {
                required: true,
            },
            "Applicant.Reservation.RuralCertificateIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingRuralReservation').val() === 'yes';
                },
                //minCertificateDate: true,
            },

            "Applicant.Reservation.IsClaimingExServicemenReservation": {
                required: true,
            },

            "Applicant.Reservation.ExService.ExServiceForceCode": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'EXS';
                },
            },
            "Applicant.Reservation.ExService.DateOfJoining": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'EXS';
                },
            },
            "Applicant.Reservation.ExService.NoCIssuedDate": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'EXS';
                },
            },

            "Applicant.Reservation.ExService.ExServiceForce.Code": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'EXS';
                },
            },

            "Applicant.Reservation.ExService.DischargeDate": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'EXS';
                },
            },

            "Applicant.Reservation.ExService.YearsInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingExServicemenReservation').val() == 'yes';
                },
                digits: true,
                maxlength: 2,
                range: [0, 50],
                nozero: ['Applicant_Reservation_ExService_MonthsInService', 'Applicant_Reservation_ExService_DaysInService'],
            },
            "Applicant.Reservation.ExService.MonthsInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingExServicemenReservation').val() == 'yes';
                },
                digits: true,
                noofmonths: true,
                nozero: ['Applicant_Reservation_ExService_YearsInService', 'Applicant_Reservation_ExService_DaysInService'],
            },
            "Applicant.Reservation.ExService.DaysInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingExServicemenReservation').val() == 'yes';
                },
                digits: true,
                noofdays: true,
                nozero: ['Applicant_Reservation_ExService_YearsInService', 'Applicant_Reservation_ExService_MonthsInService'],
            },


            "Applicant.Reservation.ExServiceRelation": {
                required: true,
            },

            "Applicant.Reservation.ExServiceRelation.ExServicemenRelationCode": {
                required: function (element) {
                    return $('#Applicant_Reservation_ExServiceRelation').val() === 'yes';
                },
            },

            "Applicant.Reservation.IsClaimingPDPReservation": {
                required: true,
            },
            "Applicant.Reservation.PDPCertificateIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingPDPReservation').val() === 'yes';
                },
            },

            "Applicant.Reservation.IsClaimingKannadaMediumReservation": {
                required: true,
            },
            "Applicant.Reservation.KannadaMediumCertificateIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingKannadaMediumReservation').val() === 'yes';
                },
            },

            "Applicant.Reservation.IsClaimingTransgenderReservation": {
                required: function (element) {
                    return $('#Applicant_Reservation_GenderCode opttion:selected').val() === 'MT';
                },
            },
            "Applicant.Reservation.TransgenderCertificateIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingTransgenderReservation').val() === 'yes';
                },
            },

            "Applicant.Reservation.IsClaimingKalyanaKarnatakaReservation": {
                required: true,
            },
            "Applicant.Reservation.KalyanaKarnatakaDistrictCode": {
                required: function(element) {
                    return $('#Applicant_Reservation_IsClaimingKalyanaKarnatakaReservation').val() === 'yes';
                },
            },

            "Applicant.Reservation.AreYouAGovermentEmployee": {
                required: true,
            },
            "Applicant.Reservation.GovermentServiceDetail.JoiningDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'yes';
                },
            },
            "Applicant.Reservation.GovermentServiceDetail.Department": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'yes';
                },
                minlength: 2,
                maxlength: 50,
            },
            "Applicant.Reservation.GovermentServiceDetail.YearsInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'yes';
                },
                digits: true,
                maxlength: 2,
                range: [0, 50],
            },
            "Applicant.Reservation.GovermentServiceDetail.MonthsInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'yes';
                },
                digits: true,
                noofmonths: true,
                nozero: ['Applicant_Reservation_GovermentServiceDetail_DaysInService', 'Applicant_Reservation_GovermentServiceDetail_YearsInService'],
            },
            "Applicant.Reservation.GovermentServiceDetail.DaysInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'yes';
                },
                digits: true,
                noofdays: true,
                nozero: ['Applicant_Reservation_GovermentServiceDetail_YearsInService', 'Applicant_Reservation_GovermentServiceDetail_MonthsInService'],
            },
            "Applicant.Reservation.GovermentServiceDetail.NoCIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'yes';
                },
            },
            "Applicant.Reservation.GovermentServiceDetail.Designation": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'yes';
                },
                minlength: 2,
                maxlength: 50,
            },

            "Applicant.CriminalActivity.IsInvolvedInCriminalActivity": {
                required: true,
            },
            "Applicant.CriminalActivity.CaseDetail": {
                required: function (element) {
                    return $('#Applicant_CriminalActivity_IsInvolvedInCriminalActivity').val() == 'yes';
                },
                minlength: 2,
                maxlength: 350,
            },

            "Applicant.CriminalActivity.HasDepartmentEnquiry": {
                required: true,
            },
            "Applicant.CriminalActivity.DepartmentEnquiryDetail": {
                required: function (element) {
                    return $('#Applicant_CriminalActivity_HasDepartmentEnquiry').val() == 'yes';
                },
                minlength: 2,
                maxlength: 350,
            },

            "Applicant.CriminalActivity.IsConvictedInCriminalCase": {
                required: true,
            },
            "Applicant.CriminalActivity.ConvictionDetail": {
                required: function (element) {
                    return $('#Applicant_CriminalActivity_IsConvictedInCriminalCase').val() == 'yes';
                },
                minlength: 2,
                maxlength: 350,
            },

            "Applicant.EducationalQualification.SSLCQualification.QualificationBoard.IsApplicableForSSLC": {
                required: true,
                //mustequal: ["False"],
            },
            "Applicant.EducationalQualification.SSLCQualification.KannadaLanguagePaper": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoard_IsApplicableForSSLC').val() === 'yes';
                },
            },
            "Applicant.EducationalQualification.SSLCQualification.YearOfPassing": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoard_IsApplicableForSSLC').val() === 'yes';
                },
            },
            "Applicant.EducationalQualification.SSLCQualification.Score": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoard_IsApplicableForSSLC').val() === 'yes';
                },
            },
            "Applicant.EducationalQualification.SSLCQualification.Score.Maximum": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_Score').val() === 'yes';                   
                },
                minlength: 1,
                maxlength: 5,
                digits: true,
            },
            "Applicant.EducationalQualification.SSLCQualification.Score.Obtained": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_Score').val() === 'yes';
                },
                minlength: 1,
                maxlength: 5,
                digits: true,
                obtainedMark: '#Applicant_EducationalQualification_SSLCQualification_Score_Maximum',
            },
            "Applicant.EducationalQualification.SSLCQualification.Grade": {
                required: function (element) {
                    return $("input[name='Applicant.EducationalQualification.SSLCQualification.Score']:checked").val() === 'no';
                },
                minlength: 1,
                maxlength: 5,
                //pattern: "^[a-zA-Z. ]+$",
            },
            "Applicant.EducationalQualification.SSLCQualification.ScoredPercentage": {
                required: function (element) {
                    return $("input[name='Applicant.EducationalQualification.SSLCQualification.Score']:checked").val() === 'no';
                },
                number: true,
                maxlength: 6,
                range: [1, 100],
            },
            "Applicant.EducationalQualification.SSLCQualification.QualificationBoardCode": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoard_IsApplicableForSSLC').val() === 'yes';
                },

            },
            "Applicant.EducationalQualification.SSLCQualification.OtherBoardName": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoardCode').val() === 'OR';
                },
                minlength: 2,
                maxlength: 30,
            },
            "Applicant.EducationalQualification.SSLCQualification.RegistrationNo": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoard_IsApplicableForSSLC').val() === 'yes';
                },
                customRestriction: true,
                minlength: 4,
                maxlength: 30,
            },

            "Applicant.EducationalQualification.PUCQualification.QualificationBoard.IsApplicableForPUC": {
                required: true,
            },
            "Applicant.EducationalQualification.PUCQualification.QualificationBoardCode": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoard_IsApplicableForPUC').val() === 'yes';
                },
            },
            "Applicant.EducationalQualification.PUCQualification.OtherBoardName": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoardCode').val() === 'OR';
                },
                minlength: 2,
                maxlength: 30,
            },
            "Applicant.EducationalQualification.PUCQualification.YearOfPassing": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoard_IsApplicableForPUC').val() === 'yes';
                },
            },
            "Applicant.EducationalQualification.PUCQualification.Score": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoard_IsApplicableForPUC').val() === 'yes';
                },
            },
            "Applicant.EducationalQualification.PUCQualification.Score.Maximum": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_Score').val() === 'yes';
                },
                digits: true,
                minlength: 1,
                maxlength: 5,
            },
            "Applicant.EducationalQualification.PUCQualification.Score.Obtained": {
                required: function (element) {
                        return $('#Applicant_EducationalQualification_SSLCQualification_Score').val() === 'yes';    
                },
                digits: true,
                minlength: 1,
                maxlength: 5,
                obtainedMark: '#Applicant_EducationalQualification_PUCQualification_Score_Maximum',
            },
            "Applicant.EducationalQualification.PUCQualification.Grade.Grade": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_Score').val() === 'no';
                },
                minlength: 1,
                maxlength: 5,
            },
            "Applicant.EducationalQualification.PUCQualification.ScorePercentage": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoard_IsApplicableForPUC').val() === 'yes';
                },
                required: true,
                number: true,
                maxlength: 6,
                range: [1, 100],
            },
            "Applicant.EducationalQualification.PUCQualification.RegistrationNo": {
                required: true,
                minlength: 4,
                maxlength: 30,
                customRestriction: true,
            },

            "Applicant.EducationalQualification.PUCQualification.IsBridgeCourseFromKSOU": {
                required: true,
            },

            "Applicant.EducationalQualification.IsDegreeHolder": {
                required: true,
            },
            "Applicant.EducationalQualification.DegreeQualification.RegistrationNo": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsDegreeHolder').val() === 'yes';
                },
                minlength: 4,
                maxlength: 30,
            },
            "Applicant.EducationalQualification.DegreeQualification.YearOfPassing": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsDegreeHolder').val() === 'yes';
                },
            },
            "Applicant.EducationalQualification.DegreeQualification.Score": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsDegreeHolder').val() === 'yes';
                },
            },
            "Applicant.EducationalQualification.DegreeQualification.Score.Maximum": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_DegreeQualification_Score').val() === 'yes';
                },
                digits: true,
                minlength:1,
                maxlength: 5,
            },
            "Applicant.EducationalQualification.DegreeQualification.Score.Obtained": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_DegreeQualification_Score').val() === 'yes';
                },
                digits: true,
                minlength: 1,
                maxlength: 5,
                obtainedMark: '#Applicant_EducationalQualification_DegreeQualification_Score_Maximum',
            },
            "Applicant.EducationalQualification.DegreeQualification.Grade.Grade": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_DegreeQualification_Score').val() === 'no';
                },
                minlength: 1,
                maxlength: 5,
                //digits: true,
            },
            "Applicant.EducationalQualification.DegreeQualification.ScorePercentage": {
                required: true,
                number: true,
                maxlength: 5,
                range: [1, 100],
                percentage: true,
            },

            "Applicant.DateOfBirth": {
                required: true,
                //inddate: true,
                //maxDoBDate: '#Applicant_Reservation_CategoryCode*#Applicant_Reservation_IsClaimingExServicemen*#Applicant_Reservation_ExService_YearsInService*#Applicant_Reservation_ExService_MonthsInService*#Applicant_Reservation_ExService_DaysInService*#Applicant_ApplyingTypeCode',
                //minDoBDate: true,
            },

            "Applicant.Uploads.CardType": {
                required: true,
            },
            "Applicant.UploadedIDNo": {
                required: true,
                minlength: 4,
                maxlength: 50,
            },

            "Applicant.IdentificationMark_01": {
                required: true,
                minlength: 3,
                maxlength: 100,
            },
            "Applicant.IdentificationMark_02": {
                required: true,
                minlength: 3,
                maxlength: 100,
            },
            "Applicant.Uploads.IdentityCardPath": {
                required: true,
                extension: "png|jpe?g|gif",
                fileSize: 250576,
            },
            "Applicant.Uploads.SignaturePath": {
                required: true,
                extension: "png|jpe?g|gif",
                fileSize: 250576,
            },
            "Applicant.Uploads.ThumbImagePath": {
                required: true,
                extension: "png|jpe?g|gif",
                fileSize: 250576,
            },
            "Applicant.Uploads.PhotoPath": {
                required: true,
                extension: "png|jpe?g|gif",
                fileSize: 250576,
            },
        },
        messages: {
            "Applicant.ApplyingTypeCode": {
                required: "Choose the Applying Type.",
            },
            "Applicant.UnitCode": {
                required: "Choose the UNIT Name.",
            },
            "Applicant.FullName": {
                required: "Please enter your name.",
                minlength: "Your name must consist of at least 2 characters.",
                maxlength: "Your name cannot exceed 60 characters.",
                pattern: "Enter valid name"
                //pattern: "Invalid name. Valid characters are a-z, space, and dot(.)."
            },
            "Applicant.FatherName": {
                required: "Please enter your Father's name.",
                minlength: "Father's name must consist of at least 2 characters.",
                maxlength: "Father's name cannot exceed 60 characters.",
                pattern: "Enter valid name"
            },
            "Applicant.MotherName": {
                required: "Please enter your Mother's name.",
                minlength: "Mother's name must consist of at least 2 characters.",
                maxlength: "Mother's name cannot exceed 60 characters.",
                pattern: "Enter valid name"
            },
            "Applicant.MobileNo": {
                required: "Please enter your mobile no.",
                minlength: "Mobile No. must consists of 10 Digits.",
                maxlength: "Mobile No. must consists of 10 Digits.",
                digits: "Invalid Mobile No.",
                pattern: "Please enter a 10-digit mobile number starting with '6,7,8 or 9'.",
            },
            "Applicant.EmailId": {
                required: "Please enter your email Id.",
                minlength: "Email Id must consists of atleast 12 characters.",
                maxlength: "Email Id cannot exceed 50 characters. ",
                email_id: "Invalid Email Id.",
            },
            "Applicant.AadharNo": {
                required: "Please enter your Aadhar Number",
                //digits: "Invalid Aadhar Card No.",
                minlength: "Aadhar Card No. should consists of 12 Characters.",
                maxlength: "Aadhar Card No.  should consists of 12 Characters.",
            },
            "Applicant.Reservation.GenderCode": {
                required: "Please choose your gender.",
            },
            "Applicant.PhysicalDetail.Height": {
                required: "Please enter your physical height in Centimeter.",
                //pattern: "Height should be in numeric format.",
                height: "Height should be of 3 digits and 2 decimals at max.",
                range: "Height should be between 150 to 200 Centimeters.",
                minlength: "Height should be minimum 2 digits.",
                maxlength: "Height should be of 2 digits and 2 decimals.",
            },
            "Applicant.ContactAddress.DoorNo": {
                required: "Please enter your address door no.",
                minlength: "Door No. should consists of atleast 1 character(s).",
                maxlength: "Door No. should not exceed 50 characters.",
            },
            "Applicant.ContactAddress.Street": {
                required: "Please enter your address street.",
                minlength: "Street should consists of atleast 2 characters.",
                maxlength: "Street should not exceed 50 characters.",
            },
            "Applicant.ContactAddress.Landmark": {
                required: "Please enter your address Landmark.",
                minlength: "Landmark should consists of atleast 2 characters.",
                maxlength: "Landmark should not exceed 60 characters.",
            },
            "Applicant.ContactAddress.Taluk": {
                required: "Please enter your Taluk.",
                minlength: "Taluk should consists of atleast 2 characters.",
                maxlength: "Taluk should not exceed 50 characters.",
            },
            "Applicant.ContactAddress.City": {
                required: "Please enter your City.",
                minlength: "City should consists of atleast 2 characters.",
                maxlength: "City should not exceed 50 characters"
            },
            "Applicant.ContactAddress.UnionStateCode": {
                required: "Please choose your address State.",
            },
            "Applicant.NativeDistrict": {
                required: "Choose your address district.",
                minlength: "Native District should consists of atleast 2 characters.",
                maxlength: "Native District should not exceed 60 characters",
            },
            "Applicant.ContactAddress.DistrictCode": {
                required: "Choose your address district.",
            },
            "Applicant.ContactAddress.OtherDistrictName": {
                required: "Please enter your address district name, which is not listed in the list.",
                minlength: "District Name should consists of atleast 3 characters.",
                maxlength: "District Name should not exceed 50 characters.",
                pattern: "District name should contain only Alphabets.",
            },
            "Applicant.ContactAddress.Pincode": {
                required: "Please enter your address pincode.",
                digits: "Pincode should consists of numbers.",
                minlength: "Pincode should consists of 6 characters.",
                maxlength: "Pincode should not exceed 6 characters.",
            },
            "Applicant.ContactAddress.IsPermanentAddressSame": {
                required: "Please choose your Permanent Address is same as Postal / Contact address.",
            },
            "Applicant.PermanentAddress.DoorNo": {
                required: "Please enter your permanent address door no.",
                minlength: "Door No. should consists atleast 1 character.",
                maxlength: "Door No. should not exceed 50 characters.",
            },
            "Applicant.PermanentAddress.Street": {
                required: "Please enter your permanent address street name.",
                minlength: "Street Name should consists of atleast 2 characters.",
                maxlength: "Street Name should not exceed 50 characters.",
            },
            "Applicant.PermanentAddress.Landmark": {
                required: "Please enter your permanent address Landmark.",
                minlength: "Landmark should consists of atleast 2 characters.",
                maxlength: "Landmark should not exceed 60 characters.",
            },
            "Applicant.PermanentAddress.Taluk": {
                required: "Please enter your permanent address Taluk.",
                minlength: "Taluk should consists of atleast 2 characters.",
                maxlength: "Taluk Name should not exceed 50 characters.",
            },
            "Applicant.PermanentAddress.City": {
                required: "Please enter your permanent address City.",
                minlength: "City should consists of atleast 2 characters.",
                maxlength: "City Name should not exceed 50 characters.",
            },
            "Applicant.PermanentAddress.UnionStateCode": {
                required: "Please choose your permanent address state.",
            },
            "Applicant.PermanentAddress.DistrictCode": {
                required: "Please choose your permanent address district.",
            },
            "Applicant.PermanentAddress.OtherDistrictName": {
                required: "Please enter your permanent address district name, which is not listed.",
                minlength: "District name should consists of atleast 3 characters.",
                maxlength: "District name should not exceed 50 characters.",
                pattern: "District name should contain only Alphabets.",
            },
            "Applicant.PermanentAddress.Pincode": {
                required: "Please enter your permanent address pincode.",
                digits: "Pincode should contain numbers.",
                minlength: "Pincode should consists of 6 characters.",
                maxlength: "Pincode shoult not exceed 6 characters.",
            },

            "Applicant.Reservation.CategoryCode": {
                required: "Please choose your Categories.",
            },
            "Applicant.Reservation.SubCaste": {
                required: "Please enter your sub-caste.",
                minlength: "subcaste should consists of 2 characters.",
                maxlength: "subcaste shoult not exceed 50 characters.",
                pattern: "subcaste includes only "-" as a special character",

            },
            "Applicant.Reservation.CategoryCertificateIssuedDate": {
                required: "Please enter / choose your Category Certificate issued date.",
            },
            "Applicant.Reservation.IsClaimingRuralReservation": {
                required: "Please choose your Rural reservation claiming status.",
            },
            "Applicant.Reservation.RuralCertificateIssuedDate": {
                required: "Please enter / choose your Rural Certificate issued date.",
            },

            "Applicant.Reservation.IsClaimingExServicemenReservation": {
                required: "Please choose your status.",
            },

            "Applicant.Reservation.ExService.ExServiceForceCode": {
                required: "Please choose your status.",
            },
            "Applicant.Reservation.ExService.DateOfJoining": {
                required: "Please choose your status.",
            },
            "Applicant.Reservation.ExService.NoCIssuedDate": {
                required: "Please enter / choose NOC issued date.",
            },

            "Applicant.Reservation.ExService.ExServiceForce.Code": {
                required: "Please choose the Force.",
            },

            "Applicant.Reservation.ExService.DischargeDate": {
                required: "Please choose date of Discharge.",
            },

            "Applicant.Reservation.ExService.YearsInService": {
                required: "Please enter your no. of years in service.",
                digits: "Exp. in Year's should be in numeric format.",
                maxlength: "Exp. in Year's should be 2 digits (max. 99 years).",
            },
            "Applicant.Reservation.ExService.MonthsInService": {
                required: "Please enter your no. of months in service.",
                digits: "Months should be in numeric format.",
            },
            "Applicant.Reservation.ExService.DaysInService": {  
                required: "Please enter your no. of days in service.",
            },

            "Applicant.Reservation.ExServiceRelation": {
                required: "Please choose your realated to exservicemen.",
            },

            "Applicant.Reservation.ExServiceRelation.ExServicemenRelationCode": {
                required: "Please choose your relationship with ex-servicemen.",
            },

            "Applicant.Reservation.IsClaimingPDPReservation": {
                required: "Please choose your PDP reservation claiming status.",
            },
            "Applicant.Reservation.PDPCertificateIssuedDate": {
                required: "Please enter / choose your PDP Certificate issued date.",
            },
            "Applicant.Reservation.IsClaimingKannadaMediumReservation": {
                required: "Please choose your Kannada Medium reservation claiming status.",
            },
            "Applicant.Reservation.KannadaMediumCertificateIssuedDate": {
                required: "Please enter / choose your Kannada Medium Certificate issued date.",
            },

            "Applicant.Reservation.IsClaimingTransgenderReservation": {
                required: "Please choose your Transgender reservation claiming status.",
            },
            "Applicant.Reservation.TransgenderCertificateIssuedDate": {
                required: "Please enter / choose your Transgender Certificate issued date.",
            },

            "Applicant.Reservation.IsClaimingKalyanaKarnatakaReservation": {
                required: "Please choose your claiming your KK Reservation status.",
            },
            "Applicant.Reservation.KalyanaKarnatakaDistrictCode": {
                required: "Please choose your claiming your KK Reservation District.",
            },

            "Applicant.Reservation.AreYouAGovermentEmployee": {
                required: "Please choose your an Govt. Employee ?",
            },
            "Applicant.Reservation.GovermentServiceDetail.JoiningDate": {
                required: "Please choose your an Govt. Employee ?",
            },
            "Applicant.Reservation.GovermentServiceDetail.Department": {
                required: "Please enter the Department name you serviced in Government.",
                minlength: "governmentservice should consists of 2 characters.",
                maxlength: "governmentservice shoult not exceed 50 characters.",
            },
            "Applicant.Reservation.GovermentServiceDetail.YearsInService": {
                required: "Please enter your no. of years in service.",
                digits: "Exp. in Year's should be in numeric format.",
                maxlength: "Exp. in Year's should be 2 digits (max. 99 years).",
            },
            "Applicant.Reservation.GovermentServiceDetail.MonthsInService": {
                required: "Please enter your no. of months in service.",
                digits: "Months should be in numeric format.",
            },
            "Applicant.Reservation.GovermentServiceDetail.DaysInService": {
                required: "Please enter your no. of days in service.",
            },
            "Applicant.Reservation.GovermentServiceDetail.NoCIssuedDate": {
                required: "Please enter the date.",
            },
            "Applicant.Reservation.GovermentServiceDetail.Designation": {
                required: "Please enter the date.",
                minlength: "Designation should consists of 2 characters.",
                maxlength: "Designation shoult not exceed 50 characters.",
            },

            "Applicant.CriminalActivity.IsInvolvedInCriminalActivity": {
                required: "Please choose your status for Involved in criminal activity.",
            },
            "Applicant.CriminalActivity.CaseDetail": {
                required: "Please enter the case details.",
                minlength: "Case details should consists of atleast 2 characters.",
                maxlength: "Case details should not exceed 350 characters.",
            },

            "Applicant.CriminalActivity.HasDepartmentEnquiry": {
                required: "Please choose your status for Involved in Departmental Enquiry",
            },
            "Applicant.CriminalActivity.DepartmentEnquiryDetail": {
                required: "Please enter the Department enquiry details.",
                minlength: "Department enquiry details should consists of atleast 2 characters.",
                maxlength: "Department enquiry details should not exceed 350 characters. ",
            },

            "Applicant.CriminalActivity.IsConvictedInCriminalCase": {
                required: "Please choose your status for Involved in criminal Case.",
            },
            "Applicant.CriminalActivity.ConvictionDetail": {
                required: "Please enter the convication details.",
                minlength: "Conviction details should consists of atleast 2 characters.",
                maxlength: "Conviction details should not exceed 350 characters.",
            },

            "Applicant.EducationalQualification.SSLCQualification.QualificationBoard.IsApplicableForSSLC": {
                required: "Please choose the status of you SSLC qualification.",
            },

            "Applicant.EducationalQualification.SSLCQualification.KannadaLanguagePaper": {
                required: "Please choose your studied kannada language.",
            },
            "Applicant.EducationalQualification.SSLCQualification.YearOfPassing": {
                required: "Please enter the year, on which you passed your SSLC Board exam.",
            },
            "Applicant.EducationalQualification.SSLCQualification.Score": {
                required: "Please choose your marks or grade.",
            },
            "Applicant.EducationalQualification.SSLCQualification.Score.Maximum": {
                required: "Please enter your maximum marks.",
                digits: "Maximum marks should be in numeric",
                minlength: "max marks should consists of atleast 1 characters.",
                maxlength: "max marks should not exceed 5 characters.",
            },
            "Applicant.EducationalQualification.SSLCQualification.Score.Obtained": {
                required: "Please enter your SSLC Obtained Marks.",
                digits: "Obtained Marks should be in numeric.",
                minlength: "obtained should consists of atleast 1 characters.",
                maxlength: "obatined marks should not exceed 5 characters.",
                obtainedMark: "Secured Marks should be less than maximum marks.",
            },
            "Applicant.EducationalQualification.SSLCQualification.Grade": {
                required: "Please enter your SSLC Grade.",
                minlength: "Grade Should be atleast of 1 character or integer.",
                maxlength: "Grade Should be maximum of 5 characters or integers.",
                //pattern: "Invalid Grade. Valid characters are a-z, space, and dot(.)."
            },
            "Applicant.EducationalQualification.SSLCQualification.ScoredPercentage": {
                required: "Please enter your SSLC Percentage.",
                number: "Percentage should be numeric.",
                maxlength: "Percentage should not exceed 4 digits and 2 decimals."
            },
            "Applicant.EducationalQualification.SSLCQualification.QualificationBoardCode": {
                required: "Please enter your SSLC board.",
            },
            "Applicant.EducationalQualification.SSLCQualification.OtherBoardName": {
                required: "Please enter your SSLC board.",
                minlength: "other board name Should be atleast of 2 character of integer.",
                maxlength: "other board name Should be maximum of 30 characters of integers.",
            },
            "Applicant.EducationalQualification.SSLCQualification.RegistrationNo": {
                required: "Please enter your SSLC RegistrationNo.",
                customRestriction: "Invalid characters. Please use only letters, numbers, and spaces.",
                minlength: "Registration  NO Should be atleast of 4 character of integer.",
                maxlength: "Registration  NO Should be maximum of 30 characters of integers.",
            },
            "Applicant.EducationalQualification.PUCQualification.QualificationBoard.IsApplicableForPUC": {
                required: "Please choose your an PUC Holder.",
            },
            "Applicant.EducationalQualification.PUCQualification.QualificationBoardCode": {
                required: "Please choose your PUC Board.",
            },
            "Applicant.EducationalQualification.PUCQualification.OtherBoardName": {
                required: "Please enter the other board name.",
                minlength: "other board name Should be atleast of 2 character of integer.",
                maxlength: "other board name Should be maximum of 30 characters of integers.",
            },
            "Applicant.EducationalQualification.PUCQualification.YearOfPassing": {
                required: "Please enter the year, on which you have passed your PUC Board Exams.",
            },
            "Applicant.EducationalQualification.PUCQualification.Score": {
                required: "Please choose Marks or grade.",
            },
            "Applicant.EducationalQualification.PUCQualification.Score.Maximum": {
                required: "Please enter your PUC Maximum Marks.",
                minlength: "Maximum marks Should be atleast of 1 character or integer.",
                maxlength: "Maximum marks   Should be maximum of 5 characters or integers.",
                digits: "Maximum marks should be in numeric",
            },
            "Applicant.EducationalQualification.PUCQualification.Score.Obtained": {
                required: "Please enter your PUC Obtained Marks.",
                minlength: "Obtained marks Should be atleast of 1 character of integer.",
                maxlength: "obtained marks   Should be maximum of 5 characters of integers.",
                digits: "Obtained marks should be in numeric",
                obtainedMark: "Secured Marks should be less than maximum marks.",
            },
            "Applicant.EducationalQualification.PUCQualification.Grade.Grade": {
                required: "Grade obtained is required.",
                minlength: "Grade Should be atleast of 1 character or integer.",
                maxlength: "Grade Should be maximum of 5 characters or integers.",
            },
            "Applicant.EducationalQualification.PUCQualification.ScorePercentage": {
                required: "Please enter your PUC Percentage.",
                number: "Percentage should be numeric.",
                maxlength: "Percentage should not exceed 4 digits and 2 decimals."
            },
            "Applicant.EducationalQualification.PUCQualification.RegistrationNo": {
                required: "Please enter your Qualification Certificate Register Number.",
                minlength: "Registration  NO Should be atleast of 4 character of integer.",
                maxlength: "Registration  NO Should be maximum of 30 characters of integers.",
                customRestriction: "Invalid characters. Please use only letters, numbers, and spaces.",
            },
            "Applicant.EducationalQualification.PUCQualification.IsBridgeCourseFromKSOU": {
                required: "Please choose your qualified course is Bridge Course from KSOU",
            },

            "Applicant.EducationalQualification.IsDegreeHolder": {
                required: "Please choose your a Degree Holder.",
            },
            "Applicant.EducationalQualification.DegreeQualification.RegistrationNo": {
                required: "Please enter your Degree's Registration No.",
                minlength: "Registration  NO Should be atleast of 4 character of integer.",
                maxlength: "Registration  NO Should be maximum of 30 characters of integers."
            },
            "Applicant.EducationalQualification.DegreeQualification.YearOfPassing": {
                required: "Please enter year, on which you have passed your degree examination.",
            },
            "Applicant.EducationalQualification.DegreeQualification.Score": {
                required: "Please enter year, on which you have passed your degree examination.",
            },
            "Applicant.EducationalQualification.DegreeQualification.Score.Maximum": {
                required: "Please enter maximum marks of your Degree Examinations.",
                digits: "Maximum Marks should be in numeric format.",
                minlength: "Maximum marks Should be atleast of 1 character or integer.",
                maxlength: "Maximum marks   Should be maximum of 5 characters or integers.",
            },
            "Applicant.EducationalQualification.DegreeQualification.Score.Obtained": {
                required: "Please enter your secured marks of Degree Examinations.",
                digits: "Degree Secured Marks should be in numeric format.",
                obtainedMark: "Secured Marks should be less than maximum marks.",
                minlength: "Obtained marks Should be atleast of 1 character of integer.",
                maxlength: "obtained marks   Should be maximum of 5 characters of integers."
           
            },
            "Applicant.EducationalQualification.DegreeQualification.Grade.Grade": {
                required: "Please enter your secured marks of Degree Examinations.",
                minlength: "Grade Should be atleast of 1 character or integer.",
                maxlength: "Grade Should be maximum of 5 characters or integers.",
            },
            "Applicant.EducationalQualification.DegreeQualification.ScorePercentage": {
                required: "Please enter your Degree Exam Percentage.",
                digits: "Please enter Percentage in numeric format.",
                maxlength: "Percentage should be in 000.00 format.",
                range: "Percentage should be between 1 to 100.",
                percentage: "Invalid Percentage, should not exceed 2 decimals.",
            },

            "Applicant.DateOfBirth": {
                required: "Please enter you date of birth.",
                //inddate: "Invalid date format, should be in dd/MM/yyyy format 2.",
                //maxDoBDate: "Invalid date, cannot exceed the date .",
                //minDoBDate: "Invalid date, cannot be less than date.",
            },

            "Applicant.Uploads.CardType": {
                required: "Please Select Document.",
            },
            "Applicant.UploadedIDNo": {
                required: "Please fill the ID Card No.",
                minlength: "ID No. must consists of 4 characters.",
                maxlength: "ID No. should exceed 50 characters.",
            }, 

            "Applicant.IdentificationMark_01": {
                required: "Please enter your identification mark.",
                minlength: "Identification Mark must consists of 3 characters.",
                maxlength: "Identification Mark cannot exceed 100 characters.",
            },
            "Applicant.IdentificationMark_02": {
                required: "Please enter your identification mark.",
                minlength: "Identification Mark must consists of 3 characters.",
                maxlength: "Identification Mark cannot exceed 100 characters.",
            },
            "Applicant.Uploads.IdentityCardPath": {
                required: "Please upload your scanned identity card with photograph.",
                extension: "Identity Card image file should be in png / jpg / jpeg / gif only.",
                fileSize: "Identity Card image file size should not exceed 250 kb.",
            },
            "Applicant.Uploads.SignaturePath": {
                required: "Please upload your scanned Signature.",
                extension: "Signature image file should be in png / jpg / jpeg / gif only.",
                fileSize: "Signtaure image file size should not exceed 250 kb.",
            },
            "Applicant.Uploads.ThumbImagePath": {
                required: "Please upload your scanned Thumb.",
                extension: "Thumb image file should be in png / jpg / jpeg / gif only.",
                fileSize: "Thumb image file size should not exceed 250 kb.",
            },
            "Applicant.Uploads.PhotoPath": {
                required: "Please upload your scanned Photo.",
                extension: "Photo image file should be in png / jpg / jpeg / gif only.",
                fileSize: "Photo image file size should not exceed 250 kb.",
            },

        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    // Move this part outside of the validate function
    $("#preview-btn").on("click", function () {
        $("#applicationForm").submit(); // Trigger the form submission when the button is clicked
    });
});

