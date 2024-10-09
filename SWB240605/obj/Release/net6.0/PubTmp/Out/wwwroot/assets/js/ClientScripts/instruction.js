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
})