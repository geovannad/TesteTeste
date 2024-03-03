const tag = document.getElementsByTagName("ul")[0];
let listaTarefa = [];
const persistir = {};
// localStorage.setItem(listaTarefa);
//ele só expira quando limpar o bufer
//session storage => expira se fechar a janela

// function addTarefa() {
//   const trf = window.prompt("Digite a listaTarefa");
//   listaTarefa.push(trf);
//   let t;
//   tag.innerHTML += `<li>${trf}</li>`;
// }

// function retirar() {
//   const retirada = window.prompt("Digite a listaTarefa que deseja retirar?");
//   let indice = listaTarefa.indexOf(retirada);
//   if (indice != -1) {
//     listaTarefa.splice(indice, 1);
//     tag.innerHTML = " ";
//     for (i = 0; i < listaTarefa.length; i++) {
//       tag.innerHTML += `<li>${listaTarefa[i]}</li>`;
//     }
//   }
// }
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
function persistirTarefas() {
  const concluidas = document.getElementsByTagName("del");
  let concluidasConteudo = [];
  let naoConcluida = [];
  for (let i = 0; i < concluidas.length; i++) {
    concluidasConteudo.push(concluidas[i].innerText);
    for (let j = 0; j < listaTarefa.length; j++) {
      if (listaTarefa[j].textContent != concluidas[i].innerText) {
        naoConcluida.push(listaTarefa[j].textContent);
      }
    }
  }
  localStorage.setItem("concluida", JSON.stringify(concluidasConteudo));
  localStorage.setItem("nãoConcluida", JSON.stringify(naoConcluida));
}

function recriarTela() {
  const concluida = JSON.parse(localStorage.getItem("concluida"));
  const concluidaNao = JSON.parse(localStorage.getItem("nãoConcluida"));
  for (let i = 0; i < concluida.length; i++) {
    const li = document.createElement("li");
    li.innerText = concluida[i];
    tag.appendChild(li);
    listaTarefa.push(li);
  }
  for (let i = 0; i < concluidaNao.length; i++) {
    const li = document.createElement("li");
    const del = document.createElement("del");
    del.textContent = concluidaNao[i];
    li.appendChild(del);
    tag.appendChild(li);
  }
}

function inserir() {
  const trf = window.prompt("Digite sua listaTarefa");
  const li = document.createElement("li");
  li.innerText = trf;
  tag.appendChild(li);
  listaTarefa.push(li);
}
function retirar() {
  console.log(listaTarefa);
  const retirada = window.prompt("Digite a listaTarefa que deseja retirar?");
  for (let i = 0; i < listaTarefa.length; i++) {
    if (listaTarefa[i].innerText == retirada) {
      listaTarefa[i].remove();
      listaTarefa.slice(i, 1);
    }
  }
}
function concluir() {
  const concluir = window.prompt("Digite a listaTarefa que deseja concluir?");
  for (let i = 0; i < listaTarefa.length; i++) {
    if (listaTarefa[i].innerText == concluir) {
      console.log("t");
      listaTarefa[i].remove();
      listaTarefa.splice(i, 1);
      const li = document.createElement("li");
      const del = document.createElement("del");
      del.textContent = concluir;
      li.appendChild(del);
      tag.appendChild(li);
      listaTarefa.push(li);
    }
  }
}

function editarTarefa() {
  const editar = window.prompt("Digite o nome da listaTarefa a ser editada: ");
  for (let i = 0; i < listaTarefa.length; i++) {
    if (listaTarefa[i].innerText == editar) {
      const alteracao = window.prompt("Digite a modificação a ser feita: ");
      listaTarefa[i].textContent = alteracao.trim();
    }
  }
}
