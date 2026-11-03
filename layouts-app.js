/* ============================================================
   Gl Cores Fontes e Fundos — Layouts Web Completos (lógica da página)
   Catálogo, mini-previews vivos, simulador e construtor combinado.
   ============================================================ */
(function () {
    'use strict';

    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const layoutById = id => GL.byId(GL.LAYOUTS, id);

    /* ------------------------------------------------------------
       Alternador de Tema (Modo Diurno / Noturno)
       ------------------------------------------------------------ */
    function initThemeToggle() {
        const btn = $('#themeToggleBtn'), icon = $('#themeIcon'), label = $('#themeLabel');
        if (!btn) return;
        function applyTheme(theme) {
            const light = theme === 'light';
            document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');
            document.documentElement.classList.toggle('light', light);
            document.documentElement.classList.toggle('dark', !light);
            icon.textContent = light ? '🌙' : '☀️';
            label.textContent = light ? 'Modo Noturno' : 'Modo Diurno';
            btn.setAttribute('title', light ? 'Alternar para Modo Noturno' : 'Alternar para Modo Diurno');
        }
        applyTheme(localStorage.getItem('gl_theme') || 'dark');
        btn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            localStorage.setItem('gl_theme', next);
            applyTheme(next);
        });
    }

    /* ------------------------------------------------------------
       Cópia com 1 clique + Toast
       ------------------------------------------------------------ */
    function showToast(msg) {
        const toast = $('#toast');
        $('#toastMsg').textContent = msg;
        toast.classList.add('show');
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    function feedback(btn, msg) {
        showToast(msg);
        if (!btn) return;
        if (!btn.dataset.orig) btn.dataset.orig = btn.innerHTML;
        btn.innerHTML = '✓ Copiado!';
        clearTimeout(btn._t);
        btn._t = setTimeout(() => { btn.innerHTML = btn.dataset.orig; delete btn.dataset.orig; }, 1800);
    }

    function fallbackCopy(text, btn, msg) {
        const t = document.createElement('textarea');
        t.style.position = 'fixed';
        t.style.left = '-9999px';
        t.value = text;
        document.body.appendChild(t);
        t.select();
        try { document.execCommand('copy'); feedback(btn, msg); }
        catch (e) { alert('Copie manualmente:\n\n' + text); }
        finally { document.body.removeChild(t); }
    }

    function copyText(text, msg, btn) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => feedback(btn, msg)).catch(() => fallbackCopy(text, btn, msg));
        } else {
            fallbackCopy(text, btn, msg);
        }
    }

    /* ------------------------------------------------------------
       Mini-previews vivos (iframes escalonados)
       ------------------------------------------------------------ */
    function scaleFrame(frame) {
        const ifr = frame.querySelector('iframe');
        if (!ifr) return;
        const w = frame.clientWidth, h = frame.clientHeight;
        if (!w || !h) return;
        if (frame.classList.contains('mobile')) {
            ifr.style.transform = `translateX(-50%) scale(${(h * 0.86) / 844})`;
        } else {
            ifr.style.transform = `scale(${w / 1280})`;
        }
    }

    const resizeObs = new ResizeObserver(entries => entries.forEach(e => scaleFrame(e.target)));

    const lazyObs = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (!en.isIntersecting) return;
            const frame = en.target;
            const ifr = frame.querySelector('iframe');
            const layout = layoutById(frame.dataset.id);
            ifr.addEventListener('load', () => { const l = frame.querySelector('.thumb-loading'); if (l) l.remove(); }, { once: true });
            ifr.srcdoc = GL.buildDoc(layout, null, { preview: true, thumb: true });
            lazyObs.unobserve(frame);
        });
    }, { rootMargin: '400px 0px' });

    /* ------------------------------------------------------------
       Catálogo
       ------------------------------------------------------------ */
    function cardHtml(l) {
        const n = String(GL.LAYOUTS.indexOf(l) + 1).padStart(2, '0');
        const cat = GL.byId(GL.CATEGORIES, l.cat);
        const t = GL.themeFor(l);
        const mobile = l.device === 'mobile';
        const anatomy = l.anatomy.map(a => `<span class="ab">${esc(a)}</span>`).join('<span class="plus">+</span>');
        const uses = l.uses.map(u => `<span class="use">${esc(u)}</span>`).join('');
        const dots = t.palette.hex.slice(0, 6).map(h => `<i style="background:${h}"></i>`).join('');
        return `<article class="lcard" data-id="${l.id}" data-cat="${l.cat}">
    <button type="button" class="thumb" data-act="sim" aria-label="Abrir ${esc(l.name)} em tela cheia no simulador">
        <div class="thumb-frame${mobile ? ' mobile' : ''}" data-id="${l.id}"><span class="thumb-loading">Carregando prévia…</span><iframe tabindex="-1" title="Prévia: ${esc(l.name)}"></iframe></div>
        <span class="thumb-badge">${mobile ? '📱 Mobile-first' : '🖥️ Desktop + 📱 Responsivo'}</span>
        <span class="thumb-hint">⛶ Tela cheia / Simulador</span>
    </button>
    <div class="lcard-body">
        <div class="lcard-top"><span class="cat-badge">${cat.icon} ${esc(cat.short)}</span><span class="lnum">#${n}</span></div>
        <h3>${esc(l.name)}</h3>
        <p class="summary">${esc(l.summary)}</p>
        <div class="block"><h4>🧱 Zonas estruturais (elásticas)</h4><div class="anatomy">${anatomy}</div></div>
        <div class="block"><h4>🎯 Uso ideal</h4><div class="uses">${uses}</div></div>
        <div class="combo-line" title="Combo sugerido aplicado na prévia">💡 Combo sugerido:
            <span class="dots">${dots}</span><strong>${esc(t.palette.name)}</strong>·
            <strong>${esc(t.font.title)} + ${esc(t.font.body)}</strong>·
            <span>${t.bg.path ? '🖼️ ' + esc(t.bg.name) : 'cor sólida'}</span>
        </div>
        <div class="lcard-actions">
            <button type="button" class="btn-act primary" data-act="prompt" title="Instrução detalhada para colar na IA">📋 Copiar Prompt IA</button>
            <button type="button" class="btn-act code" data-act="code" title="Esqueleto HTML5 + CSS Grid/Flexbox">💻 Copiar HTML/CSS</button>
            <button type="button" class="btn-act ghost" data-act="sim">🖥️ Simulador</button>
            <button type="button" class="btn-act ghost" data-act="combo">🔗 Combinar</button>
        </div>
    </div>
</article>`;
    }

    function renderCatalog() {
        $('#catalog').innerHTML = GL.CATEGORIES.map(c => {
            const items = GL.LAYOUTS.filter(l => l.cat === c.id);
            return `<section class="cat-section" data-cat="${c.id}">
    <div class="cat-section-head"><h2>${c.icon} ${esc(c.name)}</h2><span>${items.length} layouts</span></div>
    <div class="layout-grid">${items.map(cardHtml).join('')}</div>
</section>`;
        }).join('');

        $$('#catalog .thumb-frame').forEach(f => { resizeObs.observe(f); lazyObs.observe(f); });
        $('#totalCount').textContent = GL.LAYOUTS.length;
    }

    function renderPills() {
        const pills = [{ id: 'ALL', icon: '✨', short: 'Todos', count: GL.LAYOUTS.length }]
            .concat(GL.CATEGORIES.map(c => ({ ...c, count: GL.LAYOUTS.filter(l => l.cat === c.id).length })));
        $('#catPills').innerHTML = pills.map(p =>
            `<button type="button" class="cat-pill${p.id === 'ALL' ? ' active' : ''}" data-cat="${p.id}" role="tab">${p.icon} ${esc(p.short)} <span class="count">${p.count}</span></button>`
        ).join('');
    }

    let currentCat = 'ALL';
    function applyFilters() {
        const q = norm($('#searchInput').value.trim());
        let visible = 0;
        $$('.lcard').forEach(card => {
            const l = layoutById(card.dataset.id);
            const cat = GL.byId(GL.CATEGORIES, l.cat);
            const hay = norm([l.name, l.summary, cat.name, l.anatomy.join(' '), l.uses.join(' ')].join(' '));
            const ok = (currentCat === 'ALL' || l.cat === currentCat) && (!q || q.split(/\s+/).every(t => hay.includes(t)));
            card.style.display = ok ? '' : 'none';
            if (ok) visible++;
        });
        $$('.cat-section').forEach(sec => {
            sec.style.display = $$('.lcard', sec).some(c => c.style.display !== 'none') ? '' : 'none';
        });
        $('#emptyState').style.display = visible ? 'none' : 'block';
    }

    /* ------------------------------------------------------------
       Simulador em tela cheia (Desktop / Notebook / Tablet / Mobile)
       ------------------------------------------------------------ */
    const sim = { layout: null, theme: null, fromBuilder: false, w: 1440, h: 900, kind: 'desktop' };

    function fitSim() {
        const stage = $('#simStage'), device = $('#simDevice'), frame = $('#simFrame');
        const ring = sim.kind === 'mobile' || sim.kind === 'tablet' ? 24 : 0;
        const aw = stage.clientWidth - 40 - ring, ah = stage.clientHeight - 48 - ring;
        const s = Math.max(0.1, Math.min(1, aw / sim.w, ah / sim.h));
        device.style.width = sim.w * s + 'px';
        device.style.height = sim.h * s + 'px';
        frame.style.width = sim.w + 'px';
        frame.style.height = sim.h + 'px';
        frame.style.transform = `scale(${s})`;
        device.classList.toggle('is-mobile', sim.kind === 'mobile');
        device.classList.toggle('is-tablet', sim.kind === 'tablet');
        $('#simDim').textContent = `${sim.w} × ${sim.h}px · escala ${Math.round(s * 100)}%`;
    }

    function setDevice(kind) {
        const btn = $(`#deviceSwitch button[data-kind="${kind}"]`);
        $$('#deviceSwitch button').forEach(b => b.classList.toggle('active', b === btn));
        sim.kind = kind;
        sim.w = +btn.dataset.w;
        sim.h = +btn.dataset.h;
        fitSim();
    }

    function openSim(layout, theme, fromBuilder) {
        sim.layout = layout;
        sim.theme = theme || GL.themeFor(layout);
        sim.fromBuilder = !!fromBuilder;
        const cat = GL.byId(GL.CATEGORIES, layout.cat);
        $('#simTitle').textContent = layout.name;
        $('#simSub').textContent = `${cat.icon} ${cat.name} · ${layout.anatomy.length} blocos · interaja livremente com a prévia`;
        $('#simTheme').innerHTML = `${sim.fromBuilder ? '🔗 Combinação do construtor' : '💡 Combo sugerido'}: <strong>${esc(sim.theme.palette.name)}</strong> · <strong>${esc(sim.theme.font.title)} + ${esc(sim.theme.font.body)}</strong> · ${sim.theme.bg.path ? esc(sim.theme.bg.name) : 'cor sólida'}`;
        $('#simPrompt').innerHTML = sim.fromBuilder ? '📋 Copiar Prompt Mestre' : '📋 Copiar Prompt IA';
        $('#simFrame').srcdoc = GL.buildDoc(layout, sim.theme, { preview: true });
        $('#sim').classList.add('open');
        document.body.style.overflow = 'hidden';
        setDevice(layout.device === 'mobile' ? 'mobile' : 'desktop');
        requestAnimationFrame(fitSim);
        $('#simClose').focus();
    }

    function closeSim() {
        $('#sim').classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => { if (!$('#sim').classList.contains('open')) $('#simFrame').srcdoc = ''; }, 300);
    }

    function openInNewTab(layout, theme) {
        const html = GL.buildDoc(layout, theme, { absolute: true });
        const url = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
        window.open(url, '_blank', 'noopener');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
    }

    /* ------------------------------------------------------------
       Construtor Combinado (Fundo + Paleta + Fontes + Layout)
       ------------------------------------------------------------ */
    const loadedFonts = new Set();
    function loadFontInPage(f) {
        if (loadedFonts.has(f.id)) return;
        loadedFonts.add(f.id);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = GL.fontsHref(f);
        document.head.appendChild(link);
    }

    function builderState() {
        return {
            layout: layoutById($('#cLayout').value),
            theme: {
                bg: GL.byId(GL.BACKGROUNDS, $('#cBg').value),
                palette: GL.byId(GL.PALETTES, $('#cPalette').value),
                font: GL.byId(GL.FONTS, $('#cFont').value)
            }
        };
    }

    function populateBuilder() {
        $('#cLayout').innerHTML = GL.CATEGORIES.map(c =>
            `<optgroup label="${c.icon} ${esc(c.name)}">${GL.LAYOUTS.filter(l => l.cat === c.id).map(l => `<option value="${l.id}">${esc(l.name)}</option>`).join('')}</optgroup>`
        ).join('');
        $('#cBg').innerHTML = GL.BACKGROUNDS.map(b => `<option value="${b.id}">${esc(b.name)}</option>`).join('');
        $('#cPalette').innerHTML = GL.PALETTES.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join('');
        $('#cFont').innerHTML = GL.FONTS.map(f => `<option value="${f.id}">${esc(f.title)} + ${esc(f.body)} — ${esc(f.cat)}</option>`).join('');
    }

    function applySuggestion(layoutId) {
        const l = layoutById(layoutId || $('#cLayout').value);
        $('#cLayout').value = l.id;
        $('#cBg').value = l.combo.bg;
        $('#cPalette').value = l.combo.palette;
        $('#cFont').value = l.combo.font;
        updateBuilder();
    }

    let previewTimer = null;
    function updateBuilder() {
        const { layout, theme } = builderState();
        const { bg, palette, font } = theme;

        // Fundo
        $('#cBgMini').style.backgroundImage = bg.path ? `url('${bg.path}')` : 'none';
        $('#cBgMini').style.backgroundColor = palette.bg;
        $('#cBgInfo').textContent = bg.path ? bg.path : `Cor sólida ${palette.bg}`;

        // Paleta
        $('#cSwatches').innerHTML = palette.hex.map(h => `<i style="background:${h}" title="${h}"></i>`).join('');

        // Fontes
        loadFontInPage(font);
        $('#cFontSample').innerHTML = `<div><strong style="font-family:'${font.title}',${font.ts}">${esc(font.title)}</strong><span style="font-family:'${font.body}',${font.bs}">Corpo em ${esc(font.body)} · ${esc(font.cat)}</span></div>`;

        // URL fictícia + prompt
        $('#cUrl').textContent = `meu-projeto.app/${layout.id}`;
        $('#cPromptOut').textContent = GL.buildMasterPrompt(layout, theme);

        // Prévia ao vivo
        const frame = $('#cFrame');
        frame.classList.toggle('mobile', layout.device === 'mobile');
        clearTimeout(previewTimer);
        previewTimer = setTimeout(() => {
            $('#cPreview').srcdoc = GL.buildDoc(layout, theme, { preview: true, thumb: true });
            scaleFrame(frame);
        }, 120);
    }

    function randomPick(list) { return list[Math.floor(Math.random() * list.length)]; }

    function initBuilder() {
        populateBuilder();
        resizeObs.observe($('#cFrame'));
        ['#cBg', '#cPalette', '#cFont'].forEach(s => $(s).addEventListener('change', updateBuilder));
        $('#cLayout').addEventListener('change', () => applySuggestion($('#cLayout').value));
        $('#cSuggest').addEventListener('click', () => { applySuggestion(); showToast('✨ Combo sugerido do layout aplicado!'); });
        $('#cRandom').addEventListener('click', () => {
            $('#cBg').value = randomPick(GL.BACKGROUNDS).id;
            $('#cPalette').value = randomPick(GL.PALETTES).id;
            $('#cFont').value = randomPick(GL.FONTS).id;
            updateBuilder();
            showToast('🎲 Nova combinação gerada!');
        });
        $('#cCopyMaster').addEventListener('click', e => {
            const { layout, theme } = builderState();
            copyText(GL.buildMasterPrompt(layout, theme), '🔗 Prompt Mestre (Fundo + Paleta + Fontes + Layout) copiado!', e.currentTarget);
        });
        $('#cCopyCode').addEventListener('click', e => {
            const { layout, theme } = builderState();
            copyText(GL.buildDoc(layout, theme, { absolute: true }), '💻 HTML/CSS com o tema aplicado copiado!', e.currentTarget);
        });
        const openBuilderSim = () => { const { layout, theme } = builderState(); openSim(layout, theme, true); };
        $('#cOpenSim').addEventListener('click', openBuilderSim);
        $('#cThumb').addEventListener('click', openBuilderSim);

        applySuggestion('split-6040');
    }

    function sendToBuilder(layout, theme) {
        $('#cLayout').value = layout.id;
        if (theme) {
            $('#cBg').value = theme.bg.id;
            $('#cPalette').value = theme.palette.id;
            $('#cFont').value = theme.font.id;
            updateBuilder();
        } else {
            applySuggestion(layout.id);
        }
        $('#builder').scrollIntoView({ behavior: 'smooth', block: 'start' });
        showToast('🔗 Layout enviado ao Construtor Combinado!');
    }

    /* ------------------------------------------------------------
       Eventos
       ------------------------------------------------------------ */
    function initEvents() {
        // Ações dos cards (delegação)
        $('#catalog').addEventListener('click', e => {
            const btn = e.target.closest('[data-act]');
            if (!btn) return;
            const layout = layoutById(btn.closest('.lcard').dataset.id);
            switch (btn.dataset.act) {
                case 'prompt': copyText(GL.buildPrompt(layout, true), '📋 Prompt IA (Vibe Coding) copiado!', btn); break;
                case 'code': copyText(GL.buildDoc(layout, null, { absolute: true }), '💻 Estrutura HTML/CSS (boilerplate) copiada!', btn); break;
                case 'sim': openSim(layout); break;
                case 'combo': sendToBuilder(layout); break;
            }
        });

        // Filtros
        $('#catPills').addEventListener('click', e => {
            const p = e.target.closest('.cat-pill');
            if (!p) return;
            currentCat = p.dataset.cat;
            $$('.cat-pill').forEach(b => b.classList.toggle('active', b === p));
            applyFilters();
        });
        $('#searchInput').addEventListener('input', applyFilters);

        // Simulador
        $('#deviceSwitch').addEventListener('click', e => { const b = e.target.closest('button'); if (b) setDevice(b.dataset.kind); });
        $('#simClose').addEventListener('click', closeSim);
        $('#sim').addEventListener('click', e => { if (e.target.id === 'sim') closeSim(); });
        $('#simPrompt').addEventListener('click', e => {
            const txt = sim.fromBuilder ? GL.buildMasterPrompt(sim.layout, sim.theme) : GL.buildPrompt(sim.layout, true);
            copyText(txt, sim.fromBuilder ? '🔗 Prompt Mestre copiado!' : '📋 Prompt IA copiado!', e.currentTarget);
        });
        $('#simCode').addEventListener('click', e => copyText(GL.buildDoc(sim.layout, sim.theme, { absolute: true }), '💻 HTML/CSS copiado!', e.currentTarget));
        $('#simNewTab').addEventListener('click', () => openInNewTab(sim.layout, sim.theme));
        $('#simToBuilder').addEventListener('click', () => { const l = sim.layout, t = sim.theme; closeSim(); sendToBuilder(l, t); });

        document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#sim').classList.contains('open')) closeSim(); });
        window.addEventListener('resize', () => { if ($('#sim').classList.contains('open')) fitSim(); });

        $('#goBuilder').addEventListener('click', () => $('#builder').scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }

    /* ------------------------------------------------------------
       Inicialização
       ------------------------------------------------------------ */
    // Mantém a toolbar sticky logo abaixo do cabeçalho (altura varia quando ele quebra linha)
    const header = $('.app-header');
    if (header) new ResizeObserver(() => document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px')).observe(header);

    initThemeToggle();
    renderPills();
    renderCatalog();
    initBuilder();
    initEvents();

    // Deep link: layouts.html?layout=<id> abre direto no simulador
    const deep = new URLSearchParams(location.search).get('layout');
    if (deep && GL.LAYOUTS.some(l => l.id === deep)) openSim(layoutById(deep));
})();
