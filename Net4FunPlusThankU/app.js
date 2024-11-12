window.onload = function () {
  const form = document.getElementById('contact_form');
  const bonusBtn = document.getElementById('bonusBtn');
  const overlay = document.getElementById('overlayPopup');
  const bonusLink = document.getElementById('bonusLink');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    overlay.classList.add('visible');
  });

  bonusBtn.addEventListener('click', function () {
    overlay.classList.remove('visible');
    bonusLink.click();
  });
};
