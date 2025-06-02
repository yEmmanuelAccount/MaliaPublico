/* JS/auth.js */

(() => {
  // Checa se já existe um array de usuários em localStorage
  function getUsers() {
    const raw = localStorage.getItem('usuarios');
    return raw ? JSON.parse(raw) : [];
  }

  // Salva array de usuários no localStorage
  function setUsers(users) {
    localStorage.setItem('usuarios', JSON.stringify(users));
  }

  // Cadastra um novo usuário (se nome não existir e senha >= 8 caracteres)
  function registrarUsuario(nome, senha) {
    const usuarios = getUsers();
    // Verifica se já existe
    if (usuarios.some(u => u.nome === nome)) {
      return { sucesso: false, erro: 'Usuário já existe.' };
    }
    if (senha.length < 8) {
      return { sucesso: false, erro: 'Senha deve ter ao menos 8 caracteres.' };
    }
    usuarios.push({ nome, senha });
    setUsers(usuarios);
    return { sucesso: true };
  }

  // Tenta logar, retorna objeto indicando sucesso ou erro
  function loginUsuario(nome, senha) {
    const usuarios = getUsers();
    const user = usuarios.find(u => u.nome === nome);
    if (!user || user.senha !== senha) {
      return { sucesso: false, erro: 'Algo está errado. Tente novamente.' };
    }
    // Armazena estado de “usuário logado”
    sessionStorage.setItem('logado', 'true');
    sessionStorage.setItem('nomeUsuario', nome);
    return { sucesso: true };
  }

  // Exposição das funções no escopo global
  window.auth = {
    registrarUsuario,
    loginUsuario
  };
})();
