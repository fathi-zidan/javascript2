import { onSnake, expandSnake ,getSnakeHead} from "./snake.js";
import { RandomGridPosition } from "./grid.js";
let food = getRandomFoodPosition();
const EXPANSION_RATE = 1 //how much the snake grow when eating a food 


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }

}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = RandomGridPosition();
    }
    return newFoodPosition;
}
