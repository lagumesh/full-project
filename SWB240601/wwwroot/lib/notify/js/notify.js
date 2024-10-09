$(function () {
    if (TempData["ErrorMessage"] != null) {
        notyf.error('@TempData["ErrorMessage"]');
    }
    if (TempData["InfoMessage"] != null) {

        notyf.open({
            type: 'info',
            message: '@TempData["InfoMessage"]'
        });
    }
    if (TempData["SuccessMessage"] != null) {
        notyf.success('@TempData["SuccessMessage"]');
    }

    if (TempData["WarnMessage"] != null) {
        notyf.success('@TempData["WarnMessage"]');
    }
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
});
