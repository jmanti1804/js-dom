// const todos = [];
const todos = JSON.parse(localStorage.getItem("todos")) || []; //Usa un arreglo vacio por defecto

const render = () => {
  const todoList = document.getElementById("todo-list");
  const todosTemplate = todos.map((item) => {
    return "<li>" + item + "</li>";
  });
  todoList.innerHTML = todosTemplate.join("");

  const elementos = document.querySelectorAll("#todo-list li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      elemento.parentNode.removeChild(elemento); // Eliminamos de la vista
      todos.splice(i, 1); //eliminamos del array
      actulaizaTodos(todos);
      render();
    });
  });
};

const actulaizaTodos = (todos) => {
  const todoString = JSON.stringify(todos);
  localStorage.setItem("todos", todoString);
};

window.onload = () => {
  render();
  const form = document.getElementById("todo-form"); //Capturamos el evento
  form.onsubmit = (e) => {
    e.preventDefault(); // Prevenimos el evento por default
    const todo = document.getElementById("todo"); // Capturamos el elemento
    const texto = todo.value; // Capturamos el contenidoelemento
    todo.value = ""; // Seteamos el imput
    todos.push(texto);
    actulaizaTodos(todos);
    render();
  };
};
