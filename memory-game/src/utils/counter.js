const stepCounter = document.querySelector('.counter__count')

export const handlerCount = (count) => {
  stepCounter.textContent = count;
}