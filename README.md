# SimpleOverlayContent

O **SimpleOverlayContent** é um módulo JavaScript projetado para exibir um overlay com um spinner de carregamento em um elemento HTML. Este é útil em situações onde você deseja indicar ao usuário que uma operação está em andamento, como o carregamento de dados ou a execução de uma ação.

## Funcionalidades

- Exibir um overlay de carregamento em elementos HTML com a classe `overlayable`.
- Remover o overlay após a finalização da operação.
- Adicionar automaticamente estilos necessários para o overlay e o spinner ao documento.

---

## Como usar

### Importação
Inclua o código do módulo em seu projeto ou adicione o arquivo JavaScript no cabeçalho ou rodapé do seu HTML:

```html
<script src="overlayContent.js"></script>
```

### Estrutura HTML
Certifique-se de que o elemento HTML onde você deseja exibir o overlay tenha a classe `overlayable` e um ID exclusivo.

```html
<div id="meu-container" class="overlayable">
    <!-- Conteúdo do container -->
</div>
```

### Exibir o overlay
Chame o método `show` passando o ID do elemento:

```javascript
overlayContent.show('meu-container');
```

### Ocultar o overlay
Chame o método `hide` passando o ID do elemento:

```javascript
overlayContent.hide('meu-container');
```

---

## Detalhes da Implementação

### Método `show(id)`
- **Parâmetro**: `id` - O ID do elemento HTML onde o overlay será exibido.
- **Comportamento**:
  1. Verifica se o elemento existe e possui a classe `overlayable`.
  2. Evita criar um overlay duplicado.
  3. Cria e adiciona o overlay ao elemento, definindo estilo para indicar carregamento.
  4. Insere os estilos necessários no cabeçalho do documento, caso ainda não estejam presentes.

### Método `hide(id)`
- **Parâmetro**: `id` - O ID do elemento HTML onde o overlay será ocultado.
- **Comportamento**:
  1. Localiza o overlay baseado no ID.
  2. Remove o overlay do DOM se ele existir.

---

## Estilos do Spinner
Os estilos do overlay e do spinner são automaticamente adicionados ao documento na primeira vez que o método `show` é chamado. Eles incluem:

- Overlay semi-transparente cobrindo o elemento.
- Spinner animado com bordas girando.
- Keyframes para animação do spinner.

### Exemplo de Estilos:

```css
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

## Considerações
- Certifique-se de que o ID fornecido no método `show` seja exclusivo e corresponda ao elemento desejado.
- O overlay é removido completamente do DOM ao chamar o método `hide`.

---

## Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests caso encontre bugs ou tenha sugestões de melhorias.

---

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

