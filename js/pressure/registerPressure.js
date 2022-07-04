import PressureService from '../services/pressureService.js';

const pressureService = new PressureService();

const registerButton = document.getElementById('registerPressureBtn');
registerButton.onclick = () => {
  pressureService.registerPressure();
};