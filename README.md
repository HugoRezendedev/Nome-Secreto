# Amigo Secreto

# Prévia de todo o projeto.




https://github.com/user-attachments/assets/e9fdc5c3-aaa5-445f-a10f-35490c03a154




## Descrição
Este é um projeto simples para organizar e realizar um sorteio de amigo secreto ou sortear um possível ganhador de algum prêmio. Os usuários podem adicionar nomes a uma lista, e o sistema permite realizar o sorteio de um nome aleatório entre os participantes. O projeto também conta com a funcionalidade adicional de limpar a lista e iniciar um novo sorteio.

## Funcionalidades
- Adicionar nomes a uma lista.
- Verificar se o nome digitado é válido (apenas letras e espaços são permitidos).
- Impedir a adição de nomes duplicados (mesmo com diferenças de maiúsculas e minúsculas).
- Sortear um nome aleatório da lista.
- Limpar toda a lista de nomes e o resultado do sorteio.

## Tecnologias Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript**

## Como Usar
1. **Adicionar Nomes**:
   - Digite um nome no campo de entrada e clique no botão "Adicionar" ou pressione "Enter".
   - O nome será adicionado à lista exibida na tela, desde que seja válido e não esteja duplicado.

2. **Realizar o Sorteio**:
   - Clique no botão "Sortear Amigo" para sortear aleatoriamente um dos nomes da lista.
   - O nome sorteado será exibido abaixo da lista.

3. **Iniciar um Novo Sorteio**:
   - Clique no botão "Novo Sorteio" para limpar a lista de nomes e o resultado atual.


## Trechos de Código Principais 
### Validação de Nome
Antes de finalizar o projeto, pensei: e se a lista tiver 50 pessoas e eu já tiver digitado 34 nomes, mas, por acaso, sem querer, colocar um número? E, por ironia do destino, o ganhador fosse o número, hahaha. Decidi, então, implementar uma exigência de apenas letras para evitar possíveis problemas futuros.
```javascript
const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
if (!nome || !regex.test(nome)) {
  alert('Digite um nome válido contendo somente letras.');
  return;
}
```
### Verificação de Nome Duplicado
Com a mesma intenção do exemplo acima, pensei em adicionar ao código uma verificação para evitar nomes duplicados. Caso duas pessoas tenham o mesmo nome, o usuário será lembrado de adicionar o sobrenome, prevenindo problemas de identificação do ganhador.
```javascript
const nomeJaAdicionado = Array.from(document.querySelectorAll('#listaAmigos li'))
  .some(li => li.textContent.toLowerCase() === nome.toLowerCase());

if (nomeJaAdicionado) {
  alert('Este nome já foi adicionado! Para diferenciar, digite o nome com sobrenome.');
  return;
}
```

### Adição de evento. Tecla 'enter'.
Para comodidade do usuário, foi adicionado um evento em que, ao pressionar a tecla Enter no teclado de um desktop, o nome é adicionado à lista sem a necessidade de clicar no botão Adicionar.
```javascript
inputNomeAmigos.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    adicionarNomes();
  }
});
````
### Campo / Foco
Também foi adicionada a funcionalidade de, ao digitar o nome e clicar no botão 'Adicionar' ou pressionar a tecla 'Enter', o campo ser limpo e automaticamente retornar o foco para que o usuário possa digitar o próximo nome.
```javascript
inputNomeAmigos.value = ''; // Limpa o campo de entrada.
  inputNomeAmigos.focus(); // Foca no campo de entrada.
};
````

### Função novo sorteio / Adição de botão
Pensando na experiência do usuário, implementei no projeto uma nova funcionalidade e um botão que antes não existiam. Essa experiência me trouxe muito aprendizado, pois eu nunca havia trabalhado com CSS e HTML. 
No entanto, ao ter essa ideia, fiquei curioso para realizá-la e consegui! 'Missão dada, missão cumprida!', ou melhor, missão pensada, hahaha. Propus esse desafio a mim mesmo e alcancei o objetivo.
```javascript
function novoSorteio() {
  if (listaNomes.innerHTML === '') {
    alert('A lista já está vazia!');
    return;
  };

  listaNomes.innerHTML = '';
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  inputNomeAmigos.focus();

  alert('A lista foi limpa! Comece um novo sorteio.');
};
````
````HTML
<div class="button-container">
 <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
   <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
    Sortear amigo
 </button>
````
````CSS
.button-new-draw {
    background-color: #4CAF50; 
    color: white; 
    position:relative;
    left:auto;
    left: 28%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 10px 20px; 
    font-size: 16px; 
    border: none; 
    border-radius: 8; 
    cursor: pointer; 
    transition: background-color 0.3s; 
}

/* Efeito de hover */
.button-new-draw:hover {
    background-color: #45a049; 
}

/* Efeito de foco */
.button-new-draw:focus {
    outline: none; 
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.10);
}
````

## Melhorias Futuras
- Permitir salvar e carregar listas previamente criadas.
- Adicionar opção para exportar os resultados do sorteio.
- Tornar o design responsivo para diferentes tamanhos de tela, "Que, diga-se de passagem, foi um desafio e tanto."


## Como Executar o Projeto
1. Clone este repositório em sua máquina.
2. Abra o arquivo `index.html` em qualquer navegador moderno.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com sugestões de melhoria ou correções de bugs.

## Licença
Este projeto é de uso livre para fins educativos e recreativos.

## Agradecimentos
Agradeço à Alura, em especial, por disponibilizar todos os recursos de ensino para o meu aprendizado e por me proporcionar uma experiência incrível na jornada de desenvolvimento. Sua plataforma tem sido fundamental para ampliar meus conhecimentos e me encorajar a enfrentar novos desafios com confiança.

Agradeço também à minha família e amigos em especial meu mentor Marcus e minha esposa Milena, pelo apoio e incentivo contínuos, tornando esse processo ainda mais motivador. Este projeto é resultado de muito esforço, curiosidade e do desejo constante de aprender e evoluir.

