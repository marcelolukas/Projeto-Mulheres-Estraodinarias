W# Guia de uso - Modelo de Página NEABI

## Instruções de uso do arquivo `modelo_pagina.html`

### 1. Criar uma nova página
- Duplique o arquivo `modelo_pagina.html`
- Renomeie conforme a necessidade (ex: `quem_somos.html`, `fale_conosco.html`, `projetos.html`)

### 2. Alterar configurações básicas

#### `<title>`
Mude o título da aba do navegador:
```html
<title>Quem Somos - NEABI</title>
```

#### `carol-hero` (seção de apresentação)
Altere o texto dentro de `<h2>` e `<p>`:
```html
<section class="carol-hero">
  <h2>Quem Somos</h2>
  <p>Descrição breve sobre o NEABI e sua missão.</p>
</section>
```

### 3. Adicionar conteúdo principal

#### Título principal
```html
<h1 class="carol-titulo">Título principal da página</h1>
```

#### Adicionar imagem (opcional)
Descomente a linha de imagem e altere `src`:
```html
<img class="foto-dartora" src="../assets/IMAGEM.png" alt="Descrição" />
```

#### Adicionar seções
Copie e cole a estrutura de `carol-section` conforme necessário:
```html
<section class="carol-section">
  <h3>Título da seção</h3>
  <p>Conteúdo em parágrafo.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</section>
```

### 4. Adicionar galeria de imagens (opcional)
Se a página tiver galeria, use a estrutura incluída. Altere `src` das imagens e legendas:
```html
<section class="carol-section" id="galeria-pagina">
  <h3>Galeria de imagens</h3>
  <div class="galeria-imagens">
    <figure>
      <img src="../assets/IMAGEM.png" alt="Descrição" />
      <figcaption>Legenda aqui</figcaption>
    </figure>
  </div>
</section>
```

### 5. Links de navegação
O botão "Voltar para Página Inicial" está pronto. Se precisar mudar o destino:
```html
<a class="botao-voltar" href="pagina_inicial.html">Voltar para Página Inicial</a>
```

### 6. Menu de navegação
Para destacar a página atual no menu, adicione `class="active"` ao `<li>` correspondente:
```html
<li><a href="quem_somos.html" class="active">Quem Somos</a></li>
```
(Isso requer CSS adicional em `global.css` para estilizar `.active`)

---

## Recursos já inclusos no modelo

- ✅ Header com logo e navegação
- ✅ Estrutura hero com apresentação
- ✅ Seções de conteúdo flexíveis
- ✅ Galeria de imagens responsiva
- ✅ Botão de retorno
- ✅ CSS unificado (`carol_dartora.css` + `global.css`)
- ✅ Scripts de animação e transição

---

## Dicas de boas práticas

1. **Mantenha títulos concisos** - Use `h1`, `h2`, `h3` em hierarquia correta
2. **Use listas** quando houver múltiplos itens (`<ul>` ou `<ol>`)
3. **Máximo 3-4 seções** por página para melhor legibilidade
4. **Imagens responsivas** - Usam `max-width: 100%` automaticamente
5. **Acessibilidade** - Sempre adicione `alt` em imagens

---

## Exemplos de páginas a criar

- `quem_somos.html` - Apresentar NEABI e mission
- `fale_conosco.html` - Contato, telefone, email
- `projetos.html` - Listagem de iniciativas
- `eventos.html` - Calendário e próximas atividades

---

## Seções recomendadas (modelo institucional)

Use as seções abaixo como guia para páginas institucionais: mantenha ordem e hierarquia para facilitar leitura.

- **Hero / Apresentação:** título curto, subtítulo e CTA (quando aplicável).
- **Introdução:** parágrafo objetivo sobre propósito da página.
- **Missão / Objetivos:** resumo institucional claro.
- **Equipe e contatos:** lista com nomes, cargos e emails/links (opcional: fotos).
- **Projetos / Programas:** destaques com links para detalhes.
- **Transparência e relatórios:** links para PDFs, relatórios de uso de emendas e prestação de contas.
- **Galeria de imagens:** fotos de eventos, com `figcaption` explicativo.
- **Recursos e downloads:** materiais em PDF, planilhas, guias.
- **FAQ:** perguntas frequentes com respostas claras.
- **Contato / Formulário:** formulário simples ou link para `mailto:`.
- **Rodapé institucional:** links legais, política de privacidade e créditos.

## Exemplos práticos (blocos que pode copiar)

### Bloco de equipe (HTML)
```html
<section class="carol-section" id="equipe">
  <h3>Equipe</h3>
  <div class="team-grid">
    <article>
      <img src="../assets/ui/membro1.jpg" alt="Nome do membro" />
      <h4>Nome Completo</h4>
      <p>Cargo / função</p>
    </article>
    <!-- Repita os membros -->
  </div>
</section>
```

### Bloco de transparência (links para downloads)
```html
<section class="carol-section" id="transparencia">
  <h3>Transparência e Relatórios</h3>
  <ul>
    <li><a href="../assets/relatorio-2025.pdf">Relatório de atividades 2025 (PDF)</a></li>
    <li><a href="../assets/planilha-gastos.xlsx">Planilha de execução</a></li>
  </ul>
</section>
```

### Bloco FAQ
```html
<section class="carol-section" id="faq">
  <h3>Perguntas Frequentes</h3>
  <dl>
    <dt>Como posso participar?</dt>
    <dd>Resposta breve com passos e contatos.</dd>
  </dl>
</section>
```

### Bloco de contato (formulário simples)
```html
<section class="carol-section" id="contato">
  <h3>Fale Conosco</h3>
  <form action="mailto:seu-email@exemplo.com" method="post" enctype="text/plain" class="contato-form">
    <label>Nome: <input name="nome" required></label>
    <label>Email: <input type="email" name="email" required></label>
    <label>Mensagem:<textarea name="mensagem" rows="4" required></textarea></label>
    <button type="submit" class="botao-voltar">Enviar</button>
  </form>
</section>
```

## Acessibilidade e SEO (checklist rápido)

- Títulos em ordem (`h1` único por página; `h2`/`h3` subsequentes).
- Textos alternativos (`alt`) em todas as imagens.
- Contraste de cores adequado (ver `global.css`).
- Meta tags: `title` e `meta name="description"` atualizados.
- `og:` tags para compartilhamento social (opcional).

## Checklist antes de publicar

1. Testar em mobile e desktop.
2. Verificar todos os links e downloads.
3. Conferir `alt` de imagens e legendas.
4. Medir velocidade (otimizar imagens se necessário).
5. Garantir que o formulário de contato funciona ou forneça email alternativo.

---

Se quiser, eu atualizo também o arquivo `src/pages/modelo_pagina.html` para incluir exemplos reais destes blocos — quer que eu faça isso agora?
