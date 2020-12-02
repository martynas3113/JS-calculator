function calculator() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let clearText = 'Please Enter a Value';
    

    buttons.forEach(function(button){
        button.addEventListener('click' , (number)=>{
            let value = number.target.dataset.num;
            screen.value += value; 
        })
    });

    equal.addEventListener('click', () => {
        if(screen.value === ''){
            screen.value = clearText;
        }else {
            let answer = eval(screen.value)
            screen.value = answer
        }
    })

    clear.addEventListener('click', () => {
        screen.value = '' 
    })
    
}

export { calculator }