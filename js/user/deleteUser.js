import UserService from '../services/userService.js';
const userService = new UserService();

const deleteButton = document.getElementById('deleteBtn');
deleteButton.onclick = () => {
    userService.deleteUser();
};