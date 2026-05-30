// StreetBowl — vanilla JS

function renderNav(active) {
  const el = document.getElementById('nav');
  if (!el) return;
  el.innerHTML = `
  <nav class="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-ink/5">
    <div class="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
      <a href="./home.html" class="flex items-center gap-2 group">
        <span class="w-9 h-9 rounded-full bg-chili text-white grid place-items-center font-display font-black text-lg group-hover:rotate-12 transition">S</span>
        <span class="font-display font-black text-xl tracking-tight">StreetBowl</span>
      </a>
      <div class="hidden md:flex items-center gap-8 text-sm font-semibold">
        <a href="./index.html"    class="${active==='home'?'text-chili':'text-ink/70'} hover:text-chili transition">Home</a>
        <a href="./explore.html" class="${active==='explore'?'text-chili':'text-ink/70'} hover:text-chili transition">Explore</a>
        <a href="./index.html#how-it-works" class="text-ink/70 hover:text-chili transition">How it works</a>
        <a href="./explore.html" class="bg-ink hover:bg-chili text-cream rounded-full px-4 py-2 transition">Find food</a>
      </div>
      <button id="hamburger" class="md:hidden p-2 -mr-2" aria-label="Open menu">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </nav>
  <div id="mobile-nav" class="mobile-nav fixed inset-0 z-50 bg-ink text-cream md:hidden">
    <div class="px-5 h-16 flex items-center justify-between border-b border-cream/10">
      <span class="font-display font-black text-xl">StreetBowl</span>
      <button id="close-nav" class="p-2 -mr-2" aria-label="Close menu">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
    </div>
    <div class="px-5 py-10 flex flex-col gap-6 text-2xl font-display font-bold">
      <a href="./index.html"    class="hover:text-chili transition">Home</a>
      <a href="./explore.html" class="hover:text-chili transition">Explore spots</a>
      <a href="./index.html#how-it-works" class="hover:text-chili transition">How it works</a>
      <a href="./explore.html" class="mt-4 inline-block bg-chili text-white rounded-full px-6 py-3 text-base text-center">Find food near me</a>
    </div>
  </div>`;
  const mob = document.getElementById('mobile-nav');
  document.getElementById('hamburger').onclick = () => mob.classList.add('open');
  document.getElementById('close-nav').onclick = () => mob.classList.remove('open');
}

function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="bg-ink text-cream/80">
    <div class="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-4 gap-10">
      <div class="md:col-span-2">
        <div class="flex items-center gap-2">
          <span class="w-9 h-9 rounded-full bg-chili text-white grid place-items-center font-display font-black">S</span>
          <span class="font-display font-black text-xl text-cream">StreetBowl</span>
        </div>
        <p class="mt-4 max-w-sm text-sm">The local guide to Nigeria's best street food. Built by hungry people, for hungry people.</p>
      </div>
      <div>
        <p class="font-semibold text-cream mb-3">Explore</p>
        <ul class="space-y-2 text-sm">
          <li><a href="./explore.html?city=Lagos" class="hover:text-chili transition">Lagos</a></li>
          <li><a href="./explore.html?city=Abuja" class="hover:text-chili transition">Abuja</a></li>
          <li><a href="./explore.html?city=Ibadan" class="hover:text-chili transition">Ibadan</a></li>
          <li><a href="./explore.html?city=Enugu" class="hover:text-chili transition">Enugu</a></li>
        </ul>
      </div>
      <div>
        <p class="font-semibold text-cream mb-3">StreetBowl</p>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-chili transition">List your vendor</a></li>
          <li><a href="#" class="hover:text-chili transition">About us</a></li>
          <li><a href="#" class="hover:text-chili transition">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-cream/10 py-5 text-center text-xs text-cream/50">© ${new Date().getFullYear()} StreetBowl · Made with pepper in Lagos.</div>
  </footer>`;
}

function stars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = '';
  for (let i = 0; i < 5; i++) {
    const filled = i < full || (i === full && half);
    s += `<svg class="w-4 h-4 ${filled?'text-mustard':'text-ink/15'}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1.01L12 2z"/></svg>`;
  }
  return s;
}

function cardHTML(spot) {
  return `
  <a href="./spot.html?id=${spot.id}" class="card group block bg-white rounded-2xl border border-ink/5 overflow-hidden animate-pop">
    <div class="relative h-44 overflow-hidden bg-gradient-to-br ${spot.color}">
      ${spot.image
        ? `<img src="${spot.image}" alt="${spot.name}" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />`
        : `<div class="card-thumb absolute inset-0 grid place-items-center text-7xl">${spot.emoji}</div>`}
      <span class="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold">${spot.type}</span>
      <span class="absolute top-3 right-3 bg-ink/90 text-cream px-2.5 py-1 rounded-full text-xs font-semibold">${spot.price}</span>
    </div>
    <div class="p-5">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-display font-bold text-xl leading-tight group-hover:text-chili transition">${spot.name}</h3>
        <div class="flex items-center gap-1 shrink-0">
          <svg class="w-4 h-4 text-mustard" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1.01L12 2z"/></svg>
          <span class="text-sm font-semibold">${spot.rating}</span>
        </div>
      </div>
      <p class="mt-1 text-sm text-ink/60">${spot.tagline}</p>
      <div class="mt-4 flex items-center gap-2 text-xs text-ink/60">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"/><circle cx="12" cy="9" r="3"/></svg>
          ${spot.area}, ${spot.city} · ${spot.reviews} reviews
      </div>
    </div>
  </a>`;
}

function renderFeatured(container) {
  const top = [...window.SPOTS].sort((a,b)=>b.rating-a.rating).slice(0,6);
  container.innerHTML = top.map(cardHTML).join('');
}

function renderExplore() {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');
  const count = document.getElementById('count');
  const search = document.getElementById('search');
  const cityF = document.getElementById('city-filter');
  const typeF = document.getElementById('type-filter');
  const chips = document.getElementById('chips');

  const cities = [...new Set(window.SPOTS.map(s=>s.city))].sort();
  const types  = [...new Set(window.SPOTS.map(s=>s.type))].sort();
  cities.forEach(c => cityF.insertAdjacentHTML('beforeend', `<option>${c}</option>`));
  types.forEach(t  => typeF.insertAdjacentHTML('beforeend', `<option>${t}</option>`));

  const params = new URLSearchParams(location.search);
  if (params.get('q'))    search.value = params.get('q');
  if (params.get('city')) cityF.value  = params.get('city');

  const quickChips = ['Suya','Jollof','Akara','Asun','Pepper Soup'];
  chips.innerHTML = quickChips.map(c =>
    `<button data-chip="${c}" class="px-3 py-1 rounded-full bg-white border border-ink/10 text-sm hover:bg-ink hover:text-cream transition">${c}</button>`
  ).join('');
  chips.querySelectorAll('button').forEach(b => b.onclick = () => { search.value = b.dataset.chip; apply(); });

  function apply() {
    const q = search.value.trim().toLowerCase();
    const city = cityF.value;
    const type = typeF.value;
    const results = window.SPOTS.filter(s => {
      const hay = (s.name+' '+s.tagline+' '+s.area+' '+s.city+' '+s.type+' '+s.highlights.map(h=>h.name).join(' ')).toLowerCase();
      return (!q || hay.includes(q)) && (!city || s.city===city) && (!type || s.type===type);
    });
    grid.innerHTML = results.map(cardHTML).join('');
    count.textContent = `${results.length} spot${results.length===1?'':'s'} found`;
    empty.classList.toggle('hidden', results.length>0);
  }
  [search, cityF, typeF].forEach(el => el.addEventListener('input', apply));
  apply();
}

function renderSpot() {
  const id = new URLSearchParams(location.search).get('id');
  const spot = window.SPOTS.find(s => s.id === id) || window.SPOTS[0];
  document.title = `${spot.name} — StreetBowl`;

  const root = document.getElementById('spot-root');
  root.innerHTML = `
    <a href="./explore.html" class="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-chili transition">← Back to explore</a>

    <div class="mt-4 grid lg:grid-cols-5 gap-8">
      <div class="lg:col-span-3">
        <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br ${spot.color} aspect-[4/3] animate-pop">
          ${spot.image
            ? `<img src="${spot.image}" alt="${spot.name}" class="absolute inset-0 w-full h-full object-cover" />`
            : `<div class="absolute inset-0 grid place-items-center text-[180px] md:text-[240px]">${spot.emoji}</div>`}
          <div class="absolute top-4 left-4 flex gap-2">
            <span class="bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">${spot.type}</span>
            <span class="bg-ink/90 text-cream px-3 py-1 rounded-full text-xs font-semibold">${spot.price}</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3 mt-3">
          ${[1,2,3].map(()=> spot.image
            ? `<div class="aspect-square rounded-xl overflow-hidden"><img src="${spot.image}" alt="${spot.name}" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition" /></div>`
            : `<div class="aspect-square rounded-xl bg-gradient-to-br ${spot.color} grid place-items-center text-4xl opacity-70">${spot.emoji}</div>`).join('')}
        </div>
      </div>

      <div class="lg:col-span-2">
        <p class="text-chili font-semibold text-sm uppercase tracking-wider">${spot.area} · ${spot.city}</p>
        <h1 class="font-display font-black text-4xl md:text-5xl mt-2 leading-tight">${spot.name}</h1>
        <p class="mt-3 text-lg text-ink/70">${spot.tagline}</p>

        <div class="mt-4 flex items-center gap-3">
          <div class="flex">${stars(spot.rating)}</div>
          <span class="font-semibold">${spot.rating}</span>
          <span class="text-ink/50 text-sm">(${spot.reviews} reviews)</span>
        </div>

        <div class="mt-6 space-y-3 text-sm">
          <div class="flex gap-3"><span class="w-6">📍</span><span>${spot.address}</span></div>
          <div class="flex gap-3"><span class="w-6">🕒</span><span>${spot.hours}</span></div>
          <div class="flex gap-3"><span class="w-6">✨</span><span><strong>Best time:</strong> ${spot.bestTime}</span></div>
        </div>

        <div class="mt-6 flex gap-2">
          <a href="https://maps.google.com/?q=${encodeURIComponent(spot.address)}" target="_blank" class="flex-1 text-center bg-chili hover:bg-ink text-white font-semibold rounded-xl px-5 py-3 transition active:scale-95">Get directions</a>
          <button onclick="document.getElementById('reviews').scrollIntoView({behavior:'smooth'})" class="px-5 py-3 rounded-xl border border-ink/15 font-semibold hover:bg-ink hover:text-cream transition">Reviews</button>
        </div>
      </div>
    </div>

    <!-- Menu -->
    <section class="mt-16">
      <h2 class="font-display font-bold text-3xl md:text-4xl">What to order</h2>
      <p class="text-ink/60 mt-1">Curated by people who eat here often.</p>
      <div class="mt-8 grid md:grid-cols-2 gap-4">
        ${spot.highlights.map((h,i)=>`
          <div class="bg-white border border-ink/5 rounded-2xl p-5 hover:border-chili/40 hover:-translate-y-1 transition animate-pop" style="animation-delay:${i*60}ms">
            <div class="flex justify-between items-start gap-4">
              <h3 class="font-display font-bold text-lg">${h.name}</h3>
              <span class="font-semibold text-chili shrink-0">${h.price}</span>
            </div>
            <p class="mt-1 text-sm text-ink/60">${h.note}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Reviews -->
    <section id="reviews" class="mt-16">
      <div class="flex items-end justify-between">
        <div>
          <h2 class="font-display font-bold text-3xl md:text-4xl">Reviews</h2>
          <p class="text-ink/60 mt-1">${spot.reviews} people have eaten here.</p>
        </div>
      </div>

      <div class="mt-8 space-y-4" id="review-list">
        ${spot.reviewsList.map(r=>reviewHTML(r)).join('')}
      </div>

      <form id="review-form" class="mt-8 bg-white border border-ink/5 rounded-2xl p-5">
        <h3 class="font-display font-bold text-xl">Leave a review</h3>
        <div class="mt-4 grid sm:grid-cols-2 gap-3">
          <input required name="name" placeholder="Your name" class="border border-ink/10 rounded-xl px-4 py-3 outline-none focus:border-chili" />
          <select name="rating" class="border border-ink/10 rounded-xl px-4 py-3 outline-none focus:border-chili">
            <option value="5">★★★★★ — Life-changing</option>
            <option value="4">★★★★☆ — Really good</option>
            <option value="3">★★★☆☆ — It's okay</option>
            <option value="2">★★☆☆☆ — Skip</option>
          </select>
        </div>
        <textarea required name="text" rows="3" placeholder="Tell us what to order…" class="mt-3 w-full border border-ink/10 rounded-xl px-4 py-3 outline-none focus:border-chili"></textarea>
        <button class="mt-3 bg-chili hover:bg-ink text-white font-semibold rounded-xl px-5 py-3 transition active:scale-95">Post review</button>
      </form>
    </section>
  `;

  document.getElementById('review-form').addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const r = { name: fd.get('name'), rating: +fd.get('rating'), text: fd.get('text'), when: 'just now' };
    document.getElementById('review-list').insertAdjacentHTML('afterbegin', reviewHTML(r));
    e.target.reset();
  });
}

function reviewHTML(r) {
  const initials = (r.name||'?').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  return `
  <div class="bg-white border border-ink/5 rounded-2xl p-5 animate-pop">
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 rounded-full bg-chili/10 text-chili grid place-items-center font-semibold text-sm shrink-0">${initials}</div>
      <div class="flex-1">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <p class="font-semibold">${r.name}</p>
          <span class="text-xs text-ink/50">${r.when}</span>
        </div>
        <div class="flex mt-1">${stars(r.rating)}</div>
        <p class="mt-2 text-ink/80">${r.text}</p>
      </div>
    </div>
  </div>`;
}
