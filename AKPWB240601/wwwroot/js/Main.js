//full screen
$(document).ready(function () {
	var fullscreen = false;

	$("#toggleFullScreen").click(function () {
		if (!fullscreen) {
			openFullscreen();
			$(this).html('<i class="fa-solid fa-compress"></i>');
			$(this).addClass("full-screen-icon");
		} else {
			closeFullscreen();
			$(this).html('<i class="fa-solid fa-expand"></i>');
			$(this).removeClass("full-screen-icon");
		}
		fullscreen = !fullscreen;
	});

	function openFullscreen() {
		var elem = document.documentElement;
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			/* Firefox */
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			/* Chrome, Safari & Opera */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) {
			/* IE/Edge */
			elem.msRequestFullscreen();
		}
	}

	function closeFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			/* Firefox */
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			/* Chrome, Safari & Opera */
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			/* IE/Edge */
			document.msExitFullscreen();
		}
	}
});

//profile active
let profile = document.querySelector(".profile");
let menu = document.querySelector(".menu");

profile.onclick = function () {
	menu.classList.toggle("active");
};
//login

//login
function handleLogin() {
	// Your login logic here
	console.log("Login button clicked");
	// Redirect to the new page
	window.location.href = "/dashboard.html";
}
//pagination
document.addEventListener('DOMContentLoaded', function () {
    let rowsPerPage = 10;
    const tableBody = document.getElementById('tableBody');
    const pagination = document.getElementById('pagination');
    const entriesInfo = document.getElementById('entriesInfo');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const totalRows = rows.length;
    let totalPages = Math.ceil(totalRows / rowsPerPage);
    let currentPage = 1;
    let sortDirection = 'asc';
    let currentSortColumn = '';

    function renderTable(page) {
        tableBody.innerHTML = '';
        const start = (page - 1) * rowsPerPage;
        const end = Math.min(start + rowsPerPage, totalRows);
        const paginatedRows = rows.slice(start, end);

        paginatedRows.forEach(row => {
            tableBody.appendChild(row);
        });

        entriesInfo.textContent = `Showing ${start + 1} to ${end} of ${totalRows} entries`;
    }

    function renderPagination() {
        pagination.innerHTML = '';

        const firstLi = document.createElement('li');
        firstLi.classList.add('page-item');
        firstLi.innerHTML = `<a class="page-link" href="#">&laquo;</a>`;
        firstLi.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = 1;
            updatePagination();
        });
        pagination.appendChild(firstLi);

        const prevLi = document.createElement('li');
        prevLi.classList.add('page-item');
        prevLi.innerHTML = `<a class="page-link" href="#" style="font-size: 25px; font-weight: bold;">&lsaquo;</a>`;

        prevLi.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
        pagination.appendChild(prevLi);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            li.classList.add('page-item');
            if (i === currentPage) {
                li.classList.add('active');
            }
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener('click', function (e) {
                e.preventDefault();
                currentPage = i;
                updatePagination();
            });
            pagination.appendChild(li);
        }

        const nextLi = document.createElement('li');
        nextLi.classList.add('page-item');
        nextLi.innerHTML = `<a class="page-link" href="#" style="font-size: 25px; font-weight: bold;">&rsaquo;</a>`;
        nextLi.addEventListener('click', function (e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });
        pagination.appendChild(nextLi);

        const lastLi = document.createElement('li');
        lastLi.classList.add('page-item');
        lastLi.innerHTML = `<a class="page-link" href="#">&raquo;</a>`;
        lastLi.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = totalPages;
            updatePagination();
        });
        pagination.appendChild(lastLi);
    }

    function updatePagination() {
        renderTable(currentPage);
        renderPagination();
    }

    document.getElementById('itemsPerPage').addEventListener('change', function () {
        rowsPerPage = parseInt(this.value, 10);
        totalPages = Math.ceil(totalRows / rowsPerPage);
        currentPage = 1;
        updatePagination();
    });

    document.querySelectorAll('th[data-sort]').forEach(header => {
        header.addEventListener('click', function () {
            const column = header.getAttribute('data-sort');
            if (currentSortColumn === column) {
                sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                currentSortColumn = column;
                sortDirection = 'asc';
            }

            sortTable(column, sortDirection);
            updatePagination();
        });
    });

    function sortTable(column, direction) {
        const compareFunction = (a, b) => {
            const aText = a.querySelector(`[data-column="${column}"]`).textContent.trim();
            const bText = b.querySelector(`[data-column="${column}"]`).textContent.trim();

            if (column === 'slNo' || column === 'notificationNo' || column === 'noOfPost') {
                const aNumber = parseFloat(aText.replace(/[^\d.-]/g, ''));
                const bNumber = parseFloat(bText.replace(/[^\d.-]/g, ''));
                return direction === 'asc' ? aNumber - bNumber : bNumber - aNumber;
            } else {
                return direction === 'asc' ? aText.localeCompare(bText) : bText.localeCompare(aText);
            }
        };

        rows.sort(compareFunction);
    }

    updatePagination();
});

//export
function updateDateTime() {
    var now = new Date();
    var formattedDateTime = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        month: "numeric",
        day: "numeric",
        year: "numeric",
    });
    document.getElementById("date-time").textContent = "Date & Time: " + formattedDateTime;
}

// Update date and time initially and every second
updateDateTime();
setInterval(updateDateTime, 1000);
//download table
document.getElementById("exportExcel").addEventListener("click", function () {
    exportTableToExcel("exampleTable", "table_data");
});

document.getElementById("exportPDF").addEventListener("click", function () {
    exportTableToPDF("exampleTable", "table_data");
});

function exportTableToExcel(tableID, filename = "") {
    let table = document.getElementById(tableID);
    let wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
    let wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

    function s2ab(s) {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
    }

    let blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename + ".xlsx";
    link.click();
}

async function exportTableToPDF(tableID, filename = "") {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    let table = document.getElementById(tableID);
    let rows = [];
    let headers = [];

    for (let row of table.rows) {
        let rowData = [];
        for (let cell of row.cells) {
            rowData.push(cell.innerText);
        }
        if (row === table.rows[0]) {
            headers = rowData;
        } else {
            rows.push(rowData);
        }
    }

    doc.autoTable({
        head: [headers],
        body: rows,
    });

    doc.save(filename + ".pdf");
}
let rowToDelete;

function confirmDelete(element) {
    rowToDelete = element.closest('tr');
    document.getElementById('confirmDeleteModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('confirmDeleteModal').style.display = 'none';
    rowToDelete = null;
}

document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
    if (rowToDelete) {
        rowToDelete.remove();
        closeModal();
    }
});

//search bar
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
    const table = document.getElementById('exampleTable');
    const tableRows = table.querySelectorAll('tbody tr');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        tableRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let found = false;

            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(query)) {
                    found = true;
                }
            });

            if (found) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
//sorting

