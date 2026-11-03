/* ============================================================
   Gl Cores Fontes e Fundos — Catálogo de Layouts Web Completos
   Arquiteturas Espaciais Agnósticas de Conteúdo (Content-Agnostic)
   ------------------------------------------------------------
   Filosofia: cada layout define APENAS a geometria espacial,
   proporções, fluxo e alinhamento das zonas na tela — sem
   forçar botões, menus, buscas ou elementos que não existam
   no conteúdo real do projeto.
   ============================================================ */

window.GL = window.GL || {};

GL.REPO_RAW = 'https://raw.githubusercontent.com/GlauberLASantiago/gl-cores-fontes-e-fundos/main';

/* ---------- 5 Categorias Geométricas / Espaciais ---------- */
GL.CATEGORIES = [
    { id: 'divisoes',  icon: '◧', name: 'Divisões & Colunas (Splits & Eixos)',          short: 'Divisões & Colunas' },
    { id: 'grades',    icon: '▦', name: 'Grades & Mosaicos Elásticos (Grids Modulares)', short: 'Grades & Mosaicos' },
    { id: 'paineis',   icon: '▤', name: 'Painéis & Colunas de Apoio (Sidebars & Palcos)',short: 'Painéis & Palcos' },
    { id: 'fluxos',    icon: '↕', name: 'Ritmos Verticais & Fluxos de Leitura',          short: 'Ritmos & Fluxos' },
    { id: 'compactos', icon: '📱', name: 'Estruturas Compactas & Tela Única',            short: 'Compactos & 100vh' }
];

/* ---------- Paletas (curadoria de paletas.html) ---------- */
GL.PALETTES = [
    { id: 'neo',          name: 'Neo Glassmorphism & SaaS',          hex: ['#0F172A','#38BDF8','#818CF8','#C084FC','#F43F5E','#F8FAFC'], bg: '#0F172A', text: '#F8FAFC', primary: '#38BDF8', accent: '#C084FC' },
    { id: 'darkmode',     name: 'Minimalista Dark Mode',             hex: ['#090D16','#1E293B','#0EA5E9','#10B981','#64748B','#FFFFFF'], bg: '#090D16', text: '#FFFFFF', primary: '#0EA5E9', accent: '#10B981' },
    { id: 'aurora',       name: 'Aurora Boreal B2B',                 hex: ['#0B132B','#1C2541','#3A506B','#5BC0BE','#6FFFE9','#FFFFFF'], bg: '#0B132B', text: '#FFFFFF', primary: '#5BC0BE', accent: '#6FFFE9' },
    { id: 'fintech',      name: 'Fintech & Cripto Futurista',        hex: ['#050814','#2E5BFF','#00D2D3','#F9AA33','#263238','#FAFAFA'], bg: '#050814', text: '#FAFAFA', primary: '#2E5BFF', accent: '#F9AA33' },
    { id: 'ia',           name: 'Inteligência Artificial & Quântico',hex: ['#0D0221','#0F084B','#26408B','#A6CFE2','#C2E7D9','#7928CA'], bg: '#0D0221', text: '#E6F4F1', primary: '#7928CA', accent: '#A6CFE2' },
    { id: 'slate',        name: 'Monocromia Slate Luxo',             hex: ['#0F172A','#1E293B','#334155','#64748B','#94A3B8','#E2E8F0'], bg: '#0F172A', text: '#E2E8F0', primary: '#94A3B8', accent: '#64748B' },
    { id: 'synthwave',    name: 'Synthwave Miami 1984',              hex: ['#241734','#2E2157','#FD3A69','#FECD1A','#01C5C4','#FFFFFF'], bg: '#241734', text: '#FFFFFF', primary: '#FD3A69', accent: '#01C5C4' },
    { id: 'bladerunner',  name: 'Blade Runner Neo-Noir',             hex: ['#0D1317','#1D2D35','#FF2A6D','#05D9E8','#005678','#D1F7FF'], bg: '#0D1317', text: '#D1F7FF', primary: '#FF2A6D', accent: '#05D9E8' },
    { id: 'esmeralda',    name: 'Esmeralda Nobre & Champanhe',       hex: ['#0B2B26','#163832','#235347','#8EB69B','#DAF1DE','#D4AF37'], bg: '#0B2B26', text: '#DAF1DE', primary: '#D4AF37', accent: '#8EB69B' },
    { id: 'oceano',       name: 'Oceano Profundo',                   hex: ['#001219','#005F73','#0A9396','#94D2BD','#E9D8A6','#EE9B00'], bg: '#001219', text: '#E9D8A6', primary: '#0A9396', accent: '#EE9B00' },
    { id: 'luxo',         name: 'Editorial Luxo & E-commerce',       hex: ['#1A1A1A','#E2D4C9','#C5A880','#5B616A','#9A8262','#F9F6F0'], bg: '#F9F6F0', text: '#1A1A1A', primary: '#9A8262', accent: '#5B616A' },
    { id: 'matcha',       name: 'Matcha, Chá Verde & Bambu',         hex: ['#2C3E2D','#588157','#8A9A5B','#DAD7CD','#F3F4F6','#3A5A40'], bg: '#F3F4F6', text: '#2C3E2D', primary: '#3A5A40', accent: '#8A9A5B' },
    { id: 'terracota',    name: 'Terracota & Eucalipto',             hex: ['#BC6C25','#DDA15E','#FEFAE0','#283618','#606C38','#384628'], bg: '#FEFAE0', text: '#283618', primary: '#BC6C25', accent: '#606C38' },
    { id: 'cafe',         name: 'Café Especial & Torra Média',       hex: ['#2B1700','#4A2810','#8B5E3C','#D4A373','#CCD5AE','#FAEDCD'], bg: '#FAEDCD', text: '#2B1700', primary: '#8B5E3C', accent: '#4A2810' },
    { id: 'mediterranea', name: 'Costa Mediterrânea & Capri',        hex: ['#1D3557','#457B9D','#A8DADC','#F1FAEE','#E63946','#FFB703'], bg: '#F1FAEE', text: '#1D3557', primary: '#E63946', accent: '#457B9D' },
    { id: 'horizonte',    name: 'Grupo Horizonte',                   hex: ['#BCDFB9','#C87F8B','#E9A97F','#E7F0C7','#000000','#FFFFFF'], bg: '#FFFFFF', text: '#111111', primary: '#C87F8B', accent: '#5E9C59' }
];

/* ---------- Pares Tipográficos (curadoria de fontes.html) ---------- */
GL.FONTS = [
    { id: 'outfit',       title: 'Outfit',              body: 'Inter',             tw: '600;700;800', bw: '400;500;600', ts: 'sans-serif', bs: 'sans-serif', cat: 'Tech & SaaS' },
    { id: 'jakarta',      title: 'Plus Jakarta Sans',   body: 'DM Sans',           tw: '600;700;800', bw: '400;500;700', ts: 'sans-serif', bs: 'sans-serif', cat: 'Fintech & Apps' },
    { id: 'syne',         title: 'Syne',                body: 'Work Sans',         tw: '700;800',     bw: '400;500;600', ts: 'sans-serif', bs: 'sans-serif', cat: 'Criativo & Agência' },
    { id: 'spacegrotesk', title: 'Space Grotesk',       body: 'Space Mono',        tw: '600;700',     bw: '400;700',     ts: 'sans-serif', bs: 'monospace',  cat: 'Cyberpunk & Web3' },
    { id: 'playfair',     title: 'Playfair Display',    body: 'Plus Jakarta Sans', tw: '600;700;800', bw: '400;500;600', ts: 'serif',      bs: 'sans-serif', cat: 'Editorial & Luxo' },
    { id: 'lexend',       title: 'Lexend',              body: 'Inter',             tw: '600;700;800', bw: '400;500;600', ts: 'sans-serif', bs: 'sans-serif', cat: 'Produtividade & Dashboard' },
    { id: 'fraunces',     title: 'Fraunces',            body: 'Inter',             tw: '700;900',     bw: '400;500;600', ts: 'serif',      bs: 'sans-serif', cat: 'Criativo & Vintage' },
    { id: 'merriweather', title: 'Merriweather',        body: 'Source Sans 3',     tw: '700;900',     bw: '400;500;600', ts: 'serif',      bs: 'sans-serif', cat: 'Clássico & Acadêmico' },
    { id: 'bricolage',    title: 'Bricolage Grotesque', body: 'Manrope',           tw: '700;800',     bw: '400;500;700', ts: 'sans-serif', bs: 'sans-serif', cat: 'Tech & SaaS' },
    { id: 'newsreader',   title: 'Newsreader',          body: 'Inter',             tw: '600;700;800', bw: '400;500;600', ts: 'serif',      bs: 'sans-serif', cat: 'Clássico & Acadêmico' },
    { id: 'instrument',   title: 'Instrument Serif',    body: 'Inter',             tw: '400',         bw: '400;500;600', ts: 'serif',      bs: 'sans-serif', cat: 'Editorial & Luxo' },
    { id: 'unbounded',    title: 'Unbounded',           body: 'Spline Sans',       tw: '700;800;900', bw: '400;500',     ts: 'sans-serif', bs: 'sans-serif', cat: 'Cyberpunk & Web3' },
    { id: 'montserrat',   title: 'Montserrat',          body: 'Open Sans',         tw: '600;700;800', bw: '400;600',     ts: 'sans-serif', bs: 'sans-serif', cat: 'Corporativo & Institucional' },
    { id: 'baskerville',  title: 'Libre Baskerville',   body: 'Source Serif 4',    tw: '700',         bw: '400;600',     ts: 'serif',      bs: 'serif',      cat: 'Clássico & Acadêmico' },
    { id: 'dmserif',      title: 'DM Serif Display',    body: 'DM Sans',           tw: '400',         bw: '400;500;700', ts: 'serif',      bs: 'sans-serif', cat: 'Editorial & Luxo' },
    { id: 'sora',         title: 'Sora',                body: 'Readex Pro',        tw: '700;800',     bw: '400;500',     ts: 'sans-serif', bs: 'sans-serif', cat: 'Tech & SaaS' }
];

/* ---------- Fundos Visuais (curadoria de index.html) ---------- */
GL.BACKGROUNDS = [
    { id: 'none',       name: 'Sem imagem (cor sólida da paleta)',          path: '' },
    { id: 'bokeh',      name: 'Gotas de água & bokeh (Abstrato)',           path: 'abstrato/05_realista_gotas_de_agua_vidro_bokeh.png' },
    { id: 'prisma',     name: 'Prisma refratando arco-íris (Abstrato)',     path: 'abstrato/01_realista_prisma_refratando_arco_iris.png' },
    { id: 'orion',      name: 'Nebulosa de Órion (Espaço)',                 path: 'espaco/01_realista_nebulosa_orion_colorida.png' },
    { id: 'vialactea',  name: 'Via Láctea no deserto (Espaço)',             path: 'espaco/03_realista_via_lactea_deserto_noturno.png' },
    { id: 'museu',      name: 'Museu minimalista (Arquitetura)',            path: 'arquitetura/01_realista_museu_minimalista_moderno.png' },
    { id: 'bibmoderna', name: 'Biblioteca moderna em madeira (Arquitetura)',path: 'arquitetura/04_realista_biblioteca_moderna_madeira.png' },
    { id: 'bibhist',    name: 'Biblioteca histórica (Educação)',            path: 'educacao/01_realista_biblioteca_historica_livros.png' },
    { id: 'campus',     name: 'Estudante no campus (Educação)',             path: 'educacao/02_realista_estudante_universitaria_campus.png' },
    { id: 'celulas',    name: 'Microscopia de células (Ciência)',           path: 'ciencia/02_realista_microscopia_celulas_fluorescentes.png' },
    { id: 'datacenter', name: 'Data center iluminado (Tecnologia)',         path: 'tecnologia/02_realista_servidores_data_center_luzes.png' },
    { id: 'cafe',       name: 'Café expresso latte art (Gastronomia)',      path: 'gastronomia/01_realista_cafe_expresso_latte_art.png' },
    { id: 'piano',      name: 'Piano de cauda no palco (Música)',           path: 'musica/01_realista_piano_de_cauda_palco.png' },
    { id: 'cinema',     name: 'Sala de cinema clássica (Cinema)',           path: 'cinema/03_realista_sala_cinema_poltronas_vermelhas.png' },
    { id: 'horaazul',   name: 'Hora azul urbana (Fotografia)',              path: 'fotografia/25_realista_hora_azul_arquitetura_urbana.png' },
    { id: 'led',        name: 'Instalação LED imersiva (Digitais)',         path: 'estilos_digitais/22_realista_instalacao_led_imersiva_arte.png' }
];

/* ---------- CSS Base Puramente Estrutural (sem botões/menus forçados) ---------- */
GL.BASE_CSS = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --surface:color-mix(in srgb,var(--text) 7%,var(--bg));
  --surface-strong:color-mix(in srgb,var(--text) 12%,var(--bg));
  --border:color-mix(in srgb,var(--text) 15%,transparent);
  --muted:color-mix(in srgb,var(--text) 64%,var(--bg));
  --radius:18px;
  --gap:clamp(16px,2.2vw,28px);
  --pad:clamp(18px,4vw,48px);
}
html{scroll-behavior:smooth}
body{
  font-family:var(--font-body);
  color:var(--text);
  background:
    linear-gradient(color-mix(in srgb,var(--bg) 85%,transparent),color-mix(in srgb,var(--bg) 94%,transparent)),
    var(--bg-image) center/cover fixed,
    var(--bg);
  line-height:1.65;
  min-height:100vh;
  -webkit-font-smoothing:antialiased;
}
h1,h2,h3,h4{font-family:var(--font-title);line-height:1.15;letter-spacing:-.01em}
p{color:var(--muted)}
.wrap{width:min(1200px,100% - 2*var(--pad));margin-inline:auto}
.zone{
  background:color-mix(in srgb,var(--surface) 82%,transparent);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:clamp(18px,2.5vw,30px);
  display:flex;
  flex-direction:column;
  gap:10px;
}
.zone-highlight{
  border-color:color-mix(in srgb,var(--primary) 48%,var(--border));
  background:linear-gradient(145deg,color-mix(in srgb,var(--primary) 13%,var(--surface)),color-mix(in srgb,var(--accent) 9%,var(--surface)));
}
.zone-tag{
  display:inline-flex;
  align-self:flex-start;
  font-size:.7rem;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:var(--primary);
  padding:3px 10px;
  border-radius:999px;
  background:color-mix(in srgb,var(--primary) 14%,transparent);
  border:1px solid color-mix(in srgb,var(--primary) 30%,transparent);
}
.w-media{
  flex:1;
  min-height:110px;
  border-radius:calc(var(--radius) - 6px);
  background:
    linear-gradient(135deg,color-mix(in srgb,var(--primary) 26%,var(--surface-strong)),color-mix(in srgb,var(--accent) 22%,var(--surface-strong)));
  border:1px dashed color-mix(in srgb,var(--text) 18%,transparent);
}
.w-lines{display:grid;gap:8px;margin-top:4px}
.w-line{height:9px;border-radius:99px;background:color-mix(in srgb,var(--text) 14%,transparent)}
.w-line.w80{width:80%}.w-line.w60{width:60%}.w-line.w45{width:45%}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important;scroll-behavior:auto!important}}`;

GL.LAYOUTS = [];

/* ============================================================
   1. ◧ DIVISÕES & COLUNAS (SPLITS & EIXOS)
   ============================================================ */
GL.LAYOUTS.push({
    id: 'single-axis', cat: 'divisoes', icon: '┃',
    name: 'Eixo Único Centralizado (Foco Linear)',
    summary: 'Organiza todo o conteúdo em uma única coluna central com largura controlada (680–860px) e ritmo vertical limpo. Ideal quando o conteúdo é direto e não precisa de barras laterais.',
    anatomy: ['Bloco de Abertura (Título / Contexto)', 'Zona Principal no Eixo Central', 'Blocos Complementares Empilhados (quantos existirem)'],
    uses: ['Qualquer Conteúdo Linear', 'Textos & Explicações', 'Ferramentas Simples', 'Apresentação Direta'],
    combo: { bg: 'bokeh', palette: 'neo', font: 'outfit' },
    spec: {
        grid: 'Container central único com width: min(820px, 100% - 2*var(--pad)), margin-inline: auto e display: flex; flex-direction: column; gap: var(--gap). Todos os blocos existentes empilham-se nesse eixo vertical.',
        spacing: 'Padding vertical da página clamp(32px, 6vw, 72px); espaçamento entre blocos var(--gap) (16px a 28px); padding interno de cada bloco clamp(18px, 2.5vw, 30px).',
        hierarchy: 'O primeiro bloco (ou cabeçalho do conteúdo) recebe maior peso tipográfico (H1 clamp(2rem, 4.2vw, 3.2rem)); os blocos seguintes mantêm a mesma largura máxima para leitura confortável sem dispersão visual.',
        mobile: 'Naturalmente responsivo em qualquer tela (de 320px a 1920px), apenas ajustando as margens laterais via clamp().',
        elastic: 'Se o projeto tiver apenas 1 bloco, ele fica centralizado na tela; se tiver 2, 4 ou 10 seções, elas se empilham mantendo o mesmo eixo e espaçamento. Não adicione cabeçalho, menu ou botões se o conteúdo não os tiver.',
        tw: 'max-w-3xl mx-auto px-5 py-12 flex flex-col gap-6.'
    },
    css: `.axis{width:min(820px,100% - 2*var(--pad));margin-inline:auto;padding-block:clamp(32px,6vw,72px);display:flex;flex-direction:column;gap:var(--gap)}
.axis h1{font-size:clamp(2rem,4.2vw,3.2rem)}
.axis h2{font-size:clamp(1.35rem,2.4vw,1.75rem)}`,
    html: `<!-- Coloque apenas os blocos reais do seu conteúdo no eixo central -->
<main class="axis">
  <section class="zone zone-highlight">
    <span class="zone-tag">Zona 01 · Abertura / Destaque</span>
    <h1>Eixo Único Centralizado</h1>
    <p>Todo o conteúdo existente é alinhado em uma única coluna confortável, sem distrações laterais e sem elementos forçados.</p>
  </section>
  <section class="zone">
    <span class="zone-tag">Zona 02 · Conteúdo Principal</span>
    <h2>Bloco de Conteúdo</h2>
    <div class="w-media"></div>
    <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div><div class="w-line w60"></div></div>
  </section>
  <section class="zone">
    <span class="zone-tag">Zona 03 · Bloco Seguinte (se houver)</span>
    <h2>Seção Complementar</h2>
    <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
  </section>
</main>`
});

GL.LAYOUTS.push({
    id: 'split-6040', cat: 'divisoes', icon: '◧',
    name: 'Divisão Assimétrica 60/40 (Principal + Apoio)',
    summary: 'Divide a área útil em duas colunas proporcionais (60% dominante à esquerda + 40% complementar à direita). Se houver mais conteúdo abaixo, distribui em blocos proporcionais.',
    anatomy: ['Zona Dominante (60% / 3fr)', 'Zona Complementar (40% / 2fr)', 'Faixa Inferior Opcional (se houver mais grupos de conteúdo)'],
    uses: ['Conteúdo Principal + Visual/Apoio', 'Explicação + Demonstração', 'Dados + Resumo', 'Qualquer Par Assimétrico'],
    combo: { bg: 'bokeh', palette: 'neo', font: 'outfit' },
    spec: {
        grid: 'CSS Grid principal com grid-template-columns: 3fr 2fr (proporção 60/40) e align-items: stretch (ou start, conforme o conteúdo). Caso existam blocos adicionais abaixo da dupla principal, use grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)).',
        spacing: 'Gap entre as colunas 60/40 de clamp(20px, 3vw, 40px); padding vertical clamp(32px, 6vw, 68px); border-radius de 18px nos blocos.',
        hierarchy: 'A coluna de 60% abriga o elemento central do projeto (H1 clamp(2rem, 4vw, 3.2rem) ou área interativa principal); a coluna de 40% recebe o elemento de apoio (mídia, quadro secundário, notas ou parâmetros).',
        mobile: 'Abaixo de 860px, o grid passa para 1 coluna (grid-template-columns: 1fr), empilhando a zona de 60% acima da zona de 40%.',
        elastic: 'Se o projeto tiver apenas 2 grupos de conteúdo, exiba somente o par 60/40 (sem a faixa inferior). Não crie botões, CTAs ou métricas se não existirem no conteúdo original.',
        tw: 'max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-5 gap-8 (principal lg:col-span-3, complementar lg:col-span-2).'
    },
    css: `.split-layout{padding-block:clamp(32px,6vw,68px);display:grid;gap:var(--gap)}
.split-6040{display:grid;grid-template-columns:3fr 2fr;gap:clamp(20px,3vw,40px);align-items:stretch}
.split-6040 h1{font-size:clamp(2rem,4vw,3.2rem)}
.auto-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--gap)}
@media(max-width:860px){.split-6040{grid-template-columns:1fr}}`,
    html: `<!-- Use apenas as zonas que corresponderem ao conteúdo existente -->
<main class="wrap split-layout">
  <section class="split-6040">
    <div class="zone zone-highlight">
      <span class="zone-tag">Zona Dominante · 60% (3fr)</span>
      <h1>Conteúdo Principal</h1>
      <p>Área mais ampla reservada ao foco primário do projeto (texto principal, painel central ou mídia de destaque).</p>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div><div class="w-line w60"></div></div>
    </div>
    <div class="zone">
      <span class="zone-tag">Zona Complementar · 40% (2fr)</span>
      <h2>Conteúdo de Apoio</h2>
      <div class="w-media"></div>
      <div class="w-lines"><div class="w-line w80"></div><div class="w-line w45"></div></div>
    </div>
  </section>
  <!-- Remova esta faixa se o conteúdo tiver apenas os 2 blocos acima -->
  <section class="auto-row">
    <div class="zone"><span class="zone-tag">Bloco Extra A</span><h3>Item adicional</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></div>
    <div class="zone"><span class="zone-tag">Bloco Extra B</span><h3>Item adicional</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></div>
    <div class="zone"><span class="zone-tag">Bloco Extra C</span><h3>Item adicional</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></div>
  </section>
</main>`
});

GL.LAYOUTS.push({
    id: 'split-5050', cat: 'divisoes', icon: '◫',
    name: 'Divisão Simétrica 50/50 (Lado a Lado)',
    summary: 'Divide o espaço em duas metades idênticas (1fr / 1fr) com mesmo peso visual. Perfeito para relacionar dois conteúdos equivalentes, comparações, teoria e prática ou entrada e resultado.',
    anatomy: ['Cabeçalho Opcional de Contexto', 'Coluna Esquerda (50% / 1fr)', 'Coluna Direita (50% / 1fr)'],
    uses: ['Comparação Lado a Lado', 'Teoria + Exemplo', 'Texto + Visual Equivalente', 'Entrada + Saída'],
    combo: { bg: 'prisma', palette: 'aurora', font: 'jakarta' },
    spec: {
        grid: 'CSS Grid com grid-template-columns: 1fr 1fr e gap: var(--gap). Se houver um título geral do conteúdo, ele ocupa grid-column: 1 / -1 acima das duas metades.',
        spacing: 'Padding vertical clamp(32px, 6vw, 68px); gap entre metades clamp(18px, 2.6vw, 32px); altura mínima equilibrada com align-items: stretch.',
        hierarchy: 'Ambas as colunas possuem a mesma largura e hierarquia equivalente (H2 clamp(1.5rem, 2.6vw, 2.1rem)), diferenciadas apenas por borda ou destaque sutil se uma delas for o resultado.',
        mobile: 'Abaixo de 800px, empilha em 1 coluna (grid-template-columns: 1fr).',
        elastic: 'Se não houver título geral acima das duas metades, omita o bloco superior. Se houver mais pares, eles continuam fluindo em linhas 50/50.',
        tw: 'max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-7 items-stretch.'
    },
    css: `.dual-wrap{padding-block:clamp(32px,6vw,68px);display:grid;grid-template-columns:1fr 1fr;gap:clamp(18px,2.6vw,32px);align-items:stretch}
.dual-head{grid-column:1/-1}
.dual-head h1{font-size:clamp(1.9rem,3.6vw,2.8rem)}
.dual-col{min-height:320px}
.dual-col h2{font-size:clamp(1.4rem,2.4vw,1.9rem)}
@media(max-width:800px){.dual-wrap{grid-template-columns:1fr}.dual-col{min-height:auto}}`,
    html: `<main class="wrap dual-wrap">
  <!-- Bloco de título geral (omita se o conteúdo já começar direto nas duas metades) -->
  <header class="zone dual-head">
    <span class="zone-tag">Contexto Geral (Opcional)</span>
    <h1>Divisão Simétrica 50 / 50</h1>
  </header>
  <section class="zone zone-highlight dual-col">
    <span class="zone-tag">Metade A · 50% (1fr)</span>
    <h2>Primeiro Bloco</h2>
    <p>Espaço de mesmo peso visual para o primeiro conjunto de informações, mídia ou área funcional.</p>
    <div class="w-media"></div>
    <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
  </section>
  <section class="zone dual-col">
    <span class="zone-tag">Metade B · 50% (1fr)</span>
    <h2>Segundo Bloco</h2>
    <p>Espaço espelhado para o conteúdo complementar, paralelo ou comparativo.</p>
    <div class="w-media"></div>
    <div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div>
  </section>
</main>`
});

/* ============================================================
   2. ▦ GRADES & MOSAICOS ELÁSTICOS (GRIDS MODULARES)
   ============================================================ */
GL.LAYOUTS.push({
    id: 'auto-grid', cat: 'grades', icon: '∷',
    name: 'Grade Fluida Auto-Adaptável (Auto-Fit)',
    summary: 'Distribui qualquer quantidade de blocos (2, 3, 5, 9...) em uma grade inteligente que calcula sozinha o número de colunas conforme o espaço disponível, sem deixar buracos.',
    anatomy: ['Bloco de Abertura (Opcional)', 'Grade Elástica auto-fit (1 a N blocos de mesmo peso)'],
    uses: ['Coleção de Tópicos ou Cards', 'Conjunto de Blocos Equivalentes', 'Galerias & Quadros Informativos', 'Qualquer Quantidade de Itens'],
    combo: { bg: 'led', palette: 'synthwave', font: 'syne' },
    spec: {
        grid: 'CSS Grid com grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)) e gap: var(--gap). O uso de auto-fit (em vez de auto-fill) faz com que poucos itens (ex.: 2) se expandam para preencher toda a largura sem colunas vazias.',
        spacing: 'Gap uniforme var(--gap) (18px a 26px); padding de página clamp(28px, 5vw, 64px); cada bloco com padding 24px e display: flex; flex-direction: column.',
        hierarchy: 'Todos os blocos da grade compartilham o mesmo peso estrutural, mantendo alturas alinhadas na mesma linha (align-items: stretch).',
        mobile: 'Reduz automaticamente de 3–4 colunas no desktop para 2 no tablet e 1 no celular, sem precisar de media queries fixas.',
        elastic: 'Adapta-se ao número exato de elementos do conteúdo: se o conteúdo tiver 3 itens, cria 3 colunas; se tiver 2, cria 2 colunas largas; se tiver 7, quebra linha naturalmente. Não invente filtros, buscas ou modais se não existirem.',
        tw: 'max-w-6xl mx-auto px-6 py-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-6.'
    },
    css: `.ag-page{padding-block:clamp(28px,5vw,64px);display:grid;gap:var(--gap)}
.ag-head h1{font-size:clamp(1.9rem,3.6vw,2.8rem)}
.ag-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:var(--gap);align-items:stretch}`,
    html: `<main class="wrap ag-page">
  <header class="zone ag-head">
    <span class="zone-tag">Abertura (Opcional)</span>
    <h1>Grade Fluida Auto-Adaptável</h1>
    <p>A grade ajusta automaticamente o número de colunas para a quantidade real de blocos do seu conteúdo.</p>
  </header>
  <section class="ag-grid">
    <article class="zone zone-highlight"><span class="zone-tag">Bloco 01</span><h3>Unidade de Conteúdo</h3><div class="w-media"></div><div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div></article>
    <article class="zone"><span class="zone-tag">Bloco 02</span><h3>Unidade de Conteúdo</h3><div class="w-media"></div><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></article>
    <article class="zone"><span class="zone-tag">Bloco 03</span><h3>Unidade de Conteúdo</h3><div class="w-media"></div><div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div></article>
    <article class="zone"><span class="zone-tag">Bloco 04</span><h3>Unidade de Conteúdo</h3><div class="w-media"></div><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></article>
    <article class="zone"><span class="zone-tag">Bloco 05</span><h3>Unidade de Conteúdo</h3><div class="w-media"></div><div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div></article>
    <article class="zone"><span class="zone-tag">Bloco 06</span><h3>Unidade de Conteúdo</h3><div class="w-media"></div><div class="w-lines"><div class="w-line"></div><div class="w-line w45"></div></div></article>
  </section>
</main>`
});

GL.LAYOUTS.push({
    id: 'bento', cat: 'grades', icon: '▦',
    name: 'Mosaico Bento Assimétrico (Pesos Visuais)',
    summary: 'Organiza blocos de diferentes importâncias em um mosaico retangular (2×2 para o destaque principal, 2×1 para blocos largos e 1×1 para blocos sintéticos).',
    anatomy: ['Bloco Dominante (2×2)', 'Blocos Largos (2×1)', 'Blocos Compactos (1×1)'],
    uses: ['Síntese Visual', 'Conteúdos com Importâncias Diferentes', 'Painéis Informativos', 'Apresentação Modular'],
    combo: { bg: 'none', palette: 'neo', font: 'bricolage' },
    spec: {
        grid: 'CSS Grid de 4 colunas (grid-template-columns: repeat(4, 1fr)) com grid-auto-flow: dense e gap: 18px. Classes utilitárias de proporção: .span-2x2 (grid-column: span 2; grid-row: span 2), .span-2x1 (grid-column: span 2) e .span-1x2 (grid-row: span 2).',
        spacing: 'Gap de 18px; border-radius amplo de 24px; padding interno de 24px.',
        hierarchy: 'O conteúdo mais importante do projeto recebe .span-2x2; conteúdos médios recebem .span-2x1; informações curtas ou pontuais ocupam 1×1.',
        mobile: 'Até 900px: 2 colunas. Até 560px: 1 coluna com todos os spans resetados para auto.',
        elastic: 'Atribua os spans apenas aos blocos reais do conteúdo conforme o volume de texto/mídia de cada um. Se houver poucos blocos (ex.: 3), use 1 bloco 2×2 + 2 blocos 2×1 para fechar o retângulo sem sobras. Não crie blocos falsos só para encher a grade.',
        tw: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4; spans com lg:col-span-2 lg:row-span-2.'
    },
    css: `.bento-page{padding-block:clamp(28px,5vw,60px)}
.bento-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:minmax(165px,auto);grid-auto-flow:dense;gap:18px}
.bento-grid .zone{border-radius:24px}
.span-2x2{grid-column:span 2;grid-row:span 2}
.span-2x1{grid-column:span 2}
.span-1x2{grid-row:span 2}
.span-2x2 h1{font-size:clamp(1.8rem,3.2vw,2.5rem)}
@media(max-width:900px){.bento-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.bento-grid{grid-template-columns:1fr}.span-2x2,.span-2x1,.span-1x2{grid-column:auto;grid-row:auto}}`,
    html: `<main class="wrap bento-page">
  <section class="bento-grid">
    <article class="zone zone-highlight span-2x2">
      <span class="zone-tag">Bloco Dominante · 2×2</span>
      <h1>Elemento Principal em Destaque</h1>
      <p>O conteúdo de maior peso ocupa o módulo amplo 2×2 do mosaico.</p>
      <div class="w-media"></div>
    </article>
    <article class="zone span-2x1">
      <span class="zone-tag">Bloco Largo · 2×1</span>
      <h2>Conteúdo Secundário</h2>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
    </article>
    <article class="zone">
      <span class="zone-tag">Módulo · 1×1</span>
      <h3>Item Curto</h3>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div>
    </article>
    <article class="zone">
      <span class="zone-tag">Módulo · 1×1</span>
      <h3>Item Curto</h3>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div>
    </article>
    <article class="zone span-2x1">
      <span class="zone-tag">Bloco Largo · 2×1</span>
      <h3>Conteúdo Horizontal</h3>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
    </article>
    <article class="zone span-2x1">
      <span class="zone-tag">Bloco Largo · 2×1</span>
      <h3>Conteúdo Horizontal</h3>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div>
    </article>
  </section>
</main>`
});

GL.LAYOUTS.push({
    id: 'editorial', cat: 'grades', icon: '▧',
    name: 'Grade Editorial Multi-Colunas (Hierarquia Tipográfica)',
    summary: 'Combina um bloco de abertura amplo no topo com uma divisão assimétrica (2/3 + 1/3) e colunas modulares abaixo, valorizando títulos expressivos e leitura escaneável.',
    anatomy: ['Faixa de Topo / Título Monumental', 'Zona Principal (2/3) + Coluna Lateral de Notas (1/3)', 'Grade Modular Inferior (se houver mais seções)'],
    uses: ['Artigos & Ensaios', 'Apresentações Ricas em Texto', 'Relatórios & Dossiês', 'Conteúdo Cultural / Editorial'],
    combo: { bg: 'none', palette: 'terracota', font: 'fraunces' },
    spec: {
        grid: 'Estrutura em 3 faixas: 1) Cabeçalho tipográfico de largura total; 2) Grid 2fr 1fr separado por linha fina; 3) Grid inferior repeat(auto-fit, minmax(240px, 1fr)) para tópicos adicionais.',
        spacing: 'Padding vertical clamp(28px, 5vw, 56px); gap de 28px; divisórias finas (1px solid var(--border)) organizando as zonas com estética editorial.',
        hierarchy: 'Título principal amplo clamp(2.4rem, 6vw, 4.5rem); corpo principal na coluna 2fr; notas, destaques curtos ou informações secundárias na coluna 1fr.',
        mobile: 'Abaixo de 860px, todas as divisões passam para 1 coluna vertical mantendo as linhas divisórias.',
        elastic: 'Se não houver notas secundárias para a coluna 1fr, o bloco principal ocupa 100%. Não adicione datas falsas, menus de revista ou links de assinatura se não pertencerem ao conteúdo.',
        tw: 'max-w-6xl mx-auto px-6 py-12 space-y-8; meio grid lg:grid-cols-3 gap-8 (principal lg:col-span-2).'
    },
    css: `.ed-page{padding-block:clamp(28px,5vw,56px);display:grid;gap:var(--gap)}
.ed-banner h1{font-size:clamp(2.4rem,6vw,4.4rem);line-height:1.02}
.ed-split{display:grid;grid-template-columns:2fr 1fr;gap:var(--gap)}
.ed-subgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--gap)}
@media(max-width:860px){.ed-split{grid-template-columns:1fr}}`,
    html: `<main class="wrap ed-page">
  <header class="zone ed-banner">
    <span class="zone-tag">Faixa de Abertura · 100%</span>
    <h1>Título Editorial em Grande Escala</h1>
    <p>Subtítulo ou síntese introdutória do conteúdo.</p>
  </header>
  <section class="ed-split">
    <article class="zone zone-highlight">
      <span class="zone-tag">Coluna Principal · 2/3 (2fr)</span>
      <h2>Desenvolvimento Principal</h2>
      <div class="w-media"></div>
      <div class="w-lines"><div class="w-line"></div><div class="w-line"></div><div class="w-line w80"></div></div>
    </article>
    <aside class="zone">
      <span class="zone-tag">Coluna Complementar · 1/3 (1fr)</span>
      <h3>Destaques / Notas</h3>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div>
      <div class="w-lines" style="margin-top:14px"><div class="w-line"></div><div class="w-line w80"></div></div>
      <div class="w-lines" style="margin-top:14px"><div class="w-line"></div><div class="w-line w45"></div></div>
    </aside>
  </section>
  <section class="ed-subgrid">
    <article class="zone"><span class="zone-tag">Seção A</span><h3>Tópico</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div></article>
    <article class="zone"><span class="zone-tag">Seção B</span><h3>Tópico</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></article>
    <article class="zone"><span class="zone-tag">Seção C</span><h3>Tópico</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div></article>
  </section>
</main>`
});

/* ============================================================
   3. ▤ PAINÉIS & COLUNAS DE APOIO (SIDEBARS & PALCOS)
   ============================================================ */
GL.LAYOUTS.push({
    id: 'sidebar-main', cat: 'paineis', icon: '▤',
    name: 'Coluna Lateral Fixa + Área Principal (Sidebar + Main)',
    summary: 'Divide a tela em uma coluna lateral estreita (260–280px, sticky) à esquerda para índice, controles ou resumo, e um palco principal amplo à direita para o conteúdo.',
    anatomy: ['Coluna Lateral Sticky (270px)', 'Palco Principal Amplo (1fr)', 'Sub-blocos Internos do Palco (conforme o conteúdo)'],
    uses: ['Conteúdo com Índice ou Controles', 'Painéis de Visualização', 'Guias e Materiais Estruturados', 'Sistemas & Aplicações Web'],
    combo: { bg: 'none', palette: 'darkmode', font: 'lexend' },
    spec: {
        grid: 'CSS Grid com grid-template-columns: 270px 1fr, gap: var(--gap) e align-items: start. A coluna lateral usa position: sticky; top: 24px para permanecer visível durante a rolagem do palco principal.',
        spacing: 'Padding da página clamp(20px, 3.5vw, 40px); gap entre lateral e palco 24px; blocos internos do palco com gap de 20px.',
        hierarchy: 'O palco principal (1fr) concentra o conteúdo primário; a coluna lateral funciona como apoio (sumário, parâmetros existentes ou informações de contexto).',
        mobile: 'Abaixo de 860px, vira 1 coluna (grid-template-columns: 1fr) e a lateral deixa de ser sticky, posicionando-se acima do palco principal.',
        elastic: 'Coloque na barra lateral apenas controles, filtros ou tópicos que realmente existam no projeto. Não invente menus falsos, ícones de notificação, avatar de usuário ou barra de busca se o projeto não os tiver.',
        tw: 'max-w-7xl mx-auto p-6 grid lg:grid-cols-[270px_1fr] gap-6 items-start; lateral lg:sticky lg:top-6.'
    },
    css: `.sb-layout{width:min(1320px,100% - 2*var(--pad));margin-inline:auto;padding-block:clamp(20px,3.5vw,40px);display:grid;grid-template-columns:270px 1fr;gap:var(--gap);align-items:start}
.sb-side{position:sticky;top:24px;min-height:420px}
.sb-main{display:grid;gap:var(--gap)}
.sb-main h1{font-size:clamp(1.8rem,3.2vw,2.6rem)}
.sb-subgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--gap)}
@media(max-width:860px){.sb-layout{grid-template-columns:1fr}.sb-side{position:static;min-height:auto}}`,
    html: `<div class="sb-layout">
  <aside class="zone sb-side">
    <span class="zone-tag">Coluna Lateral · 270px</span>
    <h3>Apoio / Controles / Índice</h3>
    <p>Espaço para parâmetros, navegação ou resumo (apenas o que existir no projeto).</p>
    <div class="w-lines" style="margin-top:12px"><div class="w-line"></div><div class="w-line w80"></div><div class="w-line w60"></div><div class="w-line w80"></div></div>
  </aside>
  <main class="sb-main">
    <section class="zone zone-highlight">
      <span class="zone-tag">Palco Principal · 1fr</span>
      <h1>Área Principal de Conteúdo</h1>
      <p>Ocupa todo o espaço restante à direita e organiza os elementos principais do projeto.</p>
      <div class="w-media" style="min-height:170px"></div>
    </section>
    <section class="sb-subgrid">
      <div class="zone"><span class="zone-tag">Sub-bloco A</span><h3>Conteúdo</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div></div>
      <div class="zone"><span class="zone-tag">Sub-bloco B</span><h3>Conteúdo</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></div>
    </section>
  </main>
</div>`
});

GL.LAYOUTS.push({
    id: 'longform-margin', cat: 'paineis', icon: '¶',
    name: 'Coluna de Leitura (65ch) + Margem Lateral Sticky',
    summary: 'Reserva uma coluna central calibrada na largura ideal de leitura humana (65 caracteres por linha) acompanhada de uma coluna lateral discreta para índice ou notas.',
    anatomy: ['Margem Lateral Sticky (220px)', 'Coluna de Leitura Confortável (minmax(0, 65ch))', 'Blocos Internos de Destaque / Figura (se houver)'],
    uses: ['Textos Longos & Artigos', 'Material Didático / Acadêmico', 'Documentação Técnica', 'Capítulos & Guias'],
    combo: { bg: 'none', palette: 'luxo', font: 'baskerville' },
    spec: {
        grid: 'CSS Grid com grid-template-columns: 220px minmax(0, 65ch) e justify-content: center; gap: clamp(28px, 5vw, 56px). A coluna de 220px fica sticky (top: 32px) ao lado do texto.',
        spacing: 'Padding vertical clamp(36px, 6vw, 72px); corpo do texto com font-size 1.08rem e line-height 1.8 para máximo conforto de leitura.',
        hierarchy: 'H1 amplo no topo da coluna de leitura; subtítulos H2 bem espaçados; blocos internos (citações, quadros ou figuras, quando existirem no texto) destacados com superfície sutil.',
        mobile: 'Abaixo de 860px, passa para 1 coluna centralizada com max-width: 65ch.',
        elastic: 'Se o texto não tiver sumário nem notas laterais, centralize apenas a coluna de 65ch. Não invente autor, data ou referências falsas que não estejam no conteúdo.',
        tw: 'max-w-5xl mx-auto px-6 py-14 grid lg:grid-cols-[220px_minmax(0,65ch)] gap-12 justify-center items-start.'
    },
    css: `.lf-wrap{width:min(1080px,100% - 2*var(--pad));margin-inline:auto;padding-block:clamp(36px,6vw,72px);display:grid;grid-template-columns:220px minmax(0,65ch);justify-content:center;gap:clamp(28px,5vw,56px);align-items:start}
.lf-side{position:sticky;top:32px}
.lf-prose{font-size:1.06rem;line-height:1.8;display:grid;gap:18px}
.lf-prose h1{font-size:clamp(2rem,4vw,3rem)}
.lf-prose h2{font-size:1.45rem;margin-top:8px}
.lf-callout{padding:18px 22px;border-left:4px solid var(--primary);background:var(--surface);border-radius:0 var(--radius) var(--radius) 0}
@media(max-width:860px){.lf-wrap{grid-template-columns:minmax(0,65ch)}.lf-side{position:static}}`,
    html: `<div class="lf-wrap">
  <aside class="zone lf-side">
    <span class="zone-tag">Margem Sticky · 220px</span>
    <h3>Índice / Notas</h3>
    <div class="w-lines"><div class="w-line w80"></div><div class="w-line w60"></div><div class="w-line w80"></div><div class="w-line w45"></div></div>
  </aside>
  <article class="zone zone-highlight lf-prose">
    <span class="zone-tag">Coluna de Leitura · 65ch</span>
    <h1>Largura Calibrada para Leitura Longa</h1>
    <p>A coluna principal limita o comprimento das linhas a cerca de 65 caracteres, evitando fadiga visual em textos corridos, materiais instrucionais e artigos.</p>
    <div class="lf-callout">
      <strong>Bloco de Destaque (se houver no texto)</strong>
      <p>Espaço para citação, definição ou observação importante pertencente ao conteúdo.</p>
    </div>
    <h2>Seção do Conteúdo</h2>
    <div class="w-media"></div>
    <div class="w-lines"><div class="w-line"></div><div class="w-line"></div><div class="w-line w80"></div></div>
  </article>
</div>`
});

GL.LAYOUTS.push({
    id: 'three-zone', cat: 'paineis', icon: '▥',
    name: 'Workspace de 3 Zonas (Esquerda + Palco Central + Direita)',
    summary: 'Divide a largura em três colunas coordenadas: painel esquerdo (240px), palco central dominante (1fr) e painel direito (280px). Ideal para ferramentas com entrada, visualização e detalhes.',
    anatomy: ['Faixa Superior Opcional', 'Zona Esquerda (240px)', 'Palco Central Dominante (1fr)', 'Zona Direita (280px)'],
    uses: ['Ferramentas Interativas', 'Simuladores & Laboratórios', ' Ambientes de Criação', 'Conteúdo + 2 Painéis de Apoio'],
    combo: { bg: 'none', palette: 'slate', font: 'jakarta' },
    spec: {
        grid: 'CSS Grid com grid-template-columns: 240px 1fr 280px e gap: 18px, preenchendo a largura útil (width: min(1400px, 100% - 32px)).',
        spacing: 'Padding externo 18px; gap entre as 3 colunas 18px; altura mínima das colunas calc(100vh - 36px) no desktop.',
        hierarchy: 'O palco central (1fr) é o coração visual e recebe destaque de borda/superfície; as colunas laterais apoiam com parâmetros, listas ou propriedades reais do app.',
        mobile: 'Até 1080px: 2 colunas (240px + 1fr) com a zona direita indo para baixo. Até 760px: 1 coluna empilhada.',
        elastic: 'Se o projeto precisar apenas de 2 zonas em determinado momento, oculte a coluna vazia e deixe o palco central expandir. Não adicione abas falsas ou barras de ferramentas decorativas.',
        tw: 'min-h-screen p-4 grid lg:grid-cols-[240px_1fr_280px] gap-4.'
    },
    css: `.tz-shell{width:min(1400px,100% - 32px);margin-inline:auto;padding-block:18px;min-height:100vh;display:grid;grid-template-columns:240px 1fr 280px;gap:18px;align-items:stretch}
.tz-center h1{font-size:clamp(1.7rem,3vw,2.4rem)}
@media(max-width:1080px){.tz-shell{grid-template-columns:220px 1fr}.tz-right{grid-column:1/-1}}
@media(max-width:760px){.tz-shell{grid-template-columns:1fr;min-height:auto}}`,
    html: `<main class="tz-shell">
  <aside class="zone tz-left">
    <span class="zone-tag">Zona Esquerda · 240px</span>
    <h3>Painel A</h3>
    <p>Entradas, itens ou opções do projeto.</p>
    <div class="w-lines" style="margin-top:10px"><div class="w-line"></div><div class="w-line w80"></div><div class="w-line w60"></div><div class="w-line w80"></div></div>
  </aside>
  <section class="zone zone-highlight tz-center">
    <span class="zone-tag">Palco Central Dominante · 1fr</span>
    <h1>Área Central de Visualização</h1>
    <p>Espaço principal onde o conteúdo ou a interação central acontece.</p>
    <div class="w-media" style="min-height:240px"></div>
    <div class="w-lines"><div class="w-line w80"></div><div class="w-line w45"></div></div>
  </section>
  <aside class="zone tz-right">
    <span class="zone-tag">Zona Direita · 280px</span>
    <h3>Painel B</h3>
    <p>Detalhes, resultados ou informações complementares.</p>
    <div class="w-media" style="min-height:100px;flex:0"></div>
    <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div><div class="w-line w60"></div></div>
  </aside>
</main>`
});

/* ============================================================
   4. ↕ RITMOS VERTICAIS & FLUXOS DE LEITURA
   ============================================================ */
GL.LAYOUTS.push({
    id: 'stage-blocks', cat: 'fluxos', icon: '◉',
    name: 'Destaque Panorâmico + Blocos Modulares Abaixo',
    summary: 'Abre com uma grande zona panorâmica centralizada que valoriza o fundo visual e o tema principal, seguida por uma fileira elástica de blocos na base.',
    anatomy: ['Zona Panorâmica de Abertura (Centralizada)', 'Fileira Elástica de Blocos (auto-fit) na Base'],
    uses: ['Aberturas de Impacto Visual', 'Páginas Temáticas', 'Apresentação Geral + Tópicos', 'Valorização do Fundo Visual'],
    combo: { bg: 'horaazul', palette: 'aurora', font: 'instrument' },
    spec: {
        grid: 'Flexbox/Grid vertical com min-height: 100vh distribuindo: 1) Zona panorâmica centralizada (text-align: center, flex: 1) e 2) Grade inferior repeat(auto-fit, minmax(220px, 1fr)) ancorada na parte inferior da primeira dobra.',
        spacing: 'Padding vertical 40px; gap entre a abertura e a fileira de blocos 32px; gap entre blocos 16px.',
        hierarchy: 'Título monumental clamp(2.6rem, 7vw, 5.2rem) sobre superfície translúcida (glassmorphism); blocos inferiores mais compactos para os subtópicos reais do conteúdo.',
        mobile: 'Os blocos inferiores passam automaticamente para 2 colunas no tablet e 1 coluna no celular.',
        elastic: 'A fileira inferior se adapta a 1, 2, 3, 4 ou mais blocos existentes. Se o conteúdo for apenas um bloco único de apresentação, omita a fileira inferior. Não crie barra de busca nem botões se o conteúdo não tiver.',
        tw: 'min-h-screen flex flex-col justify-between px-6 py-12; centro my-auto text-center max-w-3xl mx-auto; base grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4.'
    },
    css: `.pano-page{min-height:100vh;padding-block:clamp(28px,5vw,52px);display:flex;flex-direction:column;justify-content:space-between;gap:32px}
.pano-hero{margin-block:auto;text-align:center;align-items:center;max-width:860px;margin-inline:auto;padding:clamp(28px,5vw,52px)}
.pano-hero .zone-tag{align-self:center}
.pano-hero h1{font-size:clamp(2.6rem,6.5vw,4.8rem);line-height:1}
.pano-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}`,
    html: `<main class="wrap pano-page">
  <section class="zone zone-highlight pano-hero">
    <span class="zone-tag">Zona Panorâmica Central</span>
    <h1>Abertura em Destaque sobre o Fundo</h1>
    <p>Área ampla e respirada para o título e a ideia central do conteúdo, deixando o fundo visual brilhar ao redor.</p>
  </section>
  <!-- Fileira inferior se adapta à quantidade de subtópicos reais (ou pode ser omitida) -->
  <section class="pano-row">
    <article class="zone"><span class="zone-tag">Bloco 01</span><h3>Tópico</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></article>
    <article class="zone"><span class="zone-tag">Bloco 02</span><h3>Tópico</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div></article>
    <article class="zone"><span class="zone-tag">Bloco 03</span><h3>Tópico</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></article>
    <article class="zone"><span class="zone-tag">Bloco 04</span><h3>Tópico</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w45"></div></div></article>
  </section>
</main>`
});

GL.LAYOUTS.push({
    id: 'zigzag', cat: 'fluxos', icon: '⇄',
    name: 'Fluxo Alternado em Zigue-Zague (Z-Pattern)',
    summary: 'Organiza seções sucessivas em pares de colunas que invertem de lado a cada linha (Esquerda→Direita, depois Direita→Esquerda), criando ritmo dinâmico de leitura.',
    anatomy: ['Bloco de Introdução (Opcional)', 'Seção 01 (Texto à Esquerda + Visual à Direita)', 'Seção 02 Invertida (Visual à Esquerda + Texto à Direita)', 'Seção N (segue alternando para quantas seções existirem)'],
    uses: ['Narrativas & Explicações por Tópicos', 'Apresentação de Etapas', 'Conteúdos com Texto + Mídia', 'Roteiros Didáticos'],
    combo: { bg: 'none', palette: 'mediterranea', font: 'playfair' },
    spec: {
        grid: 'Lista de seções (.z-row) onde cada seção é um CSS Grid de 2 colunas (grid-template-columns: 1fr 1fr; gap: clamp(20px, 4vw, 48px); align-items: center). Nas seções pares (.z-row:nth-child(even) > :first-child { order: 2 }), a ordem das colunas se inverte automaticamente.',
        spacing: 'Padding vertical da página clamp(32px, 6vw, 68px); distância entre seções clamp(24px, 4vw, 44px).',
        hierarchy: 'Cada linha apresenta um par equilibrado (ex.: explicação textual de um lado e representação visual/dados do outro).',
        mobile: 'Abaixo de 800px, cada seção vira 1 coluna e o order: 2 é desfeito para manter sempre a mesma ordem lógica no celular.',
        elastic: 'Funciona para qualquer número de seções (2, 3, 5...). Não adicione tabelas comparativas, FAQs ou botões se eles não fizerem parte do conteúdo real.',
        tw: 'space-y-10; cada linha grid md:grid-cols-2 gap-8 items-center; pares com md:[&>*:first-child]:order-2.'
    },
    css: `.zz-page{padding-block:clamp(32px,6vw,68px);display:grid;gap:clamp(22px,3.5vw,38px)}
.zz-row{display:grid;grid-template-columns:1fr 1fr;gap:clamp(18px,3.2vw,36px);align-items:stretch}
.zz-row:nth-of-type(even)>:first-child{order:2}
.zz-row h2{font-size:clamp(1.5rem,2.8vw,2.1rem)}
@media(max-width:800px){.zz-row{grid-template-columns:1fr}.zz-row:nth-of-type(even)>:first-child{order:0}}`,
    html: `<main class="wrap zz-page">
  <section class="zz-row">
    <div class="zone zone-highlight">
      <span class="zone-tag">Seção 01 · Lado A</span>
      <h2>Primeiro Bloco Temático</h2>
      <p>Explicação ou conteúdo principal da primeira seção, alinhado ao bloco visual ao lado.</p>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
    </div>
    <div class="zone"><span class="zone-tag">Seção 01 · Lado B</span><div class="w-media"></div></div>
  </section>
  <section class="zz-row">
    <div class="zone zone-highlight">
      <span class="zone-tag">Seção 02 · Lado A (Invertido)</span>
      <h2>Segundo Bloco Temático</h2>
      <p>Na linha seguinte, a posição se inverte automaticamente para criar o movimento de leitura em Z.</p>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div>
    </div>
    <div class="zone"><span class="zone-tag">Seção 02 · Lado B</span><div class="w-media"></div></div>
  </section>
  <section class="zz-row">
    <div class="zone zone-highlight">
      <span class="zone-tag">Seção 03 · Lado A</span>
      <h2>Terceiro Bloco Temático</h2>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
    </div>
    <div class="zone"><span class="zone-tag">Seção 03 · Lado B</span><div class="w-media"></div></div>
  </section>
</main>`
});

GL.LAYOUTS.push({
    id: 'focused-stage', cat: 'fluxos', icon: '▢',
    name: 'Container Central Focado (Palco Flutuante sobre o Fundo)',
    summary: 'Concentra toda a interface dentro de um único card/painel translúcido centralizado na tela, deixando uma moldura generosa para o fundo visual ao redor.',
    anatomy: ['Moldura Externa de Respiro (Exibe o Fundo)', 'Container Central Elevado (760–920px)', 'Sub-zonas Internas (conforme o conteúdo)'],
    uses: ['Apps Compactos & Calculadoras', 'Quadros de Aviso / Convites', 'Atividades Focas / Exercícios', 'Páginas Curtas e Diretas'],
    combo: { bg: 'campus', palette: 'horizonte', font: 'montserrat' },
    spec: {
        grid: 'Body com min-height: 100vh; display: grid; place-items: center; padding: clamp(20px, 5vw, 56px). O container central tem width: min(860px, 100%) e organiza os elementos internos com CSS Grid.',
        spacing: 'Padding interno do container clamp(24px, 4vw, 48px); border-radius de 26px; sombra suave de elevação.',
        hierarchy: 'Todo o foco fica no interior do painel central, com contraste garantido pelo backdrop-filter: blur(18px) sobre qualquer imagem de fundo.',
        mobile: 'Em telas pequenas, a margem externa diminui para 16px, aproveitando toda a área útil.',
        elastic: 'O interior do container central se molda ao conteúdo real (pode conter apenas texto, ou uma grade interna de 2–3 blocos, ou controles da aplicação). Não adicione barra de etapas nem botões Voltar/Avançar se o conteúdo não for um passo a passo.',
        tw: 'min-h-screen grid place-items-center p-6; container w-full max-w-3xl rounded-3xl p-8 backdrop-blur-xl.'
    },
    css: `.fs-outer{min-height:100vh;display:grid;place-items:center;padding:clamp(20px,5vw,56px)}
.fs-card{width:min(860px,100%);padding:clamp(24px,4vw,44px);border-radius:26px;box-shadow:0 30px 70px -20px rgba(0,0,0,.45);display:grid;gap:20px}
.fs-card h1{font-size:clamp(1.9rem,3.8vw,2.8rem)}
.fs-inner{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}`,
    html: `<main class="fs-outer">
  <section class="zone zone-highlight fs-card">
    <span class="zone-tag">Container Central Focado · max 860px</span>
    <h1>Palco Único Elevado sobre o Fundo</h1>
    <p>Mantém todo o conteúdo agrupado em um painel central elegante, preservando ampla visibilidade para a imagem de fundo ao redor.</p>
    <div class="w-media" style="min-height:150px"></div>
    <div class="fs-inner">
      <div class="zone"><span class="zone-tag">Sub-bloco 01</span><h3>Elemento interno</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div></div>
      <div class="zone"><span class="zone-tag">Sub-bloco 02</span><h3>Elemento interno</h3><div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div></div>
    </div>
  </section>
</main>`
});

/* ============================================================
   5. 📱 ESTRUTURAS COMPACTAS & TELA ÚNICA
   ============================================================ */
GL.LAYOUTS.push({
    id: 'mobile-stack', cat: 'compactos', icon: '📱', device: 'mobile',
    name: 'Pilha Compacta Mobile-First (Coluna 480px)',
    summary: 'Estrutura vertical enxuta com largura máxima de celular (480px) centralizada na tela, empilhando cartões com espaçamento confortável e leitura rápida.',
    anatomy: ['Bloco de Topo Compacto', 'Bloco de Destaque', 'Pilha Vertical de Blocos (quantos existirem)'],
    uses: ['Interfaces Mobile / PWA', 'Links & Hubs Pessoais', 'Micro-Conteúdos & Resumos', 'Aplicações de Bolso'],
    combo: { bg: 'none', palette: 'ia', font: 'sora' },
    spec: {
        grid: 'Container centralizado com width: min(460px, 100%), margin-inline: auto, padding: 20px 16px 36px e display: grid; gap: 14px.',
        spacing: 'Gap compacto de 14px entre cartões; padding interno dos blocos de 18px; cantos arredondados de 20px.',
        hierarchy: 'Leitura 100% vertical de cima para baixo, sem colunas laterais, garantindo a mesma experiência no celular e no desktop.',
        mobile: 'Nativamente mobile-first: ocupa 100% da largura em smartphones e permanece como uma coluna elegante de 460px em monitores grandes.',
        elastic: 'Empilha exatamente a quantidade de blocos que o conteúdo possuir. Não adicione barra inferior de abas (bottom nav), busca ou avatar se o app não tiver múltiplas telas.',
        tw: 'max-w-[460px] mx-auto px-4 py-6 flex flex-col gap-3.5.'
    },
    css: `.ms-wrap{width:min(460px,100%);margin-inline:auto;padding:22px 16px 36px;display:grid;gap:14px}
.ms-wrap .zone{border-radius:20px;padding:18px}
.ms-wrap h1{font-size:1.75rem}`,
    html: `<main class="ms-wrap">
  <section class="zone zone-highlight">
    <span class="zone-tag">Topo · Largura 460px</span>
    <h1>Pilha Mobile-First</h1>
    <p>Coluna estreita e focada, ideal para leitura vertical rápida em qualquer dispositivo.</p>
  </section>
  <section class="zone">
    <span class="zone-tag">Bloco 01</span>
    <div class="w-media" style="min-height:130px"></div>
    <h3>Conteúdo Principal</h3>
    <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
  </section>
  <section class="zone">
    <span class="zone-tag">Bloco 02</span>
    <h3>Bloco Empilhado</h3>
    <div class="w-lines"><div class="w-line"></div><div class="w-line w60"></div></div>
  </section>
  <section class="zone">
    <span class="zone-tag">Bloco 03</span>
    <h3>Bloco Empilhado</h3>
    <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
  </section>
</main>`
});

GL.LAYOUTS.push({
    id: 'viewport-canvas', cat: 'compactos', icon: '⛶',
    name: 'Canvas de Tela Única sem Rolagem (100dvh)',
    summary: 'Ajusta toda a estrutura para caber exatamente na altura visível da janela (100dvh) no desktop, dividindo o espaço disponível de forma proporcional entre os blocos existentes.',
    anatomy: ['Faixa Superior Compacta (auto)', 'Área Central Flexível (1fr — divide o espaço entre os blocos)', 'Faixa Inferior Opcional (auto)'],
    uses: ['Apresentações / Slides Web', 'Painéis de Tela Cheia', 'Monitores & Quiosques', 'Apps de Tela Única'],
    combo: { bg: 'bibhist', palette: 'esmeralda', font: 'newsreader' },
    spec: {
        grid: 'Container com height: 100dvh; overflow: hidden (no desktop) e display: grid; grid-template-rows: auto 1fr; gap: 18px; padding: 20px. A área 1fr usa grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) para dividir a tela entre os blocos existentes.',
        spacing: 'Margem externa de 20px; gap de 18px; blocos internos com overflow: auto caso algum texto seja maior que a altura.',
        hierarchy: 'Visão panorâmica imediata de todos os blocos na mesma tela, sem necessidade de rolar a página.',
        mobile: 'Abaixo de 860px, height passa para auto (liberando a rolagem vertical natural no celular) e os blocos empilham em 1 coluna.',
        elastic: 'Se houver 1 bloco na área central, ele ocupa 100% do palco; se houver 2, divide 50/50; se houver 3, divide em terços. Se não houver faixa superior, use apenas grid-template-rows: 1fr.',
        tw: 'lg:h-dvh lg:overflow-hidden p-5 grid grid-rows-[auto_1fr] gap-4; palco grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 min-h-0.'
    },
    css: `.vc-shell{width:min(1380px,100%);margin-inline:auto;height:100dvh;padding:20px;display:grid;grid-template-rows:auto 1fr;gap:18px;overflow:hidden}
.vc-top h1{font-size:clamp(1.6rem,2.8vw,2.2rem)}
.vc-stage{min-height:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px}
.vc-stage .zone{min-height:0;overflow:auto}
@media(max-width:860px){.vc-shell{height:auto;overflow:visible}.vc-stage{grid-template-columns:1fr}}`,
    html: `<main class="vc-shell">
  <header class="zone vc-top">
    <span class="zone-tag">Topo Compacto · altura automática</span>
    <h1>Canvas 100dvh (Tudo Visível na Mesma Tela)</h1>
  </header>
  <section class="vc-stage">
    <article class="zone zone-highlight">
      <span class="zone-tag">Zona 01 · Altura Total (1fr)</span>
      <h2>Bloco Principal</h2>
      <p>Divide automaticamente a altura e a largura disponíveis na janela.</p>
      <div class="w-media"></div>
    </article>
    <article class="zone">
      <span class="zone-tag">Zona 02 · Altura Total (1fr)</span>
      <h2>Bloco Complementar</h2>
      <div class="w-media"></div>
      <div class="w-lines"><div class="w-line"></div><div class="w-line w80"></div></div>
    </article>
  </section>
</main>`
});

/* ============================================================
   FUNÇÕES AUXILIARES: tema, documento e geradores de prompt
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
  --bg:${p.bg};
  --text:${p.text};
  --primary:${p.primary};
  --accent:${p.accent};
  --on-primary:${GL.onColor(p.primary)};
  --font-title:'${f.title}', ${f.ts};
  --font-body:'${f.body}', ${f.bs};
  --bg-image:${url ? `url('${url}')` : 'none'};
}`;
};

/* Monta o documento HTML completo (mini-preview ou boilerplate para copiar) */
GL.buildDoc = function (layout, theme, opts) {
    opts = opts || {};
    theme = theme || GL.themeFor(layout);
    const absolute = !!opts.absolute;
    const thumbCss = opts.thumb ? '\nhtml{scrollbar-width:none}::-webkit-scrollbar{display:none}' : '';
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${layout.name}</title>
<!-- Arquitetura Espacial: ${layout.name} | Gl Cores Fontes e Fundos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${GL.fontsHref(theme.font)}" rel="stylesheet">
<style>
${GL.themeCss(theme, absolute)}

/* ===== Superfícies e containers estruturais (agnósticos de conteúdo) ===== */
${GL.BASE_CSS}

/* ===== Geometria Espacial: ${layout.name} ===== */
${layout.css}${thumbCss}
</style>
</head>
<body>
${layout.html}
</body>
</html>`;
};

/* Prompt IA (Vibe Coding) — puramente estrutural e adaptativo ao conteúdo */
GL.buildPrompt = function (layout, withCombo) {
    const s = layout.spec;
    const cat = GL.byId(GL.CATEGORIES, layout.cat);
    let txt = `Organize a estrutura espacial da interface utilizando a arquitetura "${layout.name}" (${cat.name}).

⚠️ REGRA ESTRITA DE RESPEITO AO CONTEÚDO (LEIA ANTES DE CODIFICAR)
1. ADAPTE O LAYOUT AO CONTEÚDO (e nunca o conteúdo ao layout): utilize esta geometria espacial EXCLUSIVAMENTE para posicionar, agrupar e alinhar os textos, dados, mídias e controles que JÁ EXISTEM no projeto (ou que foram explicitamente pedidos pelo usuário).
2. NÃO INVENTE ELEMENTOS: se não houver lógica no conteúdo para ter botão, CTA, barra de busca, menu de navegação, rodapé, avatar, métricas, formulário ou ícones extras, NÃO crie nenhum deles.
3. ZONAS ELÁSTICAS: se o conteúdo real tiver menos blocos do que as zonas previstas, omita as zonas sem uso e deixe os blocos existentes se expandirem ou centralizarem de forma limpa. Se tiver mais blocos, deixe a grade fluir naturalmente.
4. PRESERVE FUNCIONALIDADES: se estiver aplicando este layout a um app existente, mantenha 100% da lógica, IDs, eventos e textos originais, reorganizando apenas os containers e o CSS.

📐 GEOMETRIA E DIVISÃO ESPACIAL
${layout.summary}
- Zonas estruturais: ${layout.anatomy.join(' + ')}.
- Grid / Containers: ${s.grid}

🔄 COMPORTAMENTO ELÁSTICO (ADAPTAÇÃO AO CONTEÚDO)
${s.elastic}

📏 PROPORÇÕES E ESPAÇAMENTOS
${s.spacing}

🔠 HIERARQUIA ENTRE AS ZONAS
${s.hierarchy}

📱 RESPONSIVIDADE (DESKTOP → TABLET → MOBILE)
${s.mobile}

🌀 EQUIVALÊNCIA TAILWIND CSS (se o projeto usar Tailwind)
${s.tw}

✅ DIRETRIZES DE CSS LIMPO
- Centralize cores, fontes e raios em variáveis CSS no :root (--bg, --text, --primary, --accent, --font-title, --font-body, --radius, --gap) e derive superfícies/bordas com color-mix().
- Garanta ausência de rolagem horizontal (de 320px a 1920px) e use clamp() para tipografia e espaçamentos fluidos.`;

    if (withCombo) {
        const t = GL.themeFor(layout);
        txt += `

💡 SUGESTÃO DE TEMA VISUAL (opcional)
- Paleta: ${t.palette.name} (${t.palette.hex.join(', ')})
- Tipografia: ${t.font.title} (títulos) + ${t.font.body} (corpo)
- Fundo: ${t.bg.name}${t.bg.path ? ' — ' + GL.bgUrl(t.bg, true) : ''}`;
    }
    return txt;
};

/* Prompt Mestre: Fundo + Paleta + Fontes + Arquitetura Espacial */
GL.buildMasterPrompt = function (layout, theme) {
    const p = theme.palette, f = theme.font, bg = theme.bg, url = GL.bgUrl(bg, true);
    return `🔗 PROMPT MESTRE — Gl Cores Fontes e Fundos
Aplique ao projeto os 4 elementos visuais e estruturais abaixo (Fundo + Paleta + Tipografia + Arquitetura Espacial), respeitando estritamente o conteúdo real da aplicação.

🖼️ 1. FUNDO VISUAL
${url ? `- Imagem: ${bg.name}
- URL: ${url}
- Aplique no body com camada translúcida da cor de fundo para garantir contraste de leitura:
  background: linear-gradient(color-mix(in srgb, var(--bg) 85%, transparent), color-mix(in srgb, var(--bg) 94%, transparent)), url('${url}') center / cover fixed, var(--bg);` : `- Sem imagem: utilize a cor sólida de fundo da paleta (${p.bg}).`}

🎨 2. PALETA DE CORES — ${p.name}
- Códigos da paleta: ${p.hex.join(', ')}
- Papéis semânticos: fundo principal ${p.bg} · texto principal ${p.text} · cor de destaque primária ${p.primary} · cor de destaque secundária ${p.accent}
- Derive a cor das superfícies/zonas e bordas com color-mix() a partir de --text e --bg.

🔤 3. TIPOGRAFIA — ${f.title} + ${f.body} (${f.cat})
- Títulos (h1–h4): '${f.title}', ${f.ts} (pesos ${f.tw.replace(/;/g, ', ')})
- Corpo e demais textos: '${f.body}', ${f.bs} (pesos ${f.bw.replace(/;/g, ', ')})
- Importação Google Fonts: <link href="${GL.fontsHref(f)}" rel="stylesheet">

🧩 TOKENS CSS PRONTOS
${GL.themeCss(theme, true)}

📐 4. ARQUITETURA ESPACIAL — ${layout.name}
${GL.buildPrompt(layout, false)}`;
};
