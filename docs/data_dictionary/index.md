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


