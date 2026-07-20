[jk-shiurim-library.html](https://github.com/user-attachments/files/30201039/jk-shiurim-library.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JK Shiurim Library</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --parchment:#F1EBDD;
    --card:#FBF8F1;
    --ink:#1F2A3D;
    --wine:#7A2E2E;
    --brass:#B8934C;
    --line: rgba(31,42,61,0.14);
    --shadow: 0 1px 0 rgba(31,42,61,0.06);
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--parchment);
    background-image:
      radial-gradient(rgba(31,42,61,0.035) 1px, transparent 1px);
    background-size: 22px 22px;
    color:var(--ink);
    font-family:'Source Serif 4', serif;
    -webkit-font-smoothing:antialiased;
  }
  .wrap{max-width:1040px;margin:0 auto;padding:0 24px;}

  /* header */
  header{padding:56px 0 28px;border-bottom:1px solid var(--line);}
  .eyebrow{
    font-family:'IBM Plex Mono', monospace;
    font-size:12px;letter-spacing:.14em;text-transform:uppercase;
    color:var(--wine); margin:0 0 10px;
  }
  h1{
    font-family:'Fraunces', serif;
    font-weight:600; font-size:clamp(34px,5vw,54px);
    line-height:1.02; margin:0 0 12px; letter-spacing:-0.01em;
  }
  header p.sub{
    max-width:560px; color:rgba(31,42,61,0.72); font-size:17px; line-height:1.55; margin:0;
  }

  /* search / finder */
  .finder{
    margin-top:32px;
    background:var(--card);
    border:1px solid var(--line);
    border-radius:2px;
    box-shadow: 0 8px 24px rgba(31,42,61,0.06);
    overflow:hidden;
  }
  .finder-label{
    font-family:'IBM Plex Mono', monospace;
    font-size:11px; letter-spacing:.12em; text-transform:uppercase;
    color:rgba(31,42,61,0.5);
    padding:10px 18px; border-bottom:1px dashed var(--line);
    display:flex; justify-content:space-between;
  }
  .finder-body{padding:18px;}
  #search{
    width:100%; border:1px solid var(--line); background:var(--parchment);
    padding:14px 16px; font-family:'Source Serif 4', serif; font-size:17px;
    color:var(--ink); border-radius:2px; outline:none;
  }
  #search:focus{border-color:var(--brass);}
  .chips{display:flex; flex-wrap:wrap; gap:8px; margin-top:14px;}
  .chip{
    font-family:'IBM Plex Mono', monospace; font-size:12px;
    border:1px solid var(--line); background:transparent; color:var(--ink);
    padding:7px 12px; border-radius:20px; cursor:pointer; letter-spacing:.02em;
  }
  .chip.active{background:var(--ink); color:var(--parchment); border-color:var(--ink);}
  .chip:hover{border-color:var(--brass);}

  /* on this day */
  .today-panel{
    margin-top:20px; border:1px solid var(--line); background:rgba(184,147,76,0.08);
    padding:16px 18px; font-size:15px; border-radius:2px;
  }
  .today-panel b{color:var(--wine);}

  /* sections */
  section{padding:48px 0;}
  .section-head{display:flex; align-items:baseline; justify-content:space-between; margin-bottom:22px; border-bottom:1px solid var(--line); padding-bottom:12px;}
  .section-head h2{font-family:'Fraunces', serif; font-weight:600; font-size:24px; margin:0;}
  .count{font-family:'IBM Plex Mono', monospace; font-size:12px; color:rgba(31,42,61,0.5);}

  /* topic drawers */
  .drawers{display:grid; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); gap:12px;}
  .drawer{
    border:1px solid var(--line); background:var(--card); padding:16px;
    cursor:pointer; border-radius:2px; transition:transform .12s ease, box-shadow .12s ease;
    position:relative;
  }
  .drawer:hover{transform:translateY(-2px); box-shadow:0 6px 16px rgba(31,42,61,0.08); border-color:var(--brass);}
  .drawer .num{font-family:'IBM Plex Mono', monospace; font-size:11px; color:var(--wine); letter-spacing:.06em;}
  .drawer .name{font-family:'Fraunces', serif; font-weight:500; font-size:17px; margin-top:6px; line-height:1.2;}
  .drawer .meta{font-family:'IBM Plex Mono', monospace; font-size:11px; color:rgba(31,42,61,0.45); margin-top:8px;}
  .drawer.locked{opacity:.5; cursor:default;}
  .drawer.locked:hover{transform:none; box-shadow:none; border-color:var(--line);}

  /* shiur cards */
  .cards{display:flex; flex-direction:column; gap:1px; background:var(--line); border:1px solid var(--line);}
  .card{
    background:var(--card); padding:16px 18px; display:grid;
    grid-template-columns:96px 1fr auto; gap:16px; align-items:center;
    text-decoration:none; color:var(--ink);
  }
  .card:hover{background:#fff;}
  .card .stamp{
    font-family:'IBM Plex Mono', monospace; font-size:12px; color:var(--wine);
    border:1px solid var(--wine); border-radius:2px; padding:5px 6px; text-align:center;
    letter-spacing:.02em; line-height:1.3;
  }
  .card .title{font-family:'Source Serif 4', serif; font-size:16.5px; font-weight:500;}
  .card .path{font-family:'IBM Plex Mono', monospace; font-size:11px; color:rgba(31,42,61,0.45); margin-top:4px;}
  .card .go{font-family:'IBM Plex Mono', monospace; font-size:11px; color:var(--brass); white-space:nowrap;}
  .empty{padding:32px 18px; font-family:'IBM Plex Mono', monospace; font-size:13px; color:rgba(31,42,61,0.55); background:var(--card); border:1px dashed var(--line);}

  footer{border-top:1px solid var(--line); padding:32px 0 64px; font-size:13px; color:rgba(31,42,61,0.55);}
  footer a{color:var(--wine);}

  #back-btn{display:none; margin-bottom:16px; background:none; border:none; font-family:'IBM Plex Mono', monospace; font-size:12px; color:var(--wine); cursor:pointer; padding:0;}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <p class="eyebrow">JK &mdash; Main Shiurim Library</p>
    <h1>Find the shiur you're looking for.</h1>
    <p class="sub">Search by topic, subject, or date across the kollel's shiur archive — given by Rebbe, R' Yitzchok Berkovits. This library is being indexed in stages — 32 shiurim are live below, drawn straight from the Drive.</p>

    <div class="finder">
      <div class="finder-label"><span>Shiur finder</span><span id="result-count">32 indexed</span></div>
      <div class="finder-body">
        <input id="search" type="text" placeholder="Try “taaruvos”, “bitul issur”, or a date like 2023-12-05…" autocomplete="off">
        <div class="chips" id="chips"></div>
      </div>
    </div>

    <div class="today-panel" id="today-panel"></div>
  </header>

  <section>
    <div class="section-head">
      <h2>Browse by topic</h2>
      <span class="count">12 categories mapped</span>
    </div>
    <div class="drawers" id="drawers"></div>
  </section>

  <section id="results-section">
    <div class="section-head">
      <h2 id="results-title">All indexed shiurim</h2>
      <span class="count" id="results-count"></span>
    </div>
    <button id="back-btn">&larr; back to all topics</button>
    <div class="cards" id="cards"></div>
  </section>

  <footer>
    <p>Data pulled live from Google Drive · <a href="https://drive.google.com/drive/folders/1Ak11ASHdS-5Whzt7Rl7mVpzMOPOtOb9a" target="_blank">source folder</a> · this is a working demo of the Main Shiurim Library branch, indexed first. Roshei Chaburah (by rebbe), Video, and the rest of the archive are next.</p>
  </footer>
</div>

<script>
// ---- Real data pulled from Drive: "02 Shiurim" > "01 Issur V'Heter - Shiurim" > "Issur V'Heter 2023" ----
// All shiurim in the Main Shiurim Library are given by "Rebbe" — R' Yitzchok Berkovits.
const REBBE = "R' Yitzchok Berkovits";
const shiurim = [
  {title:"Taaruvos 1", date:"2023-11-07", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/18IpXOvwnrukLYXUaKkUOSlSYukcXJYS_/view?usp=drivesdk"},
  {title:"Taaruvos 2", date:"2023-11-08", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1EUcqV4B2KB8ogB-z4U_wDkBFnImilfA4/view?usp=drivesdk"},
  {title:"Taaruvos 3a", date:"2023-11-09", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1y5xjt0XerW1WLEvQcn_vxIY0htjFeEyN/view?usp=drivesdk"},
  {title:"Taaruvos 3b", date:"2023-11-09", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1QctlL6rp8AsMohYg8OVe-Hr4yraTZhGT/view?usp=drivesdk"},
  {title:"Taaruvos 4", date:"2023-11-12", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1juLpShJdI5cy64oetfIvwbH2yuCvfpO7/view?usp=drivesdk"},
  {title:"Taaruvos 5", date:"2023-11-13", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/10DNkJPU73mxcU9gfI0upgAThivjuIbh2/view?usp=drivesdk"},
  {title:"Taaruvos 6", date:"2023-11-14", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/17FVBbG5YPTf_bEdX0UNgf0xv4shAwcaQ/view?usp=drivesdk"},
  {title:"Taaruvos 7", date:"2023-11-15", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1JZELs8dVa2QvDltQLtbaBkuMjsZflQF6/view?usp=drivesdk"},
  {title:"Taaruvos 8", date:"2023-11-19", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1iZjHypiVwPi0RrzExoZ1LdNPIu5hAUiI/view?usp=drivesdk"},
  {title:"Taaruvos 9", date:"2023-11-20", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1mfEgcxrmkHqZLHbxdvt2jHr-lbzx0D7k/view?usp=drivesdk"},
  {title:"Taaruvos 10 & Chazara of Taaroves Issur", date:"2023-11-21", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1-tepc6Zvmjnx34j8Psx_DaZvzVRLljZI/view?usp=drivesdk"},
  {title:"Taaruvos - Tying up loose ends", date:"2023-11-22", topic:"Issur V'Heter", subtopic:"Taaruvos", url:"https://drive.google.com/file/d/1Id9DgIfSc7sNDwW3foItZg5FmFPKl6Lv/view?usp=drivesdk"},
  {title:"Bittul Issur 1", date:"2023-11-23", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/19VT-ufv_PrG6VivXjqC4Gf4SwZEa1ruM/view?usp=drivesdk"},
  {title:"Bittul Issur 2", date:"2023-11-26", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1k_M9l0u0oCeBknltKK--pNE4CUkSE4pw/view?usp=drivesdk"},
  {title:"Bittul Issur 3", date:"2023-11-27", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/16Wn1xJ01nqL6Ox6Gp9oPSJf5P-QnJze-/view?usp=drivesdk"},
  {title:"Bittul Issur 4", date:"2023-11-28", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1915lUUMs2Hw-SUeWe1XVlC0p68Qo6q7G/view?usp=drivesdk"},
  {title:"Bittul Issur 5", date:"2023-11-29", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1MolN-6lSsgb9kT6qwiIC-iLqh9JWLTHo/view?usp=drivesdk"},
  {title:"Bittul Issur 6", date:"2023-12-03", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1z_qxv8T0z5fZRlUhpqglQe-wFeZsI_hB/view?usp=drivesdk"},
  {title:"Bittul Issur 7", date:"2023-12-04", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1dl0EX3ZJlSGVCKvDDkFCEaNcrlQK_xPx/view?usp=drivesdk"},
  {title:"Bittul Issur 8", date:"2023-12-05", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1OtTvLp5ubErFtXc1_kL30QSNwado_CKV/view?usp=drivesdk"},
  {title:"Bittul Issur 9", date:"2023-12-06", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1PFk5kcAMMIfMfHPJ1rcturNpCxxZ9MD6/view?usp=drivesdk"},
  {title:"Bittul Issur 10", date:"2023-12-07", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1siPBTyd90DO74RlwFKQiwGjWz45jwa-H/view?usp=drivesdk"},
  {title:"Bittul Issur 11", date:"2023-12-10", topic:"Issur V'Heter", subtopic:"Bitul Issur", url:"https://drive.google.com/file/d/1Y-eIXHmR3_Esgd5wOHR0g70zFDhb0Y5V/view?usp=drivesdk"},
  {title:"Refuah 1", date:"2026-06-10", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/1OVdoTLX0WhRKcpS9KV6caP5pCrUDRSfH/view?usp=drivesdk"},
  {title:"Refuah 2-6", date:"2026-06-16", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/1O1Dy5AFIZy6IrX476USFOcjz20tpUifN/view?usp=drivesdk"},
  {title:"Refuah 7-14", date:"2026-06-28", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/1CKqavTZUplSomhRnjoLaL1cVD3dvjLvZ/view?usp=drivesdk"},
  {title:"Refuah 10", date:"2026-07-05", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/1fxg1vO151qHIbg5iH07xcyY3ZZiwPKpF/view?usp=drivesdk"},
  {title:"Shabbos Semicha Test 3 - Chazara Questions 1", date:"2026-07-06", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/17fwCM0CfoKlTUvUVQiV7gezNWl59BjIb/view?usp=drivesdk"},
  {title:"Shabbos Semicha Test 3 - Chazara Questions 2", date:"2026-07-07", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/1js4UdGzbpngF0Ln6CwOgtIYEMfKPuNl-/view?usp=drivesdk"},
  {title:"Shabbos Semicha Test 3 - Chazara Questions 3", date:"2026-07-09", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/1xWW3QmuQQ0KY6d7AwfhpnqIrMAyA0NB8/view?usp=drivesdk"},
  {title:"Shabbos Semicha Test 3 - Chazara Questions 4", date:"2026-07-12", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/1pOnuxNb8hI1JfX2Of1MSULHt4SuBg6fN/view?usp=drivesdk"},
  {title:"Shabbos Semicha Test 3 - Chazara Questions 5", date:"2026-07-14", topic:"Shabbos", subtopic:"Refuah", url:"https://drive.google.com/file/d/1lB-oQEYXjlFubCDVZ4Oy7GFInZsg-NZ_/view?usp=drivesdk"},
].map(s => ({...s, speaker: REBBE}));

// Full topic taxonomy of the Main Shiurim Library (from Drive folder structure).
// "count" = real indexed shiurim so far; topics with 0 are mapped but not yet indexed.
const topics = [
  {num:"00", name:"Klalei Hora'ah"},
  {num:"01", name:"Issur V'Heter", live:true},
  {num:"02", name:"Niddah"},
  {num:"03", name:"Shabbos", live:true},
  {num:"04", name:"Aveilus / Smachos"},
  {num:"05", name:"Yom Tovim — Halacha & Hashkafa"},
  {num:"—", name:"Bein Adom L'Chaveiro (NLE)"},
  {num:"—", name:"Halacha — Various Topics & Series"},
  {num:"—", name:"Hashkafa — Various Topics & Series"},
  {num:"—", name:"Practical Rabbinics"},
  {num:"—", name:"Q & A"},
  {num:"—", name:"Guest Speakers"},
];

const drawersEl = document.getElementById('drawers');
const cardsEl = document.getElementById('cards');
const chipsEl = document.getElementById('chips');
const searchEl = document.getElementById('search');
const resultsTitle = document.getElementById('results-title');
const resultsCount = document.getElementById('results-count');
const backBtn = document.getElementById('back-btn');
const todayPanel = document.getElementById('today-panel');

let activeTopic = null;

function countFor(topicName){
  return shiurim.filter(s => s.topic === topicName).length;
}

function renderDrawers(){
  drawersEl.innerHTML = '';
  topics.forEach(t => {
    const c = countFor(t.name);
    const div = document.createElement('div');
    div.className = 'drawer' + (c === 0 ? ' locked' : '');
    div.innerHTML = `<div class="num">${t.num}</div><div class="name">${t.name}</div>
      <div class="meta">${c > 0 ? c + ' shiurim indexed' : 'not indexed yet'}</div>`;
    if (c > 0) div.addEventListener('click', () => filterByTopic(t.name));
    drawersEl.appendChild(div);
  });
}

function renderChips(){
  const subtopics = [...new Set(shiurim.map(s => s.subtopic))];
  chipsEl.innerHTML = '';
  subtopics.forEach(st => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = st;
    b.addEventListener('click', () => {
      searchEl.value = '';
      const isActive = b.classList.contains('active');
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      activeTopic = null;
      if (!isActive){ b.classList.add('active'); renderCards(shiurim.filter(s => s.subtopic === st)); resultsTitle.textContent = st; }
      else { renderCards(shiurim); resultsTitle.textContent = 'All indexed shiurim'; }
    });
    chipsEl.appendChild(b);
  });
}

function filterByTopic(name){
  activeTopic = name;
  backBtn.style.display = 'inline-block';
  resultsTitle.textContent = name;
  renderCards(shiurim.filter(s => s.topic === name));
  document.getElementById('results-section').scrollIntoView({behavior:'smooth', block:'start'});
}

backBtn.addEventListener('click', () => {
  activeTopic = null;
  backBtn.style.display = 'none';
  resultsTitle.textContent = 'All indexed shiurim';
  renderCards(shiurim);
});

function fmtDate(d){
  const [y,m,day] = d.split('-');
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  return `${months[parseInt(m,10)-1]} ${day}<br>${y}`;
}

function renderCards(list){
  resultsCount.textContent = list.length + (list.length === 1 ? ' shiur' : ' shiurim');
  if (list.length === 0){
    cardsEl.innerHTML = `<div class="empty">Nothing indexed here yet. This topic is mapped but hasn't been pulled from Drive in this pass — ask to have it added next.</div>`;
    return;
  }
  cardsEl.innerHTML = list.map(s => `
    <a class="card" href="${s.url}" target="_blank" rel="noopener">
      <div class="stamp">${fmtDate(s.date)}</div>
      <div>
        <div class="title">${s.title}</div>
        <div class="path">${s.topic} / ${s.subtopic} &middot; ${s.speaker}</div>
      </div>
      <div class="go">open in Drive &rarr;</div>
    </a>
  `).join('');
}

searchEl.addEventListener('input', () => {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  const q = searchEl.value.trim().toLowerCase();
  backBtn.style.display = 'none';
  if (!q){ resultsTitle.textContent = 'All indexed shiurim'; renderCards(shiurim); return; }
  const filtered = shiurim.filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.topic.toLowerCase().includes(q) ||
    s.subtopic.toLowerCase().includes(q) ||
    s.speaker.toLowerCase().includes(q) ||
    s.date.includes(q)
  );
  resultsTitle.textContent = `Results for "${searchEl.value}"`;
  renderCards(filtered);
});

function renderToday(){
  const now = new Date();
  const mm = String(now.getMonth()+1).padStart(2,'0');
  const dd = String(now.getDate()).padStart(2,'0');
  const matches = shiurim.filter(s => s.date.slice(5) === `${mm}-${dd}`);
  if (matches.length){
    todayPanel.innerHTML = `<b>On this day:</b> ${matches.map(s=>s.title).join(', ')}`;
  } else {
    todayPanel.innerHTML = `<b>On this day:</b> nothing indexed yet from ${now.toLocaleDateString('en-US',{month:'long',day:'numeric'})} across past years — this fills in automatically as more of the archive is indexed.`;
  }
}

renderDrawers();
renderChips();
renderCards(shiurim);
renderToday();
</script>
</body>
</html>
