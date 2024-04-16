const display = document.querySelector('#display-number')
let btns = document.querySelectorAll('.btn')
let mathmatics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/', '*', '-', '.']

btns.forEach(btn => {
    btn.addEventListener('click', ({target}) => {
    if(mathmatics.includes(target.innerText)){
        if (display.innerHTML == '0'){
            display.innerHTML = target.innerText;
        } else {
            if(display.innerHTML.length <= 10){
                display.innerHTML += target.innerText;
            } else { 
                display.innerHTML
            }
        }
    } else if (target.innerText === '='){
        display.innerHTML = math.evaluate(display.innerHTML);
    } else if(target.innerText === 'CA'){
        display.innerHTML = '0';
    } else {
        if (display.innerHTML.length != 1){
            display.innerHTML = display.innerHTML.substring(0, (display.innerHTML.length - 1))
        } else {
            display.innerHTML = '0'
        }
    }
})
})
