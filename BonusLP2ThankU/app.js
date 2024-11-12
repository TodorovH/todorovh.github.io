window.onload = function () {
  const form = document.getElementById('BonusLP2');
  const bonusBtn = document.getElementById('bonusBtn');
  const overlay = document.getElementById('overlayPopup');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    overlay.classList.add('visible');
  });

  bonusBtn.addEventListener('click', function () {
    overlay.classList.remove('visible');
  });
};
