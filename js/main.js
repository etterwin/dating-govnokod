//Открыть после выбора возраста
function openSecond() {
    document.getElementById('modal_1').classList.add('modal__hidden');
    document.getElementById('modal_1').classList.remove('modal__container');
    document.getElementById('modal_2').classList.toggle('modal__container');
}

//Открыть после выбора пола
function openThird() {
    document.getElementById('modal_2').classList.toggle('modal__container');
    document.getElementById('flags').classList.toggle('flag__container');
    setTimeout(openLast, 60000);
}

function openLast() {
    document.getElementById('modal_4').classList.toggle('modal__container');
    document.getElementById('flags').classList.toggle('flag__container');
    document.getElementById('overlay').classList.toggle('overlay');
}

//Релокация в текущем окне
function openSite() {
    window.location = 'http://adbomb.pro/click.php?lp=1';
}

//Поменять картинку в следующем блоке, после клика по девушке.
//Мне очень стыдно за это дерьмо
function first() {
    document.getElementById('flags').classList.toggle('flag__container');
    document.getElementById('modal_3').classList.add('first-girl');
    document.getElementById('modal_3').classList.toggle('modal__container');
    document.getElementById('overlay').classList.toggle('overlay');
}

function second() {
    document.getElementById('flags').classList.toggle('flag__container');
    document.getElementById('modal_3').classList.add('second-girl');
    document.getElementById('modal_3').classList.toggle('modal__container');
    document.getElementById('overlay').classList.toggle('overlay');
}

function third() {
    document.getElementById('flags').classList.toggle('flag__container');
    document.getElementById('modal_3').classList.add('third-girl');
    document.getElementById('modal_3').classList.toggle('modal__container');
    document.getElementById('overlay').classList.toggle('overlay');
}

function fourth() {
    document.getElementById('flags').classList.toggle('flag__container');
    document.getElementById('modal_3').classList.add('fourth-girl');
    document.getElementById('modal_3').classList.toggle('modal__container');
    document.getElementById('overlay').classList.toggle('overlay');
}

function fifth() {
    document.getElementById('flags').classList.toggle('flag__container');
    document.getElementById('modal_3').classList.add('fifth-girl');
    document.getElementById('modal_3').classList.toggle('modal__container');
    document.getElementById('overlay').classList.toggle('overlay');
}

function sixth() {
    document.getElementById('flags').classList.toggle('flag__container');
    document.getElementById('modal_3').classList.add('sixth-girl');
    document.getElementById('modal_3').classList.toggle('modal__container');
    document.getElementById('overlay').classList.toggle('overlay');
}

function seventh() {
    document.getElementById('flags').classList.toggle('flag__container');
    document.getElementById('modal_3').classList.add('seventh-girl');
    document.getElementById('modal_3').classList.toggle('modal__container');
    document.getElementById('overlay').classList.toggle('overlay');
}