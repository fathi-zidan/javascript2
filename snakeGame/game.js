
import { update as updateSnake, draw as drawSnake, snake_Speed, onSnake , getSnakeHead,snakeIntersection} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideGrid } from "./grid.js";
let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
let gameOver =false;

// to loop over and over again (loop game)
function main(currentTime) {
    if(gameOver){
        if(confirm('you lost press ok to restart')){
            window.location= './index.html'
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / snake_Speed) return

    console.log(currentTime);
    lastRenderTime = currentTime;

    update();
    draw();
}
window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();


}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);

}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

