// Override Just the Docs search result limit
document.addEventListener("DOMContentLoaded", function () {
  const originalSearch = window.justTheDocs?.search;

  if (!originalSearch) return;

  // Override the maxResults value
  originalSearch.maxResults = 200;
});