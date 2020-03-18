//starting a new game
function startGame(){
var messagesElement = document.getElementById('messages');
messagesElement!.innerHTML='welcome to multimath!!! Starting new game...';
}

document.getElementById('startGame')!.addEventListener('click',startGame);