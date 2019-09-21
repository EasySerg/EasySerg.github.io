let rain = document.querySelector('.rain'), // задний фон страницы
    drops = document.getElementsByClassName('drop'), // массив капель
    dropCounter = 0; //Счетчик капель


// Создание множества капель
setInterval(createDrops, 100);

function createDrops() {
    let drop = document.createElement('div'); //блок - капля
    drop.classList.add('drop');
    if (dropCounter < 100) {
        rain.appendChild(drop);
        drop.style.left = getRandomNumber() + 'px';
        dropCounter = dropCounter + 1;
    }
}

// Определение координаты х для позиционирования создаваемой капли
function getRandomNumber() {
    let pos_x = Math.random() * document.documentElement.clientWidth;
    return pos_x;
}

//Движение капель
setInterval(moveDrops, 10);
function moveDrops() {
    for (let i = 0; i < drops.length; i++) {
        let pos_y = drops[i].style.top.replace('px', '');
        pos_y++;
        drops[i].style.top = pos_y + 'px';

        if (pos_y > document.documentElement.clientHeight) {
            drops[i].remove();
            dropCounter--;
        }
    }
}

///////////////////////

let header = document.querySelector('.header_menu'),
    headerItem = document.querySelectorAll('.header_menu_item'),
    itemDescription = document.querySelectorAll('section');

    function hideBorder(a) {
        for (let i = a; i < itemDescription.length ; i++) {
            itemDescription[i].classList.remove('show_border')
            itemDescription[i].classList.add('hide_border')
        }
    }

    function showBorder(b) {
        if (itemDescription[b].classList.contains('hide_border')) {
            itemDescription[b].classList.remove('hide_border');
            itemDescription[b].classList.add('show_border');
        };
    };

    function goToItemDescription(c) {
        let coordinateToScrollY = (pageYOffset + itemDescription[c].getBoundingClientRect().top - 200).toFixed(0);
        // coordinateToScrollY = (pageYOffset + itemDescription[c].getBoundingClientRect().top - (document.documentElement.clientHeight / 3)).toFixed(0),
        window.scrollTo(0, coordinateToScrollY);
        

       
    }
        
    
    header.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('header_menu_item')) {
            for (let i = 0 ; i < headerItem.length ; i++) {
                if (target == headerItem[i]) {
                    hideBorder(0);
                    showBorder(i);
                    goToItemDescription(i);
                    break;
                }
            }

        }
    })

