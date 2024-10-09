$(document).ready(function () {

    //loading state and district
    $('#Applicant_PermanentAddress_UnionStateCode').change(function () {
        var stateCode = $(this).val();
        $('#Applicant_PermanentAddress_DistrictCode').empty();
        $('#Applicant_PermanentAddress_DistrictCode').append('<option value="">Select District</option>');
        if (stateCode) {
            $.ajax({
                url: '?handler=Districts&stateCode=' + stateCode,
                type: 'get',
                data: { stateCode: stateCode },
                success: function (data) {
                    $.each(data, function (index, district) {
                        $('#Applicant_PermanentAddress_DistrictCode').append('<option value="' + district.value + '">' + district.text + '</option>');
                    });
                    $('#Applicant_PermanentAddress_DistrictCode').append('<option value="OTR">Other</option>');
                },
                error: function (xhr, status, error) {
                    console.error("Error occurred while fetching districts:", status, error);
                }
            });
        }
    });
    // Districts as per state postal addresss


    $('#Applicant_ContactAddress_UnionStateCode').change(function () {
        var stateCode = $(this).val();
        $('#Applicant_ContactAddress_DistrictCode').empty().append('<option value="">Select District</option>');
        if (stateCode) {
            $.ajax({
                url: '?handler=Districts&stateCode=' + stateCode,
                type: 'get',
                data: { stateCode: stateCode },
                success: function (data) {
                    districts = data.map(function (district) { return district.text; });
                    $.each(data, function (index, district) {
                        $('#Applicant_ContactAddress_DistrictCode').append('<option value="' + district.value + '">' + district.text + '</option>');
                    });
                    $('#Applicant_ContactAddress_DistrictCode').append('<option value="OTR">Other</option>');
                },
                error: function (xhr, status, error) {
                    console.error("Error occurred while fetching districts:", status, error);
                }
            });
        } 
    });


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

    $.validator.addMethod("weight", function (value, element) {
        var regex = /^\d{2,3}(\.\d)?$/;
        if (regex.test(value)) {
            return true;
        }
        return false;
    }, "Invalid weight.");

    $.validator.addMethod("email_id", function (value, element) {
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return this.optional(element) || regex.test(value);
    }, "Please enter a valid email address.");


    $.validator.addMethod("gradesPattern", function (value, element) {
        return this.optional(element) || /^[a-zA-Z]$|^[a-zA-Z]\+$/.test(value);
    }, "Please enter a valid grade pattern (e.g., A or A+).");

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
        var nonZeroFound = false;

        params.forEach(function (fieldName) {
            var fieldValue = parseFloat($("#" + fieldName).val()) || 0; // Treat empty as 0
            console.log(fieldName + ": " + fieldValue); // Debug: log each value
            if (fieldValue !== 0) {
                nonZeroFound = true; // At least one non-zero value found
            }
        });

        return nonZeroFound; // Validation passes if at least one non-zero value exists
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

    $.validator.addMethod('minFileSize', function (value, element, param) {
        // param = size (in bytes)
        // element = element to validate (<input>)
        // value = value of the element (file name)
        return this.optional(element) || (element.files[0].size >= param);
    }, "The file is too small. Minimum size is 10KB.");

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
    //minlength
    $.validator.addMethod("minlength", function (value, element, minLength) {
        // Remove spaces from the value
        var trimmedValue = value.replace(/\s+/g, '');
        // Check if the length of the trimmed value is at least the specified minLength
        return trimmedValue.length >= minLength;
    }, "Please enter at least {0} characters excluding spaces.");


    $.validator.addMethod("customPattern", function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9 !@#$%^&*()_+=\-{}\[\]:;\"'<>,.?/~|\\]+$/.test(value);
    }, "Please enter a valid input without emojis.");


    $("#applicationForm").validate({
        rules: {
            "Applicant.ApplyingTypeCode": {
                required: true,
            },
            "Applicant.PostUnitCode": {
                required: true,
            },
            "Applicant.FullName": {
                required: true,
                minlength: 3,
                maxlength: 60,
                pattern: "^[a-zA-Z ]+$",
                //digits: false,
            },
            "Applicant.FatherName": {
                required: true,
                minlength: 3,
                maxlength: 60,
                pattern: "^[a-zA-Z ]+$",
            },
            "Applicant.MotherName": {
                required: true,
                minlength: 3,
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
                height: true,
                range: [150, 200],
                minlength: 3,
                maxlength: 6,
            },
            "Applicant.PhysicalDetail.Weight": {
                required: true,
                //digits: true,
                weight: true,
                // range: [50, 200],
                //minHeight: '#Applicant_Reservation_IsClaimingExServicemen*#Applicant_Reservation_CategoryCode *#Applicant_Gender',
                minlength: 1,
                maxlength: 5,
                //pattern: "^(167(\.\d{1,2})?|1[78]\d(\.\d{1,2})?|2[0-8]\d(\.\d{1,2})?|29[0-9](\.\d{1,2})?)$", 
            },
            "Applicant.ContactAddress.DoorNo": {
                required: true,
                minlength: 1,
                maxlength: 50,
                customPattern: true,
            },
            "Applicant.ContactAddress.Street": {
                required: true,
                minlength: 2,
                maxlength: 50,
                customPattern: true,
            },
            "Applicant.ContactAddress.Landmark": {
                required: true,
                minlength: 2,
                maxlength: 60,
                customPattern: true,
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
                pattern: "^[a-zA-Z ]+$",
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
                customPattern: true,
            },

            "Applicant.PermanentAddress.Street": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
                minlength: 2,
                maxlength: 50,
                customPattern: true,
            },
            "Applicant.PermanentAddress.Landmark": {
                required: function (element) {
                    return $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']:checked").val() === 'No';
                },
                minlength: 2,
                maxlength: 60,
                customPattern: true,
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
                required: true,
                minlength: 2,
                maxlength: 60,
                pattern: "^[a-zA-Z-]+$",
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
            "Applicant.Reservation.ExService.ExServiceEducationalQualificationCode": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'EXS';
                },
            },
            "Applicant.Reservation.ExService.IsAvaliedExServiceBenefit": {
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
                    return $('#Applicant_Reservation_IsClaimingExServicemenReservation').val() == 'Yes';
                },
                digits: true,
                maxlength: 2,
                range: [0, 50],
                nozero: ['Applicant_Reservation_ExService_MonthsInService', 'Applicant_Reservation_ExService_DaysInService', 'Applicant_Reservation_ExService_YearsInService'],
            },
            "Applicant.Reservation.ExService.MonthsInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingExServicemenReservation').val() == 'Yes';
                },
                digits: true,
                noofmonths: true,
                nozero: ['Applicant_Reservation_ExService_YearsInService', 'Applicant_Reservation_ExService_DaysInService', 'Applicant_Reservation_ExService_MonthsInService'],
            },
            "Applicant.Reservation.ExService.DaysInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingExServicemenReservation').val() == 'Yes';
                },
                digits: true,
                noofdays: true,
                nozero: ['Applicant_Reservation_ExService_YearsInService', 'Applicant_Reservation_ExService_MonthsInService', 'Applicant_Reservation_ExService_DaysInService'],
            },

            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            "Applicant.Reservation.IsClaimingExServicemenRelationReservation": {
                required: true,
            },

            "Applicant.Reservation.ExServiceFamily.IsDiedInService": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'DIR';
                },
            },
            "Applicant.Reservation.ExServiceFamily.IsDisabledInService": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'DIR';
                },
            },

            "Applicant.Reservation.ExServiceFamily.ExServicemenRelationCode": {
                required: function (element) {
                    return $('#Applicant_ApplyingTypeCode').val() == 'DIR';
                },
            },


            "Applicant.Reservation.ExServiceRelation": {
                required: true,
            },

            "Applicant.Reservation.ExServiceRelation.ExServicemenRelationCode": {
                required: function (element) {
                    return $('#Applicant_Reservation_ExServiceRelation').val() === 'Yes';
                },
            },


            ////////////////////////////////////////////////////////////////////////////////////////////

            "Applicant.Reservation.IsClaimingPDPReservation": {
                required: true,
            },
            "Applicant.Reservation.PDPCertificateIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClaimingPDPReservation').val() === 'Yes';
                },
            },

            "Applicant.Reservation.IsClamingKannadaMediumReservation": {
                required: true,
            },
            "Applicant.Reservation.KannadaMediumCertificateIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClamingKannadaMediumReservation').val() === 'Yes';
                },
            },

            "Applicant.Reservation.IsClamingTransgenderReservation": {
                required: true,
            },
            "Applicant.Reservation.TransgenderCertificateIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClamingTransgenderReservation').val() === 'Yes';
                },
            },

            "Applicant.Reservation.IsClamingKalyanaKarnatakaReservation": {
                required: true,
            },
            "Applicant.Reservation.KalyanaKarnatakaDistrictCode": {
                required: function (element) {
                    return $('#Applicant_Reservation_IsClamingKalyanaKarnatakaReservation').val() === 'No';
                },
            },

            "Applicant.Reservation.AreYouAGovermentEmployee": {
                required: true,
            },
            "Applicant.Reservation.GovermentServiceDetail.JoiningDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'Yes';
                },
            },
            "Applicant.Reservation.GovermentServiceDetail.Department": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'Yes';
                },
                minlength: 2,
                maxlength: 50,
            },
            "Applicant.Reservation.GovermentServiceDetail.YearsInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'Yes';
                },
                digits: true,
                maxlength: 2,
                range: [0, 50],
                nozero: ['Applicant_Reservation_GovermentServiceDetail_DaysInService', 'Applicant_Reservation_GovermentServiceDetail_MonthsInService', 'Applicant_Reservation_GovermentServiceDetail_YearsInService'],
            },
            "Applicant.Reservation.GovermentServiceDetail.MonthsInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'Yes';
                },
                digits: true,
                noofmonths: true,
                nozero: ['Applicant_Reservation_GovermentServiceDetail_DaysInService', 'Applicant_Reservation_GovermentServiceDetail_YearsInService', 'Applicant_Reservation_GovermentServiceDetail_MonthsInService'],
            },
            "Applicant.Reservation.GovermentServiceDetail.DaysInService": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'Yes';
                },
                digits: true,
                noofdays: true,
                nozero: ['Applicant_Reservation_GovermentServiceDetail_YearsInService', 'Applicant_Reservation_GovermentServiceDetail_MonthsInService','Applicant_Reservation_GovermentServiceDetail_DaysInService'],
            },
            "Applicant.Reservation.GovermentServiceDetail.NoCIssuedDate": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'Yes';
                },
            },
            "Applicant.Reservation.GovermentServiceDetail.Designation": {
                required: function (element) {
                    return $('#Applicant_Reservation_AreYouAGovermentEmployee').val() == 'Yes';
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
                maxlength: 500,
            },

            "Applicant.CriminalActivity.HasDepartmentEnquiry": {
                required: true,
            },
            "Applicant.CriminalActivity.DepartmentEnquiryDetail": {
                required: function (element) {
                    return $('#Applicant_CriminalActivity_HasDepartmentEnquiry').val() == 'yes';
                },
                minlength: 2,
                maxlength: 500,
            },

            "Applicant.CriminalActivity.IsConvictedInCriminalCase": {
                required: true,
            },
            "Applicant.CriminalActivity.ConvictionDetail": {
                required: function (element) {
                    return $('#Applicant_CriminalActivity_IsConvictedInCriminalCase').val() == 'yes';
                },
                minlength: 2,
                maxlength: 500,
            },

            "Applicant.EducationalQualification.IsSSLCHolder": {
                required: true,
                //mustequal: ["False"],
            },
            "Applicant.EducationalQualification.SSLCQualification.KannadaLanguagePaper": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsSSLCHolder').val() === 'Yes';
                },
            },
            "Applicant.EducationalQualification.SSLCQualification.YearOfPassing": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsSSLCHolder').val() === 'Yes';
                },
            },
            "Applicant.EducationalQualification.SSLCQualification.MarkType": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsSSLCHolder').val() === 'Yes';
                },
            },
            "Applicant.EducationalQualification.SSLCQualification.Score.Maximum": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_MarkType').val() === 'Yes';
                },
                minlength: 1,
                maxlength: 5,
                digits: true,
            },
            "Applicant.EducationalQualification.SSLCQualification.Score.Obtained": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_MarkType').val() === 'Yes';
                },
                minlength: 1,
                maxlength: 5,
                digits: true,
                obtainedMark: '#Applicant_EducationalQualification_SSLCQualification_Score_Maximum',
            },
            "Applicant.EducationalQualification.SSLCQualification.Grade": {
                required: function (element) {
                    return $("input[name='Applicant.EducationalQualification.SSLCQualification.MarkType']:checked").val() === 'No';
                },
                minlength: 1,
                maxlength: 5,
                gradesPattern: true,
            },
            "Applicant.EducationalQualification.SSLCQualification.ScoredPercentage": {
                required: function (element) {
                    return $("input[name='Applicant.EducationalQualification.SSLCQualification.MarkType']:checked").val() === 'No';
                },
                number: true,
                maxlength: 6,
                range: [1, 100],
            },
            "Applicant.EducationalQualification.SSLCQualification.QualificationBoardCode": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsSSLCHolder').val() === 'Yes';
                },

            },
            "Applicant.EducationalQualification.SSLCQualification.OtherBoardName": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoardCode').val() === 'OTR';
                },
                minlength: 2,
                maxlength: 30,
            },
            "Applicant.EducationalQualification.SSLCQualification.RegistrationNo": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsSSLCHolder').val() === 'Yes';
                },
                customRestriction: true,
                minlength: 4,
                maxlength: 30,
            },

            "Applicant.EducationalQualification.IsPUCHolder": {
                required: true,
            },
            "Applicant.EducationalQualification.PUCQualification.QualificationBoardCode": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoard_IsApplicableForPUC').val() === 'Yes';
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
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoard_IsApplicableForPUC').val() === 'Yes';
                },
            },
            "Applicant.EducationalQualification.PUCQualification.Score": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoard_IsApplicableForPUC').val() === 'Yes';
                },
            },
            "Applicant.EducationalQualification.PUCQualification.Score.Maximum": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_Score').val() === 'Yes';
                },
                digits: true,
                minlength: 1,
                maxlength: 5,
            },
            "Applicant.EducationalQualification.PUCQualification.Score.Obtained": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_SSLCQualification_Score').val() === 'Yes';
                },
                digits: true,
                minlength: 1,
                maxlength: 5,
                obtainedMark: '#Applicant_EducationalQualification_PUCQualification_Score_Maximum',
            },
            "Applicant.EducationalQualification.PUCQualification.Grade.Grade": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_Score').val() === 'No';
                },
                minlength: 1,
                maxlength: 5,
            },
            "Applicant.EducationalQualification.PUCQualification.ScorePercentage": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_PUCQualification_QualificationBoard_IsApplicableForPUC').val() === 'Yes';
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
                    return $('#Applicant_EducationalQualification_IsDegreeHolder').val() === 'Yes';
                },
                minlength: 4,
                maxlength: 30,
            },
            "Applicant.EducationalQualification.DegreeQualification.YearOfPassing": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsDegreeHolder').val() === 'Yes';
                },
            },
            "Applicant.EducationalQualification.DegreeQualification.Score": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_IsDegreeHolder').val() === 'Yes';
                },
            },
            "Applicant.EducationalQualification.DegreeQualification.Score.Maximum": {
                required: function (element) {
                    return $('#Applicant_EducationalQualification_DegreeQualification_Score').val() === 'Yes';
                },
                digits: true,
                minlength: 1,
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

            "Applicant.UploadedIdentityCardType": {
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
            "Applicant.Photo": {
                required: true,
                extension: "png|jpe?g|gif",
                fileSize: 400576,
                minFileSize: 10240,
            },
            "Applicant.Signature": {
                required: true,
                extension: "png|jpe?g|gif",
                fileSize: 150576,
                minFileSize: 10240,
            },
            "Applicant.Thumb": {
                required: true,
                extension: "png|jpe?g|gif",
                fileSize: 150576,
                minFileSize: 10240,
            },
            "Applicant.IdentityCard": {
                required: true,
                extension: "png|jpe?g|gif",
                fileSize: 400576,
                minFileSize: 10240,
            },
        },
        messages: {
            "Applicant.ApplyingTypeCode": {
                required: "Choose the Applying Type.",
            },
            "Applicant.PostUnitCode": {
                required: "Choose the Unit Name.",
            },
            "Applicant.FullName": {
                required: "Please enter your name.",
                minlength: "Your name must consist of at least 3 characters.",
                maxlength: "Your name cannot exceed 60 characters.",
                pattern: "Enter valid name"
                //pattern: "Invalid name. Valid characters are a-z, space, and dot(.)."
            },
            "Applicant.FatherName": {
                required: "Please enter your Father's name.",
                minlength: "Father's name must consist of at least 3 characters.",
                maxlength: "Father's name cannot exceed 60 characters.",
                pattern: "Enter valid name"
            },
            "Applicant.MotherName": {
                required: "Please enter your Mother's name.",
                minlength: "Mother's name must consist of at least 3 characters.",
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
                height: "Height should be of 3 digits and 1 decimals at max.",
                range: "Height should be between 150 to 200 Centimeters.",
                minlength: "Height should be minimum 2 digits.",
                maxlength: "Height should be of 2 digits and 2 decimals.",
            },
            "Applicant.PhysicalDetail.Weight": {
                required: "Please enter your physical weight in kg.",
                //pattern: "Height should be in numeric format.",
                weight: "Weight should be of 2-3 digits and 1 decimals at max.",
                // range: "Weight should be between 50 to 200 kg's.",
                minlength: "Weight should be minimum 2 digits.",
                maxlength: "Weight should be of 2 digits and 2 decimals.",
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
                required: "Please Enter Your Native District.",
                minlength: "Native District should consists of atleast 2 characters.",
                maxlength: "Native District should not exceed 60 characters",
                pattern: "Enter valid Native District"
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
                required: "Please choose whether the Permanent Address is same as Postal / Contact address.",
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
                required: "Please choose your Category.",
            },
            "Applicant.Reservation.SubCaste": {
                required: "Please enter your Sub-Caste.",
                minlength: "Subcaste should consists of 2 characters.",
                maxlength: "Subcaste should not exceed 60 characters.",
                pattern: 'Subcaste includes only "-" as a special character',

            },
            "Applicant.Reservation.CategoryCertificateIssuedDate": {
                required: "Please select your Category Certificate issued date.",
            },
            "Applicant.Reservation.IsClaimingRuralReservation": {
                required: "Please choose your Rural reservation claiming status.",
            },
            "Applicant.Reservation.RuralCertificateIssuedDate": {
                required: "Please  enter/choose your Rural Certificate issued date.",
            },

            "Applicant.Reservation.IsClaimingExServicemenReservation": {
                required: "Please choose your status.",
            },

            "Applicant.Reservation.ExService.ExServiceForceCode": {
                required: "Please choose your status.",
            },
            "Applicant.Reservation.ExService.ExServiceEducationalQualificationCode": {
                required: "Please choose educational Qualification.",
            },
            "Applicant.Reservation.ExService.IsAvaliedExServiceBenefit": {
                required: "Please choose ex-serviceman benefit.",
            },

            "Applicant.Reservation.ExService.ExServiceForce.Code": {
                required: "Please  enter/choose the Force.",
            },

            "Applicant.Reservation.ExService.DischargeDate": {
                required: "Please enter/choose date of Discharge.",
            },

            "Applicant.Reservation.ExService.YearsInService": {
                required: "Please  enter/choose your no. of years in service.",
                digits: "Exp. in Year's should be in numeric format.",
                maxlength: "Exp. in Year's should be 2 digits (max. 99 years).",
            },
            "Applicant.Reservation.ExService.MonthsInService": {
                required: "Please  enter/choose your no. of months in service.",
                digits: "Months should be in numeric format.",
            },
            "Applicant.Reservation.ExService.DaysInService": {
                required: "Please  enter/choose your no. of days in service.",
            },




            ////////////////////////////////////////////////////////
            "Applicant.Reservation.IsClaimingExServicemenRelationReservation": {
                required: "Please choose your status.",
            },

            "Applicant.Reservation.ExServiceFamily.IsDiedInService": {
                required: "Please choose your status.",
            },
            "Applicant.Reservation.ExServiceFamily.IsDisabledInService": {
                required: "Please select if permanentely disabled in service.",
            },

            "Applicant.Reservation.ExServiceFamily.ExServicemenRelationCode": {
                required: "Please select relationship with ex-serviceman.",
            },

            "Applicant.Reservation.ExServiceRelation": {
                required: "Please choose your realated to exservicemen.",
            },

            "Applicant.Reservation.ExServiceRelation.ExServicemenRelationCode": {
                required: "Please choose your relationship with ex-servicemen.",
            },
            /////////////////////////////////////////////////





            "Applicant.Reservation.IsClaimingPDPReservation": {
                required: "Please choose your PDP reservation claiming status.",
            },
            "Applicant.Reservation.PDPCertificateIssuedDate": {
                required: "Please  enter/choose your PDP Certificate issued date.",
            },
            "Applicant.Reservation.IsClamingKannadaMediumReservation": {
                required: "Please choose your Kannada Medium reservation claiming status.",
            },
            "Applicant.Reservation.KannadaMediumCertificateIssuedDate": {
                required: "Please select your Kannada Medium Certificate issued date.",
            },

            "Applicant.Reservation.IsClamingTransgenderReservation": {
                required: "Please choose whether you are claiming your Transgender Reservation status.",
            },
            "Applicant.Reservation.TransgenderCertificateIssuedDate": {
                required: "Please enter/choose your Transgender Certificate issued date.",
            },

            "Applicant.Reservation.IsClamingKalyanaKarnatakaReservation": {
                required: "This field is Required.",
            },
            "Applicant.Reservation.KalyanaKarnatakaDistrictCode": {
                required: "Please choose your KK Reservation District.",
            },

            "Applicant.Reservation.AreYouAGovermentEmployee": {
                required: "Please choose whether you are an Govt. Employee ?",
            },
            "Applicant.Reservation.GovermentServiceDetail.JoiningDate": {
                required: "Please choose your date of joining ?",
            },
            "Applicant.Reservation.GovermentServiceDetail.Department": {
                required: "Please enter the Department name you serviced in Government.",
                minlength: "governmentservice should consists of 2 characters.",
                maxlength: "governmentservice shoult not exceed 50 characters.",
            },
            "Applicant.Reservation.GovermentServiceDetail.YearsInService": {
                required: "Please enter/choose your no. of years in service.",
                digits: "Exp. in Year's should be in numeric format.",
                maxlength: "Exp. in Year's should be 2 digits (max. 99 years).",
            },
            "Applicant.Reservation.GovermentServiceDetail.MonthsInService": {
                required: "Please enter/choose your no. of months in service.",
                digits: "Months should be in numeric format.",
            },
            "Applicant.Reservation.GovermentServiceDetail.DaysInService": {
                required: "Please enter/choose your no. of days in service.",
            },
            "Applicant.Reservation.GovermentServiceDetail.NoCIssuedDate": {
                required: "Please enter/choose the date.",
            },
            "Applicant.Reservation.GovermentServiceDetail.Designation": {
                required: "Please enter the Designation.",
                minlength: "Designation should consists of 2 characters.",
                maxlength: "Designation shoult not exceed 50 characters.",
            },

            "Applicant.CriminalActivity.IsInvolvedInCriminalActivity": {
                required: "Please choose your status for Involved in criminal activity.",
            },
            "Applicant.CriminalActivity.CaseDetail": {
                required: "Please enter the case details.",
                minlength: "Case details should consists of atleast 2 characters.",
                maxlength: "Case details should not exceed 500 characters.",
            },

            "Applicant.CriminalActivity.HasDepartmentEnquiry": {
                required: "Please choose your status for Involved in Departmental Enquiry",
            },
            "Applicant.CriminalActivity.DepartmentEnquiryDetail": {
                required: "Please enter the Department enquiry details.",
                minlength: "Department enquiry details should consists of atleast 2 characters.",
                maxlength: "Department enquiry details should not exceed 500 characters. ",
            },

            "Applicant.CriminalActivity.IsConvictedInCriminalCase": {
                required: "Please choose your status for Involved in criminal Case.",
            },
            "Applicant.CriminalActivity.ConvictionDetail": {
                required: "Please enter the convication details.",
                minlength: "Conviction details should consists of atleast 2 characters.",
                maxlength: "Conviction details should not exceed 500 characters.",
            },

            "Applicant.EducationalQualification.IsSSLCHolder": {
                required: "Please choose the status of you SSLC qualification.",
            },

            "Applicant.EducationalQualification.SSLCQualification.KannadaLanguagePaper": {
                required: "Please choose your studied kannada language.",
            },
            "Applicant.EducationalQualification.SSLCQualification.YearOfPassing": {
                required: "Please choose the year, on which you passed your SSLC Board exam.",
            },
            "Applicant.EducationalQualification.SSLCQualification.MarkType": {
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
                required: "Please choose your SSLC board.",
            },
            "Applicant.EducationalQualification.SSLCQualification.OtherBoardName": {
                required: "Please choose your SSLC board.",
                minlength: "other board name Should be atleast of 2 character of integer.",
                maxlength: "other board name Should be maximum of 30 characters of integers.",
            },
            "Applicant.EducationalQualification.SSLCQualification.RegistrationNo": {
                required: "Please enter your SSLC RegistrationNo.",
                customRestriction: "Invalid characters. Please use only letters, numbers, and spaces.",
                minlength: "Registration  NO Should be atleast of 4 character of integer.",
                maxlength: "Registration  NO Should be maximum of 30 characters of integers.",
            },
            "Applicant.EducationalQualification.IsPUCHolder": {
                required: "Please choose whether you are an PUC Holder.",
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
                maxlength: "Grade Should be maximum of 5 characters or integers",
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
                required: "Please choose whether your qualified course is Bridge Course from KSOU",
            },

            "Applicant.EducationalQualification.IsDegreeHolder": {
                required: "Please choose whether you are a Degree Holder.",
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
                required: "Please  enter/choose your date of birth.",
                //inddate: "Invalid date format, should be in dd/MM/yyyy format 2.",
                //maxDoBDate: "Invalid date, cannot exceed the date .",
                //minDoBDate: "Invalid date, cannot be less than date.",
            },

            "Applicant.UploadedIdentityCardType": {
                required: "Please choose Document.",
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
            "Applicant.Photo": {
                required: "Please upload your scanned Photo",
                extension: "Identity Card image file should be in png / jpg / jpeg / gif only.",
                fileSize: "Photo image file size should not exceed 400 kb.",
            },
            "Applicant.Signature": {
                required: "Please upload your scanned Signature.",
                extension: "Signature image file should be in png / jpg / jpeg / gif only.",
                fileSize: "Signtaure image file size should not exceed 150 kb.",
            },
            "Applicant.Thumb": {
                required: "Please upload your scanned Thumb.",
                extension: "Thumb image file should be in png / jpg / jpeg / gif only.",
                fileSize: "Thumb image file size should not exceed 150 kb.",
            },
            "Applicant.IdentityCard": {
                required: "Please upload your scanned identity card with photograph.",
                extension: "Photo image file should be in png / jpg / jpeg / gif only.",
                fileSize: "Identity Card image file size should not exceed 400 kb.",
            },

        },
        //submitHandler: function (form) {
        // Handle the form submission, e.g., submit it via AJAX
        //form.submit();
        //}
    });

    $("#applicationForm").on("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission
        return false;
    });



    // Move this part outside of the validate function
    $("#form_sub").on("click", function () {
        //e.preventDefault(); 
        var form = $("#applicationForm");
        if (form.valid()) {
            alert('Form Submitted');
            form[0].submit(); // Submit the form if valid
            /* window.open('/Auth/MyApplication', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');*/
        } else {
            alert('Please fill all the details');
        }
        /* window.open('/Auth/MyApplication', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');*/
    });
});