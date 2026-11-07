// ВНЕ любых функций - на верхнем уровне файла
const formState = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');

// Функция для загрузки данных из localStorage
function loadFormState() {
  // Получаем данные из localStorage
  const savedState = localStorage.getItem('feedback-form-state');
  
  // Если данные есть - парсим JSON
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    
    // Обновляем formState
    formState.email = parsedState.email || "";
    formState.message = parsedState.message || "";
    
    // Заполняем поля формы значениями из localStorage
    form.email.value = formState.email;
    form.message.value = formState.message;
  }
}

// Вызываем функцию сразу после определения formState и form
loadFormState();

// Используем делегирование - слушаем событие input на форме
form.addEventListener('input', (event) => {
  // event.target - это поле, в котором пользователь печатает
  
  // Получаем имя поля (name="email" или name="message")
  const fieldName = event.target.name;
  
  // Получаем текущее значение поля и удаляем пробелы по краям
  const fieldValue = event.target.value.trim();
  
  // Обновляем объект formState
  formState[fieldName] = fieldValue;
  
  // Сохраняем в localStorage (преобразуем объект в строку JSON)
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

form.addEventListener('submit', (event) => {
  // Останавливаем отправку формы
  event.preventDefault();
  
  // Проверяем, заполнены ли оба поля
  if (!formState.email || !formState.message) {
    alert('Fill please all fields');
    return;
  }
  
  // Если всё заполнено - выводим в консоль
  console.log(formState);
  
  // Очищаем localStorage
  localStorage.removeItem('feedback-form-state');
  
  // Очищаем объект formState
  formState.email = "";
  formState.message = "";
  
  // Очищаем поля формы
  form.reset();
});