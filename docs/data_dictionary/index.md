---
layout: default
title: NSHD Data Dictionary
nav_order: 10
classes: page-search-data-dictionary
---

<div class="page-search-data-dictionary">

<div id="data-dictionary-app">

  <!-- FILTER BAR (5 filters in a straight line) -->
  <div id="filter-bar" class="filter-bar"></div>

  <!-- SEARCH + PAGE SIZE + PAGINATION (sticky) -->
  <div id="search-pagination-top" class="search-pagination-top">
    <input id="globalSearch" type="text" placeholder="Search…" />
    <select id="pageSize">
      <option value="15">15</option>
      <option value="300">30</option>
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

<style>
/* Scope everything to this page */
.page-search-data-dictionary #myTable {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* allows column width control */
  font-family: Arial, sans-serif;
  font-size: 14px;
}

/* Sticky header */
.page-search-data-dictionary #myTable thead th {
  position: sticky;
  top: 0;
  background: #6a0dad;
  color: white;
  padding: 8px;
  z-index: 10;
  text-align: left;
  border-bottom: 2px solid #4b067a;
}

/* Alternate row shading */
.page-search-data-dictionary #myTable tbody tr:nth-child(odd) {
  background: #f7f7f7;
}
.page-search-data-dictionary #myTable tbody tr:nth-child(even) {
  background: #ececec;
}

/* Cell padding */
.page-search-data-dictionary #myTable td {
  padding: 6px 10px;
  vertical-align: top;
  word-wrap: break-word;
}

/* -----------------------------------------
   COLUMN WIDTHS — customise these as needed
   ----------------------------------------- */

/* Column 1 */
.page-search-data-dictionary #myTable th:nth-child(6),
.page-search-data-dictionary #myTable td:nth-child(6) {
  width: 120px;
}

/* Column 2 */
.page-search-data-dictionary #myTable th:nth-child(7),
.page-search-data-dictionary #myTable td:nth-child(7) {
  width: 180px;
}

/* Column 3 */
.page-search-data-dictionary #myTable th:nth-child(8),
.page-search-data-dictionary #myTable td:nth-child(8) {
  width: 200px;
}

/* Column 4 */
.page-search-data-dictionary #myTable th:nth-child(9),
.page-search-data-dictionary #myTable td:nth-child(9) {
  width: 250px;
}

/* Column 5 */
.page-search-data-dictionary #myTable th:nth-child(10),
.page-search-data-dictionary #myTable td:nth-child(10) {
  width: 300px;
}

/* Add more nth-child rules if you have more columns */


.page-search-data-dictionary #myTable thead th:nth-child(1) { background: #e3f2fd; }
.page-search-data-dictionary #myTable thead th:nth-child(2) { background: #e3f2fd; }
.page-search-data-dictionary #myTable thead th:nth-child(3) { background: #e3f2fd; }
.page-search-data-dictionary #myTable thead th:nth-child(4) { background: #fff3e0; }
.page-search-data-dictionary #myTable thead th:nth-child(5) { background: #fff3e0; }
.page-search-data-dictionary #myTable thead th:nth-child(6) { background: #fff3e0; }
.page-search-data-dictionary #myTable thead th:nth-child(7) { background: #fff3e0; }
/* …continue as needed */

.page-search-data-dictionary #myTable tbody tr:nth-child(odd)  { background: #fafafa; }
.page-search-data-dictionary #myTable tbody tr:nth-child(even) { background: #f0f0f0; }

</style>

<script src="/data_dict/assets/js/data_dictionary.js"></script>

</div>