/* ============================================================
   Gl Cores Fontes e Fundos — Catálogo de Layouts Web Completos
   Dados: CSS base, paletas, pares tipográficos, fundos e layouts.
   Cada layout é um boilerplate real (HTML5 + CSS Grid/Flexbox)
   tematizável por variáveis CSS (--bg, --text, --primary, ...).
   ============================================================ */

window.GL = window.GL || {};

GL.REPO_RAW = 'https://raw.githubusercontent.com/GlauberLASantiago/gl-cores-fontes-e-fundos/main';

/* ---------- Categorias ---------- */
GL.CATEGORIES = [
  { id: 'landing', icon: '🚀', name: 'Landing Pages & Apresentação', short: 'Landing Pages' },
  { id: 'dashboard', icon: '📊', name: 'Dashboards, SaaS & Sistemas Web', short: 'Dashboards & SaaS' },
  { id: 'educacao', icon: '🎓', name: 'Educação, Cursos & Acadêmico', short: 'Educação & Acadêmico' },
  { id: 'portfolio', icon: '🎨', name: 'Portfólios, Galerias & Catálogos Criativos', short: 'Portfólios & Catálogos' },
  { id: 'mobile', icon: '📱', name: 'Interfaces Mobile-First & Web Apps Compactos', short: 'Mobile-First' }
];

/* ---------- Paletas (curadoria de paletas.html) ----------
   Papéis: bg (fundo), text (texto), primary (ação), accent (destaque) */
GL.PALETTES = [
  { id: 'neo', name: 'Neo Glassmorphism & SaaS', hex: ['#0F172A', '#38BDF8', '#818CF8', '#C084FC', '#F43F5E', '#F8FAFC'], bg: '#0F172A', text: '#F8FAFC', primary: '#38BDF8', accent: '#C084FC' },
  { id: 'darkmode', name: 'Minimalista Dark Mode', hex: ['#090D16', '#1E293B', '#0EA5E9', '#10B981', '#64748B', '#FFFFFF'], bg: '#090D16', text: '#FFFFFF', primary: '#0EA5E9', accent: '#10B981' },
  { id: 'aurora', name: 'Aurora Boreal B2B', hex: ['#0B132B', '#1C2541', '#3A506B', '#5BC0BE', '#6FFFE9', '#FFFFFF'], bg: '#0B132B', text: '#FFFFFF', primary: '#5BC0BE', accent: '#6FFFE9' },
  { id: 'fintech', name: 'Fintech & Cripto Futurista', hex: ['#050814', '#2E5BFF', '#00D2D3', '#F9AA33', '#263238', '#FAFAFA'], bg: '#050814', text: '#FAFAFA', primary: '#2E5BFF', accent: '#F9AA33' },
  { id: 'ia', name: 'Inteligência Artificial & Quântico', hex: ['#0D0221', '#0F084B', '#26408B', '#A6CFE2', '#C2E7D9', '#7928CA'], bg: '#0D0221', text: '#E6F4F1', primary: '#7928CA', accent: '#A6CFE2' },
  { id: 'slate', name: 'Monocromia Slate Luxo', hex: ['#0F172A', '#1E293B', '#334155', '#64748B', '#94A3B8', '#E2E8F0'], bg: '#0F172A', text: '#E2E8F0', primary: '#94A3B8', accent: '#64748B' },
  { id: 'synthwave', name: 'Synthwave Miami 1984', hex: ['#241734', '#2E2157', '#FD3A69', '#FECD1A', '#01C5C4', '#FFFFFF'], bg: '#241734', text: '#FFFFFF', primary: '#FD3A69', accent: '#01C5C4' },
  { id: 'bladerunner', name: 'Blade Runner Neo-Noir', hex: ['#0D1317', '#1D2D35', '#FF2A6D', '#05D9E8', '#005678', '#D1F7FF'], bg: '#0D1317', text: '#D1F7FF', primary: '#FF2A6D', accent: '#05D9E8' },
  { id: 'esmeralda', name: 'Esmeralda Nobre & Champanhe', hex: ['#0B2B26', '#163832', '#235347', '#8EB69B', '#DAF1DE', '#D4AF37'], bg: '#0B2B26', text: '#DAF1DE', primary: '#D4AF37', accent: '#8EB69B' },
  { id: 'oceano', name: 'Oceano Profundo', hex: ['#001219', '#005F73', '#0A9396', '#94D2BD', '#E9D8A6', '#EE9B00'], bg: '#001219', text: '#E9D8A6', primary: '#0A9396', accent: '#EE9B00' },
  { id: 'luxo', name: 'Editorial Luxo & E-commerce', hex: ['#1A1A1A', '#E2D4C9', '#C5A880', '#5B616A', '#9A8262', '#F9F6F0'], bg: '#F9F6F0', text: '#1A1A1A', primary: '#9A8262', accent: '#5B616A' },
  { id: 'matcha', name: 'Matcha, Chá Verde & Bambu', hex: ['#2C3E2D', '#588157', '#8A9A5B', '#DAD7CD', '#F3F4F6', '#3A5A40'], bg: '#F3F4F6', text: '#2C3E2D', primary: '#3A5A40', accent: '#8A9A5B' },
  { id: 'terracota', name: 'Terracota & Eucalipto', hex: ['#BC6C25', '#DDA15E', '#FEFAE0', '#283618', '#606C38', '#384628'], bg: '#FEFAE0', text: '#283618', primary: '#BC6C25', accent: '#606C38' },
  { id: 'cafe', name: 'Café Especial & Torra Média', hex: ['#2B1700', '#4A2810', '#8B5E3C', '#D4A373', '#CCD5AE', '#FAEDCD'], bg: '#FAEDCD', text: '#2B1700', primary: '#8B5E3C', accent: '#4A2810' },
  { id: 'mediterranea', name: 'Costa Mediterrânea & Capri', hex: ['#1D3557', '#457B9D', '#A8DADC', '#F1FAEE', '#E63946', '#FFB703'], bg: '#F1FAEE', text: '#1D3557', primary: '#E63946', accent: '#457B9D' },
  { id: 'horizonte', name: 'Grupo Horizonte', hex: ['#BCDFB9', '#C87F8B', '#E9A97F', '#E7F0C7', '#000000', '#FFFFFF'], bg: '#FFFFFF', text: '#111111', primary: '#C87F8B', accent: '#5E9C59' }
];

/* ---------- Pares Tipográficos (curadoria de fontes.html) ---------- */
GL.FONTS = [
  { id: 'outfit', title: 'Outfit', body: 'Inter', tw: '600;700;800', bw: '400;500;600', ts: 'sans-serif', bs: 'sans-serif', cat: 'Tech & SaaS' },
  { id: 'jakarta', title: 'Plus Jakarta Sans', body: 'DM Sans', tw: '600;700;800', bw: '400;500;700', ts: 'sans-serif', bs: 'sans-serif', cat: 'Fintech & Apps' },
  { id: 'syne', title: 'Syne', body: 'Work Sans', tw: '700;800', bw: '400;500;600', ts: 'sans-serif', bs: 'sans-serif', cat: 'Criativo & Agência' },
  { id: 'spacegrotesk', title: 'Space Grotesk', body: 'Space Mono', tw: '600;700', bw: '400;700', ts: 'sans-serif', bs: 'monospace', cat: 'Cyberpunk & Web3' },
  { id: 'playfair', title: 'Playfair Display', body: 'Plus Jakarta Sans', tw: '600;700;800', bw: '400;500;600', ts: 'serif', bs: 'sans-serif', cat: 'Editorial & Luxo' },
  { id: 'lexend', title: 'Lexend', body: 'Inter', tw: '600;700;800', bw: '400;500;600', ts: 'sans-serif', bs: 'sans-serif', cat: 'Produtividade & Dashboard' },
  { id: 'fraunces', title: 'Fraunces', body: 'Inter', tw: '700;900', bw: '400;500;600', ts: 'serif', bs: 'sans-serif', cat: 'Criativo & Vintage' },
  { id: 'merriweather', title: 'Merriweather', body: 'Source Sans 3', tw: '700;900', bw: '400;500;600', ts: 'serif', bs: 'sans-serif', cat: 'Clássico & Acadêmico' },
  { id: 'bricolage', title: 'Bricolage Grotesque', body: 'Manrope', tw: '700;800', bw: '400;500;700', ts: 'sans-serif', bs: 'sans-serif', cat: 'Tech & SaaS' },
  { id: 'newsreader', title: 'Newsreader', body: 'Inter', tw: '600;700;800', bw: '400;500;600', ts: 'serif', bs: 'sans-serif', cat: 'Clássico & Acadêmico' },
  { id: 'instrument', title: 'Instrument Serif', body: 'Inter', tw: '400', bw: '400;500;600', ts: 'serif', bs: 'sans-serif', cat: 'Editorial & Luxo' },
  { id: 'unbounded', title: 'Unbounded', body: 'Spline Sans', tw: '700;800;900', bw: '400;500', ts: 'sans-serif', bs: 'sans-serif', cat: 'Cyberpunk & Web3' },
  { id: 'montserrat', title: 'Montserrat', body: 'Open Sans', tw: '600;700;800', bw: '400;600', ts: 'sans-serif', bs: 'sans-serif', cat: 'Corporativo & Institucional' },
  { id: 'baskerville', title: 'Libre Baskerville', body: 'Source Serif 4', tw: '700', bw: '400;600', ts: 'serif', bs: 'serif', cat: 'Clássico & Acadêmico' },
  { id: 'dmserif', title: 'DM Serif Display', body: 'DM Sans', tw: '400', bw: '400;500;700', ts: 'serif', bs: 'sans-serif', cat: 'Editorial & Luxo' },
  { id: 'sora', title: 'Sora', body: 'Readex Pro', tw: '700;800', bw: '400;500', ts: 'sans-serif', bs: 'sans-serif', cat: 'Tech & SaaS' }
];

/* ---------- Fundos Visuais (curadoria da galeria index.html) ---------- */
GL.BACKGROUNDS = [
  { id: 'none', name: 'Sem imagem (cor sólida da paleta)', path: '' },
  { id: 'bokeh', name: 'Gotas de água & bokeh (Abstrato)', path: 'abstrato/05_realista_gotas_de_agua_vidro_bokeh.png' },
  { id: 'prisma', name: 'Prisma refratando arco-íris (Abstrato)', path: 'abstrato/01_realista_prisma_refratando_arco_iris.png' },
  { id: 'orion', name: 'Nebulosa de Órion (Espaço)', path: 'espaco/01_realista_nebulosa_orion_colorida.png' },
  { id: 'vialactea', name: 'Via Láctea no deserto (Espaço)', path: 'espaco/03_realista_via_lactea_deserto_noturno.png' },
  { id: 'museu', name: 'Museu minimalista (Arquitetura)', path: 'arquitetura/01_realista_museu_minimalista_moderno.png' },
  { id: 'bibmoderna', name: 'Biblioteca moderna em madeira (Arquitetura)', path: 'arquitetura/04_realista_biblioteca_moderna_madeira.png' },
  { id: 'bibhist', name: 'Biblioteca histórica (Educação)', path: 'educacao/01_realista_biblioteca_historica_livros.png' },
  { id: 'campus', name: 'Estudante no campus (Educação)', path: 'educacao/02_realista_estudante_universitaria_campus.png' },
  { id: 'celulas', name: 'Microscopia de células (Ciência)', path: 'ciencia/02_realista_microscopia_celulas_fluorescentes.png' },
  { id: 'datacenter', name: 'Data center iluminado (Tecnologia)', path: 'tecnologia/02_realista_servidores_data_center_luzes.png' },
  { id: 'cafe', name: 'Café expresso latte art (Gastronomia)', path: 'gastronomia/01_realista_cafe_expresso_latte_art.png' },
  { id: 'piano', name: 'Piano de cauda no palco (Música)', path: 'musica/01_realista_piano_de_cauda_palco.png' },
  { id: 'cinema', name: 'Sala de cinema clássica (Cinema)', path: 'cinema/03_realista_sala_cinema_poltronas_vermelhas.png' },
  { id: 'horaazul', name: 'Hora azul urbana (Fotografia)', path: 'fotografia/25_realista_hora_azul_arquitetura_urbana.png' },
  { id: 'led', name: 'Instalação LED imersiva (Digitais)', path: 'estilos_digitais/22_realista_instalacao_led_imersiva_arte.png' }
];

/* ---------- CSS Base compartilhado por todos os boilerplates ---------- */
GL.BASE_CSS = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--surface:color-mix(in srgb,var(--text) 6%,var(--bg));--surface-2:color-mix(in srgb,var(--text) 11%,var(--bg));--border:color-mix(in srgb,var(--text) 14%,transparent);--muted:color-mix(in srgb,var(--text) 62%,var(--bg));--radius:16px;--gap:24px;--pad:clamp(16px,4vw,48px)}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);color:var(--text);background:linear-gradient(color-mix(in srgb,var(--bg) 86%,transparent),color-mix(in srgb,var(--bg) 95%,transparent)),var(--bg-image) center/cover fixed,var(--bg);line-height:1.6;min-height:100vh;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4{font-family:var(--font-title);line-height:1.15;letter-spacing:-.01em}
a{color:inherit;text-decoration:none;cursor:pointer}
button{font:inherit;color:inherit;cursor:pointer}
:focus-visible{outline:2px solid var(--primary);outline-offset:3px}
.container{width:min(1200px,100% - 2*var(--pad));margin-inline:auto}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 22px;border-radius:999px;border:1px solid var(--border);background:var(--surface);color:var(--text);font-weight:600;font-size:.95rem;transition:transform .2s,filter .2s}
.btn:hover{transform:translateY(-2px);filter:brightness(1.08)}
.btn-primary{background:var(--primary);border-color:var(--primary);color:var(--on-primary)}
.btn-sm{padding:8px 16px;font-size:.85rem}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:24px}
.glass{background:color-mix(in srgb,var(--surface) 55%,transparent);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--border)}
.ph{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 38%,var(--surface-2)),color-mix(in srgb,var(--accent) 32%,var(--surface-2)));border-radius:calc(var(--radius) - 4px);min-height:120px}
.muted{color:var(--muted)}
.small{font-size:.82rem}
.eyebrow{font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;color:var(--primary);font-weight:700}
.chip{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;border:1px solid var(--border);background:var(--surface);font-size:.82rem;font-weight:600;white-space:nowrap}
.chip.active{background:var(--primary);color:var(--on-primary);border-color:var(--primary)}
.skel{height:10px;border-radius:6px;background:var(--surface-2)}
.row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.nav{position:sticky;top:0;z-index:10;background:color-mix(in srgb,var(--bg) 78%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--border)}
.nav-in{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:68px}
.logo{font-family:var(--font-title);font-size:1.25rem;font-weight:700;color:var(--text);display:flex;gap:8px;align-items:center}
.links{display:flex;gap:28px;font-size:.92rem;color:var(--muted)}
.links a:hover{color:var(--text)}
.icon{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:color-mix(in srgb,var(--primary) 18%,transparent);margin-bottom:14px;font-size:1.2rem}
.avatar{display:inline-block;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--accent));flex-shrink:0}
.bars{display:flex;align-items:flex-end;gap:10px;height:220px;margin-top:20px}
.bars i{flex:1;height:var(--h);border-radius:8px 8px 4px 4px;background:linear-gradient(var(--primary),color-mix(in srgb,var(--primary) 25%,transparent))}
.bar{height:8px;border-radius:99px;background:var(--surface-2);overflow:hidden}
.bar i{display:block;height:100%;background:linear-gradient(90deg,var(--primary),var(--accent));border-radius:inherit}
.search-sm{flex:1;max-width:420px;display:flex;gap:8px;align-items:center;padding:9px 16px;border-radius:999px;background:var(--surface);border:1px solid var(--border)}
.search-sm input{background:none;border:0;outline:0;color:var(--text);font:inherit;width:100%;min-width:0}
.close{width:38px;height:38px;border-radius:50%;border:1px solid var(--border);background:var(--surface-2);color:var(--text);display:grid;place-items:center}
.foot{padding:32px 0;border-top:1px solid var(--border);font-size:.85rem;color:var(--muted)}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important;scroll-behavior:auto!important}}
@media (max-width:800px){.links{display:none}}`;

/* Lista de layouts (preenchida nos blocos abaixo) */
GL.LAYOUTS = [];

/* ============================================================
   1. 🚀 LANDING PAGES & APRESENTAÇÃO
   ============================================================ */
GL.LAYOUTS.push({
  id: 'split-6040', cat: 'landing', icon: '◧',
  name: 'Split Screen Assimétrico (60/40)',
  summary: 'Coluna esquerda com tipografia de impacto, subtítulo e 2 CTAs; coluna direita com card interativo flutuante; faixa de métricas e grid de 3 recursos.',
  anatomy: ['Header Fixo Glassmorphism', 'Hero Split 60/40', 'Card Preview Flutuante', 'Faixa de 4 Métricas', 'Grid de 3 Recursos', 'Rodapé Simples'],
  uses: ['Landing Page de Produto', 'Startup / SaaS', 'Lançamento de App', 'Curso Online'],
  combo: { bg: 'bokeh', palette: 'neo', font: 'outfit' },
  spec: {
    grid: 'Hero em CSS Grid com grid-template-columns: 3fr 2fr (60/40), align-items: center. Abaixo, faixa de métricas em grid de 4 colunas com bordas superior/inferior e grid de 3 cards de recursos (repeat(3, 1fr)). Container central com largura máxima de 1200px.',
    spacing: 'Gap do hero clamp(32px, 5vw, 72px); padding vertical do hero clamp(48px, 8vw, 112px); gap entre cards 24px; padding interno dos cards 24px; botões com padding 12px 22px e border-radius 999px.',
    hierarchy: 'H1 monumental clamp(2.4rem, 5.2vw, 4.4rem) com eyebrow acima (selo "Novo"); subtítulo 1.15rem limitado a 52ch em cor atenuada; CTA primário sólido + CTA secundário outline lado a lado; métricas em fonte de título 2rem na cor primária.',
    mobile: 'Abaixo de 900px o hero vira 1 coluna (texto primeiro, card depois), o card perde a rotação, os recursos empilham em 1 coluna, as métricas viram grid 2×2 e os links do menu são ocultados.',
    interactions: 'Header sticky com backdrop-filter: blur(14px); card flutuante levemente rotacionado (-2deg) com sombra colorida na cor primária; botões sobem 2px no hover.',
    tw: 'grid lg:grid-cols-5 (texto lg:col-span-3, card lg:col-span-2), gap-16, py-28; métricas grid-cols-2 md:grid-cols-4; recursos grid md:grid-cols-3 gap-6; header sticky top-0 backdrop-blur-md.'
  },
  css: `.hero{display:grid;grid-template-columns:3fr 2fr;gap:clamp(32px,5vw,72px);align-items:center;padding-block:clamp(48px,8vw,112px)}
.hero h1{font-size:clamp(2.4rem,5.2vw,4.4rem);margin:14px 0 18px}
.lead{font-size:1.15rem;max-width:52ch}
.ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:32px}
.float-card{display:grid;gap:14px;transform:rotate(-2deg);box-shadow:0 30px 80px -20px color-mix(in srgb,var(--primary) 45%,transparent)}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--gap);padding:28px 0;border-block:1px solid var(--border)}
.metrics div{display:grid;text-align:center}
.metrics strong{font-family:var(--font-title);font-size:2rem;color:var(--primary)}
.features{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap);padding-block:72px}
.features h3{margin-bottom:6px}
@media(max-width:900px){.hero{grid-template-columns:1fr}.float-card{transform:none}.features{grid-template-columns:1fr}.metrics{grid-template-columns:repeat(2,1fr)}}`,
  html: `<header class="nav glass"><div class="container nav-in"><strong class="logo">◆ Marca</strong><nav class="links"><a>Produto</a><a>Recursos</a><a>Preços</a><a>Contato</a></nav><a class="btn btn-primary btn-sm">Começar</a></div></header>
<main>
  <section class="container hero">
    <div class="hero-copy">
      <span class="eyebrow">Novo • Versão 2.0</span>
      <h1>Crie interfaces memoráveis em minutos</h1>
      <p class="muted lead">Subtítulo de apoio com a proposta de valor em uma ou duas linhas, explicando o benefício principal para o seu público.</p>
      <div class="ctas"><a class="btn btn-primary">Começar grátis →</a><a class="btn">▶ Ver demonstração</a></div>
    </div>
    <div class="hero-visual">
      <div class="float-card card glass">
        <div class="ph" style="min-height:180px"></div>
        <h3>Preview interativo</h3>
        <p class="muted">Card flutuante com uma prévia real do produto ou serviço.</p>
        <div class="row"><span class="chip active">Ativo</span><span class="chip">Rascunho</span><span class="chip">Arquivado</span></div>
      </div>
    </div>
  </section>
  <section class="container metrics">
    <div><strong>12k+</strong><span class="muted">usuários ativos</span></div>
    <div><strong>98%</strong><span class="muted">satisfação</span></div>
    <div><strong>4.9★</strong><span class="muted">avaliação média</span></div>
    <div><strong>24/7</strong><span class="muted">suporte</span></div>
  </section>
  <section class="container features">
    <article class="card"><div class="icon">⚡</div><h3>Rápido</h3><p class="muted">Descrição curta do primeiro recurso e do benefício que ele entrega.</p></article>
    <article class="card"><div class="icon">🎯</div><h3>Preciso</h3><p class="muted">Descrição curta do segundo recurso e do benefício que ele entrega.</p></article>
    <article class="card"><div class="icon">🔒</div><h3>Seguro</h3><p class="muted">Descrição curta do terceiro recurso e do benefício que ele entrega.</p></article>
  </section>
</main>
<footer class="foot"><div class="container">© 2026 Marca • Todos os direitos reservados</div></footer>`
});

GL.LAYOUTS.push({
  id: 'hero-cinema', cat: 'landing', icon: '◉',
  name: 'Hero Centralizado Cinematográfico + Glass Cards',
  summary: 'Fundo visual em tela cheia, título monumental centralizado, barra de busca/ação em destaque e fileira de cards translúcidos (glassmorphism) na base.',
  anatomy: ['Header Transparente Sobreposto', 'Hero 100vh com Imagem de Fundo', 'Título Monumental Centralizado', 'Barra de Busca Glass', 'Fileira de 4 Glass Cards', 'Seção Seguinte'],
  uses: ['Turismo & Eventos', 'Portal Cultural / Museu', 'Lançamento Cinematográfico', 'Plataforma de Busca'],
  combo: { bg: 'horaazul', palette: 'aurora', font: 'instrument' },
  spec: {
    grid: 'Hero com min-height: 100vh em Flexbox vertical (header no topo, conteúdo central com flex: 1, cards na base). Conteúdo central em coluna com align-items/justify-content: center e text-align: center. Cards da base em grid de 4 colunas.',
    spacing: 'Altura do header 80px; gap do bloco central 18px; barra de busca com largura min(640px, 100%) e padding 8px 8px 8px 20px; gap dos cards 16px; padding dos cards 20px; padding inferior do hero 40px.',
    hierarchy: 'H1 monumental clamp(3rem, 9vw, 7.5rem) com line-height .95 e no máximo 14ch; eyebrow acima; frase curta abaixo em cor atenuada; barra de busca como principal ação visual; cards numerados (01–04) com título curto.',
    mobile: 'Cards passam para 2 colunas abaixo de 900px e 1 coluna abaixo de 560px; links do menu ocultados; o título reduz via clamp mantendo impacto; o botão de busca fica mais compacto.',
    interactions: 'Imagem de fundo com overlay em gradiente (radial na cor primária + linear escurecendo para a cor de fundo na base) garantindo contraste AA; cards e barra com backdrop-filter: blur(16px) e borda translúcida.',
    tw: 'min-h-screen flex flex-col bg-cover bg-center; centro flex-1 flex flex-col items-center justify-center text-center; h1 text-6xl md:text-8xl leading-none; busca rounded-full backdrop-blur-xl bg-white/10; cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.'
  },
  css: `.cine{min-height:100vh;display:flex;flex-direction:column;background:radial-gradient(ellipse at 50% 30%,color-mix(in srgb,var(--primary) 28%,transparent),transparent 60%),linear-gradient(180deg,color-mix(in srgb,var(--bg) 35%,transparent),color-mix(in srgb,var(--bg) 55%,transparent) 55%,var(--bg)),var(--bg-image) center/cover,linear-gradient(135deg,color-mix(in srgb,var(--accent) 25%,var(--bg)),var(--bg))}
.cine>.nav-in{min-height:80px}
.cine-center{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:18px;padding-block:48px}
.cine-center h1{font-size:clamp(3rem,9vw,7.5rem);line-height:.95;max-width:14ch}
.search{display:flex;align-items:center;gap:10px;width:min(640px,100%);padding:8px 8px 8px 20px;border-radius:999px;margin-top:12px}
.search input{flex:1;background:none;border:0;outline:0;color:var(--text);font:inherit;min-width:0}
.cine-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding-bottom:40px}
.gcard{border-radius:var(--radius);padding:20px}
.gcard h3{margin:6px 0}
.below{padding-block:80px;text-align:center}
.below h2{font-size:2.4rem;margin-bottom:10px}
@media(max-width:900px){.cine-cards{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.cine-cards{grid-template-columns:1fr}.search .btn{padding:10px 14px}}`,
  html: `<section class="cine">
  <header class="container nav-in"><strong class="logo">◆ Marca</strong><nav class="links"><a>Explorar</a><a>Coleções</a><a>Agenda</a><a>Sobre</a></nav><a class="btn btn-sm glass">Entrar</a></header>
  <div class="container cine-center">
    <span class="eyebrow">Experiência imersiva</span>
    <h1>Descubra o extraordinário</h1>
    <p class="muted">Uma frase curta e evocativa que complementa o título monumental.</p>
    <form class="search glass" onsubmit="return false"><span>🔍</span><input placeholder="Buscar destinos, cursos, coleções..." aria-label="Buscar"><button class="btn btn-primary">Buscar</button></form>
  </div>
  <div class="container cine-cards">
    <article class="glass gcard"><span class="eyebrow">01</span><h3>Curadoria</h3><p class="muted small">Seleção especial de conteúdos em destaque.</p></article>
    <article class="glass gcard"><span class="eyebrow">02</span><h3>Roteiros</h3><p class="muted small">Caminhos guiados para explorar com calma.</p></article>
    <article class="glass gcard"><span class="eyebrow">03</span><h3>Agenda</h3><p class="muted small">Próximos eventos e encontros ao vivo.</p></article>
    <article class="glass gcard"><span class="eyebrow">04</span><h3>Comunidade</h3><p class="muted small">Pessoas que compartilham a mesma paixão.</p></article>
  </div>
</section>
<section class="container below"><h2>Seção seguinte</h2><p class="muted">Conteúdo complementar exibido após o hero em tela cheia.</p></section>`
});

GL.LAYOUTS.push({
  id: 'z-pattern', cat: 'landing', icon: '⇄',
  name: 'Storytelling em Z-Pattern (Alternado)',
  summary: 'Cabeçalho minimalista + seções que alternam imagem e texto em zigue-zague para conduzir a leitura, tabela comparativa e FAQ em acordeão.',
  anatomy: ['Cabeçalho Minimalista', 'Intro Centralizada', '3 Seções Alternadas Imagem/Texto', 'Tabela Comparativa', 'FAQ em Acordeão', 'Rodapé'],
  uses: ['Página de Serviço', 'Apresentação de Projeto', 'Produto com Planos', 'Relato de Caso'],
  combo: { bg: 'none', palette: 'mediterranea', font: 'playfair' },
  spec: {
    grid: 'Seções em CSS Grid de 2 colunas iguais (1fr 1fr) com align-items: center; a cada seção par, a ordem visual se inverte (order: 2 na mídia) criando o zigue-zague. Tabela comparativa com largura total e FAQ centralizado com largura máxima de 760px.',
    spacing: 'Gap entre mídia e texto 64px; padding vertical de cada seção 56px; intro com padding 96px 0 48px; células da tabela com padding 16px 20px; itens do FAQ com padding 18px 22px e margem de 12px.',
    hierarchy: 'Cada seção com eyebrow "Etapa 0X" → H2 clamp(1.8rem, 3.4vw, 2.6rem) → parágrafo atenuado; mídia com proporção 4:3; última coluna da tabela (plano recomendado) destacada na cor primária.',
    mobile: 'Abaixo de 800px as seções viram 1 coluna com a mídia sempre acima do texto (order reset), gap reduzido para 24px; tabela rola horizontalmente se necessário.',
    interactions: 'FAQ com <details>/<summary> nativo (acessível por teclado, sem JS); primeiro item aberto por padrão.',
    tw: 'grid md:grid-cols-2 gap-16 items-center py-14; seções pares com md:[&>*:first-child]:order-2; tabela w-full divide-y; FAQ max-w-3xl mx-auto com <details> estilizados.'
  },
  css: `.intro{text-align:center;padding:96px 0 48px;max-width:760px}
.intro h1{font-size:clamp(2.2rem,5vw,3.8rem);margin:12px 0}
.z{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;padding-block:56px}
.z .ph{aspect-ratio:4/3}
.z h2{font-size:clamp(1.8rem,3.4vw,2.6rem);margin:10px 0}
.z.rev>:first-child{order:2}
.center{text-align:center;margin-bottom:28px;font-size:2.2rem}
.table-wrap{overflow-x:auto;margin-bottom:72px}
.cmp{width:100%;border-collapse:collapse;background:var(--surface);border-radius:var(--radius);overflow:hidden;min-width:480px}
.cmp th,.cmp td{padding:16px 20px;text-align:left;border-bottom:1px solid var(--border)}
.cmp th{background:var(--surface-2);font-size:.8rem;text-transform:uppercase;letter-spacing:.06em}
.cmp td:last-child{color:var(--primary);font-weight:600}
.faq{max-width:760px;padding-bottom:80px}
.faq details{border:1px solid var(--border);border-radius:12px;padding:18px 22px;margin-bottom:12px;background:var(--surface)}
.faq summary{cursor:pointer;font-weight:600}
.faq details p{margin-top:10px}
@media(max-width:800px){.z{grid-template-columns:1fr;gap:24px}.z.rev>:first-child{order:0}}`,
  html: `<header class="nav"><div class="container nav-in"><strong class="logo">◆ Marca</strong><nav class="links"><a>História</a><a>Comparativo</a><a>FAQ</a></nav><a class="btn btn-sm btn-primary">Contratar</a></div></header>
<section class="container intro"><span class="eyebrow">Como funciona</span><h1>Uma jornada contada em etapas</h1><p class="muted">O leitor percorre a página em zigue-zague, alternando imagem e texto, até chegar à decisão.</p></section>
<section class="container z"><div class="ph"></div><div><span class="eyebrow">Etapa 01</span><h2>O problema</h2><p class="muted">Apresente o contexto e a dor do público com clareza e empatia. Um parágrafo curto, direto e fácil de escanear.</p></div></section>
<section class="container z rev"><div class="ph"></div><div><span class="eyebrow">Etapa 02</span><h2>A solução</h2><p class="muted">Mostre como a proposta resolve o problema, com um benefício concreto e mensurável.</p></div></section>
<section class="container z"><div class="ph"></div><div><span class="eyebrow">Etapa 03</span><h2>O resultado</h2><p class="muted">Feche com prova social, números ou depoimento que reforce a confiança.</p></div></section>
<section class="container"><h2 class="center">Comparativo de planos</h2>
  <div class="table-wrap"><table class="cmp"><thead><tr><th>Recurso</th><th>Básico</th><th>Pro ★</th></tr></thead><tbody>
    <tr><td>Modelos disponíveis</td><td>5</td><td>Ilimitados</td></tr>
    <tr><td>Exportação</td><td>PNG</td><td>PNG, SVG, PDF</td></tr>
    <tr><td>Colaboração</td><td>—</td><td>Equipe completa</td></tr>
    <tr><td>Suporte</td><td>E-mail</td><td>Prioritário 24/7</td></tr>
  </tbody></table></div>
</section>
<section class="container faq"><h2 class="center">Perguntas frequentes</h2>
  <details open><summary>Posso cancelar quando quiser?</summary><p class="muted">Sim. O cancelamento é imediato e sem multa.</p></details>
  <details><summary>Existe período de teste?</summary><p class="muted">Oferecemos 14 dias gratuitos com todos os recursos.</p></details>
  <details><summary>Funciona no celular?</summary><p class="muted">Sim, a interface é totalmente responsiva.</p></details>
</section>
<footer class="foot"><div class="container">© 2026 Marca • Política de privacidade</div></footer>`
});

/* ============================================================
   2. 📊 DASHBOARDS, SAAS & SISTEMAS WEB
   ============================================================ */
GL.LAYOUTS.push({
  id: 'app-shell', cat: 'dashboard', icon: '▤',
  name: 'App Shell Clássico (Sidebar + Topbar + Canvas Grid)',
  summary: 'Menu lateral recolhível à esquerda, barra superior com busca/perfil/tema, linha de 4 KPIs no topo e área principal com gráfico (2/3) + feed de atividades (1/3).',
  anatomy: ['Sidebar Recolhível', 'Topbar com Busca, Tema e Perfil', 'Linha de 4 KPIs', 'Gráfico Principal 2/3', 'Feed de Atividades 1/3'],
  uses: ['Dashboard SaaS', 'Painel Administrativo', 'Sistema de Gestão', 'Analytics'],
  combo: { bg: 'none', palette: 'darkmode', font: 'lexend' },
  spec: {
    grid: 'Shell em CSS Grid: grid-template-columns: 260px 1fr (recolhido: 76px 1fr) com min-height: 100vh. Sidebar sticky com height: 100vh. Canvas com grid de KPIs repeat(4, 1fr) e área dividida grid-template-columns: 2fr 1fr.',
    spacing: 'Topbar com 64px de altura e padding horizontal 24px; canvas com padding 28px e gap 24px; gap dos KPIs e do split 20px; itens do menu com padding 10px 14px e radius 10px.',
    hierarchy: 'Título da página 2rem; KPIs com rótulo atenuado → valor grande em fonte de título 1.7rem → variação percentual colorida (accent); item ativo do menu com fundo tingido pela cor primária.',
    mobile: 'Até 1000px: KPIs 2×2 e split em 1 coluna. Até 700px: sidebar vira drawer off-canvas (position: fixed, translateX(-100%)) aberto pelo botão ☰, busca da topbar oculta.',
    interactions: 'Botão ☰ alterna a classe .collapsed no <body> (sidebar recolhida no desktop / drawer aberto no mobile) com transição de 0.3s; topbar sticky translúcida com blur.',
    tw: 'grid grid-cols-[260px_1fr] min-h-screen; aside sticky top-0 h-screen; header sticky h-16 backdrop-blur; KPIs grid grid-cols-2 xl:grid-cols-4 gap-5; split grid lg:grid-cols-3 (gráfico lg:col-span-2).'
  },
  css: `.shell{display:grid;grid-template-columns:260px 1fr;min-height:100vh;transition:grid-template-columns .3s}
.collapsed .shell{grid-template-columns:76px 1fr}
.collapsed .side span,.collapsed .side-foot{display:none}
.side{position:sticky;top:0;height:100vh;display:flex;flex-direction:column;gap:24px;padding:20px 14px;background:var(--surface);border-right:1px solid var(--border);overflow:hidden}
.side .logo{padding:4px 10px}
.side nav{display:grid;gap:4px}
.side nav a{display:flex;gap:12px;padding:10px 14px;border-radius:10px;color:var(--muted);font-weight:500;white-space:nowrap}
.side nav a.on,.side nav a:hover{background:color-mix(in srgb,var(--primary) 16%,transparent);color:var(--text)}
.side-foot{margin-top:auto;padding:16px}
.top{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:16px;height:64px;padding:0 24px;border-bottom:1px solid var(--border);background:color-mix(in srgb,var(--bg) 80%,transparent);backdrop-filter:blur(12px)}
.top-actions{margin-left:auto;display:flex;gap:10px;align-items:center}
.canvas{padding:28px;display:grid;gap:24px}
.canvas h1{font-size:2rem}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.kpi{display:grid;gap:4px}
.kpi strong{font-size:1.7rem;font-family:var(--font-title)}
.kpi em{font-style:normal;color:var(--accent);font-size:.85rem;font-weight:600}
.split{display:grid;grid-template-columns:2fr 1fr;gap:20px}
.feed ul{list-style:none;display:grid;gap:16px;margin-top:16px}
.feed li{display:flex;gap:12px;align-items:flex-start}
.feed li div{display:grid}
.dot{width:10px;height:10px;border-radius:50%;background:var(--accent);margin-top:7px;flex-shrink:0}
@media(max-width:1000px){.kpis{grid-template-columns:repeat(2,1fr)}.split{grid-template-columns:1fr}}
@media(max-width:700px){.shell,.collapsed .shell{grid-template-columns:1fr}.side{position:fixed;inset:0 auto 0 0;width:260px;z-index:20;transform:translateX(-100%);transition:transform .3s}.collapsed .side{transform:none}.collapsed .side span{display:inline}.collapsed .side-foot{display:block}.top .search-sm{display:none}.canvas{padding:18px}}`,
  html: `<div class="shell">
  <aside class="side">
    <div class="logo">◆ <span>Painel</span></div>
    <nav><a class="on">🏠 <span>Visão geral</span></a><a>📊 <span>Relatórios</span></a><a>👥 <span>Clientes</span></a><a>📦 <span>Produtos</span></a><a>💬 <span>Mensagens</span></a><a>⚙️ <span>Configurações</span></a></nav>
    <div class="side-foot card"><strong>Plano Pro</strong><p class="muted small">7 dias restantes</p></div>
  </aside>
  <div class="main">
    <header class="top">
      <button class="btn btn-sm" onclick="document.body.classList.toggle('collapsed')" aria-label="Alternar menu">☰</button>
      <div class="search-sm">🔍 <input placeholder="Buscar..." aria-label="Buscar"></div>
      <div class="top-actions"><button class="btn btn-sm" aria-label="Tema">🌙</button><button class="btn btn-sm" aria-label="Notificações">🔔</button><span class="avatar"></span></div>
    </header>
    <main class="canvas">
      <h1>Visão geral</h1>
      <section class="kpis">
        <div class="card kpi"><span class="muted small">Receita</span><strong>R$ 48,2k</strong><em>▲ 12%</em></div>
        <div class="card kpi"><span class="muted small">Usuários</span><strong>3.481</strong><em>▲ 8%</em></div>
        <div class="card kpi"><span class="muted small">Conversão</span><strong>4,6%</strong><em>▲ 0,4 pp</em></div>
        <div class="card kpi"><span class="muted small">Tickets</span><strong>27</strong><em>▼ 5%</em></div>
      </section>
      <section class="split">
        <div class="card"><h3>Desempenho mensal</h3><div class="bars"><i style="--h:40%"></i><i style="--h:55%"></i><i style="--h:48%"></i><i style="--h:70%"></i><i style="--h:62%"></i><i style="--h:80%"></i><i style="--h:74%"></i><i style="--h:90%"></i><i style="--h:68%"></i><i style="--h:85%"></i><i style="--h:95%"></i><i style="--h:88%"></i></div></div>
        <div class="card feed"><h3>Atividades</h3><ul>
          <li><span class="dot"></span><div><strong>Novo pedido #1042</strong><small class="muted">há 2 min</small></div></li>
          <li><span class="dot"></span><div><strong>Cliente cadastrado</strong><small class="muted">há 18 min</small></div></li>
          <li><span class="dot"></span><div><strong>Relatório exportado</strong><small class="muted">há 1 h</small></div></li>
          <li><span class="dot"></span><div><strong>Pagamento aprovado</strong><small class="muted">há 3 h</small></div></li>
        </ul></div>
      </section>
    </main>
  </div>
</div>`
});

GL.LAYOUTS.push({
  id: 'bento', cat: 'dashboard', icon: '▦',
  name: 'Bento Grid Modular (Estilo Apple / Linear)',
  summary: 'Layout organizado em blocos retangulares assimétricos (2×2, 2×1, 1×2, 1×1) com cantos arredondados amplos — ideal para painéis de resumo, hubs de ferramentas e portfólios modernos.',
  anatomy: ['Header Fixo Translúcido', 'Título de Seção', 'Bento 4 Colunas', 'Bloco Hero 2×2', 'Blocos Largos 2×1', 'Bloco Alto 1×2', 'Blocos 1×1 de Métrica/Ação'],
  uses: ['Hub de Ferramentas', 'Página de Recursos SaaS', 'Portfólio Moderno', 'Painel de Resumo'],
  combo: { bg: 'none', palette: 'neo', font: 'bricolage' },
  spec: {
    grid: 'CSS Grid de 4 colunas (repeat(4, 1fr)) com grid-auto-rows: 190px e grid-auto-flow: dense. Blocos com spans: hero grid-column/grid-row span 2; largos grid-column: span 2; alto grid-row: span 2; demais 1×1.',
    spacing: 'Gap uniforme de 16px; padding interno dos blocos 24px; border-radius amplo de 28px; cabeçalho da seção com padding 64px 0 32px.',
    hierarchy: 'Bloco 2×2 concentra a mensagem principal (H2 2.2rem + imagem); bloco de métrica com número gigante 3.2rem na cor primária; um bloco de ação 1×1 preenchido com gradiente primary→accent para criar ponto focal.',
    mobile: 'Até 900px: 2 colunas. Até 560px: 1 coluna com grid-auto-rows: auto, todos os spans resetados e altura mínima de 160px por bloco.',
    interactions: 'Hover eleva o bloco 4px e acende a borda na cor primária (transição 0.25s).',
    tw: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[190px] grid-flow-dense gap-4; blocos rounded-[28px] p-6; hero lg:col-span-2 lg:row-span-2; largos sm:col-span-2; alto lg:row-span-2.'
  },
  css: `.bento-head{padding:64px 0 32px;max-width:640px}
.bento-head h1{font-size:clamp(2.2rem,5vw,3.6rem);margin-bottom:8px}
.bento{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:190px;grid-auto-flow:dense;gap:16px;padding-bottom:80px}
.tile{background:var(--surface);border:1px solid var(--border);border-radius:28px;padding:24px;display:flex;flex-direction:column;gap:8px;overflow:hidden;transition:transform .25s,border-color .25s}
.tile:hover{transform:translateY(-4px);border-color:var(--primary)}
.t-hero{grid-column:span 2;grid-row:span 2}
.t-hero h2{font-size:2.2rem}
.t-hero .ph{flex:1;min-height:0}
.t-wide{grid-column:span 2}
.t-tall{grid-row:span 2}
.tile.accent{background:linear-gradient(135deg,var(--primary),var(--accent));color:var(--on-primary);border:0;justify-content:space-between}
.tile.accent p{font-size:2rem}
.big{font-family:var(--font-title);font-size:3.2rem;color:var(--primary);line-height:1}
.thumbs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;flex:1}
.thumbs .ph{min-height:0}
.avatars{display:flex;padding-left:10px}.avatars .avatar{margin-left:-10px;border:3px solid var(--surface);width:44px;height:44px}
.tile ul{list-style:none;display:grid;gap:12px}
.tile li{display:flex;justify-content:space-between;border-bottom:1px solid var(--border);padding-bottom:10px;font-size:.92rem}
.tile .bars{height:auto;flex:1;margin-top:4px}
.news{display:flex;gap:8px;margin-top:auto}
.news input{flex:1;min-width:0;padding:10px 14px;border-radius:999px;border:1px solid var(--border);background:var(--surface-2);color:var(--text);font:inherit}
@media(max-width:900px){.bento{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.bento{grid-template-columns:1fr;grid-auto-rows:auto}.t-hero,.t-wide,.t-tall{grid-column:auto;grid-row:auto}.tile{min-height:160px}.t-hero .ph{min-height:160px}}`,
  html: `<header class="nav"><div class="container nav-in"><strong class="logo">◆ Hub</strong><nav class="links"><a>Ferramentas</a><a>Projetos</a><a>Sobre</a></nav><a class="btn btn-sm btn-primary">Contato</a></div></header>
<main class="container">
  <div class="bento-head"><span class="eyebrow">Visão geral</span><h1>Tudo em um só lugar</h1><p class="muted">Blocos modulares que organizam conteúdo de diferentes pesos em uma composição equilibrada.</p></div>
  <section class="bento">
    <article class="tile t-hero"><span class="eyebrow">Destaque</span><h2>Bloco principal 2×2</h2><p class="muted">A mensagem mais importante ganha o maior espaço.</p><div class="ph"></div></article>
    <article class="tile t-wide"><h3>Atividade semanal</h3><div class="bars"><i style="--h:35%"></i><i style="--h:60%"></i><i style="--h:45%"></i><i style="--h:80%"></i><i style="--h:65%"></i><i style="--h:90%"></i><i style="--h:70%"></i></div></article>
    <article class="tile"><span class="big">98%</span><p class="muted">Satisfação dos usuários</p></article>
    <article class="tile accent"><h3>Começar agora</h3><p>→</p></article>
    <article class="tile t-tall"><h3>Agenda</h3><ul><li><span>Reunião</span><span class="muted">09:00</span></li><li><span>Revisão</span><span class="muted">11:30</span></li><li><span>Workshop</span><span class="muted">14:00</span></li><li><span>Entrega</span><span class="muted">17:00</span></li></ul></article>
    <article class="tile t-wide"><h3>Galeria</h3><div class="thumbs"><div class="ph"></div><div class="ph"></div><div class="ph"></div></div></article>
    <article class="tile"><h3>Equipe</h3><div class="avatars"><span class="avatar"></span><span class="avatar"></span><span class="avatar"></span><span class="avatar"></span></div><p class="muted small">12 pessoas online</p></article>
    <article class="tile"><span class="big">24</span><p class="muted">Projetos ativos</p></article>
    <article class="tile t-wide"><h3>Newsletter</h3><p class="muted small">Novidades quinzenais, sem spam.</p><form class="news" onsubmit="return false"><input placeholder="seu@email.com" aria-label="E-mail"><button class="btn btn-primary btn-sm">Assinar</button></form></article>
  </section>
</main>`
});

GL.LAYOUTS.push({
  id: 'three-pane', cat: 'dashboard', icon: '▥',
  name: 'Workspace de Painel Triplo (3-Pane Studio / IDE)',
  summary: 'Coluna esquerda de navegação/arquivos, palco central amplo de visualização/edição e inspetor de propriedades à direita (estilo Figma, Notion ou geradores de IA).',
  anatomy: ['Topbar de Ferramentas', 'Painel de Arquivos & Camadas', 'Palco Central com Artboard', 'Toolbar Flutuante', 'Inspetor de Propriedades'],
  uses: ['Editor / Ferramenta Criativa', 'Gerador de IA', 'IDE Web', 'Construtor de Páginas'],
  combo: { bg: 'none', palette: 'slate', font: 'jakarta' },
  spec: {
    grid: 'Aplicação em tela cheia (height: 100vh; overflow: hidden) com CSS Grid: grid-template-columns: 240px 1fr 280px e grid-template-rows: 56px 1fr. Topbar ocupa grid-column: 1 / -1. Cada painel lateral rola de forma independente (overflow: auto).',
    spacing: 'Padding dos painéis 16px com gap 12px; itens de árvore com padding 6px 10px; artboard com padding 24px, largura min(720px, 86%) e proporção 16:10; toolbar flutuante a 16px do topo.',
    hierarchy: 'Palco central domina a tela com fundo pontilhado (dot grid 20px); títulos de painel em caixa-alta 0.72rem atenuados; item selecionado com fundo tingido; artboard com outline na cor primária indicando seleção.',
    mobile: 'Até 1000px o inspetor direito é ocultado. Até 700px vira 1 coluna: árvore oculta, palco com 60vh e inspetor reaparece abaixo do palco.',
    interactions: 'Toolbar flutuante em pílula centralizada; hover nos itens da árvore; inputs do inspetor com foco na cor primária.',
    tw: 'h-screen grid grid-cols-[240px_1fr_280px] grid-rows-[56px_1fr] overflow-hidden; topbar col-span-full; painéis overflow-y-auto p-4; palco bg-[radial-gradient(...)] grid place-items-center.'
  },
  css: `.studio{display:grid;grid-template-columns:240px 1fr 280px;grid-template-rows:56px 1fr;height:100vh;overflow:hidden}
.s-top{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 16px;border-bottom:1px solid var(--border);background:var(--surface)}
.tabs{display:flex;gap:6px}
.pane{background:var(--surface);overflow:auto;padding:16px;display:flex;flex-direction:column;gap:12px}
.left{border-right:1px solid var(--border)}.right{border-left:1px solid var(--border)}
.pane h4{font-family:var(--font-body);font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
.tree{list-style:none;display:grid;gap:2px;font-size:.88rem}
.tree li{padding:6px 10px;border-radius:8px;cursor:pointer}
.tree li.on,.tree li:hover{background:color-mix(in srgb,var(--primary) 16%,transparent)}
.tree .in{padding-left:28px;color:var(--muted)}
.stage{position:relative;display:grid;place-items:center;overflow:auto;background:radial-gradient(circle,var(--border) 1px,transparent 1px) 0 0/20px 20px,var(--bg)}
.toolbar{position:absolute;top:16px;left:50%;transform:translateX(-50%);display:flex;gap:6px;align-items:center;padding:6px;border-radius:999px;background:var(--surface);border:1px solid var(--border)}
.zoom{padding:0 10px;font-size:.8rem}
.artboard{width:min(720px,86%);aspect-ratio:16/10;background:var(--surface);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:14px;box-shadow:0 30px 60px -20px rgba(0,0,0,.5);outline:2px solid var(--primary);outline-offset:6px}
.art-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;flex:1}.art-grid .ph{min-height:0}
.right label{display:grid;gap:6px;font-size:.8rem;color:var(--muted)}
.right input{background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:8px 10px;color:var(--text);font:inherit;accent-color:var(--primary)}
.right input:focus{border-color:var(--primary);outline:0}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.swatches{display:flex;gap:8px}.swatches i{width:32px;height:32px;border-radius:8px;border:1px solid var(--border)}
.mini-card{display:grid;gap:4px;padding:14px}
@media(max-width:1000px){.studio{grid-template-columns:200px 1fr}.right{display:none}}
@media(max-width:700px){.studio{grid-template-columns:1fr;grid-template-rows:56px auto auto;height:auto;min-height:100vh;overflow:visible}.left,.tabs{display:none}.right{display:flex;border-left:0;border-top:1px solid var(--border)}.stage{min-height:60vh}}`,
  html: `<div class="studio">
  <header class="s-top"><strong class="logo">◆ Studio</strong><div class="tabs"><span class="chip active">Design</span><span class="chip">Protótipo</span><span class="chip">Código</span></div><div class="row"><span class="avatar"></span><a class="btn btn-sm btn-primary">Compartilhar</a></div></header>
  <aside class="pane left">
    <h4>Arquivos</h4>
    <ul class="tree"><li class="on">📄 Página inicial</li><li>📁 Componentes</li><li class="in">▫ Botão</li><li class="in">▫ Card</li><li>📁 Assets</li><li>📄 Sobre</li></ul>
    <h4>Camadas</h4>
    <ul class="tree"><li>▢ Header</li><li class="on">▢ Hero</li><li>▢ Grid de cards</li><li>▢ Rodapé</li></ul>
  </aside>
  <main class="stage">
    <div class="toolbar"><span class="chip active">↖</span><span class="chip">▢</span><span class="chip">T</span><span class="chip">✎</span><span class="muted zoom">100%</span></div>
    <div class="artboard"><div class="ph" style="height:38%;flex:none"></div><div class="skel" style="width:60%"></div><div class="skel" style="width:40%"></div><div class="art-grid"><div class="ph"></div><div class="ph"></div><div class="ph"></div></div></div>
  </main>
  <aside class="pane right">
    <h4>Propriedades</h4>
    <div class="duo"><label>Largura<input value="1280"></label><label>Altura<input value="800"></label></div>
    <label>Raio dos cantos<input type="range" value="40"></label>
    <h4>Cor</h4>
    <div class="swatches"><i style="background:var(--primary)"></i><i style="background:var(--accent)"></i><i style="background:var(--text)"></i><i style="background:var(--surface-2)"></i></div>
    <h4>Tipografia</h4>
    <div class="card mini-card"><strong style="font-family:var(--font-title);font-size:1.3rem">Aa Título</strong><span class="muted">Aa Corpo do texto</span></div>
  </aside>
</div>`
});

/* ============================================================
   3. 🎓 EDUCAÇÃO, CURSOS & ACADÊMICO
   ============================================================ */
GL.LAYOUTS.push({
  id: 'lms', cat: 'educacao', icon: '▶',
  name: 'Ambiente de Aprendizagem / Curso Interativo (LMS)',
  summary: 'Barra lateral com trilha de módulos e progresso, player/conteúdo central em destaque, abas de material complementar e bloco de quiz/exercício interativo.',
  anatomy: ['Topbar com Barra de Progresso', 'Sidebar com Trilha de Módulos', 'Player de Vídeo em Destaque', 'Abas de Material Complementar', 'Bloco de Quiz Interativo'],
  uses: ['App Educacional', 'Curso Online / EAD', 'Design Instrucional', 'Treinamento Corporativo'],
  combo: { bg: 'none', palette: 'matcha', font: 'lexend' },
  spec: {
    grid: 'Topbar sticky + corpo em CSS Grid: grid-template-columns: 300px 1fr com min-height: calc(100vh - 68px). Coluna de conteúdo em grid vertical (gap 20px, align-content: start) com largura máxima de 980px.',
    spacing: 'Sidebar com padding 24px; itens da trilha com padding 12px 14px e radius 12px; conteúdo com padding 32px clamp(16px, 4vw, 56px); opções do quiz com padding 12px 16px.',
    hierarchy: 'Eyebrow "Módulo X · Aula Y" → H1 da aula → player 16:9 como elemento dominante → abas (chips) → conteúdo da aba → quiz destacado em card. Na trilha: concluídos (✓), atual (▶, destacado com borda primária) e bloqueados (🔒) diferenciados visualmente.',
    mobile: 'Abaixo de 860px vira 1 coluna: a trilha de módulos passa para o topo como faixa horizontal rolável (scroll-x) e o rótulo da barra de progresso é ocultado.',
    interactions: 'Abas como chips alternáveis; opções de quiz como <label> com radio, hover realçando a borda; botão play circular com halo na cor primária; barra de progresso com gradiente primary→accent.',
    tw: 'grid md:grid-cols-[300px_1fr]; aside border-r p-6; trilha flex md:flex-col overflow-x-auto; player aspect-video rounded-2xl grid place-items-center; quiz space-y-3 com labels rounded-xl border.'
  },
  css: `.progress-top{display:flex;align-items:center;gap:12px;flex:1;max-width:420px;font-size:.85rem}
.progress-top .bar{flex:1}
.lms{display:grid;grid-template-columns:300px 1fr;min-height:calc(100vh - 68px)}
.modules{border-right:1px solid var(--border);padding:24px;background:var(--surface)}
.modules h4{font-family:var(--font-body);font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:14px}
.modules ol{list-style:none;display:grid;gap:6px}
.modules li{display:flex;gap:12px;padding:12px 14px;border-radius:12px;font-size:.92rem;color:var(--muted);border:1px solid transparent}
.modules li.done{color:var(--text)}
.modules li.done b{color:var(--accent)}
.modules li.now{background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text);font-weight:600;border-color:color-mix(in srgb,var(--primary) 40%,transparent)}
.lesson{padding:32px clamp(16px,4vw,56px);display:grid;gap:20px;align-content:start;max-width:980px}
.lesson h1{font-size:clamp(1.8rem,3.4vw,2.6rem)}
.player{aspect-ratio:16/9;border-radius:var(--radius);background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 45%,#000),color-mix(in srgb,var(--accent) 35%,#111));display:grid;place-items:center;position:relative;overflow:hidden}
.play{width:76px;height:76px;border-radius:50%;border:0;background:var(--primary);color:var(--on-primary);font-size:1.6rem;box-shadow:0 0 0 12px color-mix(in srgb,var(--primary) 25%,transparent)}
.timeline{position:absolute;left:20px;right:20px;bottom:18px;height:6px;border-radius:9px;background:rgba(255,255,255,.25)}
.timeline i{display:block;width:35%;height:100%;background:#fff;border-radius:inherit}
.tabs-row{display:flex;gap:8px;flex-wrap:wrap}
.quiz{display:grid;gap:12px}
.opt{display:flex;gap:10px;align-items:center;padding:12px 16px;border:1px solid var(--border);border-radius:12px;cursor:pointer;background:var(--bg)}
.opt:hover,.opt:has(input:checked){border-color:var(--primary)}
.opt input{accent-color:var(--primary)}
@media(max-width:860px){.lms{grid-template-columns:1fr}.modules{border-right:0;border-bottom:1px solid var(--border);padding:16px}.modules ol{grid-auto-flow:column;grid-auto-columns:max-content;overflow-x:auto}.progress-top .muted{display:none}}`,
  html: `<header class="nav"><div class="nav-in" style="padding:0 24px"><strong class="logo">◆ Academia</strong><div class="progress-top"><span class="muted">Progresso do curso</span><div class="bar"><i style="width:42%"></i></div><strong>42%</strong></div><span class="avatar"></span></div></header>
<div class="lms">
  <aside class="modules"><h4>Trilha do curso</h4><ol>
    <li class="done"><b>✓</b><span>1 · Boas-vindas</span></li>
    <li class="done"><b>✓</b><span>2 · Fundamentos</span></li>
    <li class="now"><b>▶</b><span>3 · Prática guiada</span></li>
    <li><b>○</b><span>4 · Projeto aplicado</span></li>
    <li><b>🔒</b><span>5 · Avaliação final</span></li>
  </ol></aside>
  <main class="lesson">
    <span class="eyebrow">Módulo 3 · Aula 2</span>
    <h1>Título da aula em destaque</h1>
    <div class="player"><button class="play" aria-label="Reproduzir">▶</button><div class="timeline"><i></i></div></div>
    <div class="tabs-row"><span class="chip active">📄 Resumo</span><span class="chip">📎 Materiais</span><span class="chip">💬 Fórum</span><span class="chip">📝 Transcrição</span></div>
    <div class="card"><p class="muted">Conteúdo da aba selecionada: resumo da aula, links para leituras complementares, arquivos para download e orientações para a próxima atividade.</p></div>
    <section class="card quiz">
      <span class="eyebrow">Verifique seu aprendizado</span>
      <h3>Qual é o princípio central apresentado nesta aula?</h3>
      <label class="opt"><input type="radio" name="q"> Alternativa A — primeira hipótese</label>
      <label class="opt"><input type="radio" name="q"> Alternativa B — segunda hipótese</label>
      <label class="opt"><input type="radio" name="q"> Alternativa C — terceira hipótese</label>
      <div class="row"><a class="btn btn-primary">Responder</a><a class="btn">Próxima aula →</a></div>
    </section>
  </main>
</div>`
});

GL.LAYOUTS.push({
  id: 'longform', cat: 'educacao', icon: '¶',
  name: 'Artigo Científico & Leitura Longform (Sumário Sticky)',
  summary: 'Coluna central com largura ideal de leitura (65ch), sumário lateral fixo (Table of Contents) que acompanha a rolagem, blocos de citação/destaque e notas laterais.',
  anatomy: ['Header com Barra de Leitura', 'Sumário Sticky (TOC)', 'Coluna de Texto 65ch', 'Resumo / Abstract', 'Citação em Destaque', 'Notas Laterais', 'Figura com Legenda', 'Callout'],
  uses: ['Artigo Científico', 'Blog Acadêmico', 'Documentação', 'E-book Web / Material Didático'],
  combo: { bg: 'none', palette: 'luxo', font: 'baskerville' },
  spec: {
    grid: 'CSS Grid de 3 colunas: 220px (sumário) | minmax(0, 65ch) (texto) | 1fr (margem para notas). Sumário com position: sticky; top: 96px. Notas laterais com position: absolute (sem top) e left: calc(100% + 48px), ficando alinhadas ao parágrafo de referência.',
    spacing: 'Gap entre colunas 56px; padding vertical 56px; corpo 1.08rem com line-height 1.8; H2 com margem 44px 0 12px e scroll-margin-top 90px; parágrafos com margem inferior 18px.',
    hierarchy: 'Eyebrow da área → H1 clamp(2rem, 4.4vw, 3.2rem) → autoria/afiliação atenuada → abstract em caixa → seções numeradas. Citações em fonte de título 1.5rem com borda primária de 4px; callouts tingidos na cor de destaque.',
    mobile: 'Até 1180px as notas entram no fluxo do texto (abaixo do parágrafo). Até 820px vira 1 coluna e o sumário vira faixa horizontal de pílulas roláveis no topo.',
    interactions: 'Barra de progresso de leitura no header via CSS scroll-driven animation (animation-timeline: scroll()); links do sumário com rolagem suave e item ativo destacado.',
    tw: 'grid lg:grid-cols-[220px_minmax(0,65ch)_1fr] gap-14; aside sticky top-24 self-start; artigo prose prose-lg (plugin typography) com max-w-[65ch]; notas xl:absolute xl:left-full xl:ml-12 xl:w-52.'
  },
  css: `.read-progress{height:3px}
.read-progress i{display:block;height:100%;width:0;background:var(--primary);animation:grow linear both;animation-timeline:scroll()}
@keyframes grow{to{width:100%}}
.article-wrap{display:grid;grid-template-columns:220px minmax(0,65ch) 1fr;gap:56px;padding-block:56px}
.toc{position:sticky;top:96px;align-self:start}
.toc h4{font-family:var(--font-body);font-size:.75rem;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:12px}
.toc nav{display:grid;gap:2px;border-left:2px solid var(--border)}
.toc a{padding:6px 14px;margin-left:-2px;border-left:2px solid transparent;color:var(--muted);font-size:.9rem}
.toc a.on,.toc a:hover{color:var(--primary);border-color:var(--primary)}
.prose{position:relative;font-size:1.08rem;line-height:1.8}
.prose h1{font-size:clamp(2rem,4.4vw,3.2rem);margin:10px 0 12px}
.prose h2{font-size:1.6rem;margin:44px 0 12px;scroll-margin-top:90px}
.prose p{margin-bottom:18px}
.abstract{padding:20px 24px;border-radius:var(--radius);background:var(--surface);border:1px solid var(--border);font-size:.98rem}
.note{position:absolute;left:calc(100% + 48px);width:200px;font-size:.82rem;line-height:1.5;color:var(--muted);border-left:2px solid var(--accent);padding-left:12px}
blockquote{margin:32px 0;padding:8px 0 8px 28px;border-left:4px solid var(--primary);font-family:var(--font-title);font-size:1.45rem;line-height:1.45}
blockquote cite{display:block;margin-top:10px;font-family:var(--font-body);font-size:.9rem;color:var(--muted);font-style:normal}
figure{margin:28px 0}figure .ph{aspect-ratio:16/9}figcaption{font-size:.85rem;color:var(--muted);margin-top:8px}
.callout{display:flex;gap:14px;padding:20px;border-radius:var(--radius);background:color-mix(in srgb,var(--accent) 12%,transparent);border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);margin:24px 0}
.callout p{margin:4px 0 0}
@media(max-width:1180px){.article-wrap{grid-template-columns:200px minmax(0,65ch)}.note{position:static;width:auto;margin:-6px 0 18px}}
@media(max-width:820px){.article-wrap{grid-template-columns:1fr;gap:28px}.toc{position:static}.toc nav{grid-auto-flow:column;overflow-x:auto;border:0;gap:8px}.toc a{white-space:nowrap;border:1px solid var(--border);border-radius:999px;margin:0}}`,
  html: `<header class="nav"><div class="container nav-in"><strong class="logo">◆ Revista Acadêmica</strong><span class="muted small">Leitura · 12 min</span></div><div class="read-progress"><i></i></div></header>
<div class="container article-wrap">
  <aside class="toc"><h4>Sumário</h4><nav><a class="on" href="#s1">1. Introdução</a><a href="#s2">2. Referencial teórico</a><a href="#s3">3. Metodologia</a><a href="#s4">4. Resultados</a><a href="#s5">5. Conclusão</a></nav></aside>
  <article class="prose">
    <span class="eyebrow">Artigo · Design Instrucional</span>
    <h1>Título do artigo científico com largura ideal de leitura</h1>
    <p class="muted small">Autora A. Silva · Autor B. Souza — Universidade Federal · 2026</p>
    <p class="abstract"><strong>Resumo.</strong> Síntese do estudo em um parágrafo: objetivo, método, principais resultados e contribuição. Mantém o leitor orientado antes da leitura completa.</p>
    <h2 id="s1">1. Introdução</h2>
    <p>Texto corrido com linhas de aproximadamente 65 caracteres, a medida considerada ideal para leitura confortável em telas. A hierarquia tipográfica guia o olhar entre seções.<sup>1</sup></p>
    <aside class="note">¹ Nota lateral: comentários, referências rápidas e definições ficam na margem, sem interromper o fluxo principal.</aside>
    <blockquote>“Uma boa interface de leitura desaparece e deixa apenas as ideias.”<cite>— Autor de referência, 2024</cite></blockquote>
    <h2 id="s2">2. Referencial teórico</h2>
    <p>Parágrafo de fundamentação com citações e diálogo com a literatura. O espaçamento generoso entre linhas reduz a fadiga visual.</p>
    <figure><div class="ph"></div><figcaption>Figura 1 — Legenda descritiva da imagem, gráfico ou diagrama.</figcaption></figure>
    <h2 id="s3">3. Metodologia</h2>
    <p>Descrição dos procedimentos, participantes, instrumentos e etapas de análise.</p>
    <div class="callout"><span>💡</span><div><strong>Destaque</strong><p class="muted">Bloco de atenção para conceitos-chave, definições ou recomendações práticas.</p></div></div>
    <h2 id="s4">4. Resultados</h2>
    <p>Apresentação dos achados, com tabelas e figuras numeradas e discutidas no texto.</p>
    <h2 id="s5">5. Conclusão</h2>
    <p>Retomada do objetivo, síntese das contribuições, limitações e trabalhos futuros.</p>
  </article>
</div>`
});

GL.LAYOUTS.push({
  id: 'research-hub', cat: 'educacao', icon: '⌂',
  name: 'Hub de Grupo de Pesquisa / Laboratório Acadêmico',
  summary: 'Hero institucional, vitrine de linhas de pesquisa em cards, grade de publicações/projetos com filtro por ano/tag e seção de equipe/docentes.',
  anatomy: ['Header Institucional', 'Hero com Missão', 'Vitrine de Linhas de Pesquisa', 'Publicações com Filtro Ano/Tag', 'Grade de Equipe', 'Rodapé Institucional'],
  uses: ['Grupo de Pesquisa', 'Laboratório Universitário', 'Portfólio Acadêmico', 'Programa de Pós-Graduação'],
  combo: { bg: 'bibhist', palette: 'esmeralda', font: 'newsreader' },
  spec: {
    grid: 'Seções empilhadas em container de 1200px. Linhas de pesquisa em grid repeat(auto-fit, minmax(240px, 1fr)); publicações em repeat(auto-fill, minmax(300px, 1fr)); equipe em repeat(auto-fill, minmax(160px, 1fr)). Cabeçalho de seção em Flexbox (título à esquerda, filtros à direita).',
    spacing: 'Hero com padding 96px 0 72px; seções com padding vertical 64px; gap dos grids 24px; cards com padding 24px; avatares da equipe com 96px.',
    hierarchy: 'H1 institucional clamp(2.2rem, 5vw, 4rem) limitado a 18ch, precedido por eyebrow "Universidade · Departamento"; tags de publicação em caixa-alta na cor de destaque; links "Ler PDF →" na cor primária.',
    mobile: 'Grids auto-fill reorganizam naturalmente em 1 coluna; filtros quebram linha abaixo do título; menu de links oculto abaixo de 800px.',
    interactions: 'Pílulas de filtro (Todos / ano / #tag) com estado ativo; hover nos cards; fundo do hero com brilho radial na cor primária sobre a imagem institucional.',
    tw: 'hero py-24 bg-[radial-gradient(...)]; linhas grid sm:grid-cols-2 lg:grid-cols-4 gap-6; publicações grid md:grid-cols-2 lg:grid-cols-3; equipe grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 text-center.'
  },
  css: `.inst{padding:96px 0 72px;background:radial-gradient(ellipse at 15% 0,color-mix(in srgb,var(--primary) 22%,transparent),transparent 60%);border-bottom:1px solid var(--border)}
.inst h1{font-size:clamp(2.2rem,5vw,4rem);max-width:18ch;margin:12px 0 16px}
.inst p{max-width:60ch;margin-bottom:28px}
.sec{padding-block:64px}
.sec h2{font-size:clamp(1.8rem,3vw,2.4rem);margin-bottom:24px}
.lines{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--gap)}
.lines h3{margin-bottom:6px}
.sec-head{display:flex;justify-content:space-between;align-items:end;gap:16px;flex-wrap:wrap;margin-bottom:24px}
.sec-head h2{margin:0}
.filters{display:flex;gap:8px;flex-wrap:wrap}
.pubs{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:var(--gap)}
.pub{display:grid;gap:8px}
.tag{font-size:.72rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.08em}
.link{color:var(--primary);font-weight:600;font-size:.9rem}
.team{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:24px}
.team figure{display:grid;justify-items:center;text-align:center;gap:2px}
.avatar.xl{width:96px;height:96px;margin-bottom:10px}`,
  html: `<header class="nav"><div class="container nav-in"><strong class="logo">◆ Grupo de Pesquisa</strong><nav class="links"><a>Linhas</a><a>Publicações</a><a>Equipe</a><a>Contato</a></nav></div></header>
<section class="inst"><div class="container"><span class="eyebrow">Universidade · Departamento</span><h1>Laboratório de Pesquisa em Design &amp; Educação</h1><p class="muted">Missão institucional em uma frase: investigamos, criamos e compartilhamos conhecimento sobre tecnologias, linguagens e processos de aprendizagem.</p><div class="row"><a class="btn btn-primary">Conheça as linhas</a><a class="btn">Publicações</a></div></div></section>
<section class="container sec"><h2>Linhas de pesquisa</h2><div class="lines">
  <article class="card"><div class="icon">🎓</div><h3>Design Instrucional</h3><p class="muted small">Materiais, trilhas e experiências de aprendizagem.</p></article>
  <article class="card"><div class="icon">🎨</div><h3>Linguagens Visuais</h3><p class="muted small">Cor, tipografia e composição em mídias digitais.</p></article>
  <article class="card"><div class="icon">🤖</div><h3>IA na Educação</h3><p class="muted small">Agentes, automação e autoria assistida.</p></article>
  <article class="card"><div class="icon">🎵</div><h3>Arte &amp; Tecnologia</h3><p class="muted small">Música, audiovisual e processos criativos.</p></article>
</div></section>
<section class="container sec"><div class="sec-head"><h2>Publicações &amp; Projetos</h2><div class="filters"><span class="chip active">Todos</span><span class="chip">2026</span><span class="chip">2025</span><span class="chip">#Educação</span><span class="chip">#Tecnologia</span></div></div>
  <div class="pubs">
    <article class="card pub"><span class="tag">2026 · Artigo</span><h3>Título da publicação científica</h3><p class="muted small">Silva, A.; Souza, B. — Revista Brasileira</p><a class="link">Ler PDF →</a></article>
    <article class="card pub"><span class="tag">2026 · Projeto</span><h3>Projeto de extensão em andamento</h3><p class="muted small">Financiamento: Agência de Fomento</p><a class="link">Ver projeto →</a></article>
    <article class="card pub"><span class="tag">2025 · Livro</span><h3>Capítulo em obra coletiva</h3><p class="muted small">Editora Universitária</p><a class="link">Ler PDF →</a></article>
  </div>
</section>
<section class="container sec"><h2>Equipe</h2><div class="team">
  <figure><span class="avatar xl"></span><strong>Prof. Dr. Nome</strong><span class="muted small">Coordenador</span></figure>
  <figure><span class="avatar xl"></span><strong>Profa. Dra. Nome</strong><span class="muted small">Vice-coordenadora</span></figure>
  <figure><span class="avatar xl"></span><strong>Nome Sobrenome</strong><span class="muted small">Doutorando</span></figure>
  <figure><span class="avatar xl"></span><strong>Nome Sobrenome</strong><span class="muted small">Mestranda</span></figure>
  <figure><span class="avatar xl"></span><strong>Nome Sobrenome</strong><span class="muted small">Iniciação Científica</span></figure>
</div></section>
<footer class="foot"><div class="container">Grupo de Pesquisa • Departamento • Universidade — contato@universidade.br</div></footer>`
});

/* ============================================================
   4. 🎨 PORTFÓLIOS, GALERIAS & CATÁLOGOS CRIATIVOS
   ============================================================ */
GL.LAYOUTS.push({
  id: 'gallery-modal', cat: 'portfolio', icon: '▩',
  name: 'Galeria Imersiva com Filtros & Modal (Estilo Catálogo)',
  summary: 'Barra de busca e pílulas de filtro fixas no topo, grade responsiva auto-fill de cards visuais com hover overlay e modal de inspeção detalhada.',
  anatomy: ['Header Sticky com Busca', 'Pílulas de Filtro Roláveis', 'Grade Auto-fill de Cards 4:5', 'Hover Overlay com Título', 'Modal de Inspeção Detalhada'],
  uses: ['Galeria de Imagens', 'Portfólio Visual', 'Banco de Assets', 'Catálogo de Obras / Acervo'],
  combo: { bg: 'led', palette: 'synthwave', font: 'syne' },
  spec: {
    grid: 'Grade em CSS Grid com grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); cards com aspect-ratio: 4/5. Header sticky reunindo logo + busca + contador e, abaixo, faixa de pílulas com overflow-x: auto. Modal em grid 1.4fr 1fr (imagem | informações).',
    spacing: 'Gap da grade 18px; padding da grade 28px 0 80px; overlay com padding 18px; modal com largura min(960px, 100%), radius 24px e painel de informações com padding 32px.',
    hierarchy: 'Imagens são protagonistas (sem texto visível em repouso); no hover surge overlay em gradiente com título e categoria. No modal: eyebrow da categoria → H2 → descrição → ações (Baixar primário + Copiar link).',
    mobile: 'Auto-fill reduz naturalmente para 2 e 1 colunas; pílulas roláveis horizontalmente; modal vira 1 coluna (imagem acima, 240px) e o contador do header é ocultado.',
    interactions: 'Hover: zoom de 1.06 na imagem + fade do overlay (0.3s). Clique abre modal com fade e backdrop-filter: blur(10px); fechar pelo botão ✕, clique no fundo ou tecla Esc.',
    tw: 'grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4; card relative aspect-[4/5] overflow-hidden rounded-2xl group; overlay opacity-0 group-hover:opacity-100; modal fixed inset-0 grid place-items-center backdrop-blur.'
  },
  css: `.pills{display:flex;gap:8px;overflow-x:auto;padding-bottom:14px;scrollbar-width:none}
.gal{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px;padding-block:28px 80px}
.item{position:relative;border:0;padding:0;background:none;border-radius:var(--radius);overflow:hidden;aspect-ratio:4/5;text-align:left;color:#fff}
.item .ph{position:absolute;inset:0;border-radius:0;transition:transform .5s}
.item:nth-child(3n+2) .ph{filter:hue-rotate(50deg)}
.item:nth-child(3n) .ph{filter:hue-rotate(-50deg) saturate(1.2)}
.ov{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:18px;background:linear-gradient(transparent 40%,rgba(0,0,0,.78));opacity:0;transition:opacity .3s}
.item:hover .ov,.item:focus-visible .ov{opacity:1}
.item:hover .ph{transform:scale(1.06)}
.ov span{font-size:.8rem;opacity:.8}
.modal{position:fixed;inset:0;z-index:50;display:grid;place-items:center;padding:24px;background:rgba(0,0,0,.7);backdrop-filter:blur(10px);opacity:0;pointer-events:none;transition:opacity .25s}
.modal.open{opacity:1;pointer-events:auto}
.modal-box{position:relative;width:min(960px,100%);display:grid;grid-template-columns:1.4fr 1fr;background:var(--surface);border:1px solid var(--border);border-radius:24px;overflow:hidden}
.modal-box .ph{min-height:420px;border-radius:0}
.modal-info{padding:32px;display:flex;flex-direction:column;gap:12px;justify-content:center}
.modal-info h2{font-size:2rem}
.modal .close{position:absolute;top:14px;right:14px}
@media(max-width:720px){.modal-box{grid-template-columns:1fr}.modal-box .ph{min-height:240px}.count{display:none}}`,
  html: `<header class="nav"><div class="container nav-in"><strong class="logo">◆ Catálogo</strong><div class="search-sm">🔍 <input placeholder="Buscar itens..." aria-label="Buscar"></div><span class="muted small count">248 itens</span></div>
  <div class="container pills"><span class="chip active">Todos</span><span class="chip">Abstrato</span><span class="chip">Arquitetura</span><span class="chip">Natureza</span><span class="chip">Tecnologia</span><span class="chip">Música</span><span class="chip">Cinema</span></div></header>
<main class="container gal">
  <button class="item"><div class="ph"></div><div class="ov"><strong>Item 01</strong><span>Abstrato</span></div></button>
  <button class="item"><div class="ph"></div><div class="ov"><strong>Item 02</strong><span>Arquitetura</span></div></button>
  <button class="item"><div class="ph"></div><div class="ov"><strong>Item 03</strong><span>Natureza</span></div></button>
  <button class="item"><div class="ph"></div><div class="ov"><strong>Item 04</strong><span>Tecnologia</span></div></button>
  <button class="item"><div class="ph"></div><div class="ov"><strong>Item 05</strong><span>Música</span></div></button>
  <button class="item"><div class="ph"></div><div class="ov"><strong>Item 06</strong><span>Cinema</span></div></button>
  <button class="item"><div class="ph"></div><div class="ov"><strong>Item 07</strong><span>Abstrato</span></div></button>
  <button class="item"><div class="ph"></div><div class="ov"><strong>Item 08</strong><span>Natureza</span></div></button>
</main>
<div class="modal" id="modal" role="dialog" aria-modal="true" aria-label="Detalhes do item">
  <div class="modal-box"><div class="ph"></div><div class="modal-info"><span class="eyebrow">Categoria</span><h2>Item em inspeção</h2><p class="muted">Descrição detalhada, autoria, dimensões, formato e licença de uso do item selecionado.</p><div class="row"><a class="btn btn-primary">⬇ Baixar</a><a class="btn">🔗 Copiar link</a></div></div><button class="close" data-close aria-label="Fechar">✕</button></div>
</div>
<script>
  const modal = document.getElementById('modal');
  document.querySelectorAll('.item').forEach(i => i.addEventListener('click', () => modal.classList.add('open')));
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => modal.classList.remove('open')));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open'); });
</script>`
});

GL.LAYOUTS.push({
  id: 'editorial', cat: 'portfolio', icon: '▧',
  name: 'Editorial Magazine / Jornal Digital (Grid Assimétrico)',
  summary: 'Manchete principal em duas colunas, coluna lateral de destaques rápidos e grade modular tipográfica inspirada em revistas de arte e arquitetura.',
  anatomy: ['Masthead com Data e Edição', 'Título Monumental da Publicação', 'Menu de Editorias', 'Manchete em 2 Colunas', 'Coluna de Destaques Numerados', 'Grade Modular 4 Colunas', 'Citação Vertical'],
  uses: ['Revista Digital', 'Blog Editorial', 'Portal de Notícias', 'Portfólio de Arquitetura / Arte'],
  combo: { bg: 'none', palette: 'terracota', font: 'fraunces' },
  spec: {
    grid: 'Área principal em CSS Grid 3fr 1fr (manchete | destaques). Manchete com imagem 16:8 e texto em grid de 2 colunas (título | parágrafo com capitular). Grade modular inferior em repeat(4, 1fr) com blocos que ocupam span 2 colunas e uma citação com grid-row: span 2.',
    spacing: 'Gap da área principal 40px; gap da grade modular 28px; coluna de destaques com borda esquerda e padding-left 28px; itens com separadores de 1px e padding-bottom 18px.',
    hierarchy: 'Masthead com título da publicação clamp(3rem, 10vw, 7rem) e borda dupla inferior; editorias em caixa-alta espaçada; manchete clamp(1.8rem, 3.4vw, 2.8rem); capitular (drop cap) de 4.2rem na cor primária; números dos destaques em fonte de título.',
    mobile: 'Até 900px: manchete e destaques empilham, texto da manchete em 1 coluna, grade modular em 2 colunas. Até 560px: 1 coluna, spans resetados, data oculta e menu de editorias rolável.',
    interactions: 'Interface predominantemente tipográfica, sem cantos arredondados nas imagens (border-radius: 0) para remeter ao impresso; links de editoria com hover sublinhado.',
    tw: 'masthead text-center border-b-4 border-double; principal grid lg:grid-cols-4 gap-10 (manchete lg:col-span-3); grade grid sm:grid-cols-2 lg:grid-cols-4 gap-7; first-letter:float-left first-letter:text-7xl.'
  },
  css: `.mast{text-align:center;padding-top:20px;border-bottom:3px double var(--text)}
.mast-top{display:flex;justify-content:space-between;padding-bottom:12px;border-bottom:1px solid var(--border)}
.mast-title{font-size:clamp(3rem,10vw,7rem);line-height:1;padding:18px 0 10px;letter-spacing:-.03em}
.mast-nav{display:flex;justify-content:center;gap:28px;padding:12px 0;border-top:1px solid var(--border);font-size:.8rem;text-transform:uppercase;letter-spacing:.14em;font-weight:600}
.mast-nav a:hover{text-decoration:underline}
.ed{display:grid;grid-template-columns:3fr 1fr;gap:40px;padding-block:40px;border-bottom:1px solid var(--border)}
.lead-story .ph{aspect-ratio:16/8;border-radius:0;margin-bottom:24px}
.lead-cols{display:grid;grid-template-columns:1fr 1fr;gap:32px}
.lead-cols h2{font-size:clamp(1.8rem,3.4vw,2.8rem);margin-top:8px}
.dropcap::first-letter{float:left;font-family:var(--font-title);font-size:4.2rem;line-height:.8;padding:6px 10px 0 0;color:var(--primary)}
.quick{border-left:1px solid var(--border);padding-left:28px;display:grid;gap:18px;align-content:start}
.quick h4{font-family:var(--font-body);font-size:.75rem;text-transform:uppercase;letter-spacing:.14em}
.quick article{display:flex;gap:14px;padding-bottom:18px;border-bottom:1px solid var(--border)}
.quick h3{font-size:1.05rem}
.num{font-family:var(--font-title);font-size:2rem;color:var(--primary);line-height:1}
.mod{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;padding-block:40px 80px}
.mod article{display:grid;gap:10px;align-content:start}
.mod .ph{border-radius:0;aspect-ratio:4/3;min-height:0}
.m1,.m-wide{grid-column:span 2}.m1 .ph,.m-wide .ph{aspect-ratio:16/9}
.quote{grid-row:span 2;border-block:2px solid var(--text);padding:24px 0;font-family:var(--font-title);font-size:1.8rem;line-height:1.25;align-content:center!important}
@media(max-width:900px){.ed{grid-template-columns:1fr}.quick{border:0;padding:0}.lead-cols{grid-template-columns:1fr;gap:12px}.mod{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.mod{grid-template-columns:1fr}.m1,.m-wide{grid-column:auto}.quote{grid-row:auto}.mast-top span:nth-child(2){display:none}.mast-nav{gap:16px;overflow-x:auto;justify-content:flex-start}}`,
  html: `<header class="container mast">
  <div class="mast-top muted small"><span>Edição nº 128</span><span>Terça-feira, 3 de novembro de 2026</span><a>Assinar →</a></div>
  <h1 class="mast-title">A Revista</h1>
  <nav class="mast-nav"><a>Arte</a><a>Arquitetura</a><a>Design</a><a>Cultura</a><a>Ensaios</a><a>Entrevistas</a></nav>
</header>
<main class="container ed">
  <article class="lead-story"><div class="ph"></div><div class="lead-cols"><div><span class="eyebrow">Arquitetura</span><h2>Manchete principal em duas colunas com impacto tipográfico</h2></div><p class="dropcap">Lide da reportagem principal. O primeiro parágrafo apresenta o tema com uma capitular marcante, inspirada nas grandes revistas impressas, conduzindo o leitor ao restante do texto com elegância e ritmo.</p></div></article>
  <aside class="quick"><h4>Destaques rápidos</h4>
    <article><span class="num">01</span><div><h3>Título curto do destaque</h3><p class="muted small">Resumo em uma linha.</p></div></article>
    <article><span class="num">02</span><div><h3>Exposição inaugura nova ala</h3><p class="muted small">Resumo em uma linha.</p></div></article>
    <article><span class="num">03</span><div><h3>Entrevista com designer</h3><p class="muted small">Resumo em uma linha.</p></div></article>
    <article><span class="num">04</span><div><h3>Ensaio fotográfico</h3><p class="muted small">Resumo em uma linha.</p></div></article>
  </aside>
</main>
<section class="container mod">
  <article class="m1"><div class="ph"></div><span class="eyebrow">Design</span><h3>Matéria com imagem ampla em duas colunas</h3></article>
  <article class="quote"><p>“A forma segue a emoção.”</p><span class="muted small">— Entrevistado</span></article>
  <article><div class="ph"></div><span class="eyebrow">Cultura</span><h3>Nota cultural</h3></article>
  <article class="m-wide"><div class="ph"></div><span class="eyebrow">Ensaios</span><h3>Ensaio visual em formato panorâmico</h3></article>
  <article><span class="eyebrow">Opinião</span><h3>Coluna de opinião</h3><p class="muted small">Texto curto da coluna semanal com assinatura do autor.</p></article>
</section>`
});

GL.LAYOUTS.push({
  id: 'ecommerce', cat: 'portfolio', icon: '▣',
  name: 'Vitrine E-Commerce / Catálogo de Produtos',
  summary: 'Barra lateral de filtros facetados (categoria, formato, tags, preço) + grid de cards com badges, ordenação rápida e drawer lateral de detalhes.',
  anatomy: ['Header com Busca e Carrinho', 'Sidebar de Filtros Facetados', 'Barra de Ordenação', 'Grid de Cards com Badges', 'Drawer Lateral de Detalhes'],
  uses: ['E-commerce', 'Loja de Produtos Digitais', 'Catálogo de Materiais', 'Marketplace'],
  combo: { bg: 'none', palette: 'cafe', font: 'dmserif' },
  spec: {
    grid: 'CSS Grid 250px 1fr (filtros | produtos). Filtros com position: sticky; top: 92px. Produtos em repeat(auto-fill, minmax(210px, 1fr)). Drawer fixo à direita com largura min(420px, 100%) e scrim escurecendo o restante.',
    spacing: 'Gap principal 32px; gap dos cards 20px; card com padding 12px e imagem quadrada (aspect-ratio 1); fieldsets separados por borda superior com padding-top 16px; drawer com padding 28px e gap 14px.',
    hierarchy: 'Imagem do produto → nome (1.05rem) → categoria atenuada → preço em destaque na cor primária. Badges ("Novo", "-20%") na cor de destaque sobre a imagem. Ordenação em chips com estado ativo.',
    mobile: 'Até 820px os filtros deixam de ser sticky e viram um grid de 2 colunas acima dos produtos; o drawer ocupa 100% da largura.',
    interactions: 'Clique no card abre drawer deslizando da direita (transform translateX, 0.35s) com scrim; fechar pelo ✕, clique no scrim ou Esc; checkboxes e range com accent-color da marca; hover eleva o card.',
    tw: 'grid lg:grid-cols-[250px_1fr] gap-8; aside lg:sticky lg:top-24 self-start; produtos grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-5; drawer fixed right-0 inset-y-0 w-full max-w-md translate-x-full transition-transform.'
  },
  css: `.shop{display:grid;grid-template-columns:250px 1fr;gap:32px;padding-block:32px 80px}
.facets{position:sticky;top:92px;align-self:start;display:grid;gap:20px}
.facets h4{font-size:1.3rem}
fieldset{border:0;border-top:1px solid var(--border);padding-top:16px;display:grid;gap:8px}
legend{float:left;width:100%;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:6px}
fieldset label{display:flex;gap:8px;font-size:.92rem;align-items:center}
input[type=checkbox],input[type=range]{accent-color:var(--primary)}
input[type=range]{width:100%}
.shop-bar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:20px}
.products{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:20px}
.prod{display:grid;gap:4px;text-align:left;padding:12px;transition:transform .2s,border-color .2s}
.prod:hover{transform:translateY(-4px);border-color:var(--primary)}
.prod .ph{aspect-ratio:1;position:relative;margin-bottom:8px;min-height:0}
.prod h3{font-size:1.05rem}
.badge{position:absolute;top:10px;left:10px;padding:4px 10px;border-radius:999px;background:var(--accent);color:var(--bg);font-size:.72rem;font-weight:700}
.price{color:var(--primary);font-size:1.1rem}
.drawer{position:fixed;top:0;right:0;height:100vh;width:min(420px,100%);z-index:60;background:var(--surface);border-left:1px solid var(--border);padding:28px;display:flex;flex-direction:column;gap:14px;overflow:auto;transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1)}
.drawer.open{transform:none;box-shadow:-30px 0 60px rgba(0,0,0,.35)}
.drawer .close{align-self:flex-end}
.drawer h2{font-size:1.9rem}
.scrim{position:fixed;inset:0;z-index:55;background:rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .3s}
.scrim.open{opacity:1;pointer-events:auto}
@media(max-width:820px){.shop{grid-template-columns:1fr}.facets{position:static;grid-template-columns:repeat(2,1fr)}.facets h4{grid-column:1/-1}}`,
  html: `<header class="nav"><div class="container nav-in"><strong class="logo">◆ Loja</strong><div class="search-sm">🔍 <input placeholder="Buscar produtos..." aria-label="Buscar"></div><div class="row"><button class="btn btn-sm" aria-label="Favoritos">♡</button><button class="btn btn-sm btn-primary">🛒 3</button></div></div></header>
<div class="container shop">
  <aside class="facets"><h4>Filtros</h4>
    <fieldset><legend>Categoria</legend><label><input type="checkbox" checked> Pôsteres</label><label><input type="checkbox"> Cadernos</label><label><input type="checkbox"> Digitais</label></fieldset>
    <fieldset><legend>Formato</legend><label><input type="checkbox" checked> A4</label><label><input type="checkbox"> A3</label><label><input type="checkbox"> PDF</label></fieldset>
    <fieldset><legend>Tags</legend><div class="row"><span class="chip active">Minimal</span><span class="chip">Retrô</span><span class="chip">Botânico</span></div></fieldset>
    <fieldset><legend>Preço até R$ 300</legend><input type="range" value="60" aria-label="Preço máximo"></fieldset>
  </aside>
  <main>
    <div class="shop-bar"><span class="muted">128 produtos</span><div class="row"><span class="chip active">Relevância</span><span class="chip">Menor preço</span><span class="chip">Novidades</span></div></div>
    <div class="products">
      <button class="prod card"><div class="ph"><span class="badge">Novo</span></div><h3>Produto 01</h3><span class="muted small">Pôster A3</span><strong class="price">R$ 129,90</strong></button>
      <button class="prod card"><div class="ph"></div><h3>Produto 02</h3><span class="muted small">Caderno</span><strong class="price">R$ 59,90</strong></button>
      <button class="prod card"><div class="ph"><span class="badge">-20%</span></div><h3>Produto 03</h3><span class="muted small">Digital</span><strong class="price">R$ 39,90</strong></button>
      <button class="prod card"><div class="ph"></div><h3>Produto 04</h3><span class="muted small">Pôster A2</span><strong class="price">R$ 189,90</strong></button>
      <button class="prod card"><div class="ph"></div><h3>Produto 05</h3><span class="muted small">Caderno</span><strong class="price">R$ 64,90</strong></button>
      <button class="prod card"><div class="ph"><span class="badge">Mais vendido</span></div><h3>Produto 06</h3><span class="muted small">Pôster A4</span><strong class="price">R$ 89,90</strong></button>
    </div>
  </main>
</div>
<div class="scrim" data-close></div>
<aside class="drawer" id="drawer" aria-label="Detalhes do produto"><button class="close" data-close aria-label="Fechar">✕</button><div class="ph" style="min-height:260px"></div><span class="eyebrow">Pôster</span><h2>Produto em detalhe</h2><strong class="price">R$ 129,90</strong><p class="muted">Descrição do produto, materiais, dimensões e prazo de entrega.</p><div class="row"><span class="chip active">A3</span><span class="chip">A2</span><span class="chip">A1</span></div><a class="btn btn-primary">Adicionar ao carrinho</a></aside>
<script>
  const drawer = document.getElementById('drawer'), scrim = document.querySelector('.scrim');
  const setOpen = v => { drawer.classList.toggle('open', v); scrim.classList.toggle('open', v); };
  document.querySelectorAll('.prod').forEach(p => p.addEventListener('click', () => setOpen(true)));
  document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
</script>`
});

/* ============================================================
   5. 📱 INTERFACES MOBILE-FIRST & WEB APPS COMPACTOS
   ============================================================ */
GL.LAYOUTS.push({
  id: 'bottom-nav', cat: 'mobile', icon: '▁', device: 'mobile',
  name: 'App Mobile com Bottom Navigation Bar',
  summary: 'Cabeçalho compacto, carrossel horizontal de categorias, cards empilhados verticalmente e barra de navegação fixa inferior com 4 abas (ideal para PWAs e web apps de celular).',
  anatomy: ['Cabeçalho Compacto com Saudação', 'Busca Arredondada', 'Carrossel Horizontal de Categorias', 'Card de Destaque', 'Lista de Cards Empilhados', 'Bottom Navigation de 4 Abas'],
  uses: ['PWA / Web App de Celular', 'App Educacional Mobile', 'Delivery / Serviços', 'App de Comunidade'],
  combo: { bg: 'none', palette: 'ia', font: 'sora' },
  spec: {
    grid: 'Coluna única centralizada com largura min(480px, 100%) em grid vertical (gap 16px). Carrossel em Flexbox com overflow-x: auto e scroll-snap-type: x mandatory. Barra inferior position: fixed com grid de 4 colunas iguais.',
    spacing: 'Padding lateral 18px; body com padding-bottom 84px para não esconder conteúdo atrás da barra; cards de lista com padding 12px e miniatura 64×64; abas com padding 6px e safe-area (env(safe-area-inset-bottom)).',
    hierarchy: 'Saudação pequena atenuada → H1 2rem ("Descobrir") → busca → categorias em chips → card de destaque 16:9 → seção "Para você" com lista. Aba ativa destacada com cor primária e fundo tingido.',
    mobile: 'Projetado mobile-first: em telas ≥ 768px a barra inferior vira uma pílula flutuante centralizada (440px, bottom 16px, radius 24px) e o conteúdo permanece em coluna de leitura de 480px.',
    interactions: 'Carrossel com rolagem por arraste e snap; barra inferior translúcida com backdrop-filter: blur(18px); alvos de toque ≥ 44px; chevrons › indicando navegação nos itens da lista.',
    tw: 'max-w-[480px] mx-auto px-[18px] pb-24 grid gap-4; carrossel flex gap-2 overflow-x-auto snap-x snap-mandatory; bottom nav fixed inset-x-0 bottom-0 grid grid-cols-4 backdrop-blur-xl md:left-1/2 md:-translate-x-1/2 md:w-[440px] md:bottom-4 md:rounded-3xl.'
  },
  css: `body{padding-bottom:96px}
.app{width:min(480px,100%);margin:0 auto;padding:16px 18px 24px;display:grid;gap:16px}
.m-top{display:flex;justify-content:space-between;align-items:center;padding-top:8px}
.m-top h1{font-size:2rem}
.m-top .avatar{width:44px;height:44px}
.app .search-sm{max-width:none;border-radius:16px;padding:13px 16px}
.carousel{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;margin-inline:-18px;padding-inline:18px;scrollbar-width:none}
.carousel .chip{flex-shrink:0;scroll-snap-align:start;padding:10px 16px}
.feature{display:grid;gap:6px;padding:14px}
.feature .ph{aspect-ratio:16/9}
.m-sec{font-size:1.3rem;display:flex;justify-content:space-between;align-items:baseline}
.m-sec a{font-family:var(--font-body);font-size:.85rem;color:var(--primary)}
.stack{display:grid;gap:10px}
.m-card{display:flex;align-items:center;gap:14px;padding:12px}
.m-card .ph{width:64px;height:64px;min-height:0;flex-shrink:0}
.m-card div:nth-child(2){flex:1}
.m-card h4{font-size:1rem}
.go{font-size:1.6rem;color:var(--muted)}
.bottom-nav{position:fixed;left:0;right:0;bottom:0;z-index:20;display:grid;grid-template-columns:repeat(4,1fr);padding:8px 8px calc(8px + env(safe-area-inset-bottom));background:color-mix(in srgb,var(--surface) 85%,transparent);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-top:1px solid var(--border)}
.bottom-nav a{display:grid;justify-items:center;gap:2px;font-size:.72rem;font-weight:600;color:var(--muted);padding:6px;border-radius:14px;min-height:48px}
.bottom-nav span{font-size:1.25rem}
.bottom-nav a.on{color:var(--primary);background:color-mix(in srgb,var(--primary) 14%,transparent)}
@media(min-width:768px){.bottom-nav{left:50%;right:auto;transform:translateX(-50%);width:440px;bottom:16px;border-radius:24px;border:1px solid var(--border)}}`,
  html: `<div class="app">
  <header class="m-top"><div><span class="muted small">Olá, Maria 👋</span><h1>Descobrir</h1></div><span class="avatar"></span></header>
  <div class="search-sm">🔍 <input placeholder="Buscar conteúdos..." aria-label="Buscar"></div>
  <div class="carousel"><span class="chip active">🔥 Popular</span><span class="chip">🎨 Arte</span><span class="chip">🎵 Música</span><span class="chip">📚 Cursos</span><span class="chip">🌿 Natureza</span><span class="chip">🎬 Cinema</span></div>
  <section class="feature card"><div class="ph"></div><span class="eyebrow">Destaque da semana</span><h2>Card principal</h2><p class="muted small">Descrição curta do conteúdo em destaque.</p></section>
  <h3 class="m-sec">Para você <a>Ver tudo</a></h3>
  <div class="stack">
    <article class="m-card card"><div class="ph"></div><div><h4>Item da lista</h4><p class="muted small">Descrição curta · 12 min</p></div><span class="go">›</span></article>
    <article class="m-card card"><div class="ph"></div><div><h4>Segundo item</h4><p class="muted small">Descrição curta · 8 min</p></div><span class="go">›</span></article>
    <article class="m-card card"><div class="ph"></div><div><h4>Terceiro item</h4><p class="muted small">Descrição curta · 20 min</p></div><span class="go">›</span></article>
    <article class="m-card card"><div class="ph"></div><div><h4>Quarto item</h4><p class="muted small">Descrição curta · 5 min</p></div><span class="go">›</span></article>
  </div>
</div>
<nav class="bottom-nav" aria-label="Navegação principal"><a class="on"><span>🏠</span>Início</a><a><span>🔍</span>Explorar</a><a><span>♡</span>Salvos</a><a><span>👤</span>Perfil</a></nav>`
});

GL.LAYOUTS.push({
  id: 'wizard', cat: 'mobile', icon: '①',
  name: 'Wizard / Fluxo Passo a Passo (Multi-Step Form)',
  summary: 'Barra de etapas no topo (Passo 1 → 2 → 3), card central focado com validação limpa e barra inferior fixa com botões Voltar / Avançar.',
  anatomy: ['Header Mínimo', 'Stepper de 3 Etapas', 'Card Central Focado', 'Campos com Validação Inline', 'Cards de Escolha (Radio)', 'Barra Inferior Voltar / Avançar'],
  uses: ['Inscrição / Matrícula', 'Onboarding de App', 'Checkout', 'Formulário de Pesquisa'],
  combo: { bg: 'campus', palette: 'horizonte', font: 'montserrat' },
  spec: {
    grid: 'Coluna central com largura máxima de 720px. Stepper em Flexbox com linha conectora (pseudo-elemento ::before). Card do formulário em grid vertical (gap 16px). Opções de escolha em grid de 3 colunas. Barra de ações position: fixed na base.',
    spacing: 'Padding vertical do conteúdo 40px; stepper com margem inferior 32px e círculos de 38px; card com padding clamp(20px, 4vw, 40px); inputs com padding 12px 14px e radius 12px; barra inferior com 76px de altura.',
    hierarchy: 'Etapa concluída (✓ cor de destaque) → etapa atual (borda primária + halo) → etapas futuras (atenuadas). No card: eyebrow "Passo 2 de 3" → H1 → instrução curta → campos. Botão Avançar sólido primário; Voltar secundário.',
    mobile: 'Abaixo de 600px as opções empilham em 1 coluna, rótulos do stepper ficam menores e a barra de progresso da barra inferior é ocultada, mantendo apenas Voltar / Avançar nas extremidades.',
    interactions: 'Validação inline: borda e mensagem verdes para válido (✓) e vermelhas para erro; foco do input na cor primária; cards de escolha destacados via :has(input:checked); body com padding-bottom para não cobrir conteúdo.',
    tw: 'max-w-2xl mx-auto py-10; stepper flex justify-between relative before:absolute before:h-0.5; inputs rounded-xl border-2 focus:border-primary; escolhas grid sm:grid-cols-3 gap-3; barra fixed inset-x-0 bottom-0 h-[76px] backdrop-blur.'
  },
  css: `body{padding-bottom:96px}
.wiz{max-width:720px;padding-block:40px}
.steps{list-style:none;display:flex;justify-content:space-between;margin-bottom:32px;position:relative}
.steps::before{content:"";position:absolute;top:18px;left:16%;right:16%;height:2px;background:var(--border)}
.steps li{position:relative;display:grid;justify-items:center;gap:8px;font-size:.85rem;color:var(--muted);flex:1;text-align:center}
.steps span{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--surface);border:2px solid var(--border);font-weight:700}
.steps .done{color:var(--text)}
.steps .done span{background:var(--accent);border-color:var(--accent);color:#fff}
.steps .cur{color:var(--text);font-weight:600}
.steps .cur span{border-color:var(--primary);color:var(--primary);box-shadow:0 0 0 6px color-mix(in srgb,var(--primary) 20%,transparent)}
.wiz-card{display:grid;gap:16px;padding:clamp(20px,4vw,40px)}
.wiz-card h1{font-size:clamp(1.8rem,4vw,2.4rem)}
.field{display:grid;gap:6px}
.field label{font-size:.85rem;font-weight:600}
.field input{padding:12px 14px;border-radius:12px;border:1.5px solid var(--border);background:var(--bg);color:var(--text);font:inherit;outline:none}
.field input:focus{border-color:var(--primary)}
.field small{font-size:.78rem}
.ok input{border-color:#16a34a}.ok small{color:#16a34a}
.err input{border-color:#dc2626}.err small{color:#dc2626}
.choice{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.opt-card{display:grid;gap:2px;padding:16px;border-radius:14px;border:1.5px solid var(--border);cursor:pointer;background:var(--bg)}
.opt-card input{position:absolute;opacity:0;pointer-events:none}
.opt-card:has(input:checked){border-color:var(--primary);background:color-mix(in srgb,var(--primary) 12%,var(--bg))}
.wiz-bar{position:fixed;left:0;right:0;bottom:0;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(14px);border-top:1px solid var(--border)}
.wiz-bar-in{display:flex;align-items:center;gap:20px;height:76px}
.wiz-bar .bar{flex:1}
@media(max-width:600px){.choice{grid-template-columns:1fr}.steps li{font-size:.72rem}.wiz-bar .bar{display:none}.wiz-bar-in{justify-content:space-between}}`,
  html: `<header class="nav"><div class="container nav-in"><strong class="logo">◆ Inscrição</strong><a class="muted small">Salvar e sair</a></div></header>
<main class="container wiz">
  <ol class="steps"><li class="done"><span>✓</span>Dados pessoais</li><li class="cur"><span>2</span>Perfil</li><li><span>3</span>Confirmação</li></ol>
  <section class="card wiz-card">
    <span class="eyebrow">Passo 2 de 3</span>
    <h1>Conte sobre seu perfil</h1>
    <p class="muted">Essas informações nos ajudam a personalizar sua experiência.</p>
    <div class="field"><label for="f1">Nome da instituição</label><input id="f1" value="Universidade Federal"></div>
    <div class="field ok"><label for="f2">E-mail institucional</label><input id="f2" value="maria@universidade.br"><small>✓ E-mail válido</small></div>
    <div class="field err"><label for="f3">Área de atuação</label><input id="f3" placeholder="Ex.: Design Instrucional"><small>⚠ Campo obrigatório</small></div>
    <div class="choice">
      <label class="opt-card"><input type="radio" name="p" checked><strong>Docente</strong><span class="muted small">Leciono disciplinas</span></label>
      <label class="opt-card"><input type="radio" name="p"><strong>Estudante</strong><span class="muted small">Graduação ou pós</span></label>
      <label class="opt-card"><input type="radio" name="p"><strong>Pesquisador</strong><span class="muted small">Projetos e grupos</span></label>
    </div>
  </section>
</main>
<footer class="wiz-bar"><div class="container wiz-bar-in"><button class="btn">← Voltar</button><div class="bar"><i style="width:66%"></i></div><button class="btn btn-primary">Avançar →</button></div></footer>`
});

/* ============================================================
   FUNÇÕES AUXILIARES: tema, documento, prompts
   ============================================================ */
GL.byId = (list, id) => list.find(x => x.id === id) || list[0];

GL.onColor = function (hex) {
  const h = hex.replace('#', '');
  const rgb = [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16) / 255)
    .map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const L = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  return L > 0.42 ? '#0B1020' : '#FFFFFF';
};

GL.fontsHref = f => `https://fonts.googleapis.com/css2?family=${f.title.replace(/ /g, '+')}:wght@${f.tw}&family=${f.body.replace(/ /g, '+')}:wght@${f.bw}&display=swap`;

GL.bgUrl = (bg, absolute) => !bg || !bg.path ? '' : (absolute ? `${GL.REPO_RAW}/${bg.path}` : bg.path);

GL.themeFor = layout => ({
  palette: GL.byId(GL.PALETTES, layout.combo.palette),
  font: GL.byId(GL.FONTS, layout.combo.font),
  bg: GL.byId(GL.BACKGROUNDS, layout.combo.bg)
});

GL.themeCss = function (theme, absolute) {
  const p = theme.palette, f = theme.font, url = GL.bgUrl(theme.bg, absolute);
  return `/* 🎨 Tokens do tema — Paleta: ${p.name} | Fontes: ${f.title} + ${f.body} | Fundo: ${theme.bg.name} */
:root{
  --bg:${p.bg};          /* fundo da página */
  --text:${p.text};        /* texto principal */
  --primary:${p.primary};     /* ações / CTAs */
  --accent:${p.accent};      /* destaques */
  --on-primary:${GL.onColor(p.primary)};  /* texto sobre a cor primária */
  --font-title:'${f.title}', ${f.ts};
  --font-body:'${f.body}', ${f.bs};
  --bg-image:${url ? `url('${url}')` : 'none'};
}`;
};

/* Monta o documento HTML completo de um layout com um tema */
GL.buildDoc = function (layout, theme, opts) {
  opts = opts || {};
  theme = theme || GL.themeFor(layout);
  const absolute = !!opts.absolute;
  let extra = '';
  if (opts.preview) {
    // Somente na pré-visualização: impede navegação de links e anima âncoras internas
    extra = `<script>document.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;e.preventDefault();var h=a.getAttribute('href');if(h&&h.charAt(0)==='#'&&h.length>1){var t=document.querySelector(h);if(t)t.scrollIntoView({behavior:'smooth'});}});document.addEventListener('submit',function(e){e.preventDefault();});<\/script>`;
  }
  const thumbCss = opts.thumb ? '\nhtml{scrollbar-width:none}::-webkit-scrollbar{display:none}' : '';
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${layout.name}</title>
<!-- Layout: ${layout.name} | Gerado por Gl Cores Fontes e Fundos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${GL.fontsHref(theme.font)}" rel="stylesheet">
<style>
${GL.themeCss(theme, absolute)}

/* ===== Base (reset, tokens derivados e componentes) ===== */
${GL.BASE_CSS}

/* ===== Layout: ${layout.name} ===== */
${layout.css}${thumbCss}
</style>
</head>
<body>
${layout.html}
${extra}
</body>
</html>`;
};

/* Prompt IA (Vibe Coding) focado na estrutura do layout */
GL.buildPrompt = function (layout, withCombo) {
  const s = layout.spec;
  const cat = GL.byId(GL.CATEGORIES, layout.cat);
  let txt = `Estruture a interface utilizando o layout "${layout.name}" (${cat.name}).

🎯 OBJETIVO E USO IDEAL
${layout.summary}
Indicado para: ${layout.uses.join(', ')}.

🧱 ANATOMIA DO LAYOUT (ordem visual)
${layout.anatomy.map((a, i) => `${i + 1}. ${a}`).join('\n')}

📐 GRID E ESTRUTURA
${s.grid}

📏 ESPAÇAMENTOS (gap, padding, raios)
${s.spacing}

🔠 HIERARQUIA VISUAL
${s.hierarchy}

📱 RESPONSIVIDADE E COMPORTAMENTO MOBILE
${s.mobile}

✨ INTERAÇÕES E ESTADOS
${s.interactions}

🌀 EQUIVALÊNCIA TAILWIND (caso o projeto use Tailwind CSS)
${s.tw}

✅ REQUISITOS TÉCNICOS
- HTML5 semântico (header, nav, main, section, article, aside, footer) e CSS Grid/Flexbox modernos.
- Centralize o tema em variáveis CSS no :root (--bg, --text, --primary, --accent, --on-primary, --font-title, --font-body, --radius, --gap) e derive superfícies/bordas com color-mix().
- Sem rolagem horizontal de 320px a 1920px; use clamp() para tipografia fluida e aspect-ratio em mídias para evitar layout shift.
- Acessibilidade WCAG 2.2 AA: contraste mínimo 4.5:1, foco visível (:focus-visible), alvos de toque ≥ 44px, aria-label em botões de ícone e respeito a prefers-reduced-motion.
- Conteúdo de exemplo realista em português do Brasil e código organizado/comentado por seção.`;
  if (withCombo) {
    const t = GL.themeFor(layout);
    txt += `

💡 COMBO SUGERIDO (opcional)
- Paleta: ${t.palette.name} (${t.palette.hex.join(', ')})
- Tipografia: ${t.font.title} (títulos) + ${t.font.body} (corpo)
- Fundo: ${t.bg.name}${t.bg.path ? ' — ' + GL.bgUrl(t.bg, true) : ''}`;
  }
  return txt;
};

/* Prompt Mestre: Fundo + Paleta + Fontes + Layout */
GL.buildMasterPrompt = function (layout, theme) {
  const p = theme.palette, f = theme.font, bg = theme.bg, url = GL.bgUrl(bg, true);
  return `🔗 PROMPT MESTRE — Gl Cores Fontes e Fundos
Crie a interface completa combinando os 4 elementos de design abaixo (Fundo + Paleta + Tipografia + Layout).

🖼️ 1. FUNDO VISUAL
${url ? `- Imagem: ${bg.name}
- URL: ${url}
- Aplique no body com overlay para garantir legibilidade:
  background: linear-gradient(color-mix(in srgb, var(--bg) 86%, transparent), color-mix(in srgb, var(--bg) 95%, transparent)), url('${url}') center / cover fixed, var(--bg);` : `- Sem imagem: use a cor sólida de fundo da paleta (${p.bg}), podendo adicionar brilhos radiais sutis com a cor primária.`}

🎨 2. PALETA DE CORES — ${p.name}
- Cores da paleta: ${p.hex.join(', ')}
- Papéis: fundo ${p.bg} · texto ${p.text} · primária/CTAs ${p.primary} · destaque ${p.accent} · texto sobre primária ${GL.onColor(p.primary)}
- Superfícies, bordas e textos atenuados devem ser derivados com color-mix() a partir de --text e --bg.

🔤 3. TIPOGRAFIA — ${f.title} + ${f.body} (${f.cat})
- Títulos (h1–h4): '${f.title}', ${f.ts} · pesos ${f.tw.replace(/;/g, ', ')}
- Corpo e interface: '${f.body}', ${f.bs} · pesos ${f.bw.replace(/;/g, ', ')}
- Importação: <link href="${GL.fontsHref(f)}" rel="stylesheet">

🧩 TOKENS CSS PRONTOS
${GL.themeCss(theme, true)}

📐 4. LAYOUT
${GL.buildPrompt(layout, false)}`;
};
