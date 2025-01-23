const inputNomeAmigos = document.getElementById('amigo');
const botaoAdicionar = document.getElementById('adicionar');
const listaNomes = document.getElementById('listaAmigos');

botaoAdicionar.addEventListener('click', adicionarNomes);
inputNomeAmigos.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    adicionarNomes();
  }
});

function adicionarNomes() {
  const nome = inputNomeAmigos.value.trim();

  // Aceitar somente letras e espaços.
  const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

  // Verifica se o nome está repetido.
  const nomeJaAdicionado = Array.from(document.querySelectorAll('#listaAmigos li'))
    .some(li => li.textContent.toLowerCase() === nome.toLowerCase());

  if (!nome || !regex.test(nome)) {
    alert('Digite um nome válido contendo somente letras.');
    return;
  };

  if (nomeJaAdicionado) {
    alert('Este nome já foi adicionado! Para diferenciar, digite o nome com sobrenome.');
    return;
  };

  // Adiciona o nome na lista.
  const li = document.createElement('li');
  li.textContent = nome;
  listaNomes.appendChild(li);
  inputNomeAmigos.value = ''; // Limpa o campo de entrada.
  inputNomeAmigos.focus(); // Foca no campo de entrada.
};

function sortearAmigo() {
  const lista = document.querySelectorAll('#listaAmigos li');
  if (lista.length > 1) {
    const randomIndex = Math.floor(Math.random() * lista.length);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O nome sorteado é: <strong>${lista[randomIndex].textContent}</strong></li>`;
  } else {
    alert('Adicione pelo menos dois nomes!');
  };
};

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


















