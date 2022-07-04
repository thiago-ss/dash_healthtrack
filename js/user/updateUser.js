import UserService from '../services/userService.js';
const userService = new UserService();

const updateButton = document.getElementById('updateBtn');
updateButton.onclick = () => {
    userService.updateUser();
};