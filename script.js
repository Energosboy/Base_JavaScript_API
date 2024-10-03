// Задание1. Реализация элемента "Счетчик нажатий на кнопку". Создайте на странице кнопку с текстом "Нажми меня". Под кнопкой отобразите текст, который будет показывать количество нажатий на кнопку

// Инициализация переменных:
let count = 0;
const button = document.getElementById("click-button");
const counterDisplay = document.getElementById("counter");
// Добавление обработчика события click:
button.addEventListener("click", function() {
    count++;
    counterDisplay.innerHTML = count;
});

// Задание 2. Реализация реактивной валидации поля формы. Создайте форму с полем для ввода email и кнопку для отправки. Реализуйте реактивную валидацию для email-поля, которая проверяет корректность введенного email в реальном времени. Если email введен неверно, отображайте сообщение "Некорректный email" и делайте кнопку "Отправить" неактивной.
const emailInput = document.getElementById('email');
const errorMessage  = document.getElementById('emailError');
const submitButton  = document.getElementById('submit');

// Добавляем обработчик события input к полю email
emailInput.addEventListener('input', function() {
  // Проверяем email на соответствие регулярному выражению
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = emailPattern.test(this.value);
 
  // Отображаем сообщение об ошибке и делаем кнопку неактивной, если email некорректен
  if (!valid) {
  errorMessage.style.display = 'block';
  submitButton.disabled = true;
  } else {
  errorMessage.style.display = 'none';
  submitButton.disabled = false;
  }
 });

 // Задание 3. Добавьте таймер, который обновляет количество секунд, прошедших с момента загрузки страницы. Таймер должен автоматически обновляться каждую секунду и отображать количество прошедших секунд на странице.
 
 let secondsElapsed = 0;
 let timerId = setInterval(() => {
   secondsElapsed++;
   document.getElementById('timer').innerHTML = secondsElapsed;
 }, 1000);