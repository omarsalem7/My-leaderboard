const renderScores = (list) => {
  const container = document.querySelector('.scores ul');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<li>NO SCORES YET</li>';
    return;
  }

  list
    .sort((a, b) => b.score - a.score)
    .forEach((score) => {
      container.innerHTML += ` <li>${score.user} : ${score.score}</li>`;
    });
};

export default renderScores;
