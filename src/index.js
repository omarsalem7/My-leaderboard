import './style.css';
import { setScores, getScores } from './modules/api';
import renderScores from './modules/renderScores';

window.onload = async () => {
  renderScores(await getScores());
};
const refreshBtn = document.querySelector('.refresh button');

refreshBtn.addEventListener('click', async () => {
  const list = await getScores();
  renderScores(list);
});

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newScore = {
    user: document.querySelectorAll('input')[0].value.trim(),
    score: document.querySelectorAll('input')[1].value.trim(),
  };
  form.reset();
  await setScores(newScore);
});
