let wrapper = document.querySelector('.wrapper');
let btn = document.querySelector("#btn");
let block = document.querySelector('.block');
let random = 1+Math.floor(Math.random()* 20);
let tries = 8;
let otvet = document.querySelector("#otvet");
let countTries = 1;
let input = document.querySelector('#input');
console.log(random);
input.addEventListener('keydown',(event)=>{
    let isDigit = false;
    if (event.key >= 0 && event.key <=9 || event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39) {
        isDigit = true;
    }    
    if (!isDigit) {
        event.preventDefault();
    }
    
})
btn.addEventListener('click', () =>{
    let dogadka=Number(input.value);
    console.log(dogadka);
    if(random > dogadka && countTries <= 8){
        block.innerHTML=`Неверно, загаданное число больше`;
        countTries++;
    }else if ( random < dogadka && countTries <= 8) {
        block.innerHTML=`Неверно, загаданное число меньше`;
        countTries++;
    }else if(countTries <= 8){
        block.innerHTML=`Верно, вы угадали число ${random} за ${countTries} раз(а)`;
        countTries++;
        }else{
            block.innerHTML=`Вы потратили все попытки!`;
            input.value="Игра окончена";
            document.querySelector('#input').setAttribute('disabled', 'disabled');   
        }
})
