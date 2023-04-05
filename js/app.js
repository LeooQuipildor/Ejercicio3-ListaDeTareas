let input = document.getElementById("inputForm");
let btnAgregar = document.getElementById("btnAgregar");
let btnEliminar = document.getElementById("btnEliminar");
let ulForm = document.getElementById("ulForm");

btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea(e) {
  e.preventDefault();

  if (input.value === "") {
    alert("Ingrese alguna tarea");
  } else {
    let tarea = input.value;
    let li = document.createElement(`li`);
    li.textContent = tarea;

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.className = "btnEliminar";
    btnEliminar.addEventListener("click", eliminarTarea);
    li.appendChild(btnEliminar);
    ulForm.appendChild(li);

    input.value = "";
  }
}

function eliminarTarea(e) {
  e.preventDefault();
  let tareaSeleccionada = e.target.parentElement;
  tareaSeleccionada.remove();
}
