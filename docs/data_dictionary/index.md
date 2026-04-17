---
layout: default
title: NSHD Data Dictionary
nav_order: 10
classes: page-search-data-dictionary
---


<style>
/* Scope everything to this page */
.page-search-data-dictionary #myTable {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

/* Header styling */
.page-search-data-dictionary #myTable thead th {
  background: #6a0dad;
  color: white;
  padding: 8px;
  position: sticky;
  top: 0;
  z-index: 5;
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
}

/* Column colours (example for first 6 visible columns) */
.page-search-data-dictionary #myTable thead th:nth-child(1) { background: #e0f2f1; }
.page-search-data-dictionary #myTable thead th:nth-child(2) { background: #e3f2fd; }
.page-search-data-dictionary #myTable thead th:nth-child(3) { background: #fce4ec; }
.page-search-data-dictionary #myTable thead th:nth-child(4) { background: #fff3e0; }
.page-search-data-dictionary #myTable thead th:nth-child(5) { background: #ede7f6; }
.page-search-data-dictionary #myTable thead th:nth-child(6) { background: #f1f8e9; }

/* Filter bar styling */
.page-search-data-dictionary #filter-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  background: white;
  padding: 10px 0;
  z-index: 10;
}

.page-search-data-dictionary #filter-bar select {
  width: 200px;
  padding: 6px;
}

/* Search + pagination bar */
.page-search-data-dictionary #search-pagination-top {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  position: sticky;
  top: 50px;
  background: white;
  padding: 10px 0;
  z-index: 9;
}

.page-search-data-dictionary #globalSearch {
  padding: 6px;
  width: 250px;
}

.page-search-data-dictionary #pageSize {
  padding: 6px;
}
</style>



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


.page-search-data-dictionary #myTable thead th:nth-child(1) { background: #e0f2f1; }
.page-search-data-dictionary #myTable thead th:nth-child(2) { background: #e3f2fd; }
.page-search-data-dictionary #myTable thead th:nth-child(3) { background: #fce4ec; }
.page-search-data-dictionary #myTable thead th:nth-child(4) { background: #fff3e0; }
.page-search-data-dictionary #myTable thead th:nth-child(5) { background: #ede7f6; }
/* …continue as needed */

.page-search-data-dictionary #myTable tbody tr:nth-child(odd)  { background: #fafafa; }
.page-search-data-dictionary #myTable tbody tr:nth-child(even) { background: #f0f0f0; }



<script src="/data_dict/assets/js/data_dictionary.js"></script>