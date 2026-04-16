---
layout: default
title: View All Data Dictionary
nav_order: 3
---

<link rel="stylesheet" href="/assets/css/table.css">

# Data Dictionary

<div class="filters">
  <select id="f-topic"><option value="">Topic</option></select>
  <select id="f-sub1"><option value="">Subtopic 1</option></select>
  <select id="f-sub2"><option value="">Subtopic 2</option></select>
  <select id="f-sub3"><option value="">Subtopic 3</option></select>
  <select id="f-sub4"><option value="">Subtopic 4</option></select>
  <input id="search" type="text" placeholder="Search…" />
</div>

<div id="record-count"></div>

<div id="pagination-top" class="pagination"></div>

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

<div id="pagination-bottom" class="pagination"></div>

<script src="/assets/js/table.js"></script>