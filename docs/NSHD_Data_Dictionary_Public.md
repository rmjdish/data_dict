---
layout: default
title: Search Data Dictionary
nav_order: 3
---

<header class="page-header">
  <div>
    <h1>NSHD <span>Data Dictionary</span></h1>
    <p class="subtitle">National Survey of Health and Development — Metadata databases</p>
  </div>
  <span class="record-count" id="record-count">— records</span>
</header>

<div class="filters">
  <select id="f-topic"><option value="">Topic</option></select>
  <select id="f-sub1"><option value="">Subtopic 1</option></select>
  <select id="f-sub2"><option value="">Subtopic 2</option></select>
  <select id="f-sub3"><option value="">Subtopic 3</option></select>
  <select id="f-sub4"><option value="">Subtopic 4</option></select>
</div>

<div class="search-row">
  <input id="search" type="text" placeholder="Search…" />
</div>

<div id="record-count"></div>

<div id="pagination-top" class="pagination"></div>

<div class="table-wrapper">
  <table class="data-table">
    <thead>
      <tr>
        <th>Topic</th>
        <th>Subtopic 1</th>
        <th>Subtopic 2</th>
        <th>Subtopic 3</th>
        <th>Subtopic 4</th>
        <th>NSHD Variable Name</th>
        <th>Showcase Field ID</th>
        <th>Order</th>
        <th>UKLLC Dataset Name(s)</th>
        <th>Variable Label</th>
        <th>Form</th>
        <th>Year of collection</th>
      </tr>
    </thead>
   <tbody id="tbody"></tbody>
  </table>
</div>

<div id="pagination-bottom" class="pagination"></div>


