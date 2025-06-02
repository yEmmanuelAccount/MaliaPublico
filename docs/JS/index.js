/* JS/index.js */

document.addEventListener('DOMContentLoaded', () => {
  const estaLogado = sessionStorage.getItem('logado') === 'true';
  const mensagem = document.getElementById('mensagem-bemvindo');
  const grid = document.getElementById('grid-periodos');

  if (!estaLogado) {
    // Usuário não logado: exibir só a mensagem
    mensagem.style.display = 'block';
    grid.style.display = 'none';
  } else {
    // Usuário logado: exibir grid de períodos
    mensagem.style.display = 'none';
    grid.style.display = 'grid';
  }

  // Botões do header
  document.getElementById('btn-registrar').addEventListener('click', () => {
    window.location.href = './registrar.html';
  });
  document.getElementById('btn-login').addEventListener('click', () => {
    window.location.href = './login.html';
  });
});
