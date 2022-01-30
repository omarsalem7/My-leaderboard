const renderScores = (list) => {
  const container = document.querySelector('.scores ul');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<li>NO SCORES YET</li>';
    return;
  }

  list
    .sort((a, b) => b.score - a.score)
    .forEach((score, index) => {
      const topScores = index < 3 ? '<i class="fas fa-crown"></i' : '';
      container.innerHTML += ` <li><span>${score.user} : ${score.score}</span> ${topScores}</li>`;
    });
};

export default renderScores;
