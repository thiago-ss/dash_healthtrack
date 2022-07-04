import ActivityService from '../services/activityService.js';

const activityService = new ActivityService();

const registerButton = document.getElementById('registerActivityBtn');
registerButton.onclick = () => {
  activityService.registerActivity();
};