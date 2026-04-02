# CLAUDE.md

## Visão Geral do Projeto

Este documento define as diretrizes de design e desenvolvimento para o projeto. Todas as decisões de interface devem seguir estas instruções.

---

## Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#B8D8BB` | Fundo de seções alternadas, destaques, blocos de conteúdo |
| `--color-black` | `#111111` | Textos principais, overlays, headers |
| `--color-white` | `#FFFFFF` | Fundo padrão, textos sobre escuro |
| `--color-gray-light` | `#F5F5F5` | Fundos neutros, inputs |
| `--color-gray-mid` | `#CCCCCC` | Bordas, divisores, linhas de formulário |
| `--color-gray-dark` | `#444444` | Textos secundários, legendas |

> A cor primária `#B8D8BB` (verde-sage suave) é usada como fundo de seções de destaque — nunca como cor de texto. O contraste principal é sempre preto sobre branco ou branco sobre preto.

---

## Tipografia

**Fonte:** [Inter](https://fonts.google.com/specimen/Inter) — única família tipográfica do projeto.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');

font-family: 'Inter', sans-serif;
```

### Escala Tipográfica

| Elemento | Peso | Tamanho | Uso |
|---|---|---|---|
| Logo / Brand | 700–900 | 18–22px | Identidade no header |
| H1 Hero | 900 | 72–96px | Letras grandes sobrepostas às imagens |
| H2 Seção | 700 | 36–48px | Títulos de seções ("SENTIAMOCI") |
| H3 Cards | 700 | 20–24px | Títulos de cards ("EVENTI", "FORMAT") |
| Body | 400 | 14–16px | Parágrafos e descrições |
| Body destaque | 600–700 | 14–16px | Frases em negrito dentro do corpo |
| Labels / Nav | 400–500 | 12–14px | Navegação, labels de formulário |
| Footer | 300–400 | 11–12px | Informações legais |

---

## Layout & Estrutura

### Grid

- Layout de **12 colunas**, com `max-width: 1200px` e centralizado.
- Usar `CSS Grid` e `Flexbox` conforme o contexto.
- Espaçamento padrão entre seções: `80px` (desktop) / `48px` (mobile).

### Seções Principais (ordem da página)

#### 1. Header / Navegação
- Fundo branco, logo à esquerda, links de navegação à direita.
- Links: `ABOUT`, `WHAT`, `CONTACT` + seletor de idioma.
- Sem sombra; separado do hero por linha sutil ou direto colado.

#### 2. Hero — Layout Duas Colunas com Slideshow à Esquerda

O Hero é dividido em **duas colunas fixas**, ocupando ~100vh:

- **Coluna esquerda (60%):** slideshow automático que alterna imagens em preto e branco com transição suave (`fade` ou `slide`). Sem controles visíveis; a troca é silenciosa e contínua.
- **Coluna direita (40%):** fundo branco (ou `#B8D8BB`), com o título do projeto em letras **maiúsculas gigantes** (`H1`, peso 900), alinhado verticalmente ao centro.

```
┌────────────────────────┬──────────────────┐
│                        │                  │
│   [Slideshow P&B]      │   T Í T U L O    │  ← 100vh
│   imagens alternando   │   (H1 gigante)   │
│   automaticamente      │                  │
└────────────────────────┴──────────────────┘
         60%                    40%
```

**Comportamento do slideshow:**
- Intervalo entre imagens: `4000–6000ms`
- Transição: `opacity` com `ease-in-out`, duração `800ms`
- As imagens devem ser em **preto e branco** (`filter: grayscale(100%)`) e cobrir toda a coluna (`object-fit: cover`)
- Sem botões de navegação ou indicadores de paginação visíveis

#### 3. Seção Texto Central
- Fundo branco, texto centralizado.
- Parágrafos curtos, palavras-chave em `<strong>`.
- `max-width: 600px`, `margin: 0 auto`.

#### 4. Seção Duas Colunas — Imagem + Texto
- Coluna esquerda: foto em preto e branco (50% da largura).
- Coluna direita: fundo `#B8D8BB`, texto corrido com frases em negrito.
- Altura mínima: `500px`.

```
┌─────────────────┬─────────────────────┐
│                 │  Fundo #B8D8BB      │
│   Foto P&B      │                     │
│                 │  Texto editorial    │
│                 │  com destaques      │
└─────────────────┴─────────────────────┘
```

#### 5. Seção Cards — Três Colunas
- Três cards lado a lado, cada um com imagem de fundo em tela cheia.
- Overlay escuro semi-transparente sobre a imagem.
- Título em maiúsculas branco sobre a