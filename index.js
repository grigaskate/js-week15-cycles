//Объявляем константы для элементов DOM
const task = document.querySelector(".task");
const taskList = document.querySelector(".taskList");
const addTaskBtn = document.querySelector(".addTaskBtn");
const removeTaskBtn = document.querySelector(".removeTaskBtn");
const noTask = document.querySelector(".noTask");

//Назначим обработчик при клике на кнопку addTask "Добавить"
addTaskBtn.addEventListener("click", (event) => {
  //если поле для ввода задачи не заполнено, кнопка "Добавить" србатывать не будет
  if (task.value === "") {
    addTaskBtn.style.display = "block";
  } else {
    //если пользователь введет задачу, она добавится в список задач
    noTask.style.display = "none";
    const itemLabel = document.createElement("label");
    itemLabel.className = "itemLabel";
    itemLabel.innerHTML = task.value;
    const itemTask = document.createElement("input");
    itemTask.className = "itemTask";
    itemTask.type = "checkbox";
    taskList.appendChild(itemLabel);
    itemLabel.appendChild(itemTask);
    task.value = ""; //очистка поля для ввода задачи после перемещения введенной задачи в список задач
    removeTaskBtn.removeAttribute("disabled");
    removeTaskBtn.style.background = "#a81d4d";
  }
});
//Назначим обработчик при клике на кнопку removeTask "Очистить список задач"
removeTaskBtn.addEventListener("click", (remove) => {
  noTask.style.display = "block";
  taskList.innerHTML = "";
  removeTaskBtn.setAttribute("disabled", " ");
  removeTaskBtn.style.background = "gray";
});
