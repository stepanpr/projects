

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    nav = document.getElementsByTagName('nav');

    menuItem[3].style.color = 'red';
    // document.body.insertBefore(menuItem[2], menuItem[1]);
    // document.body.removeChild(nav);
    menu.insertBefore(menuItem[2], menuItem[1]); // меняем местами пункты меню

    // let newMenuItem = menuItem.cloneNode(true);
    

    let newMenuItem = menu.appendChild(menuItem[0].cloneNode(false)); //создаем пятый пункт меню
    newMenuItem.innerHTML = 'Пятый пункт';


    document.body.style.backgroundImage = 'url(../img/apple_true.jpg)'; //меняем фоновую картинку

    document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple'; //добавляем слово "подлинную" (переписываем)

    
    let column = document.querySelectorAll('.column'),
        adv = document.getElementsByClassName('adv'); //или указать индекс после скобок
    adv[0].style.color = 'red';
    adv[0].style.backgroundColor = 'blue';
    column[1].removeChild(adv[0]); //удаление; указываем родителя!!!

    function question(ans) {           //задаем пользователю вопрос и записываем ответ в болоке prompt
    document.getElementsByClassName('prompt')[0].innerHTML = ans;
    }
    question(prompt('Ваше мнение о технике Apple?', ''));




