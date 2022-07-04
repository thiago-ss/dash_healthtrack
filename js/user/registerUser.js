import UserService from '../services/userService.js';
const userService = new UserService();

const registerButton = document.getElementById('registerBtn');
registerButton.onclick = () => {
    userService.registerUser();
};