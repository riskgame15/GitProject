const canvas = document.getElementById('screen-game');
const ctx = canvas.getContext('2d');

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const tree = new Tree(800,400,100,70,'red', 5)