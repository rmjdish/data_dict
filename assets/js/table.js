// ── Load JSON then boot ─────────────────────────────────────────────────────
let RAW_DATA = [];
let filtered  = [];
let sortCol   = null;
let sortDir   = 1;
let page      = 1;
let pageSize  = 10;

const COLS = ['Topic','Subtopic 1','Subtopic 2','Subtopic 3','Subtopic 4',
              'NSHD Variable Name','Showcase Field ID','Order',
              'UKLLC Dataset Name(s)','Variable Label','Form','Year of collection'];

const FILTER_COLS = ['Topic','Subtopic 1','Subtopic 2','Subtopic 3','Subtopic 4'];
const FILTER_IDS  = ['f-topic','f-sub1','f-sub2','f-sub3','f-sub4'];

fetch('/data_dict/assets/data/data.json')
  .then(r => r.json())
  .then(data => {
    RAW_DATA = data;
    filtered = [...RAW_DATA];
    initDropdowns();
    render();
  })
  .catch(err => {
    console.error("JSON load error:", err);
    document.getElementById('record-count').textContent = "Failed to load data.json";
  });

// ── Init dropdowns ─────────────────────────────────────────────────────────
function initDropdowns() {
  FILTER_COLS.forEach((col, i) => {
    const sel = document.getElementById(FILTER_IDS[i]);
    const vals = [...new Set(RAW_DATA.map(r => r[col]).filter(Boolean))].sort();
    vals.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v; opt.textContent = v;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', applyFilters);
  });
  document.getElementById('search').addEventListener('input', applyFilters);
}

// ── Filter + sort ──────────────────────────────────────────────────────────
function applyFilters() {
  const fvals  = FILTER_IDS.map((id, i) => ({ col: FILTER_COLS[i], val: document.getElementById(id).value }));
  const search = document.getElementById('search').value.toLowerCase().trim();

  filtered = RAW_DATA.filter(row => {
    for (const { col, val } of fvals) {
      if (val && row[col] !== val) return false;
    }
    if (search) {
      const match = COLS.some(c => String(row[c] ?? '').toLowerCase().includes(search));
      if (!match) return false;
    }
    return true;
  });

  if (sortCol !== null) sortData();
  page = 1;
  render();
}

function sortData() {
  const col = COLS[sortCol];
  filtered.sort((a, b) => {
    const va = a[col] ?? '';
    const vb = b[col] ?? '';
    if (!isNaN(va) && !isNaN(vb)) return (Number(va) - Number(vb)) * sortDir;
    return String(va).localeCompare(String(vb)) * sortDir;
  });
}

// ── Header sort clicks ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('th').forEach((th, i) => {
    th.addEventListener('click', () => {
      if (sortCol === i) {
        sortDir *= -1;
      } else {
        sortCol = i;
        sortDir = 1;
      }
      document.querySelectorAll('th').forEach(t => t.classList.remove('sort-asc','sort-desc'));
      th.classList.add(sortDir === 1 ? 'sort-asc' : 'sort-desc');
      sortData();
      render();
    });
  });
});

// ── Render ─────────────────────────────────────────────────────────────────
function render() {
  const tbody = document.getElementById('tbody');
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (page > pages) page = pages;

  const start = (page - 1) * pageSize;
  const slice = filtered.slice(start, start + pageSize);

  document.getElementById('record-count').textContent =
    total === RAW_DATA.length
      ? `${total} records`
      : `${total} of ${RAW_DATA.length} records`;

  if (slice.length === 0) {
    tbody.innerHTML = `<tr class="empty-row"><td colspan="${COLS.length}">No records match your filters.</td></tr>`;
  } else {
    tbody.innerHTML = slice.map(row =>
      '<tr>' + COLS.map(c => `<td>${escHtml(String(row[c] ?? ''))}</td>`).join('') + '</tr>'
    ).join('');
  }

  renderPagination('pagination-top',  total, pages);
  renderPagination('pagination-bottom', total, pages);
}

function renderPagination(id, total, pages) {
  const el = document.getElementById(id);
  if (!el) return;

  let html = `<span class="pg-info">Page ${page} of ${pages} &nbsp;·&nbsp; ${total} rows</span>`;
  html += `<button class="btn-pg" onclick="goPage(1)" ${page<=1?'disabled':''}>«</button>`;
  html += `<button class="btn-pg" onclick="goPage(${page-1})" ${page<=1?'disabled':''}>‹</button>`;

  let lo = Math.max(1, page - 2), hi = Math.min(pages, page + 2);
  if (page <= 3) hi = Math.min(pages, 5);
  if (page >= pages - 2) lo = Math.max(1, pages - 4);

  for (let p = lo; p <= hi; p++) {
    html += `<button class="btn-pg ${p===page?'active':''}" onclick="goPage(${p})">${p}</button>`;
  }

  html += `<button class="btn-pg" onclick="goPage(${page+1})" ${page>=pages?'disabled':''}>›</button>`;
  html += `<button class="btn-pg" onclick="goPage(${pages})" ${page>=pages?'disabled':''}>»</button>`;
  html += `<span class="pg-size-label">Rows per page</span>`;
  html += `<select class="pg-size" onchange="setPageSize(this.value)">`;
  [10,25,50,105].forEach(n => {
    html += `<option value="${n}" ${n===pageSize?'selected':''}>${n}</option>`;
  });
  html += `</select>`;
  el.innerHTML = html;
}

function goPage(p) {
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  page = Math.min(Math.max(1, p), pages);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setPageSize(v) {
  pageSize = parseInt(v);
  page = 1;
  render();
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
