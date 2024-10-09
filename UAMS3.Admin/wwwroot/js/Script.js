// Function to get the current date and time in the format "dd-mm-yyyy hh:mm:ss"
function getCurrentDateTime() {
    const currentDateTime = new Date();
    const day = String(currentDateTime.getDate()).padStart(2, "0");
    const month = String(currentDateTime.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = currentDateTime.getFullYear();
    const hours = String(currentDateTime.getHours()).padStart(2, "0");
    const minutes = String(currentDateTime.getMinutes()).padStart(2, "0");
    const seconds = String(currentDateTime.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

// Function to update the placeholders with the current date, time, and IP address
function updateFooter() {
    document.getElementById("datePlaceholder").textContent = getCurrentDateTime();

    getIPAddress(function (ip) {
        document.getElementById("ipPlaceholder").textContent = ip;
    });
}
// Call updateFooter once to start the process
updateFooter();


// Get the IP address of the user
function getIPAddress(callback) {
    fetch("https://api64.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
            callback(data.ip);
        })
        .catch((error) => {
            console.error("Error fetching IP address:", error);
        });
}

// Update the footer when the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateFooter();
});

/*BACK BUTTON*/

document.addEventListener("DOMContentLoaded", function () {
    var backButton = document.querySelector(".back-btn");
    console.log("Button:", backButton);
    backButton.addEventListener("click", function () {
        console.log("Button clicked");
        window.history.back();
    });
});

/*APPLY EXAM TABLE*/

document.addEventListener("DOMContentLoaded", function () {
    // Get the table body where selected subjects will be displayed
    var selectedSubjectsTableBody = document.getElementById("selectedSubjectsTable");

    // Get the checkbox in the table head to select/deselect all checkboxes in the first table
    var selectAllCheckboxHeader = document.getElementById("selectAllCheckboxHeader");

    // Get all checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            updateSelectedSubjectsTable();
        });
    });    

    // Add event listener to the "Select All" checkbox in the table head
    if (selectAllCheckboxHeader) {
        selectAllCheckboxHeader.addEventListener("change", function () {
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = selectAllCheckboxHeader.checked;
            });

            updateSelectedSubjectsTable();
        });
    }

    function updateSelectedSubjectsTable() {
        // Clear the table before updating
        selectedSubjectsTableBody.innerHTML = "";

        // Initialize total amount
        var totalAmount = 0;

        // Filter checked checkboxes
        var selectedCheckboxes = Array.from(checkboxes).filter(function (checkbox) {
            return checkbox.checked;
        });

        // Display selected subjects in the table
        selectedCheckboxes.forEach(function (checkbox) {
            // Check if the parent node is a table row (to exclude the table head)
            if (checkbox.parentNode.tagName.toLowerCase() === "td") {
                var subjectName = checkbox.parentNode.nextElementSibling.textContent;
                var amount = parseFloat(checkbox.parentNode.nextElementSibling.nextElementSibling.textContent);

                totalAmount += amount;

                var row = document.createElement("tr");
                var subjectCell = document.createElement("td");
                var amountCell = document.createElement("td");

                subjectCell.textContent = subjectName;
                amountCell.textContent = amount.toFixed(2); // Display amount with 2 decimal places

                row.appendChild(subjectCell);
                row.appendChild(amountCell);

                selectedSubjectsTableBody.appendChild(row);
            }
        });

        // Display total amount row only if checkboxes are selected
        if (selectedCheckboxes.length > 0) {
            var totalRow = document.createElement("tr");
            var totalLabelCell = document.createElement("td");
            var totalAmountCell = document.createElement("td");

            totalLabelCell.textContent = "Total Amount";
            totalAmountCell.textContent = totalAmount.toFixed(2); // Display total amount with 2 decimal places

            totalRow.appendChild(totalLabelCell);
            totalRow.appendChild(totalAmountCell);

            selectedSubjectsTableBody.appendChild(totalRow);
        }
    }
});

//ADD BATCHES PAGE

// ADMISSION GENERAL TAB TABLE
document.getElementById("addButton").addEventListener("click", function () {
    var department = document.getElementById("department").value;
    var programme = document.getElementById("programme").value;
    var status = document.getElementById("status").value;

    if (department && programme && status) {
        var tableBody = document.getElementById("tableBody");

        var newRow = document.createElement("tr");
        var departmentCell = document.createElement("td");
        var programmeCell = document.createElement("td");
        var statusCell = document.createElement("td");

        departmentCell.textContent = department;
        programmeCell.textContent = programme;
        statusCell.textContent = status;

        newRow.appendChild(departmentCell);
        newRow.appendChild(programmeCell);
        newRow.appendChild(statusCell);

        tableBody.appendChild(newRow);

        // Clear select options
        document.getElementById("department").selectedIndex = 0;
        document.getElementById("programme").selectedIndex = 0;
        document.getElementById("status").selectedIndex = 0;
    } else {
        alert("Please select all options");
    }
});

document.getElementById("cancelButton").addEventListener("click", function () {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
});

// EXAMINATION GENERAL TAB TABLE

function setupForm(buttonId, clearButtonId, departmentId, programmeId, statusId, tableBodyId, tableHeadersId) {
    document.getElementById(buttonId).addEventListener("click", function () {
        var department = document.getElementById(departmentId).value;
        var programme = document.getElementById(programmeId).value;
        var status = document.getElementById(statusId).value;

        if (department && programme && status) {
            var tableBody = document.getElementById(tableBodyId);

            var newRow = document.createElement("tr");
            var departmentCell = document.createElement("td");
            var programmeCell = document.createElement("td");
            var statusCell = document.createElement("td");

            departmentCell.textContent = department;
            programmeCell.textContent = programme;
            statusCell.textContent = status;

            newRow.appendChild(departmentCell);
            newRow.appendChild(programmeCell);
            newRow.appendChild(statusCell);

            tableBody.appendChild(newRow);

            // Clear select options
            document.getElementById(departmentId).selectedIndex = 0;
            document.getElementById(programmeId).selectedIndex = 0;
            document.getElementById(statusId).selectedIndex = 0;
        } else {
            alert("Please select all options");
        }
    });

    document.getElementById(clearButtonId).addEventListener("click", function () {
        var tableBody = document.getElementById(tableBodyId);
        tableBody.innerHTML = "";
    });
}

// Setup for the second set of dropdowns/buttons
setupForm("addButton1", "cancelButton1", "programme1", "selecttermindex1", "status1", "tableBody1", "tableHeaders1");
