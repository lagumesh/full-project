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


// *************************** NAV Disabler *************************** //

$(document).ready(function () {
    $('.site-navbar .site-navigation .site-menu>li>a').click(function () {
        // Remove the 'active' class from all navigation items
        $('.site-navbar .site-navigation .site-menu>li>a').removeClass('active');
        // Add the 'active' class to the clicked navigation item
        $(this).addClass('active');
    });
});


// ********************************************** Secure window for new application from instruction page ********************************//

$(document).ready(function () {
    $('.newapplication').on('click', function (e) {
        e.preventDefault();
        window.open('Application/Instructions', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
    });
    $('.applicationlogin').on('click', function (e) {
        e.preventDefault();
        window.open('/Auth/login', 'KSPCPC454', 'width=' + screen.availWidth + ',height=' + screen.availHeight + ',scrollbars=yes');
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


$('#dateOfBirth').datepicker({
    format: 'dd/mm/yyyy',
    todayHighlight: true,
    autoclose: true
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
        duration: 5000,
        dismissible: true,
        ripple: true,
        position: {
            x: 'right', y: 'top'
        },
        types: [
            {
                type: 'warning',
                background: 'orange',
                icon: {
                    className: 'fa fa-home',
                    tagName: 'i',
                    text: ''
                }
            },
            {
                type: 'info',
                background: 'blue',
                icon: {
                    className: 'material-icons',
                    tagName: 'i',
                    text: 'warning'
                }
            }
        ]
    });

    $('#login_submit').click(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        let username = $('#ApplicantModel_ApplicationNo').val();
        let password = $('#ApplicantModel_DateOfBirth').val();

        // Perform form validation
        if (username.length !== 7 || isNaN(username)) {
            // Display error notification for invalid username
            notyf.error('Invalid username. Please enter a 7-digit number');
            return;
        }

        // Extract the day, month, and year from the password
        let parts = password.split('/');
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]) - 1; // Months are zero-based (0-11)
        let year = parseInt(parts[2]);

        // Create a new date object using the parsed values
        let parsedDate = new Date(day, month, year);
        console.log(parsedDate)

        if (isNaN(parsedDate.getTime())) {
            // Display error notification for invalid date password
            notyf.error('Invalid password. Please enter a valid date');
            return;
        }

        // Format the date as yyyy-mm-dd for server-side compatibility
        let formattedDate = `${("0" + day).slice(-2)}/${("0" + (month + 1)).slice(-2)}/${year}`;
        console.log('Formatted Date:', formattedDate); // Debug
        $('#ApplicantModel_DateOfBirth').val(formattedDate);

        // Check if the conditions are met
        if (username.length === 7 && !isNaN(username) && isDesiredDate(parsedDate)) {
            // Display success notification
            notyf.success('Login successful');

            // Simulate form submission
            setTimeout(function () {
                // Submit the form via AJAX or standard form submission
                $('#login_form').submit();
            }, 1000);
        } else {
            // Display error notification for wrong credentials
            notyf.error('Wrong credentials');
        }
    });
});

function isDesiredDate() {
    return true;
}



//  ************************************** Cookie Banner *************************************** //

/* Javascript to show and hide cookie banner using localstorage */
/* Shows the Cookie banner */
function showCookieBanner() {
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "block";
}

/* Hides the Cookie banner and saves the value to localstorage */
function hideCookieBanner() {
    localStorage.setItem("cb_isCookieAccepted", "yes");
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "none";
}

/* Checks the localstorage and shows Cookie banner based on it. */
function initializeCookieBanner() {
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if (isCookieAccepted === null) {
        localStorage.setItem("cb_isCookieAccepted", "no");
        showCookieBanner();
    }
    if (isCookieAccepted === "no") {
        showCookieBanner();
    }
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_hideCookieBanner = hideCookieBanner;




