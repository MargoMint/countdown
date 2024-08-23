const items = document.querySelectorAll(".countdown__item > h4");
const countdownElement = document.querySelector(".countdown"); 

// назначаем дату отсчёта- т.е. будущее наше число (в милисекундах)
let countdownDate = new Date(2032, 5, 21, 0, 55, 0).getTime();

function getCountdownTime() {
    //получаем текущее время (в милисекундах)
    const nowTime = new Date().getTime();

    //находим разницу во времени
    const distance = countdownDate - nowTime;

    //1 сек = 1000 мил.сек
    //1 мин = 60 сек
    //1 час = 60 мин
    //1 день = 24 часа
    //создаём переменные в милисекундах
    const oneDay = 24 * 60 *60 *1000;
    const oneHour = 60 * 60 *1000;
    const oneMinute = 60 * 1000;

    //подсчёт для дней, часов, минут и секунд
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let second = Math.floor((distance % oneMinute) / 1000);

    //создаём массив с переменными
    const values = [days, hours, minutes, second];

    //добавляем значение переменных на страницу
    items.forEach((item, i) => {
        item.textContent = values[i];
    });

    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Time's up</h4>";
    }
}

//обновление счётчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000);
//инициализация текущего времени
getCountdownTime();