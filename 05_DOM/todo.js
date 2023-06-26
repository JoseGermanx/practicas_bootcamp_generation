var contenido = document.getElementById("lista");
var ol = document.getElementById("ol-lista");
const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");
const tarea = document.getElementById("tarea");

var todoList = [];

// cargarEventListeners();

// function cargarEventListeners() {
//   document.addEventListener("DOMContentLoaded", () => {
//     desplegarLista(todoList);
//   });
// }

function desplegarLista(array) {
  array.forEach((element, index) => {
    var li = document.createElement("li");
    let len = array.length - 1;
    if (index === len ) {
      var task = document.createTextNode(element);
      li.setAttribute("id-task", index)
      console.log("Index:", index, "length-1:",len, "Longitud total:", array.length);
      li.appendChild(task);
      ol.appendChild(li);
    }
  });
}

function crearLista() {
  console.log(todoList);
  event.preventDefault();
  if (tarea.value) {
    mensaje.innerHTML = "";
    todoList = [...todoList, tarea.value];
    desplegarLista(todoList);
    tarea.value="";
  } else {
    mensaje.innerHTML = "Por favor ingresa una tarea";
  }
}

function borrarLista() {
  todoList = [];
  tarea.value = "";
  ol.innerHTML = "";
  mensaje.innerHTML = "";
}
