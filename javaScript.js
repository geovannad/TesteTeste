const tag = document.getElementsByTagName("ul")[0];
let tarefa = [];
// localStorage.setItem(tarefa);

// function addTarefa() {
//   const trf = window.prompt("Digite a tarefa");
//   tarefa.push(trf);
//   let t;
//   tag.innerHTML += `<li>${trf}</li>`;
// }

// function retirar() {
//   const retirada = window.prompt("Digite a tarefa que deseja retirar?");
//   let indice = tarefa.indexOf(retirada);
//   if (indice != -1) {
//     tarefa.splice(indice, 1);
//     tag.innerHTML = " ";
//     for (i = 0; i < tarefa.length; i++) {
//       tag.innerHTML += `<li>${tarefa[i]}</li>`;
//     }
//   }
// }

function inserir() {
  const trf = window.prompt("Digite sua tarefa");
  const li = document.createElement("li");
  li.innerText = trf;
  tag.appendChild(li);
  tarefa.push(li);
}
function retirar() {
  console.log(tarefa);
  const retirada = window.prompt("Digite a tarefa que deseja retirar?");
  for (let i = 0; i < tarefa.length; i++) {
    if (tarefa[i].innerText == retirada) {
      tarefa[i].remove();
    }
  }
}
function concluir() {
  const concluir = window.prompt("Digite a tarefa que deseja concluir?");
  for (let i = 0; i < tarefa.length; i++) {
    if (tarefa[i].innerText == concluir) {
      console.log("t");
      tarefa[i].remove();
      tarefa.splice(i, 1);
      const li = document.createElement("li");
      const del = document.createElement("del");
      del.textContent = concluir;
      li.appendChild(del);
      tag.appendChild(li);
      tarefa.push(li);
    }
  }
}

function editarTarefa() {
  const editar = window.prompt("Digite o nome da tarefa a ser editada: ");
  for (let i = 0; i < tarefa.length; i++) {
    if (tarefa[i].innerText == editar) {
      const alteracao = window.prompt("Digite a modificação a ser feita: ");
      tarefa[i].textContent = alteracao.trim();
    }
  }
}
