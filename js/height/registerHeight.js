import HeightService from '../services/heightService.js';

const heightService = new HeightService();

const registerHeightButton = document.getElementById('registerHeightBtn');
registerHeightButton.onclick = () => {
  heightService.registerHeight();
};