$(document).ready(function () {
    // Initialize datepicker
    $('.dtp').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
    });

    $(document).ready(function () {
        // Function to calculate age based on date of birth
        function parseDate(dob) {
            var parts = dob.split('/');
            return new Date(parts[2], parts[1] - 1, parts[0]);
        }

        // Function to calculate age based on date of birth
        function calculateAge(dob) {
            var today = new Date('2024-07-04');
            var birthDate = parseDate(dob);
            var age = today.getFullYear() - birthDate.getFullYear();
            var monthDiff = today.getMonth() - birthDate.getMonth();
            var dayDiff = today.getDate() - birthDate.getDate();

            // Adjust the age if the birthday hasn't occurred yet this year
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
                monthDiff += 12;
            }

            // Adjust the months and days if necessary
            if (dayDiff < 0) {
                var lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                dayDiff += lastMonth.getDate();
                monthDiff--;
            }

            return age + " years, " + monthDiff + " months, and " + dayDiff + " days old.";
        }

        // Display modal and calculate age on button click
        $('.age-btn').click(function () {
            // Show the modal
            $('#ageModal').modal('show');

            // Calculate age when "Calculate Age" button is clicked inside the modal
            $('.calculate-age').click(function () {
                var dob = $('#dob').val(); // Get the selected date of birth from the input field
                if (dob) {
                    var age = calculateAge(dob);
                    $('#ageResult').text('Your age is: ' + age); // Display the calculated age in the modal
                } else {
                    $('#ageResult').text('Please select a valid date of birth');
                }
            });
        });
    });
})
