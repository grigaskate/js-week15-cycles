//Объявляем константы для элементов DOM
const task = document.querySelector(".task");
const taskList = document.querySelector(".taskList");
const addTaskBtn = document.querySelector(".addTaskBtn");
const removeTaskBtn = document.querySelector(".removeTaskBtn");
const noTask = document.querySelector(".noTask");

//Назначим обработчик при клике на кнопку addTask "Добавить"
addTaskBtn.addEventListener("click", (event) => {
  //если поле для ввода задачи не заполнено, кнопка "Добавить" срабатывать не будет
  if (task.value === "") {
    addTaskBtn.style.display = "block";
  } else {
    //если пользователь введет задачу, она добавится в список задач
    noTask.style.display = "none"; //Запись "Нет задач" не отображается
    //создаем контейнер для добавленной задачи
    const itemLabel = document.createElement("label");
    itemLabel.className = "itemLabel";
    itemLabel.innerHTML = task.value;
    const itemTask = document.createElement("input");
    itemTask.className = "itemTask";
    itemTask.type = "checkbox";
    //вставляем созданные выше элементы itemLabel в элемент taskList
    taskList.appendChild(itemLabel);
    //вставляем созданные выше элементы itemTask в элемент itemLabel
    itemLabel.appendChild(itemTask);
    task.value = ""; //очистка поля для ввода задачи после перемещения введенной задачи в список задач
    removeTaskBtn.removeAttribute("disabled"); //делаем кнопку "Очистить список задач" активной
    removeTaskBtn.style.background = "#a81d4d"; //меняем цвет кнопки "Очистить список задач"
  }
});
//Назначим обработчик при клике на кнопку removeTask "Очистить список задач"
removeTaskBtn.addEventListener("click", (remove) => {
  noTask.style.display = "block"; //Запись "Нет задач" отображается
  taskList.innerHTML = ""; //Очищаем поле Список задач от всех задач
  removeTaskBtn.setAttribute("disabled", " "); //делаем кнопку "Очистить список задач" неактивной
  removeTaskBtn.style.background = "gray"; //меняем цвет кнопки "Очистить список задач"
});
