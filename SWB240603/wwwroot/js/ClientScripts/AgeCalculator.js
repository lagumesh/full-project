

$(document).ready(function () {
    // Initialize datepicker
    $('.dtp').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
    });

    // Calculate age on button click
    $('.calculate-age').click(function () {
        var dob = $('#dob').datepicker('getDate');
        if (dob != null) {
            // Check if the selected date is at least 2 years back from today
            var today = new Date();
            var minDate = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
            if (dob < minDate) {
                var age = calculateAge(dob);
                $('#ageResult').text('Your age is: ' + age);
            } else {
                $('#ageResult').text('Please select a date of birth at least 2 years back from today');
            }
        } else {
            $('#ageResult').text('Please select a valid date of birth');
        }
    });


    // Function to calculate age based on date of birth
    // Function to calculate age based on date of birth
    function calculateAge(dob) {
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        var dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
            monthDiff += 12;
        }

        if (dayDiff < 0) {
            var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            dayDiff += lastMonth.getDate();
            monthDiff--;
        }

        return age + " years, " + monthDiff + " months, and " + dayDiff + " days old.";
    }

});
