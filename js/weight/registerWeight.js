import WeightService from '../services/weightService.js';

const weightService = new WeightService();

const registerButton = document.getElementById('registerWeightBtn');
registerButton.onclick = () => {
  weightService.registerWeight();
};