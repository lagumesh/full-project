// *************** Flat Picker and Age Calculations ***************************** //

$(document).ready(function () {
    $('#applicationForm input[type="radio"]').prop('checked', false);
    $('#Applicant_DateOfBirth').val('');
    $('#Applicant_Reservation_CategoryCertificateIssuedDate').val('');

    $('#Applicant_Reservation_GovermentServiceDetail_JoiningDate').val('');
    $('#Applicant_Reservation_GovermentServiceDetail_NoCIssuedDate').val('');
    // Initialize Flatpickr datepicker
    flatpickr("#Applicant_DateOfBirth", {
        dateFormat: "d/m/Y",
        minDate: "04/07/1984",
        maxDate: "04/07/2006",
        defaultDate: null,
        allowInput: true,
        onClose: function (selectedDates, dateStr, instance) {
            calculateAge(dateStr);
        }
    });

    flatpickr("#Applicant_Reservation_CategoryCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_RuralCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_ExService_DateOfJoining", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_ExService_NoCIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_ExService_DischargeDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_PDPCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_KannadaMediumCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_TransgenderCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_GovermentServiceDetail_JoiningDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    flatpickr("#Applicant_Reservation_GovermentServiceDetail_NoCIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2018",
        maxDate: "01/12/2023",
        disableMobile: true,
        allowInput: true,
    });

    // Function to calculate age based on date of birth
    function calculateAge(dob) {
        // Convert the formatted date string back to the original "d/m/Y" format
        var selectedDate = dob.split(' ');
        var day = selectedDate[0];
        var month = selectedDate[1];
        var year = selectedDate[2];

        var monthNum = new Date(Date.parse(month + " 1, 2000")).getMonth() + 1;

        var dobString = day + '/' + monthNum + '/' + year;

        var parts = dobString.split('/');
        var dobDate = new Date(parts[2], parts[1] - 1, parts[0]);
        var today = new Date('2024-07-04');
        var age = today.getFullYear() - dobDate.getFullYear();
        var monthDiff = today.getMonth() - dobDate.getMonth();
        var dayDiff = today.getDate() - dobDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        var month = (monthDiff < 0) ? monthDiff + 12 : monthDiff;
        var day = (dayDiff < 0) ? dayDiff + 30 : dayDiff;

        var ageString = ''
        if (isNaN(age) || isNaN(month) || isNaN(day)) {
            ageString = "Select Valid Date";
        } else {
            ageString = age + ' years, ' + month + ' months and ' + day + ' days old.';
        }
        $('#ageof40').val(ageString);
    }
});



// Other Dist Hide and Show
$(document).ready(function () {
    // Hide the "Other" div initially
    $("#permanentAddressDiv input[type='text']").val("");
    $("#permanentAddressDiv textarea").val("");
    $("#permanentAddressDiv select").val("");
    $("#otherDistrict").hide();
    $("#modalotherDistrict").hide();


    // Show or hide the "Other" div based on district selection
    $("#Applicant_ContactAddress_DistrictCode").change(function () {
        if ($(this).val() === "OTR") {
            $("#otherDistrict").show();
            $("#modalotherDistrict").show();

        } else {
            $("#otherDistrict").hide();
            $("#modalotherDistrict").hide();
            // Clear the input field in the "Other" div
            $("#otherDistrict input[type='text']").val("");
        }
    });


    // Permanent Address Other Dist

    // Hide the "Other" div initially
    $("#permanentAddressotherdist").hide();
    $("#ModpermanentAddressotherdist").hide();

    // Show or hide the "Other" div based on district selection
    $("#Applicant_PermanentAddress_DistrictCode").change(function () {
        if ($(this).val() === "OTR") {
            $("#permanentAddressotherdist").show();
            $("#ModpermanentAddressotherdist").show();
        } else {
            $("#permanentAddressotherdist").hide();
            $("#ModpermanentAddressotherdist").hide();
            $("#permanentAddressotherdist input[type='text']").val("");
        }
    });

    // Permanent Address Same or No

    $("input[name='Applicant.ContactAddress.IsPermanentAddressSame']").change(function () {
        if ($(this).val() === "False") {
            $("#permanentAddressDiv").show();
            $("#ModalpermanentAddressDiv").show();

        } else {
            $("#permanentAddressDiv").hide();
            $("#ModalpermanentAddressDiv").hide();
            // Clear all the input fields in the "permanentAddressDiv"
            $("#permanentAddressDiv input[type='text']").val("");
            $("#permanentAddressDiv textarea").val("");
            $("#permanentAddressDiv select").val("");
        }
    });

    // Subcaste Hide and Show

    $('#subcastedate').hide();
    $('#Modalsubcastedate').hide();

    // Event handler for the category select element
    $('#Applicant_Reservation_CategoryCode').change(function () {
        var selectedCategory = $(this).val();

        // Check if the selected category is not "General"
        if (selectedCategory !== 'GM') {
            // Show the subcastedate div
            $('#subcastedate').show();
            $('#Modalsubcastedate').show();
        } else {
            // Hide the subcastedate div
            $('#subcastedate').hide();
            $('#Modalsubcastedate').hide();
            // Clear the input fields in the subcaste and doisubcaste divs
            $('#Applicant_Reservation_SubCaste').val("");
            $('#Applicant_Reservation_CategoryCertificateIssuedDate').val("");
        }
    });
});


// Government Dept

$(document).ready(function () {
    // Initially hide the date of issue field
    $('#pdpdate').hide();

    $('#kanmed').hide();

    $('#rural').hide();

    $('#kalyani').hide();
    $('#Modalkalyani').hide();

    $('#govtdate').hide();
    $('#govtdept').hide();
    $('#govtrendered').hide();

    $('#inServicewing').hide();
    $('#inServicerendered').hide();
    $('#inServicedate').hide();

    $('#criminalcases1').hide();

    $('#havedeptenq').hide();
    $('#modhavdeptenq').hide();
    $('#deptenq').hide();

    $('#criminalcases2').hide();

    $('#modelrural').hide();
    $('#modelpdpdate').hide();
    $('#modelkanmed').hide();
    $('#modelcriminalcases1').hide();
    $('#modeldeptenq').hide();
    $('#modelcriminalcases2').hide();

    $('#modelgovtdate').hide();
    $('#modelgovtdept').hide();
    $('#modelgovtrendered').hide();
    $('#modeldateofnoc').hide();
    $('#modeldesigovtdept').hide();
    $('#modeldataenquiry').hide();


    $('input[name="Applicant.Reservation.AreYouAGovermentEmployee"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'True') {
            // Show the date of issue field
            $('#havedeptenq').show();
            $('#modhavdeptenq').show();
            $('#govtdate').show();
            $('#modelgovtdate').show();
            $('#govtdept').show();
            $('#modelgovtdept').show();
            $('#govtrendered').show();
            $('#modelgovtrendered').show();
            $('#modeldateofnoc').show();
            $('#modeldesigovtdept').show();
            $('#modeldataenquiry').show();
        } else {
            // Hide the date of issue field
            $('#govtdate').hide();
            $('#modelgovtdate').hide();
            $('#govtdept').hide();
            $('#modelgovtdept').hide();
            $('#govtrendered').hide();
            $('#modelgovtrendered').hide();
            $('#modeldateofnoc').hide();
            $('#modeldesigovtdept').hide();
            $('#havedeptenq').hide();
            $('#modhavdeptenq').hide();
            $('#deptenq').hide();
            $("#havedeptenq input[type='radio']").prop('checked', false);
            $('#govtdate input[type="date"], #govtdept input,#govtrendered input,#deptenq textarea,#modhavdeptenq input').val('');

        }
    });


    $('input[name="Applicant.CriminalActivity.IsInvolvedInCriminalActivity"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'True') {
            // Show the date of issue field
            $('#criminalcases1').show();
            $('#modelcriminalcases1').show();

        } else {
            // Hide the date of issue field
            $('#criminalcases1').hide();
            $('#modelcriminalcases1').hide();
            $('#criminalcases1 textarea').val('');

        }
    });

    $('input[name="Applicant.CriminalActivity.HasDepartmentEnquiry"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'True') {
            // Show the date of issue field
            $('#deptenq').show();
            $('#modeldeptenq').show();

        } else if (selectedValue === 'False') {
            // Hide the date of issue field
            $('#deptenq').hide();
            $('#modeldeptenq').hide();
            $('#deptenq textarea').val('');
        }
    });

    $('input[name="Applicant.CriminalActivity.IsConvictedInCriminalCase"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'True') {
            // Show the date of issue field
            $('#criminalcases2').show();
            $('#modelcriminalcases2').show();

        } else {
            // Hide the date of issue field
            $('#criminalcases2').hide();
            $('#modelcriminalcases2').hide();
            $('#criminalcases2 textarea').val('');
        }
    });
});


// SSLC Hide and SHow

$(document).ready(function () {
    // Event handler for the passedsslc radio buttons
    $('#sslchide').hide()
    $('#sslchidemodal').hide()
    $('input[name="Applicant.EducationalQualification.IsSSLCHolder"]').change(function () {
       // $('#sslchide input').val('')
       // $('#sslchide select').val('')
        var selectedValue = $(this).val();

        // Check if "No" is selected
        if (selectedValue === 'False') {
            $('#sslchide').hide()
            $('#sslchidemodal').hide()
            // Show SweetAlert notification
            Swal.fire({
                title: "Not Eligible",
                text: "You are not eligible for this post.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            // $('#preview-btn').addClass('disabled'); // Add the 'disabled' class
            //$('.newapplicationv2').css({
            //    'background-color': 'red',
            //    'color': 'white'
            //});
        } else {
            $('#sslchide').show()
            $('#sslchidemodal').show()
            //  $('#preview-btn').removeClass('disabled'); // Remove the 'disabled' class
            //$('.newapplicationv2').css({
            //    'background-color': 'white',
            //    'color': 'black'
            //});
        }
    });
});


// Document Uploads Section


$(document).ready(function () {

    // ID Card Preview

    $('#Applicant_IdentityCard').change(IDImagePreview);
    function IDImagePreview() {
        //console.log('File input changed');
        if (this.files.length > 0) {
            // Get the source (URL) of the selected file and display it in an image element.
            let src = URL.createObjectURL(this.files[0]);
            //console.log('Image source:', src);
            $('#imgIdentityCard').attr('src', src).show();
            $('#modalIDCardPreview').attr('src', src).show();
        }
    }

    $('#IdUpload').click(function () {
        // Trigger the same logic as when the file input changes
        $('#Applicant_IdentityCard').click();
    });


    // Signature Preview

    $('#Applicant_Uploads_SignaturePath').change(SignImagePreview);

    function SignImagePreview() {
        //console.log('File input changed');
        if (this.files.length > 0) {
            // Get the source (URL) of the selected file and display it in an image element.
            let src = URL.createObjectURL(this.files[0]);
            //console.log('Image source:', src);
            $('#imgSignature').attr('src', src).show();
            $('#modalSignaturePreview').attr('src', src).show();
        }
    }

    $('#signUpload').click(function () {
        // Trigger the same logic as when the file input changes
        $('#Applicant_Uploads_SignaturePath').click();
    });


    //Thumb Image Preview

    $('#Applicant_Thumb').change(ThumbImagePreview);

    function ThumbImagePreview() {
        //console.log('File input changed');
        if (this.files.length > 0) {
            // Get the source (URL) of the selected file and display it in an image element.
            let src = URL.createObjectURL(this.files[0]);
            //console.log('Image source:', src);
            $('#imgThumb').attr('src', src).show();
            $('#modalThumbPreview').attr('src', src).show();
        }
    }

    $('#thumbUpload').click(function () {
        // Trigger the same logic as when the file input changes
        $('#Applicant_Thumb').click();
    });

    // Photo Image Preview
    $('#Applicant_Photo').change(PhotoImagePreview);

    function PhotoImagePreview() {
        //console.log('File input changed');
        if (this.files.length > 0) {
            // Get the source (URL) of the selected file and display it in an image element.
            let src = URL.createObjectURL(this.files[0]);
            //console.log('Image source:', src);
            $('#imgPhoto').attr('src', src).show();
            $('#modalIDPhotoPreview').attr('src', src).show();
        }
    }

    $('#photoUpload').click(function () {
        // Trigger the same logic as when the file input changes
        $('#Applicant_Photo').click();
    });
});


// PUC Qualification


$(document).ready(function () {

    $('#yoppuc, #markspuc, #gradeobtained, #pucPercentage, #puceducation, #manualpercentage').hide();

    // Event handler for the passed radio buttons
    $('input[name="Applicant.EducationalQualification.IsPUCHolder"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'True') {
            // Show the fields
            $('#yoppuc, #pucPercentage,#modpucreg, #puceducation').show();
            //  $('#preview-btn').addClass('disabled');

        } else {

            Swal.fire({
                title: "Not Eligible",
                text: "You are not eligible for this post.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            // Hide the fields
            $('#yoppuc, #markspuc, #gradeobtained, #pucPercentage,#modpucreg, #puceducation').hide();
            $('#yoppuc input[type="text"], #yoppuc select, #markspuc input[type="text"], #markspuc input[type="radio"], #gradeobtained input[type="text"], #pucPercentage input[type="text"]').val('');
            $("#puceducation #marksyespuc input[type='radio']").prop('checked', false);
            $('#puceducation, #Applicant_EducationalQualification_PUCQualification_Score').prop('checked', false);
        }
    });

    // Event handler for the marks radio buttons
    $('input[name="Applicant.EducationalQualification.PUCQualification.MarkType"]').change(function () {
        var selectedValue = $(this).val();
        $('#Applicant_EducationalQualification_PUCQualification_ScorePercentage').val('');
        // Check if "Marks" is selected
        if (selectedValue === 'M') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#markspuc').show();
            $('#modmarkspuc').show();
            // Hide the "Grade Obtained" field
            $('#gradeobtained').hide();
            $('#modpucgradeobtained').hide();
            $('#manualpercentage').hide();
            $('#modpucmanualpercentage').hide();
            $('#autopercentage').show();
            $('#modpucautopercentage').show();
            $('#gradeobtained input[type="text"]').val('');
            $('#manualpercentage input[type="text"]').val('');
            PUCGradePercentage()
            $('#Applicant_EducationalQualification_PUCQualification_ScorePercentage').attr('readonly', 'readonly');
        } else if (selectedValue === 'G') {
            // Show the "Grade Obtained" field
            $('#gradeobtained').show();
            $('#modpucgradeobtained').show();
            $('#autopercentage').hide();
            $('#modpucautopercentage').hide();
            $('#manualpercentage').show();
            $('#modpucmanualpercentage').show();
            $('#autopercentage input[type="text"]').val('');
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#markspuc').hide();
            $('#modmarkspuc').hide();
            $('#markspuc input[type="text"]').val('');
            $('#Applicant_EducationalQualification_PUCQualification_ScorePercentage').removeAttr('readonly');
        }
    });
});


// Function to calculate percentage
function calculatePercentage() {
    const maxMarks = parseFloat($('#Applicant_EducationalQualification_PUCQualification_Score_Maximum').val());
    const marksObtained = parseFloat($('#Applicant_EducationalQualification_PUCQualification_Score_Obtained').val());

    if (maxMarks && marksObtained) {
        const percentage = (marksObtained / maxMarks) * 100;
        if (percentage === 100) {
            $('#Applicant_EducationalQualification_PUCQualification_ScorePercentage').val('100');
        } else {
            $('#Applicant_EducationalQualification_PUCQualification_ScorePercentage').val(percentage.toFixed(2));
        }
    }
}

// Attach the event listener to the inputs
function PUCGradePercentage() {
    $('#Applicant_EducationalQualification_PUCQualification_Score_Maximum, #Applicant_EducationalQualification_PUCQualification_Score_Obtained').on('input', calculatePercentage);
}


// Function to calculate Degree percentage
function calculateDegreePercentage() {
    const maxMarksDegree = parseFloat($('#Applicant_EducationalQualification_DegreeQualification_Score_Maximum').val());
    const marksObtainedDegree = parseFloat($('#Applicant_EducationalQualification_DegreeQualification_Score_Obtained').val());

    if (maxMarksDegree && marksObtainedDegree) {
        const percentageDegree = (marksObtainedDegree / maxMarksDegree) * 100;
        $('#Applicant_EducationalQualification_DegreeQualification_Score_Obtained').val(percentageDegree.toFixed(1));
    }
}

// Attach the event listener to the inputs
$('#Applicant_EducationalQualification_DegreeQualification_Score_Maximum, #Applicant_EducationalQualification_DegreeQualification_Score_Obtained').on('input', calculateDegreePercentage);

$(document).ready(function () {
    $('input[name="Applicant.EducationalQualification.PUCQualification.MarkType"]').change(function () {
        var selectedVal = $(this).val();
        if (selectedVal === "M") {

        }
    })
})


// Degree Education and ApplicantStenoTypist and Typist Qualification hide and show

$(document).ready(function () {


    $('#deducation, #dmarks, #typist_marks, #dgradeobtained, #degpercentage, #degmanualpercentage, #steno_marks, #modmakshot, #modtypemarks').hide();

    // Event handler for the passed radio buttons
    $('input[name="Applicant.ApplicantTypistAssistant.IsPassedInQualifyExam"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'True') {
            // Show the fields
            $('#typist_marks').show();
            $('#modtypemarks').show();
        } else {
            // Hide the fields
            $('#typist_marks').hide();
            $('#modtypemarks').hide();
            $('#Applicant_ApplicantTypistAssistant_Maximum, #Applicant_ApplicantStenographerAssistant_QualificationCode, #Applicant_ApplicantTypistAssistant_Obtained, #Applicant_ApplicantTypistAssistant_QualifiedExam').val('');
        }
    });

    // Event handler for the marks radio buttons
    $('input[name="Applicant.ApplicantStenographerAssistant.IsPassedInQualifyExam"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Marks" is selected
        if (selectedValue === 'True') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#steno_marks').show();
            $('#modmakshot').show();
        } else {
            // Show the "Grade Obtained" field
            $('#steno_marks').hide();
            $('#modmakshot').hide();
            $('#Applicant.ApplicantStenographerAssistant.Maximum, #Applicant_ApplicantTypistAssistant_QualificationCode, #Applicant.ApplicantStenographerAssistant.Obtained, #Applicant_ApplicantStenographerAssistant_QualifiedExam').val('');
        }
    });
});


// SSLC Section, StenoTypist and Typist Hide and Show

$(document).ready(function () {


    $('#sslcgrade,#modsslcgrade,#modsslcgradeobtained, #sslcgradeobtained, #sslcautopercentage, #autosslcautopercentage, #sslcmanualpercentage, #modsslcmanualpercentage, #kannadatypist, #kannadashort, #typiststeno').hide();

    $('#Applicant_PostUnitCode').change(function () {
        var selectedVal = $(this).val();
        var category = $('#Applicant_Reservation_CategoryCode');
        $('#Applicant_ApplicantStenographerAssistant_Maximum, #Applicant_ApplicantStenographerAssistant_Obtained, #Applicant_ApplicantStenographerAssistant_QualifiedExam, #Applicant_ApplicantTypistAssistant_QualifiedExam, #Applicant_ApplicantStenographerAssistant_QualificationCode, #Applicant_ApplicantTypistAssistant_QualificationCode').val('')

        if (selectedVal === 'ST') {
            $('#typiststeno').show()
            $('#kannadatypist').show()
            $('#kannadashort').show()
            $('#steno_marks').hide()
            $('#typist_marks').hide()
            $('#Applicant_ApplicantTypistAssistant_IsPassedInQualifyExam').prop("checked", false);
            $('#Applicant_ApplicantStenographerAssistant_IsPassedInQualifyExam').prop("checked", false);
            $('#Applicant_ApplicantStenographerAssistant_Maximum, #Applicant_ApplicantStenographerAssistant_Obtained, #Applicant_ApplicantStenographerAssistant_QualifiedExam, #Applicant_ApplicantTypistAssistant_QualifiedExam, #Applicant_ApplicantStenographerAssistant_QualificationCode, #Applicant_ApplicantTypistAssistant_QualificationCode').val('')
            $('#Applicant_ApplicantTypistAssistant_Obtained, #Applicant_ApplicantTypistAssistant_Maximum').val('')
            $('#modtypist').show()
            $('#modkanty').show()
            $('.kanndaTypist-a').text('19c.')
            $('.kanndaTypist-b').text('19d.')
            $('.modalkanndaTypist-a').text('19c.')
            $('.modalkanndaTypist-b').text('19d.')
        } else if (selectedVal === 'TY') {
            $('#typiststeno').show()
            $('#kannadatypist').show()
            $('#kannadashort').hide()
            $('#steno_marks').hide()
            $('#typist_marks').hide()
            $('#Applicant_ApplicantTypistAssistant_IsPassedInQualifyExam').prop("checked", false);
            $('#Applicant_ApplicantStenographerAssistant_IsPassedInQualifyExam').prop("checked", false);
            $('#Applicant_ApplicantStenographerAssistant_Maximum, #Applicant_ApplicantStenographerAssistant_Obtained, #Applicant_ApplicantStenographerAssistant_QualifiedExam, #Applicant_ApplicantTypistAssistant_QualifiedExam').val('')
            $('#Applicant_ApplicantTypistAssistant_Obtained, #Applicant_ApplicantTypistAssistant_Maximum').val('')
            $('#modtypist').show()
            $('#modkanty').hide()
            $('#modmakshot').hide()
            $('.kanndaTypist-a').text('19a.')
            $('.kanndaTypist-b').text('19b.')
            $('.modalkanndaTypist-a').text('19a.')
            $('.modalkanndaTypist-b').text('19b.')
        } else {
            $('#typiststeno').hide()
            $('#kannadatypist').hide()
            $('#kannadashort').hide()
            $('#modtypist').hide()
            $('#modkanty').hide()
        }
    })

    $('input[name="Applicant.ApplicantStenographerAssistant.IsPassedInQualifyExam"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "No" is selected
        if (selectedValue === 'False') {
            // Show SweetAlert notification
            Swal.fire({
                title: "You are Not Eligibel",
                text: "Kannada Shorthand Qualification is Required..",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
        }
        return false
    })

    $('input[name="Applicant.ApplicantTypistAssistant.IsPassedInQualifyExam"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "No" is selected
        if (selectedValue === 'False') {

            // Show SweetAlert notification
            Swal.fire({
                title: "You are Not Eligibel",
                text: "Senior Typist Qualification is Required.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            }); 
        }
        return false
    })



    // Event handler for the marks radio buttons
    $('input[name="Applicant.EducationalQualification.SSLCQualification.MarkType"]').change(function () {
        var selectedValue = $(this).val();
       // alert(selectedValue)
        $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').val('');
        // Check if "Marks" is selected
        if (selectedValue === 'M') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#sslcgrade').show();
            $('#modsslcgrade').show();
            $('#sslcpercentage').show();
            $('#sslcmanualpercentage').hide();
            $('#modsslcmanualpercentage').hide();
            $('#sslcmanualpercentage input[type="text"]').val('');
            $('#sslcautopercentage').show();
            $('#autosslcautopercentage').show();
            // Hide the "Grade Obtained" field
            $('#sslcgradeobtained').hide();
            $('#modsslcgradeobtained').hide();
            $('#sslcgradeobtained input[type="text"]').val('');
            SSLCGradePercentage();
            $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').attr('readonly', 'readonly');
        } else if (selectedValue === 'G') {
            // Show the "Grade Obtained" field
            $('#sslcgradeobtained').show();
            $('#modsslcgradeobtained').show();
            $('#sslcmanualpercentage').show();
            $('#modsslcmanualpercentage').show();
            $('#sslcautopercentage').hide();
            $('#autosslcautopercentage').hide();
            // $('#sslcpercentage').hide();
            // $('#degautopercentage input[type="text"]').val('');
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#sslcgrade').hide();
            $('#modsslcgrade').hide();
            $('#sslcgrade input[type="text"]').val('');
            $('#sslcautopercentage input[type="text"]').val('');
            $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').removeAttr('readonly');
        }
    });
});

// Function to calculate SSLC percentage
function calculateSSLCPercentage() {
    const maxMarksSSLC = parseFloat($('#Applicant_EducationalQualification_SSLCQualification_Score_Maximum').val());
    const marksObtainedSSLC = parseFloat($('#Applicant_EducationalQualification_SSLCQualification_Score_Obtained').val());

    if (maxMarksSSLC && marksObtainedSSLC) {
        const percentageSSLC = (marksObtainedSSLC / maxMarksSSLC) * 100;
        if (percentageSSLC === 100) {
            $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').val('100');
        } else {
            $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').val(percentageSSLC.toFixed(2));
        }
    }
}

// Attach the event listener to the inputs
function SSLCGradePercentage() {
    $('#Applicant_EducationalQualification_SSLCQualification_Score_Maximum, #Applicant_EducationalQualification_SSLCQualification_Score_Obtained').on('input', calculateSSLCPercentage);
}






// ************************** Text Area Character couner ******************************** //

$(document).ready(function () {
    var maxCharacters = 350;
    var minCharacters = 5;

    $('#charCounter').text(maxCharacters + ' characters left');
    $('#charCounter2').text(maxCharacters + ' characters left');
    $('#charCounter3').text(maxCharacters + ' characters left');

    $('#Applicant_CriminalActivity_CaseDetail').on('input', function () {
        var remainingCharacters = maxCharacters - $(this).val().length;
        $('#charCounter').text(remainingCharacters + ' characters left');

        //if (remainingCharacters < minCharacters) {
        //    $('#charCounter').addClass('text-danger'); // Optional: Change text color when approaching the minimum limit
        //} else {
        //    $('#charCounter').removeClass('text-danger');
        //}
    });
    $('#Applicant_CriminalActivity_DepartmentEnquiryDetail').on('input', function () {
        var remainingCharacters = maxCharacters - $(this).val().length;
        $('#charCounter2').text(remainingCharacters + ' characters left');

        //if (remainingCharacters < minCharacters) {
        //    $('#charCounter2').addClass('text-danger'); // Optional: Change text color when approaching the minimum limit
        //} else {
        //    $('#charCounter2').removeClass('text-danger');
        //}
    });
    $('#Applicant_CriminalActivity_ConvictionDetail').on('input', function () {
        var remainingCharacters = maxCharacters - $(this).val().length;
        $('#charCounter3').text(remainingCharacters + ' characters left');

        //if (remainingCharacters < minCharacters) {
        //    $('#charCounter3').addClass('text-danger'); // Optional: Change text color when approaching the minimum limit
        //} else {
        //    $('#charCounter3').removeClass('text-danger');
        //}
    });
});


// Form Validation Error Allignment 

$(document).ready(function () {
    if ($(window).width() >= 768) {
        $('.form-group .col-sm-6').each(function () {
            var serialNumber = $(this).find('.mr-2').text().trim().replace('.', '');
            var isTwoDigitSerial = /^\d{2}$/.test(serialNumber) || /^\d{2}[a-zA-Z]$/.test(serialNumber);
            var isTwoDigitAlphaSerial = /^\d{2}[a-zA-Z]$/.test(serialNumber);

            if (isTwoDigitSerial) {
                $(this).find('input, select, input[type="date"], #applicationForm label.error').css('margin-left', '+=5px');
                $(this).find('input, select, input[type="date"], #applicationForm label.error').css('width', '-=5px');
                $(this).find('#applicationForm label.error').css('width', '-=25px');

                if (isTwoDigitAlphaSerial) {
                    // Fix: Added a comma after 'input[type="date"]'
                    $(this).find('input, select, input[type="date"]').css('margin-left', '+=10px');
                    $(this).find('input, select, input[type="date"]').css('width', '-=10px');
                    $(this).find('#applicationForm label.error').css('width', '-=25px');
                }
            }
        });
    }
});

$(document).ready(function () {
    $('#applicationForm').validate({
        errorPlacement: function (error, element) {
            // Check if the element is a radio input
            if (element.is(':radio')) {
                // Place the error after the radio group (form-group)
                error.insertAfter(element.closest('.form-group'));
            } else {
                // For other elements, use default placement
                error.insertAfter(element);
            }
        }
    });
});



// ************************* SSLC Other Borad ***************************** //


$(document).ready(function () {
    $('#sslcotherboard').hide();
    $('#sslcotherboardModal').hide();
    $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoardCode').change(function () {
        // Reset the disabled and checked properties for all options

        if ($(this).val() === 'OR') {
            $('#sslcotherboard').show();
            $('#sslcotherboardModal').show();
        }
        else {
            $('#sslcotherboard').hide();
            $('#sslcotherboardModal').hide();
        }
    });
});
$(document).ready(function () {
    $('#pucotherboard').hide();
    $('#Modalpucotherboard').hide();
    $('#Applicant_EducationalQualification_PUCQualification_QualificationBoardCode').change(function () {
        // Reset the disabled and checked properties for all options

        if ($(this).val() === 'OR') {
            $('#pucotherboard').show();
            $('#Modalpucotherboard').show();
        }
        else {
            $('#pucotherboard').hide();
            $('#Modalpucotherboard').hide();
        }
    });
});



// Year of passing
$(document).ready(function () {
    const startYear = 1980;
    const endYear = 2024;
    const select = $('#Applicant_EducationalQualification_SSLCQualification_YearOfPassing');
    const pucselect = $('#Applicant_EducationalQualification_PUCQualification_YearOfPassing');
    for (let year = startYear; year <= endYear; year++) {
        select.append(new Option(year, year));
        pucselect.append(new Option(year, year));
    }
});

// ID Card type

$(document).ready(function () {
    $('#Applicant_AadharNo').change(function () {
        var aadharNumber = $(this).val();
        var cardType = $('#Applicant_IdentityCardTypeCode').val();
        if (cardType === 'ADH') {
            $('#Applicant_UploadedIDNo').val(aadharNumber);
        }
    });

    $('#Applicant_IdentityCardTypeCode').change(function () {
        var cardType = $(this).val();
        if (cardType === 'ADH') {
            var aadharNumber = $('#Applicant_AadharNo').val();
            $('#Applicant_UploadedIDNo').attr('readonly', 'readonly');
            $('#Applicant_UploadedIDNo').val(aadharNumber);
        } else {
            $('#Applicant_UploadedIDNo').removeAttr('readonly');
            $('#Applicant_UploadedIDNo').val('');
        }
    });
});



