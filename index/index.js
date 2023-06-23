// Criação de um array vagas, iniciando vazio
const vagas = [];
// Criamos uma função que vai listar as vagas
function listarVagas() {
  // Aqui criamos uma variavel que vai incrementar as vagas
  // O metodo "reduce" serve para incrementar no inicio da sequencia
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    // Logo, estamos criando a estrutura de como vamos apresentar as vagas quando listadas
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");
  // Logo a apresentação ocorre dentro de um alert
  alert(vagasEmTexto);
}
// Aqui criamos uma função que vai criar uma nova vaga
function novaVaga() {
  // Logo o usuario passara o nome da vaga
  const nome = prompt("Informe um nome para a vaga:");
  // Usuario tambem passará a descrição da vaga
  const descricao = prompt("Informe um descrição para a vaga:");
  // O usuario tambem nos passara a data limite da vaga
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:");
  // Temos uma aba de confirmação para o usuario conferir as informações digitadas
  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );
  // Caso tenhamos uma confirmação, a vaga será criada como um objeto

  if (confirmacao) {
    // Aqui criamos um array candidatos, onde mostramos que quando uma vaga for criada
    // Ela não terá candidatos, logo, o array foi criado vazio
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    // As informações agora como objeto, serão incrementadas dentro do objeto
    vagas.push(novaVaga);
    // Para termos uma confirmação, teremos um alert com uma mensagem de sucesso
    alert("Vaga criada.");
  }
}
// Aqui criamos uma função para exibir as vagas criadas
function exibirVaga() {
  // Aqui o usuario digita o indice da vaga que ele quer visualizar
  const indice = prompt("Informe o índice da vaga que deseja exibir:");
  const vaga = vagas[indice];
  // Aqui vamos ver se a vaga que teve o indice indicado possui candidatos
  const candidatosEmTexto = vaga.candidatos.reduce(
    (textoFinal, candidato) => textoFinal + "\n - " + candidato,
    ""
  );
  // Aqui temos o formato que os candidatos são apresentados dentro da vaga
  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos:" +
      candidatosEmTexto
  );
}
// Aqui criamos uma função para inscrever um candidato
function inscreverCandidato() {
  // Pedimos o nome do candidato(a)
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  // O indice da vaga que o candidato quer se aplicar
  const indice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[indice];
  // Aqui temos uma confirmação, para o usuario conferir os valores que foram digitados
  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );
  // Se a confirmação for verdadeira, vamos adicionar naquele array candidatos criado antes
  // O candidato atual
  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}
// Aqui temos a função para excluir uma vaga
function excluirVaga() {
  // Pedimos para o usuario o indice da vaga que ele quer deletar
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];
  // Novamente uma mensagem de confirmação para termos uma revisao dos dados digitados
  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );
  // Se a confirmação for verdadeira, a vaga será deletada
  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}
// Aqui criamos uma função
// Para desenvolvermos nosso menu
function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );

  return opcao;
}
// Aqui nessa função executar é onde nosso codigo vai rodar por completo
function executar() {
  let opcao = "";
  // Nesse do-while, começamos chamando a função do menu
  do {
    opcao = exibirMenu();
    // Criamos o switch para o usuario poder interagir com as nossas funcionalidades
    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
      // Um caso que quando selecionado, o usuario sai do sistema
      case "6":
        alert("Saindo...");
        break;
      // Um caso padrao para cuidar de opções que forem digitadas e estejam fora das pré-definições
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}
// Aqui chamamos a função executar para rodar o caodigo no final
executar();
