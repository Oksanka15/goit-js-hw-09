function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const btnStart = document.querySelector('button[data-start]');
  const btnStop = document.querySelector('button[data-stop]');
  const body = document.querySelector('body');

  let timerId = null;

  const backgroundColorSwitcher = function () {
    body.style.backgroundColor = getRandomHexColor();
   
  };

  btnStart.addEventListener('click', onStart) 
  function onStart(){
    timerId = setInterval(backgroundColorSwitcher, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
  };

  btnStop.addEventListener('click', onStop) 
 function onStop() {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
  };