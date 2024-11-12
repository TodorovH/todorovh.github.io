window.onload = function () {
  const form = document.getElementById('contact_form');
  const bonusBtn = document.getElementById('bonusBtn');
  const overlay = document.getElementById('overlayPopup');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    overlay.classList.add('visible');
  });

  bonusBtn.addEventListener('click', function () {
    overlay.classList.remove('visible');
    window.location.href =
      'https://wisekapital.scaletrk.com/click?o=246&a=1&sub_id1=XXX&sub_id2=(sub_id)&sub_id3=(click_id)';
  });
};
