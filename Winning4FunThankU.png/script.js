// DECLARATIONS
const co = document.querySelector('.co');
const claim = document.querySelector('.claim');
const header = document.querySelector('header');
const subHome = document.querySelector('.subHome');
const headerH1 = document.querySelector('header h1');

// HOME DOM
const casinoHome = document.querySelector('.casinoHome');
const hiddenHome = document.querySelector('.hiddenHome');

// OFFER DOM
const offer = document.querySelector('.offer');
const offer1 = document.querySelector('.offer1');
const offer2 = document.querySelector('.offer2');
const offer3 = document.querySelector('.offer3');

// SUBOFFER DOM
const subOffer1 = document.querySelector('.subOffer1');
const subOffer2 = document.querySelector('.subOffer2');
const subOffer3 = document.querySelector('.subOffer3');

// REVEAL BUTTON DOM
const revealBtn1 = document.querySelector('.revealBtn1');
const revealBtn2 = document.querySelector('.revealBtn2');
const revealBtn3 = document.querySelector('.revealBtn3');

// CARD CLAIM DOM
const cardClaim = document.querySelector('.cardClaim');
const cardClaim2 = document.querySelector('.cardClaim2');
const cardClaim3 = document.querySelector('.cardClaim3');

// DOLLAR IMAGE DOM
const dollarIMG = document.querySelector('.dollarIMG');
const dollarIMG2 = document.querySelector('.dollarIMG2');
const dollarIMG3 = document.querySelector('.dollarIMG3');

// OFFER IMAGE DOM
const offerIMG = document.querySelector('.offerIMG');
const offerIMG2 = document.querySelector('.offerIMG2');
const offerIMG3 = document.querySelector('.offerIMG3');

// MODAL DOM
let modal = document.getElementById('myModal');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');

// REWARDS DOM
const rewards = document.querySelector('.rewards');
const rewards2 = document.querySelector('.rewards2');
const rewards3 = document.querySelector('.rewards3');

// LEAD FORM DOM
const leadForm = document.querySelector('#leadForm');
const leadForm2 = document.querySelector('#leadForm2');
const leadForm3 = document.querySelector('#leadForm3');

// REDIRECT FORM
const redirect = document.querySelector('#a');
const redirect2 = document.querySelector('#a2');
const redirect3 = document.querySelector('#a3');

// MINI STARS DOM
const miniStars = document.querySelector('.miniStars');
const miniStars2 = document.querySelector('.miniStars2');
const miniStars3 = document.querySelector('.miniStars3');

// POPUP ELEMENTS
const bonusBtn = document.querySelector('#bonusBtn');
const overlay = document.querySelector('#overlayPopup');

/*************** START OF CARD FUNCTIONS *****************************/

claim.addEventListener('click', function () {
  header.style.animation = 'fadeOut 1s';
  casinoHome.style.animation = 'cog3 1s';
  setTimeout(showHidden, 200);
});

function showHidden() {
  header.style.display = 'none';
  casinoHome.style.display = 'none';
  hiddenHome.style.animation = 'fadeIn 0.7s';
  hiddenHome.style.display = 'block';
  offer.style.animation = 'float 1s infinite';
  offer.style.animationTimingFunction = 'linear';
}

// ROTATING INTERVAL FUNCTION OF INDEX PAGE CARD

setInterval(subHomeInterval, 2000);

function subHomeInterval() {
  subHome.style.animation = 'float 1s infinite';
}

setInterval(subHomeInterval2, 4000);

function subHomeInterval2() {
  subHome.style.animation = 'cog 3s infinite';
}

/*************** SUBOFFER1 CLICK EVENT LISTENER *****************************/

subOffer1.addEventListener('click', clickOffer1);

function clickOffer1() {
  rewards.style.display = 'none';
  dollarIMG.style.display = 'none';
  miniStars.style.animation = 'spin 1s';
  miniStars.style.display = 'block';
  function myFunction(x) {
    if (x.matches) {
      subOffer1.style.transform = 'scale(0.85)';
    } else {
      subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
    }
  }
  let x = window.matchMedia('(max-width: 767px)');
  myFunction(x);
  x.addListener(myFunction);
  subOffer1.style.background = 'linear-gradient(yellow, white)';
  offerIMG.style.display = 'block';
  revealBtn1.style.display = 'block';
  cardClaim.style.display = 'block';
  revealBtn1.addEventListener('click', function () {
    miniStars2.style.animation = 'spin 1s';
    miniStars2.style.display = 'block';
    cardClaim2.style.display = 'block';
    rewards2.style.display = 'none';
    dollarIMG2.style.display = 'none';
    subOffer2.style.animation = 'cog2 1s';
    function myFunction(x) {
      if (x.matches) {
        subOffer2.style.transform = 'scale(0.85)';
      } else {
        subOffer2.style.transform = 'scale(1.2)';
      }
    }
    let x = window.matchMedia('(max-width: 767px)');
    myFunction(x);
    x.addListener(myFunction);
    subOffer2.style.background = 'linear-gradient(yellow, white)';
    offerIMG2.style.display = 'block';
    revealBtn2.style.display = 'block';
  });
  revealBtn2.addEventListener('click', function () {
    miniStars3.style.animation = 'spin 1s';
    miniStars3.style.display = 'block';
    cardClaim3.style.display = 'block';
    rewards3.style.display = 'none';
    dollarIMG3.style.display = 'none';
    subOffer3.style.animation = 'cog2 1s';
    function myFunction(x) {
      if (x.matches) {
        subOffer3.style.transform = 'scale(0.85)';
      } else {
        subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
      }
    }
    let x = window.matchMedia('(max-width: 767px)');
    myFunction(x);
    x.addListener(myFunction);
    subOffer3.style.background = 'linear-gradient(yellow, white)';
    offerIMG3.style.display = 'block';
    revealBtn3.style.display = 'block';
    revealBtn3.innerHTML = 'Reveal All';
  });
  revealBtn3.addEventListener('click', function () {
    revealBtn1.remove();
    revealBtn2.remove();
    revealBtn3.remove();
    cardClaim.innerHTML = 'Sign Up';
    cardClaim2.innerHTML = 'Sign Up';
    cardClaim3.innerHTML = 'Sign Up';

    offer.style.animation = 'fadeOut 0.5s';
    setTimeout(fadingOut, 100);
    function fadingOut() {
      let w = window.innerWidth;
      if (w > 767) {
        co.innerHTML = 'CONGRATULATIONS!';
        co.style.borderTop = 'none';
        co.style.fontSize = '3em';
        co.style.animation = 'slideInFromTop 1s, float 1s infinite';
        hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
        offer1.style.animation = 'slideInFromBottom 1s';
        offer2.style.animation = 'slideInFromBottom 1.5s';
        offer3.style.animation = 'slideInFromBottom 1.8s';
        offer1.style.marginTop = '40px';
        offer2.style.marginTop = '50px';
        offer3.style.marginTop = '40px';
        offer.style.transform = 'scale(0.7)';
        subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
        subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
      } else {
        co.innerHTML = 'CONGRATULATIONS!';
        co.style.fontSize = '2em';
        subOffer1.style.transform = 'scale(0.7)';
        subOffer2.style.transform = 'scale(0.7)';
        subOffer3.style.transform = 'scale(0.7)';
      }
    }
  });
}

/*************** SUBOFFER2 CLICK EVENT LISTENER *****************************/

subOffer2.addEventListener('click', clickOffer2);

function clickOffer2() {
  rewards2.style.display = 'none';
  dollarIMG2.style.display = 'none';
  miniStars2.style.animation = 'spin 1s';
  miniStars2.style.display = 'block';
  function myFunction(x) {
    if (x.matches) {
      subOffer2.style.transform = 'scale(0.85)';
    } else {
      subOffer2.style.transform = 'scale(1.2)';
    }
  }
  let x = window.matchMedia('(max-width: 767px)');
  myFunction(x);
  x.addListener(myFunction);
  subOffer2.style.background = 'linear-gradient(yellow, white)';
  offerIMG2.style.display = 'block';
  revealBtn2.style.display = 'block';
  cardClaim2.style.display = 'block';
  revealBtn2.addEventListener('click', function () {
    miniStars3.style.animation = 'spin 1s';
    miniStars3.style.display = 'block';
    cardClaim3.style.display = 'block';
    rewards3.style.display = 'none';
    dollarIMG3.style.display = 'none';
    subOffer3.style.animation = 'cog2 1s';
    function myFunction(x) {
      if (x.matches) {
        subOffer3.style.transform = 'scale(0.85)';
      } else {
        subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
      }
    }
    let x = window.matchMedia('(max-width: 767px)');
    myFunction(x);
    x.addListener(myFunction);
    subOffer3.style.background = 'linear-gradient(yellow, white)';
    offerIMG3.style.display = 'block';
    revealBtn3.style.display = 'block';
  });
  revealBtn3.addEventListener('click', function () {
    miniStars.style.animation = 'spin 1s';
    miniStars.style.display = 'block';
    cardClaim.style.display = 'block';
    rewards.style.display = 'none';
    dollarIMG.style.display = 'none';
    subOffer1.style.transition = 'all 0.5s';
    function myFunction(x) {
      if (x.matches) {
        subOffer1.style.transform = 'scale(0.85)';
      } else {
        subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
      }
    }
    let x = window.matchMedia('(max-width: 767px)');
    myFunction(x);
    x.addListener(myFunction);
    subOffer1.style.background = 'linear-gradient(yellow, white)';
    offerIMG.style.display = 'block';
    revealBtn1.style.display = 'block';
    revealBtn1.innerHTML = 'Reveal All';
  });
  revealBtn1.addEventListener('click', function () {
    // Special Function for subOffer2
    let currentDisplay = window.getComputedStyle(revealBtn3, null).display;
    if (currentDisplay === 'none') {
      console.log('Complete SubOffers First');
    } else {
      revealBtn1.remove();
      revealBtn2.remove();
      revealBtn3.remove();
      cardClaim.innerHTML = 'Sign Up';
      cardClaim2.innerHTML = 'Sign Up';
      cardClaim3.innerHTML = 'Sign Up';

      offer.style.animation = 'fadeOut 1s';
      setTimeout(fadingOut2, 500);
      function fadingOut2() {
        let w = window.innerWidth;
        if (w > 767) {
          co.innerHTML = 'CONGRATULATIONS!';
          co.style.borderTop = 'none';
          co.style.fontSize = '3em';
          co.style.animation = 'slideInFromTop 1s, float 1s infinite';
          hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
          offer1.style.animation = 'slideInFromBottom 1s';
          offer2.style.animation = 'slideInFromBottom 1.5s';
          offer3.style.animation = 'slideInFromBottom 1.8s';
          offer1.style.marginTop = '40px';
          offer2.style.marginTop = '50px';
          offer3.style.marginTop = '40px';
          offer.style.transform = 'scale(0.7)';
          subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
          subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
        } else {
          co.innerHTML = 'CONGRATULATIONS!';
          co.style.fontSize = '2em';
          subOffer1.style.transform = 'scale(0.7)';
          subOffer2.style.transform = 'scale(0.7)';
          subOffer3.style.transform = 'scale(0.7)';
        }
      }
    }
  });
}

/*************** SUBOFFER3 CLICK EVENT LISTENER *****************************/

subOffer3.addEventListener('click', clickOffer3);

function clickOffer3() {
  miniStars3.style.animation = 'spin 1s';
  miniStars3.style.display = 'block';
  rewards3.style.display = 'none';
  dollarIMG3.style.display = 'none';
  function myFunction(x) {
    if (x.matches) {
      subOffer3.style.transform = 'scale(0.85)';
    } else {
      subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
    }
  }
  let x = window.matchMedia('(max-width: 767px)');
  myFunction(x);
  x.addListener(myFunction);
  subOffer3.style.background = 'linear-gradient(yellow, white)';
  offerIMG3.style.display = 'block';
  revealBtn3.style.display = 'block';
  cardClaim3.style.display = 'block';
  revealBtn3.addEventListener('click', function () {
    miniStars2.style.animation = 'spin 1s';
    miniStars2.style.display = 'block';
    rewards2.style.display = 'none';
    dollarIMG2.style.display = 'none';
    cardClaim2.style.display = 'block';
    subOffer2.style.animation = 'cog2 1s';
    function myFunction(x) {
      if (x.matches) {
        subOffer2.style.transform = 'scale(0.85)';
      } else {
        subOffer2.style.transform = 'scale(1.2)';
      }
    }
    let x = window.matchMedia('(max-width: 767px)');
    myFunction(x);
    x.addListener(myFunction);
    subOffer2.style.background = 'linear-gradient(yellow, white)';
    offerIMG2.style.display = 'block';
    revealBtn2.style.display = 'block';
  });
  revealBtn2.addEventListener('click', function () {
    miniStars.style.animation = 'spin 1s';
    miniStars.style.display = 'block';
    rewards.style.display = 'none';
    dollarIMG.style.display = 'none';
    cardClaim.style.display = 'block';
    subOffer1.style.transition = 'all 0.5s';
    function myFunction(x) {
      if (x.matches) {
        subOffer1.style.transform = 'scale(0.85)';
      } else {
        subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
      }
    }
    let x = window.matchMedia('(max-width: 767px)');
    myFunction(x);
    x.addListener(myFunction);
    subOffer1.style.background = 'linear-gradient(yellow, white)';
    offerIMG.style.display = 'block';
    revealBtn1.style.display = 'block';
    revealBtn1.innerHTML = 'Reveal All';
  });
  revealBtn1.addEventListener('click', function () {
    revealBtn1.remove();
    revealBtn2.remove();
    revealBtn3.remove();

    offer.style.animation = 'fadeOut 1s';
    setTimeout(fadingOut3, 500);
    function fadingOut3() {
      let w = window.innerWidth;
      if (w > 767) {
        co.innerHTML = 'CONGRATULATIONS!';
        co.style.borderTop = 'none';
        co.style.fontSize = '3em';
        co.style.animation = 'slideInFromTop 1s, float 1s infinite';
        hiddenHome.style.background = 'rgba(177, 177, 0, 0.19)';
        offer1.style.animation = 'slideInFromBottom 1s';
        offer2.style.animation = 'slideInFromBottom 1.5s';
        offer3.style.animation = 'slideInFromBottom 1.8s';
        offer1.style.marginTop = '40px';
        offer2.style.marginTop = '50px';
        offer3.style.marginTop = '40px';
        offer.style.transform = 'scale(0.7)';
        subOffer1.style.transform = 'rotate(30deg) scale(1.2)';
        subOffer3.style.transform = 'rotate(-30deg) scale(1.2)';
      } else {
        co.innerHTML = 'CONGRATULATIONS!';
        co.style.fontSize = '2em';
        subOffer1.style.transform = 'scale(0.7)';
        subOffer2.style.transform = 'scale(0.7)';
        subOffer3.style.transform = 'scale(0.7)';
      }
    }
  });
}

/*************** CARD CLAIM CLICK EVENT LISTENER *****************************/

cardClaim.addEventListener('click', (e) => {
  modal.style.display = 'block';
});

cardClaim2.addEventListener('click', (e) => {
  modal2.style.display = 'block';
});

cardClaim3.addEventListener('click', (e) => {
  modal3.style.display = 'block';
});

leadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate Lead Collection Box
  let email = document.querySelector('#email');
  let checkbox = document.querySelector('#checkbox');

  if (email.value === '') {
    email.style.border = '2px solid red';
  } else if (checkbox.checked === false) {
    alert('Please confirm registration');
  } else {
    modal.style.display = 'none';

    // Sample Offer Link
    // let CasinoOffers = 'CasinoOffers.pdf';
    // window.open(CasinoOffers);

    // Open Thank You Modal
    overlay.classList.add('visible');
  }
});

leadForm2.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate Lead Collection Box
  let email2 = document.querySelector('#email2');
  let checkbox2 = document.querySelector('#checkbox2');

  if (email2.value === '') {
    email2.style.border = '2px solid red';
  } else if (checkbox2.checked === false) {
    alert('Please confirm registration');
  } else {
    modal2.style.display = 'none';

    // Sample Offer Link
    // let CasinoOffers = 'CasinoOffers.pdf';
    // window.open(CasinoOffers);

    // Open Thank You Modal
    overlay.classList.add('visible');
  }
});

leadForm3.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate Lead Collection Box
  let email3 = document.querySelector('#email3');
  let checkbox3 = document.querySelector('#checkbox3');

  if (email3.value === '') {
    email3.style.border = '2px solid red';
  } else if (checkbox3.checked === false) {
    alert('Please confirm registration');
  } else {
    modal3.style.display = 'none';

    // Sample Offer Link
    // let CasinoOffers = 'CasinoOffers.pdf';
    // window.open(CasinoOffers);

    // Open Thank You Modal
    overlay.classList.add('visible');
  }
});

bonusBtn.addEventListener('click', function () {
  overlay.classList.remove('visible');
});

/*************** CARD CLAIM CLICK EVENT LISTENER *****************************/

headerH1.onclick = function () {
  window.open(
    'https://orediggermedia.com/wp-content/uploads/2018/11/register.jpg'
  );
};

redirect.onclick = function () {
  let TermsConditions = 'TermsConditions.pdf';
  window.open(TermsConditions);
};

redirect2.onclick = function () {
  let TermsConditions = 'TermsConditions.pdf';
  window.open(TermsConditions);
};

redirect3.onclick = function () {
  let TermsConditions = 'TermsConditions.pdf';
  window.open(TermsConditions);
};
