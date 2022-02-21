let bestScore = [];

export const saveUserScore = (userName, userScore) => {
  bestScore = getLocalStorage();
  bestScore.push([userName, userScore]);
  bestScore.sort((a, b) => a[1] - b[1]);
  const saveScore = bestScore.slice(0, 10);
  const saveValue = JSON.stringify(saveScore)
  localStorage.setItem('bestScore', saveValue);
}

export const getLocalStorage = () => {
  if(localStorage.getItem('bestScore')) {
    bestScore = JSON.parse(localStorage.getItem('bestScore'));
  }

  return bestScore;
}