import { gettingInputValue } from "./main.mjs";

const emptyingInput = () => {
    document.querySelector('.inputValue').value = '';
}

const keyBoard =  (event) => {

    if (event.keyCode == 13 ){
        
        gettingInputValue();
        emptyingInput();
  }
}

window.onkeydown = keyBoard;
document.querySelector('.button').addEventListener('click', gettingInputValue);