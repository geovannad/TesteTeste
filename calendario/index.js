//listas
const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const horarios = ["15h", "16h", "17h", "18h", "19h"];
const listaTr = document.getElementsByTagName("tr")[1];
console.log(listaTr);
const a = listaTr.children;
console.log(a);

//função para adicionar a tarefa
function inserirTarefa(tarefa, dia, horario) {
  //validações
  // const diaV = dias.includes(dia);
  // const horarioV = horarios.includes(horario);
  const diaV = dias.indexOf(dia);
  const horarioV = horarios.indexOf(horario);

  // adicionando
  if (!diaV >= 0) {
    window.alert("Insira apenas dias da semana");
    dia = pedirDia();
    inserirTarefa(tarefa, dia, horario);
  }
  // terminar validações
  listaTr[horarioV++];
}
