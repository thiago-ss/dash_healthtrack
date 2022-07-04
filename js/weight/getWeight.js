import WeightService from '../services/weightService.js';

const weightService = new WeightService();

const viewButton = document.getElementById('viewWeightBtn');
viewButton.onclick = () => {
  weightService.getWeight();
};