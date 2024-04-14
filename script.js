// Функция для сохранения данных формы в массив
function saveData() {
    var userData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    // В этом примере мы просто выводим данные в консоль
    console.log(userData);
    // Здесь можно отправить данные на сервер или сохранить их в localStorage или в базе данных
}

// Обработчик события отправки формы
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    saveData(); // Вызываем функцию для сохранения данных
});
