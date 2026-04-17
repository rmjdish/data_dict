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
      <option value="30">30</option>
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


/* Filter bar layout */
.page-search-data-dictionary #filter-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: nowrap;
}

/* Filter widths */
.page-search-data-dictionary #filter-bar select {
  width: 250px;     /* ← change this */
  padding: 6px 10px;
  font-size: 14px;
}




/* Sticky container for header */
.page-search-data-dictionary #table-wrapper {
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: auto;
  position: relative;
}

/* Sticky header */
/* If filter bar is sticky */
.page-search-data-dictionary #filter-bar {
  position: sticky;
  top: 0;
  z-index: 40;
  background: white;
  padding: 8px 0;
}

/* Then table header sticks BELOW it */
.page-search-data-dictionary #myTable thead th {
  position: sticky;
  top: 48px;   /* height of filter bar */
  z-index: 30;
}

/* Table layout */
.page-search-data-dictionary #myTable {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: Arial, sans-serif;
  font-size: 14px;
}


/* Alternate row shading */
.page-search-data-dictionary #myTable tbody tr:nth-child(odd) {
  background-color: #f7f7f7 !important;
}
.page-search-data-dictionary #myTable tbody tr:nth-child(even) {
  background-color: #ececec !important;
}

/* Cell padding */
.page-search-data-dictionary #myTable td {
  padding: 6px 10px;
  vertical-align: top;
  word-wrap: break-word;
}


/* Allow columns to shrink */
.page-search-data-dictionary #myTable th,
.page-search-data-dictionary #myTable td {
  min-width: 0;
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}



/* -----------------------------------------
   COLUMN WIDTHS — customise these as needed
   ----------------------------------------- */
.page-search-data-dictionary #myTable col.col-1 { width: 150px; }
.page-search-data-dictionary #myTable col.col-2 { width: 110px; }
.page-search-data-dictionary #myTable col.col-3 { width: 80px; }
.page-search-data-dictionary #myTable col.col-4 { width: 175px; }
.page-search-data-dictionary #myTable col.col-5 { width: 500px; }
.page-search-data-dictionary #myTable col.col-6 { width: 150px; }
.page-search-data-dictionary #myTable col.col-7 { width: 100px; }

/* Add more nth-child rules if you have more columns */


/* === Column colours for myTable (header + body) === */
#myTable th:nth-child(1),
#myTable td:nth-child(1),
.dataTables_scrollHeadInner table th:nth-child(1),
.fixedHeader-floating th:nth-child(1) {
    background: #F3E5F5 !important;
}

#myTable th:nth-child(2),
#myTable td:nth-child(2),
.dataTables_scrollHeadInner table th:nth-child(2),
.fixedHeader-floating th:nth-child(2) {
    background: #E8F5E9 !important;
}

#myTable th:nth-child(3),
#myTable td:nth-child(3),
.dataTables_scrollHeadInner table th:nth-child(3),
.fixedHeader-floating th:nth-child(3) {
    background: #E3F2FD !important;
}

#myTable th:nth-child(4),
#myTable td:nth-child(4),
.dataTables_scrollHeadInner table th:nth-child(4),
.fixedHeader-floating th:nth-child(4) {
    background: #FFF3E0 !important;
}

#myTable th:nth-child(5),
#myTable td:nth-child(5),
.dataTables_scrollHeadInner table th:nth-child(5),
.fixedHeader-floating th:nth-child(5) {
    background: #FCE4EC !important;
}

#myTable th:nth-child(6),
#myTable td:nth-child(6),
.dataTables_scrollHeadInner table th:nth-child(6),
.fixedHeader-floating th:nth-child(6) {
    background: #EDE7F6 !important;
}

#myTable th:nth-child(7),
#myTable td:nth-child(7),
.dataTables_scrollHeadInner table th:nth-child(7),
.fixedHeader-floating th:nth-child(7) {
    background: #E0F7FA !important;
}

#myTable th:nth-child(8),
#myTable td:nth-child(8),
.dataTables_scrollHeadInner table th:nth-child(8),
.fixedHeader-floating th:nth-child(8) {
    background: #F1F8E9 !important;
}

#myTable th:nth-child(9),
#myTable td:nth-child(9),
.dataTables_scrollHeadInner table th:nth-child(9),
.fixedHeader-floating th:nth-child(9) {
    background: #FFF8E1 !important;
}

#myTable th:nth-child(10),
#myTable td:nth-child(10),
.dataTables_scrollHeadInner table th:nth-child(10),
.fixedHeader-floating th:nth-child(10) {
    background: #F9FBE7 !important;
}

/* left-align column 1 */
#myTable thead th:nth-child(1),
#myTable tbody td:nth-child(1),
.dataTables_scrollHeadInner table thead th:nth-child(1),
.fixedHeader-floating thead th:nth-child(1) {
    text-align: left !important;
}

/* Center-align columns 2, 3, and 7 */

#myTable thead th:nth-child(2),
#myTable tbody td:nth-child(2),
.dataTables_scrollHeadInner table thead th:nth-child(2),
.fixedHeader-floating thead th:nth-child(2),
#myTable thead th:nth-child(3),
#myTable tbody td:nth-child(3),
.dataTables_scrollHeadInner table thead th:nth-child(3),
.fixedHeader-floating thead th:nth-child(3),
#myTable thead th:nth-child(7),
#myTable tbody td:nth-child(7),
.dataTables_scrollHeadInner table thead th:nth-child(7),
.fixedHeader-floating thead th:nth-child(7) {
    text-align: center !important;
}



</style>

<script src="/data_dict/assets/js/data_dictionary.js"></script>

</div>