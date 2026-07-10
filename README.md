# Meu Portfólio

Template de portfólio para estudante de ADS, feito em HTML, CSS e JavaScript puro (sem frameworks, sem build).

## 1. Como personalizar

Abra os 3 arquivos e procure pelos comentários `<!-- EDITE -->` ou `EDITE:`:

- **index.html** — troque nome, textos, links do projeto, GitHub, LinkedIn e e-mail.
- **style.css** — as cores estão todas no topo do arquivo, dentro de `:root { ... }`. Troque os valores hexadecimais se quiser mudar a paleta.
- Adicione um print real do seu projeto: salve a imagem na mesma pasta (ex: `screenshot.png`) e troque a `<div class="case__shot-placeholder">` por:
  ```html
  <img src="screenshot.png" alt="Print do site de sorteio de chá de bebê" style="width:100%; border-radius:8px;">
  ```

## 2. Como testar localmente

Basta abrir o arquivo `index.html` duas vezes clicando nele — ele abre no navegador. Para ver mudanças, salve o arquivo e aperte F5 na aba aberta.

## 3. Como publicar de graça (GitHub Pages)

1. Crie uma conta no [GitHub](https://github.com) se ainda não tiver.
2. Crie um repositório novo, público, com o nome `seu-usuario.github.io` (troque `seu-usuario` pelo seu nome de usuário do GitHub — isso é importante, é esse nome exato que ativa o GitHub Pages na raiz).
3. No seu computador, dentro da pasta deste projeto, rode no terminal:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-USUARIO.github.io.git
   git push -u origin main
   ```
4. No GitHub, vá em **Settings → Pages** do repositório e confirme que a branch `main` está selecionada como fonte.
5. Em alguns minutos, seu site estará no ar em `https://seu-usuario.github.io`.

Esse link é o que você vai colocar no currículo, no LinkedIn e mandar para recrutadores.

## 4. Checklist antes de divulgar

- [ ] Troquei todos os `[colchetes]` e comentários `EDITE` por informações reais
- [ ] Testei no celular (abra o site pelo celular ou redimensione a janela do navegador)
- [ ] Coloquei um print real do projeto do chá de bebê
- [ ] Os links de e-mail, LinkedIn e GitHub funcionam de verdade
- [ ] Subi o código do projeto do chá de bebê para um repositório público no GitHub (mesmo que o código não esteja "perfeito" — mostrar o processo é o que importa)
