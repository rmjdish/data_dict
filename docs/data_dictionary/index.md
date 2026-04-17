---
layout: default
title: NSHD Data Dictionary
nav_order: 10
classes: page-search-data-dictionary
---

<div id="data-dictionary-app">

  <!-- FILTER BAR (5 filters in a straight line) -->
  <div id="filter-bar" class="filter-bar"></div>

  <!-- SEARCH + PAGE SIZE + PAGINATION (sticky) -->
  <div id="search-pagination-top" class="search-pagination-top">
    <input id="globalSearch" type="text" placeholder="Search…" />
    <select id="pageSize">
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <div id="paginationTop"></div>
  </div>

  <!-- TABLE WRAPPER (scrolls) -->
  <div id="table-wrapper">
    <table id="myTable">
      <thead>
        <tr id="table-header"></tr>
      </thead>
      <tbody id="table-body"></tbody>
    </table>
  </div>

  <!-- BOTTOM PAGINATION -->
  <div id="paginationBottom"></div>

</div>

{% raw %}
<script>
let rawData = [];
let filteredData = [];
let currentPage = 1;
let pageSize = 15;

// First 5 columns become filters
const filterColumns = [
  "Topic",
  "Subtopic 1",
  "Subtopic 2",
  "Subtopic 3",
  "Subtopic 4"
];

// Table will show everything AFTER the first 5 columns
let tableColumns = [];

// -------------------------------
// LOAD JSON
// -------------------------------
fetch("NSHD_Data_Dictionary_Public.json")
  .then(r => r.json())
  .then(data => {
    rawData = data;
    filteredData = [...rawData];

    // Determine table columns (skip first 5)
    tableColumns = Object.keys(rawData[0]).slice(5);

    buildFilters();
    buildTableHeader();
    applyFilters();
  });

// -------------------------------
// BUILD FILTER BAR
// -------------------------------
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

    select.addEventListener("change", applyFilters);
    bar.appendChild(select);
  });
}

// -------------------------------
// APPLY FILTERS
// -------------------------------
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

// -------------------------------
// GLOBAL SEARCH
// -------------------------------
document.getElementById("globalSearch").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  filteredData = rawData.filter(row =>
    Object.values(row).some(v => String(v).toLowerCase().includes(q))
  );

  currentPage = 1;
  renderTable();
  renderPagination();
});

// -------------------------------
// PAGE SIZE
// -------------------------------
document.getElementById("pageSize").addEventListener("change", e => {
  pageSize = Number(e.target.value);
  currentPage = 1;
  renderTable();
  renderPagination();
});

// -------------------------------
// TABLE HEADER
// -------------------------------
function buildTableHeader() {
  const headerRow = document.getElementById("table-header");
  headerRow.innerHTML = "";

  tableColumns.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  });
}

// -------------------------------
// RENDER TABLE
// -------------------------------
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
}

// -------------------------------
// PAGINATION
// -------------------------------
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
</script>
{% endraw %}
