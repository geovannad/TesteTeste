//VARIAVEIS GLOBAIS 
const dias = ["segunda", "terça", "quarta", "quinta", "sexta"];
const horarios = ["15h", "16h", "17h", "18h", "19h"];
const listaTr = document.getElementsByTagName("tr");
let listaTarefa = []
let listaDia = []
let listaHorario = []

menu()
//FUNÇÃO MENU
function menu(){
  const escolha = window.prompt(`
    [0] - Sair 
    [1] - Inserir tarefa
    [2] - Remover tarefa 
    [3] - Alterar tarefa
    [4] - Trocar tarefa
    [5] - Persistir
  `)

  //CHAMANDO OPÇÕES DO MENU
  if(escolha == 0){
    return;
  }else if (escolha == 1){
    inserirTarefa()
    setTimeout(()=>{menu()}, 500)
  }else if (escolha == 2){
    removerTarefa();
    setTimeout(()=>{menu()}, 500)
  }else if (escolha == 3){
    alterarTarefa()
    setTimeout(()=>{menu()}, 500)
  }else if (escolha == 4){
    trocarTarefa()
    setTimeout(()=>{menu()}, 500)
  }else if (escolha == 5){
    setTimeout(()=>{menu()}, 500)
  }
}



//FUNÇÃO PARA ADD TAREFA
function inserirTarefa() {
  //PEGANDO INFORMAÇÕES 

  //DIA
  let dia = window.prompt('Qual dia da semana você deseja adicionar sua tarefa?')
  let diaPosicao = dias.indexOf(dia.toLowerCase());
  while(diaPosicao < 0){
    window.alert("Insira apenas dias da semana");
    dia = window.prompt('Qual dia da semana você deseja adicionar sua tarefa?')
    diaPosicao = dias.indexOf(dia.toLowerCase());
  }


  //HORÁRIO
  let horario = window.prompt('Em qual horario ?')
  let horarioPosicao = horarios.indexOf(horario.toLowerCase());
  while((horarioPosicao < 0)){
    window.alert("Insira um horário que esteja no calendário e não se esqueça do (h)");
    horario = window.prompt('Em qual horario ?')
    horarioPosicao = horarios.indexOf(horario.toLowerCase());
  }

  //TAREFA
  const tarefa = window.prompt(' Por fim, qual tarefa você deseja adicionar? ')

  //ADICIONANDO
  horarioPosicao += 1
  diaPosicao += 1
  listaTr[horarioPosicao].children[diaPosicao].textContent = tarefa
  listaDia.push(diaPosicao)
  listaHorario.push(horarioPosicao)
  listaTarefa.push(tarefa)
  
  //CONTINUAR
  let continuar = window.prompt(`
    DESEJA CONTINUAR ADICIONANDO TAREFA?
    [1] - Sim
    [0] - Não
  `)
  while(continuar > "1" || continuar < "0"){
    window.alert('Opção Invalida!')
    continuar = window.prompt(`
      DESEJA CONTINUAR ADICIONANDO TAREFA?
      [1] - Sim
      [0] - Não
    `)
  }
  if(continuar == "1"){
    inserirTarefa()
  }
} 

//FUNÇÃO DE REMOVER TAREFA
function removerTarefa(){
  console.log(listaTarefa)
  const tarefa = window.prompt('Qual tarefa você deseja remover? ')
  
  //ESCOLHA PARA REMOVER A TAREFA
  let escolha = window.prompt(`
  Você deseja remover todas as tarefas com essa informação: ` + tarefa + ` ou remover só uma? 
  [1] - Todas as tarefas
  [2] - Só uma tarefa`)
  while(escolha > "2" || escolha < "1"){
    window.alert('Opção Invalida!')
    escolha = window.prompt(`
    Você deseja remover todas as tarefas com essa informação: ` + tarefa + ` ou remover só uma? 
    [1] - Todas as tarefas
    [2] - Só uma tarefa
    `)
  }
  if(escolha == 1){
    //TODAS AS TAREFAS QUE TIVEREM O MESMO NOME
    for(let h = 0; h < horarios.length; h++){
      for(let d = 0; d < dias.length; d++){
        if(listaTr[h].children[d].textContent == tarefa){          
          //REMOVENDO
          listaTr[h].children[d].textContent = null
          
        }
      }
    }
    //REMOVENDO JS
          
    for(let indice = 0; indice < listaTarefa.length; indice++){
      if(listaTarefa[indice] == tarefa){
        listaTarefa.splice(indice, 1) 
        listaDia.splice(indice, 1)
        listaHorario.splice(indice, 1)
      }
    }
    
  }else{

    //UMA TAREFA SÓ
    //DIA
    let dia = window.prompt('Qual dia da semana você deseja remover sua tarefa?')
    let diaPosicao = dias.indexOf(dia.toLowerCase());
    while(diaPosicao < 0){
      window.alert("Insira apenas dias da semana");
      dia = window.prompt('Qual dia da semana você deseja remover sua tarefa?')
      diaPosicao = dias.indexOf(dia.toLowerCase());
    }


    //HORÁRIO
    let horario = window.prompt('Em qual horario ?')
    let horarioPosicao = horarios.indexOf(horario.toLowerCase());
    while((horarioPosicao < 0)){
      window.alert("Insira um horário que esteja no calendário e não se esqueça do (h)");
      horario = window.prompt('Em qual horario ?')
      horarioPosicao = horarios.indexOf(horario.toLowerCase());
    }
    horarioPosicao += 1
    diaPosicao += 1
    //REMOVENDO JS
    for(let j = 0; j < listaTarefa.length; j++){
      if(listaHorario[j] == horarioPosicao && listaDia[j] == diaPosicao){
        listaTarefa.splice(j, 1) 
        listaDia.splice(j, 1)
        listaHorario.splice(j, 1)
      }
    }
      //REMOVENDO
      listaTr[horarioPosicao].children[diaPosicao].textContent = null
    
  }

  let continuar = window.prompt(`
  DESEJA CONTINUAR REMOVENDO TAREFA?
  [1] - Sim
  [0] - Não
`)
while(continuar > "1" || continuar < "0"){
  window.alert('Opção Invalida!')
  continuar = window.prompt(`
    DESEJA CONTINUAR REMOVENDO TAREFA?
    [1] - Sim
    [0] - Não
  `)
}
if(continuar == "1"){
  removerTarefa()
}
console.log(listaTarefa)

}

//FUNÇÃO PARA ALTERAR TAREFA
function alterarTarefa(){
  console.log(listaTarefa)
  const tarefa = window.prompt('Qual tarefa você deseja alterar? ')
  const mudarTarefa = window.prompt('Qual modificação a ser feita?  ')
  
  //ESCOLHA PARA ALTERAR A TAREFA
  let escolha = window.prompt(`
  Você deseja alterar todas as tarefas com essa informação: ` + tarefa + ` ou alterar só uma? 
  [1] - Todas as tarefas
  [2] - Só uma tarefa`)
  while(escolha > "2" || escolha < "1"){
    window.alert('Opção Invalida!')
    escolha = window.prompt(`
    Você deseja alterar todas as tarefas com essa informação: ` + tarefa + ` ou alterar só uma? 
    [1] - Todas as tarefas
    [2] - Só uma tarefa
    `)
  }
  if(escolha == 1){
    //TODAS AS TAREFAS QUE TIVEREM O MESMO NOME
    for(let h = 0; h < horarios.length; h++){
      for(let d = 0; d < dias.length; d++){
        if(listaTr[h].children[d].textContent == tarefa){
          //REMOVENDO
          listaTr[h].children[d].textContent = mudarTarefa
          console.log('aaaaaa')
        }
      }
    }
    //REMOVENDO JS
    for(let j = 0; j < listaTarefa.length; j++ ){
      if(listaTarefa[j] == tarefa){
        listaTarefa[j] = mudarTarefa
      }
    }
  }else{

    //UMA TAREFA SÓ
    //DIA
    let dia = window.prompt('Qual dia da semana você deseja remover sua tarefa?')
    let diaPosicao = dias.indexOf(dia.toLowerCase());
    while(diaPosicao < 0){
      window.alert("Insira apenas dias da semana");
      dia = window.prompt('Qual dia da semana você deseja remover sua tarefa?')
      diaPosicao = dias.indexOf(dia.toLowerCase());
    }


    //HORÁRIO
    let horario = window.prompt('Em qual horario ?')
    let horarioPosicao = horarios.indexOf(horario.toLowerCase());
    while((horarioPosicao < 0)){
      window.alert("Insira um horário que esteja no calendário e não se esqueça do (h)");
      horario = window.prompt('Em qual horario ?')
      horarioPosicao = horarios.indexOf(horario.toLowerCase());
    }
    horarioPosicao += 1
    diaPosicao += 1
    //REMOVENDO JS
    for(let j = 0; j < listaTarefa.length; j++ ){
      if(listaDia[j] == diaPosicao && listaHorario[j] == horarioPosicao){
        listaTarefa[j] = mudarTarefa
      }
    }
      //REMOVENDO
      listaTr[horarioPosicao].children[diaPosicao].textContent = mudarTarefa
    
  }

  let continuar = window.prompt(`
  DESEJA CONTINUAR ALTERANDO TAREFA?
  [1] - Sim
  [0] - Não
`)
while(continuar > "1" || continuar < "0"){
  window.alert('Opção Invalida!')
  continuar = window.prompt(`
    DESEJA CONTINUAR ALTERANDO TAREFA?
    [1] - Sim
    [0] - Não
  `)
}
if(continuar == "1"){
  alterarTarefa()
}
console.log(listaTarefa)
}

//FUNÇÃO TROCAR TAREFA 
function trocarTarefa(){
  //PEGANDO INFORMAÇÕES 

  //DIA
  let dia = window.prompt('Qual dia da semana você deseja trocar sua tarefa?')
  let diaPosicao = dias.indexOf(dia.toLowerCase());
  while(diaPosicao < 0){
    window.alert("Insira apenas dias da semana");
    dia = window.prompt('Qual dia da semana você deseja trocar sua tarefa?')
    diaPosicao = dias.indexOf(dia.toLowerCase());
  }


  //HORÁRIO
  let horario = window.prompt('Em qual horario ?')
  let horarioPosicao = horarios.indexOf(horario.toLowerCase());
  while((horarioPosicao < 0)){
    window.alert("Insira um horário que esteja no calendário e não se esqueça do (h)");
    horario = window.prompt('Em qual horario ?')
    horarioPosicao = horarios.indexOf(horario.toLowerCase());
  }
  
  //DIA MUDAR
  let diaM = window.prompt('Para qual dia da semana você deseja mudar?')
  let diaPosicaoM = dias.indexOf(diaM.toLowerCase());
  while(diaPosicaoM < 0){
    window.alert("Insira apenas dias da semana");
    diaM = window.prompt('Para qual dia da semana você deseja mudar?')
    diaPosicaoM = dias.indexOf(diaM.toLowerCase());
  }


  //HORÁRIO MUAR
  let horarioM = window.prompt('Em qual horario ?')
  let horarioPosicaoM = horarios.indexOf(horarioM.toLowerCase());
  while((horarioPosicao < 0)){
    window.alert("Insira um horário que esteja no calendário e não se esqueça do (h)");
    horarioM = window.prompt('Em qual horario ?')
    horarioPosicaoM = horarios.indexOf(horarioM.toLowerCase());
  }

    //trocando
    diaPosicao += 1
    diaPosicaoM += 1
    horarioPosicao += 1
    horarioPosicaoM += 1
    for(let d = 0; d < listaDia.length; d++){
      if(listaDia[d] == diaPosicao && listaHorario[d] == horarioPosicao){
         //MUDANDO JS
         listaDia[d] = diaPosicaoM
         listaHorario[d] = horarioPosicaoM
         console.log(listaDia[d]          )

      }
    }
    //MUDANDO
    const tarefa = listaTr[horarioPosicao].children[diaPosicao].textContent
    listaTr[horarioPosicao].children[diaPosicao].textContent = null
    listaTr[horarioPosicaoM].children[diaPosicaoM].textContent = tarefa

  




 

}
