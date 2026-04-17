let rawData = [];
let filteredData = [];
let currentPage = 1;
let pageSize = 15;

const filterColumns = [
  "Topic",
  "Subtopic 1",
  "Subtopic 2",
  "Subtopic 3",
  "Subtopic 4"
];

let tableColumns = [];

fetch("NSHD_Data_Dictionary_Public.json")
  .then(r => r.json())
  .then(data => {
    rawData = data;
    filteredData = [...rawData];

    tableColumns = Object.keys(rawData[0]).slice(5);

    buildFilters();
    buildTableHeader();
    applyFilters();
  });

function buildFilters() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = "";

  filterColumns.forEach(col => {
    const select = document.createElement("select");
    select.dataset.column = col;
    select.innerHTML = `<option value="">${col}</option>`;

    const uniqueValues = [...new Set(rawData.map(r => r[col]).filter(v => v))];
    uniqueValues.forEach(v => {
      select.innerHTML += `<option value="${v}">${v}</option>`;
    });

    select.addEventListener("change", () => {
      applyFilters();
      updateAllFilters();
    });

    bar.appendChild(select);
  });
}

function applyFilters() {
  const activeFilters = {};
  document.querySelectorAll("#filter-bar select").forEach(sel => {
    if (sel.value !== "") activeFilters[sel.dataset.column] = sel.value;
  });

  filteredData = rawData.filter(row =>
    Object.entries(activeFilters).every(([col, val]) => row[col] === val)
  );

  currentPage = 1;
  renderTable();
  renderPagination();
}

function updateAllFilters() {
  const rows = filteredData;

  filterColumns.forEach(col => {
    const select = document.querySelector(`#filter-bar select[data-column="${col}"]`);
    const currentValue = select.value;

    const values = [...new Set(rows.map(r => r[col]).filter(v => v && v !== ""))].sort();

    // Rebuild dropdown
    select.innerHTML = `<option value="">${col}</option>`;
    values.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });

    // Restore previously selected value if still valid
    if (values.includes(currentValue)) {
      select.value = currentValue;
    }
  });
}


document.getElementById("globalSearch").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  filteredData = rawData.filter(row =>
    Object.values(row).some(v => String(v).toLowerCase().includes(q))
  );

  currentPage = 1;
  renderTable();
  renderPagination();
});

document.getElementById("pageSize").addEventListener("change", e => {
  pageSize = Number(e.target.value);
  currentPage = 1;
  renderTable();
  renderPagination();
});

function buildTableHeader() {
  const headerRow = document.getElementById("table-header");
  headerRow.innerHTML = "";

  // ⭐ Create <colgroup> dynamically
  const table = document.getElementById("myTable");
  const colgroup = document.createElement("colgroup");

  colgroup.innerHTML = tableColumns
    .map((_, i) => `<col class="col-${i+1}">`)
    .join("");

  // Insert colgroup before thead
  table.prepend(colgroup);

  // Build header cells
  tableColumns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  });
}

function renderTable() {
  const body = document.getElementById("table-body");
  body.innerHTML = "";

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  filteredData.slice(start, end).forEach(row => {
    const tr = document.createElement("tr");

    tableColumns.forEach(col => {
      const td = document.createElement("td");
      td.textContent = row[col] ?? "";
      tr.appendChild(td);
    });

    body.appendChild(tr);
  });

  // ⭐ Force layout rules to apply
  document.getElementById("myTable").style.tableLayout = "fixed";
}

function renderPagination() {
  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;

  const top = document.getElementById("paginationTop");
  const bottom = document.getElementById("paginationBottom");

  const html = `
    <button ${currentPage === 1 ? "disabled" : ""} onclick="changePage(-1)">Prev</button>
    <span>Page ${currentPage} of ${totalPages}</span>
    <button ${currentPage === totalPages ? "disabled" : ""} onclick="changePage(1)">Next</button>
  `;

  top.innerHTML = html;
  bottom.innerHTML = html;
}

function changePage(delta) {
  currentPage += delta;
  renderTable();
  renderPagination();
}

