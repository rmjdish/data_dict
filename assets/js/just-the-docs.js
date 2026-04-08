// Just the Docs – Custom Override
// Search results increased to 200

(function() {
  'use strict';

  // Configuration
  const maxResults = 200;   // <--- UPDATED FROM 10 TO 200
  const searchInput = document.querySelector('#search-input');
  const resultsContainer = document.querySelector('#search-results');
  const searchDataUrl = '/search-data.json';

  let searchIndex = [];
  let searchReady = false;

  // Fetch search index
  fetch(searchDataUrl)
    .then(response => response.json())
    .then(data => {
      searchIndex = data;
      searchReady = true;
    });

  // Perform search
  function performSearch(query) {
    if (!searchReady || !query) {
      resultsContainer.innerHTML = '';
      return;
    }

    const results = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    );

    renderResults(results.slice(0, maxResults));
  }

  // Render results
  function renderResults(results) {
    resultsContainer.innerHTML = results
      .map(result => `
        <li class="search-result">
          <a href="${result.url}">
            <span class="search-result-title">${result.title}</span>
            <span class="search-result-excerpt">${result.excerpt}</span>
          </a>
        </li>
      `)
      .join('');
  }

  // Event listener
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      performSearch(e.target.value);
    });
  }
})();
