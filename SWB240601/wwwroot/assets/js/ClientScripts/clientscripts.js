window.onload = function () {
    window.scrollTo(0, 0);
};

function closeWindow() {
    window.close();
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });

}

window.addEventListener('beforeunload', function () {
    // Get all the nav links
    var navLinks = document.querySelectorAll('.site-navigation .main-menu .nav-link');

    // Remove the active class from each nav link
    navLinks.forEach(function (link) {
        link.classList.remove('active');
    });
});

// *********** Remove Selected OPtion ************ //


// *************************** NAV Disabler *************************** //

$(document).ready(function () {
    $('.site-navbar .site-navigation .site-menu>li>a').click(function () {
        // Remove the 'active' class from all navigation items
        $('.site-navbar .site-navigation .site-menu>li>a').removeClass('active');
        // Add the 'active' class to the clicked navigation item
        $(this).addClass('active');
    });
});





// *************** Age calculator in Home Page ***************************** //

$(document).ready(function () {
    // Initialize Flatpickr datepicker
    flatpickr("#Applicant_DateOfBirth", {
        dateFormat: "d/m/Y",
        minDate: "01/12/1950",
        maxDate: "01/12/2010",
        allowInput: true,
        onClose: function (selectedDates, dateStr, instance) {
            calculateAge(dateStr);
        }
    });

    flatpickr("#Applicant_Reservation_CategoryCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        //minDate: "01/12/2020",
       // maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_RuralCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_ExService_DateOfJoining", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_ExService_NoCIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_ExService_DischargeDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_PDPCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_KannadaMediumCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_TransgenderCertificateIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_GovermentServiceDetail_JoiningDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
    });

    flatpickr("#Applicant_Reservation_GovermentServiceDetail_NoCIssuedDate", {
        dateFormat: "d/m/Y",
        minDate: "01/12/2023",
        maxDate: "01/12/2023",
        allowInput: true,
        disableMobile: true
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
        var today = new Date();
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


// ************************************ Instruction page *******************************************//


$(document).ready(function () {

    $('#nextBtn').hide();

    $('#agreeCheckbox').change(function () {

        $('#divSubmit').hide();

        if ($('#agreeCheckbox').is(":checked")) {
            $('#nextBtn').show();
        } else {
            $('#nextBtn').hide();
        }

    })

})



// ********************************************** Secure window for new application from instruction page ********************************//



$(document).ready(function () {

    function showalert() {
        Swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success'
        }).then(function () {
            // Wait for 2 seconds before opening the new window
            setTimeout(function () {
                window.open('Applicationform.html', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
            }); // 2 seconds delay
        });
    }


    // pop after agreed in instruction page

    $('#nextBtn').click(function () {
        // Check if the "Agree" checkbox is checked
        if ($('#agreeCheckbox').is(':checked')) {
            window.open('NewApplication', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
            // Call the showalert() function
            // showalert();
        } else {
            Swal.fire({
                title: 'Please agree',
                text: 'Please agree to the terms and conditions.',
                icon: 'warning'
            });
        }
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

    $('.login-btn').click(function () {
        window.open('https://localhost:44366/auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });

});

$(document).ready(function () {
    $('.newapplication').on('click', function (e) {
        e.preventDefault();
        window.open('Application/Instructions', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });
    $('.applicationlogin').on('click', function (e) {
        e.preventDefault();
        window.open('Login/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });
});


// ******************************* Forgot Password Field validation ********************************//

$(document).ready(function () {
    var ahdar = $("#aadharNumber");
    var ahdarMsg = $("#aadharValid");

    function validAhdar() {
        if (/^\d{12}$/.test(ahdar.val()) && ahdar.val().length === 12) {
            ahdarMsg.html("");
        } else {
            ahdarMsg.html("* Input not valid");
        }
    }

    ahdar.on("input", validAhdar);
});


$(document).ready(function () {
    $("#dateOfBirth").datepicker();
});


// ********************************* Login form ************************************//

function showalert() {
    Swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success'
    });
}

$(document).ready(function () {
    let notyf = new Notyf({
        position: {
            x: 'right',
            y: 'top'
        },
        // Your configuration options here
    });

    $('#login-submit').click(function () {
        // Get the input values
        let username = $('#ApplicantLoginModel_ApplicationNo').val();
        let password = $('#ApplicantLoginModel_DateOfBirth').val();

        // Perform form validation
        if (username.length !== 7 || isNaN(username)) {
            // Display error notification for invalid username
            notyf.error('Invalid username. Please enter a 7-digit number');
            return;
        }

        // Validate password as a date in "dd-mm-yyyy" format
        let pattern = /^\d{2}-\d{2}-\d{4}$/;
        if (!pattern.test(password)) {
            // Display error notification for invalid date password format
            notyf.error('Invalid password format. Please enter a valid date in the dd-mm-yyyy format');
            return;
        }

        // Extract the day, month, and year from the password
        let parts = password.split('-');
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]) - 1; // Months are zero-based (0-11)
        let year = parseInt(parts[2]);

        // Create a new date object using the parsed values
        let parsedDate = new Date(year, month, day);

        if (isNaN(parsedDate.getTime())) {
            // Display error notification for invalid date password
            notyf.error('Invalid password. Please enter a valid date');
            return;
        }
        
        // Check if the conditions are met
        if (username.length === 7 && !isNaN(username) && isDesiredDate(parsedDate)) {
            // Display success notification
            showalert();
            notyf.success('Login successful');
            // Redirect to the desired page
            setTimeout(function () {
                window.location.href = '/Auth/MyApplication';
            }, 1000);
        } else {
            // Display error notification for wrong credentials
            notyf.error('Wrong credentials');
        }
    });
});

function isDesiredDate(date) {
    // Perform your desired date validation here
    // Example: Only allow dates after a specific year (e.g., 2000)
    return date.getFullYear() > 1950;
}




// ****************************************** newapplication ****************************************** //

//$(document).ready(function () {
//    $('#Applicant_ContactAddress_UnionStateCode').change(function () {
//        if ($(this).val() !== 'KA') {
//            $('#Applicant_ContactAddress_DistrictCode').val('OTR').prop('disabled', true);
//            $("#otherDistrict").show();
//            $("#modalotherDistrict").show();
//        } else {
//            $('#Applicant_ContactAddress_DistrictCode').val('').prop('disabled', false);
//            $("#otherDistrict").hide();
//            $("#Applicant_ContactAddress_OtherDistrictName").val('');
//            $("#modalotherDistrict").hide();
//        }
//    });
//});

$("#Applicant_ContactAddress_UnionStateCode").change(function () {
    $('#Applicant_PermanentAddress_DistrictName__Others').val('');
    $('#divPermAddrOtherDistrict').hide();

    var selectedStateCode = $("#Applicant_ContactAddress_UnionStateCode option:selected").val();
    var url = '?handler=Districts&unionStateCode=' + selectedStateCode;

    console.log("Selected value: " + selectedStateCode);
    console.log("Request URL: " + url);

    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'JSON',
        success: function (data) {
            console.log('Success! Received data:', data);
            // Display the received data (replace this with your actual logic)
            alert("Received data: " + JSON.stringify(data));
        },
      
    });
});


$(document).ready(function () {
    $('#exservicemensection').hide();
    $('#modalexservicemensection').hide();
    $('input[name="Applicant.Reservation.IsClaimingExServicemenReservation"]').change(function () {
        var selectedValue = $(this).val();

        if (selectedValue === 'Yes') {
            $('#exservicemensection').show();
            $('#modalexservicemensection').show();
        } else if (selectedValue === 'No') {
            $('#exservicemensection').hide();
            $('#modalexservicemensection').hide();
            $('#exservicemensection input[type="date"]').val("");
            $('#exservicemensection select').val("");
            $('#exservicemensection input[type="date"]').val("");
            $('#exservicemensection input[type="text"]').val("");
            $('#exservicemensection input[type="radio"]:checked').prop('checked', false);

            Swal.fire({
                title: "Not Eligible",
                text: "Ex- Servicemen is required.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
        } else {
            $('#exservicemensection').hide();
            $('#modalexservicemensection').hide();
            $('#exservicemensection input[type="date"]').val("");
            $('#exservicemensection select').val("");
            $('#exservicemensection input[type="date"]').val("");
            $('#exservicemensection input[type="text"]').val("");
            $('#exservicemensection input[type="radio"]:checked').prop('checked', false);

        }
    })
})


$(document).ready(function () {
    // Hide the "Other" div initially
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
});

//$(document).ready(function () {
//    $('#Applicant_PermanentAddress_UnionStateCode').change(function () {
//        if ($(this).val() !== 'KA') {
//            $('#Applicant_PermanentAddress_DistrictCode').val('OTR').prop('disabled', true);
//            $("#permanentAddressotherdist").show();
//        } else {
//            $('#Applicant_PermanentAddress_DistrictCode').val('').prop('disabled', false);
//            $("#permanentAddressotherdist").hide();
//        }
//    });
//});
$(document).ready(function () {
    // Hide the "Other" div initially
    $("#permanentAddressotherdist").hide();
    $("#modalpermanentotherdist").hide();


    // Show or hide the "Other" div based on district selection
    $("#Applicant_PermanentAddress_DistrictCode").change(function () {
        if ($(this).val() === "OTR") {
            $("#permanentAddressotherdist").show();
            $("#modalpermanentotherdist").show();
        } else {
            $("#permanentAddressotherdist").hide();
            $("#modalpermanentotherdist").hide();
            $("#permanentAddressotherdist input[type='text']").val("");
        }
    });
});

//   permanent address

$(document).ready(function () {
    // Toggle visibility of the "permanentAddressDiv" based on radio button selection
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
});



$(document).ready(function () {
    // Initially hide the subcastedate div
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




$(document).ready(function () {
    // Initially hide the div elements
    $('#exServicemendate').hide();
    $('#exServicemenService').hide();
    $('#exServicemendischarge').hide();
    $('#exServicemenrendered').hide();
    $('#exServicemenServing').hide();
    $('#ModalexServicemenServing').hide();
    $('#ModalexServicemendate').hide();
    $('#ModalexServicemenService').hide();
    $('#ModalexServicemenrendered').hide();

    // Event handler for the exServicemen radio buttons
    $('input[name="Applicant.Reservation.IsClaimingExServicemenReservation"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "yes" is selected
        if (selectedValue === 'Yes') {
            // Show the desired div elements
            $('#exServicemendate').show();
            $('#exServicemenService').show();
            // $('#exServicemendischarge').show();
            $('#exServicemenrendered').show();
            $('#exServicemenServing').show();

            $('#ModalexServicemenServing').show();
            $('#ModalexServicemendate').show();
            $('#ModalexServicemenService').show();
            $('#ModalexServicemenrendered').show();
        } else {
            // Hide the div elements
            $('#exServicemendate').hide();
            $('#exServicemenService').hide();
            $('#exServicemendischarge').hide();
            $('#exServicemenrendered').hide();
            $('#exServicemenServing').hide();

            // Clear the input fields in the div elements
            $('#exServicemendate input[type="date"]').val("");
            $('#exServicemenService select').val("");
            $('#exServicemendischarge input[type="date"]').val("");
            $('#exServicemenrendered input[type="text"]').val("");


            $('#ModalexServicemenServing').hide();
            $('#ModalexServicemendate').hide();
            $('#ModalexServicemenService').hide();
            $('#ModalexServicemenrendered').hide();
        }
    });

    $('input[name="Applicant.Reservation.ExService.ExServiceForceCode"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "yes" is selected
        if (selectedValue === 'No') {
            // Show the desired div elements
            // $('#exServicemendate').show();
            // $('#exServicemenService').show();
            $('#exServicemendischarge').show();
            // $('#exServicemenrendered').show();
            // $('#exServicemenServing').show();
        } else {
            // Hide the div elements
            // $('#exServicemendate').hide();
            // $('#exServicemenService').hide();
            $('#exServicemendischarge').hide();
            // $('#exServicemenrendered').hide();
            // $('#exServicemenServing').hide();

            // Clear the input fields in the div elements
            // $('#exServicemendate input[type="date"]').val("");
            // $('#exServicemenService select').val("");
            $('#exServicemendischarge input[type="date"]').val("");
            // $('#exServicemenrendered input[type="text"]').val("");
        }
    });
});



$(document).ready(function () {
    // Initially hide the div elements
    $('#dateOfNOCarm').hide();
    $('#dateOfDischargearm').hide();
    $('#ServiceRenderedarm').hide();
    $('#yearsOfServicearm').hide();
    $('#armid').hide();
    $('#armid2').hide();

    // Event handler for the armServicemen radio buttons
    $('input[name="presentlyServing"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
            // Show the desired div elements
            $('#dateOfNOCarm').show();
            $('#dateOfDischargearm').show();
            $('#ServiceRenderedarm').show();
            $('#yearsOfServicearm').show();
            $('#armid').show();
            $('#armid2').show();
        } else {
            // Hide the div elements
            $('#dateOfNOCarm').hide();
            $('#dateOfDischargearm').hide();
            $('#ServiceRenderedarm').hide();
            $('#yearsOfServicearm').hide();
            $('#armid').hide();
            $('#armid2').hide();

            // Clear the input fields in the div elements
            $('#dateOfNOCarm input[type="date"]').val("");
            $('#dateOfDischargearm input[type="date"]').val("");
            $('#ServiceRenderedarm select').val("");
            $('#yearsOfServicearm input[type="text"]').val("");
            $('#armid input[type="text"]').val("");
            $('#armid2 input[type="text"]').val("");
        }
    });
});

$(document).ready(function () {
    $('#physicallyChallengeddate').hide();
    $('input[name="physicallyChallenged"]').change(function () {
        if ($(this).val() === 'yes') {
            $('#physicallyChallengeddate').show();
            // $('#physicallyChallengeddate input').prop('required', true);
        } else {
            $('#physicallyChallengeddate').hide();
            $('#physicallyChallengeddate input[type="date"]').val("")
        }
    });
});




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


    // Event handler for the pdpreservation radio buttons
    $('input[name="Applicant.Reservation.IsClaimingPDPReservation"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
            // Show the date of issue field
            $('#pdpdate').show();
            $('#modelpdpdate').show();
            
        } else {
            // Hide the date of issue field
            $('#pdpdate').hide();
            $('#modelpdpdate').hide();
            $('#pdpdate input[type="date"]').val('');
        }
    });

    $('input[name="Applicant.Reservation.IsClamingKannadaMediumReservation"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'True') {
            // Show the date of issue field
            $('#kanmed').show();
            $('#modelkanmed').show();
        } else {
            // Hide the date of issue field
            $('#kanmed').hide();
            $('#modelkanmed').hide();
            $('#kanmed input[type="date"]').val('');
        }
    });

    $('input[name="Applicant.Reservation.IsClaimingRuralReservation"]').change(function () {
        var selectedValue = $(this).val();

        if (selectedValue === 'Yes') {
            $('#rural').show();
            $('#modelrural').show();
        } else {
            $('#rural').hide();
            $('#modelrural').hide();
            $('#rural input[type="date"]').val(''); // Clear the date input value when hiding
        }
    });


    $('input[name="Applicant.Reservation.IsClamingKalyanaKarnatakaReservation"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'No') {
            // Show the date of issue field
            $('#kalyani').show();
            $('#Modalkalyani').show();
        } else {
            // Hide the date of issue field
            $('#kalyani').hide();
            $('#Modalkalyani').hide();
            $('#kalyani select').val("");
        }
    });

    $('input[name="Applicant.Reservation.AreYouAGovermentEmployee"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
            // Show the date of issue field
            $('#govtdate').show();
            $('#modelgovtdate').show();
            $('#govtdept').show();
            $('#modelgovtdept').show();
            $('#govtrendered').show();
            $('#modelgovtrendered').show();
            $('#modeldateofnoc').show();
            $('#modeldesigovtdept').show();
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
            $('#govtdate input[type="date"], #govtdept input,#govtrendered input ').val('');

        }
    });

    $('input[name="inServicecandidate"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
            // Show the date of issue field
            $('#inServicewing').show();
            $('#inServicerendered').show();
            $('#inServicedate').show();
        } else {
            // Hide the date of issue field
            $('#inServicewing').hide();
            $('#inServicerendered').hide();
            $('#inServicedate').hide();
            // Clear the values of the input fields within inServicewing, inServicerendered, and inServicedate
            $('#inServicewing select').val('');
            $('#inServicerendered input').val('');
            $('#inServicejoiningdate').val('');
        }
    });


    $('input[name="Applicant.CriminalActivity.IsInvolvedInCriminalActivity"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
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
        if (selectedValue === 'Yes') {
            // Show the date of issue field
            $('#deptenq').show();
            $('#modeldeptenq').show();

        } else {
            // Hide the date of issue field
            $('#deptenq').hide();
            $('#modeldeptenq').hide();
            $('#deptenq textarea').val('');
        }
    });

    $('input[name="Applicant.CriminalActivity.IsConvictedInCriminalCase"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
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


$(document).ready(function () {
    // Event handler for the passedsslc radio buttons
    $('#sslc_section').hide()
    $('#modalsslc_section').hide()
    $('input[name="Applicant.EducationalQualification.IsSSLCHolder"]').change(function () {
        $('#Applicant_EducationalQualification_SSLCQualification_KannadaLanguagePaper').val('')
        $('#Applicant_EducationalQualification_SSLCQualification_QualificationBoardCode').val('')
        $('#Applicant_EducationalQualification_SSLCQualification_YearOfPassing').val('')
        $('#Applicant_EducationalQualification_SSLCQualification_RegistrationNo').val('')
   

        var selectedValue = $(this).val();
       
        // Check if "No" is selected
        if (selectedValue === 'No') {
            // Show SweetAlert notification
            Swal.fire({
                title: "Not Eligible",
                text: "You are not eligible for this post.",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            });
            $('#preview-btn').addClass('disabled'); // Add the 'disabled' class
            $('#sslc_section').hide();
            $('#modalsslc_section').hide()
            //$('.newapplicationv2').css({
            //    'background-color': 'red',
            //    'color': 'white'
            //});
        } else {
            $('#preview-btn').removeClass('disabled'); // Remove the 'disabled' class
            $('#sslc_section').show();
            $('#modalsslc_section').show()
            //$('.newapplicationv2').css({
            //    'background-color': 'white',
            //    'color': 'black'
            //});
        }
    });
});
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

    $('#Applicant_Signature').change(SignImagePreview);

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
        $('#Applicant_Signature').click();
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







$(document).ready(function () {
    $('#yoppuc, #markspuc, #gradeobtained, #pucPercentage, #puceducation, #manualpercentage').hide();

    // Event handler for the passed radio buttons
    $('input[name="Applicant.EducationalQualification.PUCQualification.QualificationBoard.IsApplicableForPUC"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
            // Show the fields
            $('#yoppuc, #pucPercentage, #puceducation').show();
        } else {
            // Hide the fields
            $('#yoppuc, #markspuc, #gradeobtained, #pucPercentage, #puceducation').hide();
            $('#yoppuc input[type="text"], #yoppuc select, #markspuc input[type="text"], #markspuc input[type="radio"], #gradeobtained input[type="text"], #pucPercentage input[type="text"]').val('');
            $('#puceducation #marksyespuc').prop('checked', false);
            $('#puceducation #marksnopuc').prop('checked', false);
        }
    });

    // Event handler for the marks radio buttons
    $('input[name="Applicant.EducationalQualification.PUCQualification.Score"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Marks" is selected
        if (selectedValue === 'Yes') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#markspuc').show();
            // Hide the "Grade Obtained" field
            $('#gradeobtained').hide();
            $('#manualpercentage').hide();
            $('#autopercentage').show();
            $('#gradeobtained input[type="text"]').val('');
            $('#manualpercentage input[type="text"]').val('');
        } else if (selectedValue === 'no') {
            // Show the "Grade Obtained" field
            $('#gradeobtained').show();
            $('#autopercentage').hide();
            $('#manualpercentage').show();
            $('#autopercentage input[type="text"]').val('');
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#markspuc').hide();
            $('#markspuc input[type="text"]').val('');
        }
    });
});





$(document).ready(function () {

    $('#bridgecource').hide();
    // Event handler for the ksoubridgecourse radio buttons
    $('input[name="Applicant.EducationalQualification.PUCQualification.IsBridgeCourseFromKSOU"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
            // Show the div with id "bridgecource"
            $('#bridgecource').show();
        } else {
            // Hide the entire div including the question and inputs
            $('#bridgecource').hide();
            $('#bridgecource input').val('');
            // $('#bridgecourcehead').hide();
        }
    });
});

// Function to calculate percentage
function calculatePercentage() {
    const maxMarks = parseFloat($('#Applicant_EducationalQualification_PUCQualification_Score_Maximum').val());
    const marksObtained = parseFloat($('#Applicant_EducationalQualification_PUCQualification_Score_Obtained').val());

    if (maxMarks && marksObtained) {
        const percentage = (marksObtained / maxMarks) * 100;
        $('#Applicant_EducationalQualification_PUCQualification_ScorePercentage').val(percentage.toFixed(2));
    }
}

// Attach the event listener to the inputs
$('#Applicant_EducationalQualification_PUCQualification_Score_Maximum, #Applicant_EducationalQualification_PUCQualification_Score_Obtained').on('input', calculatePercentage);

// Function to calculate Degree percentage
function calculateDegreePercentage() {
    const maxMarksDegree = parseFloat($('#Applicant_EducationalQualification_DegreeQualification_Score_Maximum').val());
    const marksObtainedDegree = parseFloat($('#Applicant_EducationalQualification_DegreeQualification_Score_Obtained').val());

    if (maxMarksDegree && marksObtainedDegree) {
        const percentageDegree = (marksObtainedDegree / maxMarksDegree) * 100;
        $('#Applicant_EducationalQualification_DegreeQualification_Score_Obtained').val(percentageDegree.toFixed(2));
    }
}

// Attach the event listener to the inputs
$('#Applicant_EducationalQualification_DegreeQualification_Score_Maximum, #Applicant_EducationalQualification_DegreeQualification_Score_Obtained').on('input', calculateDegreePercentage);



$(document).ready(function () {


    $('#deducation, #dmarks, #dgrade, #dgradeobtained, #degpercentage, #degmanualpercentage').hide();

    // Event handler for the passed radio buttons
    $('input[name="Applicant.EducationalQualification.IsDegreeHolder"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Yes" is selected
        if (selectedValue === 'Yes') {
            // Show the fields
            $('#deducation, #dmarks, #degpercentage').show();
        } else {
            // Hide the fields
            $('#deducation, #dmarks, #dgrade, #dgradeobtained, #degpercentage').hide();
            $('#deducation input[type="text"], #deducation select, #dmarks, #dgrade input[type="text"], #dgradeobtained input[type="text"], #degpercentage input[type="text"]').val('');
            $('#dmarks #degmarksyes1').prop('checked', false);
            $('#dmarks #degmarksno1').prop('checked', false);
        }
    });

    // Event handler for the marks radio buttons
    $('input[name="Applicant.EducationalQualification.DegreeQualification.Score"]').change(function () {
        var selectedValue = $(this).val();

        // Check if "Marks" is selected
        if (selectedValue === 'Yes') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#dgrade').show();
            $('#degautopercentage').show();
            $('#degmanualpercentage').hide();
            $('#degmanualpercentage input[type="text"]').val('');
            // Hide the "Grade Obtained" field
            $('#dgradeobtained').hide();
            $('#dgradeobtained input[type="text"]').val('');
        } else if (selectedValue === 'no') {
            // Show the "Grade Obtained" field
            $('#dgradeobtained').show();
            $('#degmanualpercentage').show();
            $('#degautopercentage').hide();
            $('#degautopercentage input[type="text"]').val('');
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#dgrade').hide();
            $('#dgrade input[type="text"]').val('');
        }
    });
});

// Attach the event listener to the inputs
$('#maxMarks, #marksObtained').on('input', calculatePercentage);

// Function to calculate Degree percentage
function calculateDegreePercentage() {
    const maxMarksDegree = parseFloat($('#Applicant_EducationalQualification_DegreeQualification_Score_Maximum').val());
    const marksObtainedDegree = parseFloat($('#Applicant_EducationalQualification_DegreeQualification_Score_Obtained').val());

    if (maxMarksDegree && marksObtainedDegree) {
        const percentageDegree = (marksObtainedDegree / maxMarksDegree) * 100;
        $('#Applicant_EducationalQualification_DegreeQualification_ScorePercentage').val(percentageDegree.toFixed(2));
    }
}

// Attach the event listener to the inputs
$('#degmarks, #degmarksobtained').on('input', calculateDegreePercentage);




$(document).ready(function () {


    $('#sslcgrade, #sslcgradeobtained, #sslcautopercentage, #sslcmanualpercentage').hide();
    $('#modalsslcgrade,#modalsslcgradeobtained,#modalsslcautopercentage,#modalsslcmanualpercentage').hide();

    // Event handler for the marks radio buttons
    $('input[name="Applicant.EducationalQualification.SSLCQualification.MarkType"]').change(function () {
        var selectedValue = $(this).val();
        $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').val('');
        // Check if "Marks" is selected
        if (selectedValue === 'Yes') {
            // Show the "Max Marks" and "Marks Obtained" fields
            $('#sslcgrade').show();
            $('#modalsslcgrade').show();
            $('#sslcpercentage').show();
            $('#modalsslcpercentage').show();
            $('#sslcmanualpercentage').hide();
            $('#modalsslcmanualpercentage').hide();
            $('#sslcmanualpercentage input[type="text"]').val('');
            $('#sslcautopercentage').show();
            $('#modalsslcautopercentage').show();
            // Hide the "Grade Obtained" field
            $('#sslcgradeobtained').hide();
            $('#modalsslcgradeobtained').hide();
            $('#sslcgradeobtained input[type="text"]').val('');
            SSLCGradePercentage();
            $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').attr('readonly', 'readonly');
        } else if (selectedValue === 'No') {
            // Show the "Grade Obtained" field
            $('#sslcgradeobtained').show();
            $('#modalsslcgradeobtained').show();
            $('#sslcmanualpercentage').show();
            $('#modalsslcmanualpercentage').show();
            $('#sslcautopercentage').hide();
            $('#modalsslcautopercentage').hide();
            // $('#sslcpercentage').hide();
            // $('#degautopercentage input[type="text"]').val('');
            // Hide the "Max Marks" and "Marks Obtained" fields
            $('#sslcgrade').hide();
            $('#modalsslcgrade').hide();
            $('#sslcgrade input[type="text"]').val('');
            $('#sslcautopercentage input[type="text"]').val('');
            $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').removeAttr('readonly');
        }
    });
});

$(document).ready(function () {
    function calculateSSLCPercentage() {
        const maxMarksSSLC = parseFloat($('#Applicant_EducationalQualification_SSLCQualification_Score_Maximum').val());
        const marksObtainedSSLC = parseFloat($('#Applicant_EducationalQualification_SSLCQualification_Score_Obtained').val());

        if (maxMarksSSLC && marksObtainedSSLC) {
            const percentageSSLC = (marksObtainedSSLC / maxMarksSSLC) * 100;
            $('#Applicant_EducationalQualification_SSLCQualification_ScoredPercentage').val(percentageSSLC.toFixed(2));
        }
    }

    $('#Applicant_EducationalQualification_SSLCQualification_Score_Maximum').on('input', function () {
        calculateSSLCPercentage();
    });

    $('#Applicant_EducationalQualification_SSLCQualification_Score_Obtained').on('input', function () {
        calculateSSLCPercentage();
    });
});


// Attach the event listener to the inputs




$(document).ready(function () {
    // Hide the second group initially
    $(".group-2").hide();
    $(".group-2b").hide();

    // Event handler for radio button change
    $("input[name='Applicant.Reservation.IsClaimingExServicemenRelationReservation']").change(function () {
        if ($(this).val() === "Yes") {
            $(".group-2").show();
            $(".group-2b").show();
        } else {
            $(".group-2").hide();
            $(".group-2b").hide();
            $('.group-2e').hide();
            // Clear the values of the input fields within group-2
            // $(".group-2 input[type='text']").val("");
            $(".group-2 input[type='radio']").prop("checked", false);
            $('.group-2e select').val("");
        }
    });
});


$(document).ready(function () {
    $('input[name="Applicant.Reservation.ExServiceRelation.IsDiedInService"]').change(function () {
        if ($(this).val() === 'Yes') {
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDisabledInService"][value="No"]').prop('checked', true).prop('disabled', true);
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDisabledInService"][value="Yes"]').prop('checked', false).prop('disabled', true);
        } else {
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDisabledInService"]').prop('disabled', false);
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDisabledInService"][value="Yes"]').prop('checked', true).prop('disabled', true);
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDisabledInService"][value="No"]').prop('checked', false).prop('disabled', true);
        }
    });

    $('input[name="Applicant.Reservation.ExServiceRelation.IsDisabledInService"]').change(function () {
        if ($(this).val() === 'Yes') {
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDiedInService"][value="No"]').prop('checked', true).prop('disabled', true);
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDiedInService"][value="Yes"]').prop('checked', false).prop('disabled', true);
        } else {
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDiedInService"]').prop('disabled', false);
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDiedInService"][value="Yes"]').prop('checked', true).prop('disabled', true);
            $('input[name="Applicant.Reservation.ExServiceRelation.IsDiedInService"][value="No"]').prop('checked', false).prop('disabled', true);
        }
    });
});


$(document).ready(function () {
    $('input[name="Applicant.Reservation.IsClamingTransgenderReservation"]').on('change', function () {
        var selectedValue = $(this).val();
        if (selectedValue === 'Yes') {
            $('#transdate').show();
            $('#modaltransdate').show();
        } else {
            $('#transdate').hide();
            $('#modaltransdate').hide();
            $('#transdate input[type="date"]').val('');
        }
    });
});



$(document).ready(function () {
    // Initially hide sections
    $('#exservicemanss').hide();
    $('#modalexservicemanss').hide();
    $('#Permanentlyexserviceman').hide();
    $('#modalPermanentlyexserviceman').hide();

    // Handle change event for Applicant_ApplyingTypeCode dropdown
    $('#Applicant_ApplyingTypeCode').change(function () {
        // Reset the disabled and checked properties for all options
        $('#inService-no, #inService-yes, input[name="Applicant.Reservation.IsClaimingExServicemenReservation"][value="No"], input[name="Applicant.Reservation.IsClaimingExServicemenReservation"][value="Yes"]').prop('disabled', false).prop('checked', false);
        $('input[name="Applicant.Reservation.ExServiceRelation"][value="No"], input[name="Applicant.Reservation.ExServiceRelation"][value="Yes"]').prop('disabled', false).prop('checked', false);

        // Handle the case when the value is 'DIR'
        if ($(this).val() === 'DIR') {
            $('#inService-section').show();
            $('#exservice-section').show();
            $('#exServicemendate').hide();
            $('#exServicemenService').hide();
            $('#exServicemendischarge').hide();
            $('#exServicemenrendered').hide();
            $('#exServicemenServing').hide();
            $('#inService-no').prop('checked', true).prop('disabled', true);
            $('#inServicewing').hide();
            $('#inServicerendered').hide();
            $('#inServicedate').hide();
            $('#exservicemanss').hide();
            $('#modalexservicemanss').hide();
            $('#exservicemensection').hide();
            $('#modalexservicemensection').hide();
            $('#Permanentlyexserviceman').show();
            $('#modalPermanentlyexserviceman').show();
            $('#ModalexServicemenServing').hide();
            $('#ModalexServicemendate').hide();
            $('#ModalexServicemenService').hide();
            $('#ModalexServicemenrendered').hide();

            // Handle the case when the value is 'EXS'
        } else if ($(this).val() === 'EXS') {
            $('#inService-section').show();
            $('#exservice-section').show();
            $('#exServicemenServing').show();
            $('#exServicemendate').show();
            $('#exServicemenService').show();
            $('#exServicemenrendered').show();
            $('#inService-no').prop('checked', true).prop('disabled', true);
            $('#inService-yes').prop('checked', false).prop('disabled', true);
            $('#exservicemanss').show();
            $('#Permanentlyexserviceman').hide();
            $('#modalPermanentlyexserviceman').hide();
            $('#modalexservicemanss').show();
            $('#modalexservicemensection').show();
            $('#modalexservicemensection').hide();
            $('#ModalexServicemenServing').show();
            $('#ModalexServicemendate').show();
            $('#ModalexServicemenService').show();
            $('#ModalexServicemenrendered').show();

            // Automatically select "Yes" for the Ex-Servicemen question
            $('input[name="Applicant.Reservation.IsClaimingExServicemenReservation"][value="Yes"]').prop('checked', true);
            $('#exservicemensection').show(); // Show the Ex-Servicemen section
            $('#modalexservicemensection').show(); // Show the Ex-Servicemen section
        } else {
            // Hide all sections for other values
            $('#inService-section').hide();
            $('#exservice-section').hide();
        }
    });
});



$(document).ready(function () {
    $('#Applicant_Reservation_GenderCode').on('change', function () {
        var selectedValue = $(this).val();
        if (selectedValue === 'M') {
            $('input[name="Applicant.Reservation.IsClamingTransgenderReservation"][value="yes"]').prop('checked', false).prop('disabled', true);
            $('input[name="Applicant.Reservation.IsClamingTransgenderReservation"][value="no"]').prop('checked', true).prop('disabled', true);
            $('#transdate').hide();
            $('#transdate input[type="date"]').val('');
        } else if (selectedValue === 'F') {
            $('input[name="Applicant.Reservation.IsClamingTransgenderReservation"][value="yes"]').prop('checked', false).prop('disabled', true);
            $('input[name="Applicant.Reservation.IsClamingTransgenderReservation"][value="no"]').prop('checked', true).prop('disabled', true);
            $('#transdate').hide();
            $('#transdate input[type="date"]').val('');
        } else {
            $('input[name="Applicant.Reservation.IsClamingTransgenderReservation"][value="yes"]').prop('checked', false).prop('disabled', false);
            $('input[name="Applicant.Reservation.IsClamingTransgenderReservation"][value="no"]').prop('checked', false).prop('disabled', false);
        }
    });
});

// ************************** Text Area Character couner ******************************** //

$(document).ready(function () {
    var maxCharacters = 500;
    var minCharacters = 2;

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



/*$(document).ready(function () {
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
});*/

//$(document).ready(function () {
//    $('#applicationForm').validate({
//        errorPlacement: function (error, element) {
//            // Check if the element is a radio input
//            if (element.is(':radio')) {
//                // Place the error after the radio group (form-group)
//                error.insertAfter(element.closest('.form-group'));
//            } else {
//                // For other elements, use default placement
//                error.insertAfter(element);
//            }
//        }
//    });
//});




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


$(document).ready(function () {
    $('#weightField').hide();
    $('#heightField').hide();
    $('#modalweightField').hide();
    $('#modalheightField').hide();

    $('#Applicant_Reservation_GenderCode').change(function () {
        var selectedGender = $('#Applicant_Reservation_GenderCode').val();

        if (selectedGender === "M") {
            $('#heightLabelNumber').text('8a.');
            $('#modalheightLabelNumber').text('8a.');
            $('#heightField').show();
            $('#modalheightField').show();
            $('#weightField').hide();
            $('#modalweightField').hide();
            $('#weightField input').val('');
        } else if (selectedGender === "MT") {
            $('#heightLabelNumber').text('8a.');
            $('#modalheightLabelNumber').text('8a.');
            $('#weightLabelNumber').text('8b.');
            $('#modalweightLabelNumber').text('8b.');
            $('#weightField').show();
            $('#modalweightField').show();
            $('#heightField').show();
            $('#modalheightField').show();
            $('#heightField input').val('');
        } else if (selectedGender === "F") {
            $('#weightLabelNumber').text('8a.');
            $('#modalweightLabelNumber').text('8a.');
            $('#weightField').show();
            $('#modalweightField').show();
            $('#heightField').hide();
            $('#modalheightField').hide();
            $('#heightField input').val('');
        }
    });
});






// ************************* Adhar No Format ************************** //

function formatAadharNumber(input) {
    // Remove any non-digit characters
    const rawValue = input.value.replace(/\D/g, '');

    // Add spaces every 4 digits
    const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, '$1 - ');

    // Update the input value with the formatted Aadhar number
    input.value = formattedValue;
}
//applicant full name restriction

// ID Card type

$(document).ready(function () {
    $('#Applicant_UploadedIdentityCardType').change(function () {
        var aadharNumber = $(this).val();
        var cardType = $('#Applicant_UploadedIdentityCardType').val();
        if (cardType === 'AD') {
            $('#Applicant_UploadedIDNo').val(aadharNumber);
        }
    });

    $('#Applicant_UploadedIdentityCardType').change(function () {
        var cardType = $(this).val();
        if (cardType === 'AD') {
            var aadharNumber = $('#Applicant_AadharNo').val();
            $('#Applicant_UploadedIDNo').attr('readonly', 'readonly');
            $('#Applicant_UploadedIDNo').val(aadharNumber);
        } else {
            $('#Applicant_UploadedIDNo').removeAttr('readonly');
            $('#Applicant_UploadedIDNo').val('');
        }
    });
});