import FoodService from '../services/foodService.js';

const foodService = new FoodService();

const registerButton = document.getElementById('registerFoodBtn');
registerButton.onclick = () => {
  foodService.registerFood();
};