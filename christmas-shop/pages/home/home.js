const gifts = [
    {
        "name": "Bug Magnet",
        "description": "Able to find bugs in code like they were placed there on purpose.",
        "category": "For Work",
        "superpowers": {
          "live": "+500",
          "create": "+500",
          "love": "+200",
          "dream": "+400"
        }
      },
    
      {
        "name": "Console.log Guru",
        "description": "Uses console.log like a crystal ball to find any issue.",
        "category": "For Work",
        "superpowers": {
          "live": "+500",
          "create": "+500",
          "love": "+200",
          "dream": "+400"
        }
      },
    
      {
        "name": "Shortcut Cheater",
        "description": "Knows every keyboard shortcut like they were born with them.",
        "category": "For Work",
        "superpowers": {
          "live": "+500",
          "create": "+500",
          "love": "+400",
          "dream": "+200"
        }
      },
    
      {
        "name": "Merge Master",
        "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
        "category": "For Work",
        "superpowers": {
          "live": "+200",
          "create": "+500",
          "love": "+200",
          "dream": "+300"
        }
      },
    
      {
        "name": "Async Tamer",
        "description": "Handles asynchronous code and promises like well-trained pets.",
        "category": "For Work",
        "superpowers": {
          "live": "+100",
          "create": "+400",
          "love": "+200",
          "dream": "+300"
        }
      },
    
      {
        "name": "CSS Tamer",
        "description": "Can make Flexbox and Grid work together like they were always best friends.",
        "category": "For Work",
        "superpowers": {
          "live": "+200",
          "create": "+500",
          "love": "+200",
          "dream": "+300"
        }
      },
    
      {
        "name": "Time Hacker",
        "description": "Writes code at the last moment but always meets the deadline.",
        "category": "For Work",
        "superpowers": {
          "live": "+500",
          "create": "+500",
          "love": "+500",
          "dream": "+200"
        }
      },
    
      {
        "name": "Layout Master",
        "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
        "category": "For Work",
        "superpowers": {
          "live": "+500",
          "create": "+300",
          "love": "+200",
          "dream": "+200"
        }
      },
    
      {
        "name": "Documentation Whisperer",
        "description": "Understands cryptic documentation as if they wrote it themselves.",
        "category": "For Work",
        "superpowers": {
          "live": "+500",
          "create": "+500",
          "love": "+200",
          "dream": "+100"
        }
      },
    
      {
        "name": "Feedback Master",
        "description": "Accepts client revisions with the Zen calm of Buddha.",
        "category": "For Work",
        "superpowers": {
          "live": "+300",
          "create": "+500",
          "love": "+300",
          "dream": "+400"
        }
      },
    
      {
        "name": "Code Minimalist",
        "description": "Writes code so concise that one line does more than a whole file.",
        "category": "For Work",
        "superpowers": {
          "live": "+500",
          "create": "+500",
          "love": "+500",
          "dream": "+200"
        }
      },
    
      {
        "name": "Pixel-Perfect Magician",
        "description": "Aligns elements to the last pixel, even when the design looks abstract.",
        "category": "For Work",
        "superpowers": {
          "live": "+500",
          "create": "+500",
          "love": "+400",
          "dream": "+400"
        }
      },
    
      {
        "name": "Posture Levitation",
        "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
        "category": "For Health",
        "superpowers": {
          "live": "+400",
          "create": "+500",
          "love": "+500",
          "dream": "+400"
        }
      },
    
      {
        "name": "Step Master",
        "description": "Gets 10,000 steps a day even while sitting at the computer.",
        "category": "For Health",
        "superpowers": {
          "live": "+400",
          "create": "+300",
          "love": "+500",
          "dream": "+400"
        }
      },
    
      {
        "name": "Snack Resister",
        "description": "Ignoring desktop snacks like a strict dietician.",
        "category": "For Health",
        "superpowers": {
          "live": "+400",
          "create": "+100",
          "love": "+200",
          "dream": "+400"
        }
      },
    
      {
        "name": "Hydration Bot",
        "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
        "category": "For Health",
        "superpowers": {
          "live": "+500",
          "create": "+300",
          "love": "+500",
          "dream": "+500"
        }
      },
    
      {
        "name": "Sleep Overlord",
        "description": "Sleeps 6 hours but feels like they had 10.",
        "category": "For Health",
        "superpowers": {
          "live": "+400",
          "create": "+500",
          "love": "+500",
          "dream": "+500"
        }
      },
    
      {
        "name": "Break Guru",
        "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
        "category": "For Health",
        "superpowers": {
          "live": "+300",
          "create": "+300",
          "love": "+300",
          "dream": "+400"
        }
      },
    
      {
        "name": "Eye Protector",
        "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
        "category": "For Health",
        "superpowers": {
          "live": "+100",
          "create": "+300",
          "love": "+500",
          "dream": "+400"
        }
      },
    
      {
        "name": "Stress Dodger",
        "description": "Masters meditation right at the keyboard.",
        "category": "For Health",
        "superpowers": {
          "live": "+100",
          "create": "+400",
          "love": "+200",
          "dream": "+400"
        }
      },
    
      {
        "name": "Yoga Coder",
        "description": "Easily switches from coding to yoga and back.",
        "category": "For Health",
        "superpowers": {
          "live": "+400",
          "create": "+400",
          "love": "+400",
          "dream": "+400"
        }
      },
    
      {
        "name": "Healthy Snacker",
        "description": "Always picks fruit, even when chocolate is within arm’s reach.",
        "category": "For Health",
        "superpowers": {
          "live": "+400",
          "create": "+300",
          "love": "+200",
          "dream": "+400"
        }
      },
    
      {
        "name": "Chair Exerciser",
        "description": "Manages to work out without leaving the chair.",
        "category": "For Health",
        "superpowers": {
          "live": "+500",
          "create": "+500",
          "love": "+500",
          "dream": "+400"
        }
      },
    
      {
        "name": "Caffeine Filter",
        "description": "Drinks coffee at night and still falls asleep with no problem.",
        "category": "For Health",
        "superpowers": {
          "live": "+400",
          "create": "+300",
          "love": "+500",
          "dream": "+200"
        }
      },
    
      {
        "name": "Joy Charger",
        "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+200",
          "create": "+200",
          "love": "+500",
          "dream": "+500"
        }
      },
    
      {
        "name": "Error Laugher",
        "description": "Laughs at code errors like they’re jokes instead of getting angry.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+300",
          "create": "+200",
          "love": "+500",
          "dream": "+500"
        }
      },
    
      {
        "name": "Bug Acceptance Guru",
        "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+300",
          "create": "+200",
          "love": "+500",
          "dream": "+400"
        }
      },
    
      {
        "name": "Spontaneous Coding Philosopher",
        "description": "Philosophically accepts any client suggestion after a long refactor.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+300",
          "create": "+200",
          "love": "+500",
          "dream": "+400"
        }
      },
    
      {
        "name": "Deadline Sage",
        "description": "Remains zen even when the deadline is close and the project manager is stressed.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+200",
          "create": "+200",
          "love": "+300",
          "dream": "+500"
        }
      },
    
      {
        "name": "Inspiration Maestro",
        "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+300",
          "create": "+200",
          "love": "+400",
          "dream": "+100"
        }
      },
    
      {
        "name": "Peace Keeper",
        "description": "Maintains inner calm even in moments of intense crisis.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+200",
          "create": "+200",
          "love": "+500",
          "dream": "+500"
        }
      },
    
      {
        "name": "Empathy Guru",
        "description": "Feels the team’s mood and can lift everyone’s spirits.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+500",
          "create": "+200",
          "love": "+500",
          "dream": "+500"
        }
      },
    
      {
        "name": "Laughter Generator",
        "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+300",
          "create": "+200",
          "love": "+200",
          "dream": "+500"
        }
      },
    
      {
        "name": "Pause Master",
        "description": "Knows when to just step back from the keyboard and breathe.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+300",
          "create": "+200",
          "love": "+100",
          "dream": "+100"
        }
      },

      {
        "name": "Coder Healer",
        "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+300",
          "create": "+200",
          "love": "+500",
          "dream": "+500"
        }
      },

      {
        "name": "Music Code Curator",
        "description": "Creates work playlists so good, even deadlines follow the rhythm.",
        "category": "For Harmony",
        "superpowers": {
          "live": "+300",
          "create": "+200",
          "love": "+300",
          "dream": "+200"
        }
      }
];




//burger-menu
const body = document.body;
const burgerButton = document.querySelector('.header-burger');
const headerContainer = document.querySelector('.header-container');
const burgerMenu = document.querySelector('.header-menu');
const menuLinks = document.querySelectorAll('.header-menu__a');


burgerButton.addEventListener('click', function() {
    headerContainer.classList.toggle('open');
    if (headerContainer.classList.contains('open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // отменяем обычный переход по ссылке и закрываем меню
        event.preventDefault();

        headerContainer.classList.remove('open');
        body.style.overflow = '';

        setTimeout(() => {
            // переходим по ссылке с задержкой
            window.location.href = link.href;
        }, 600);
    });
});


//slider
const sliderContainer = document.querySelector('.slider-items');
const leftButton = document.querySelector('.slider-button__left');
const rightButton = document.querySelector('.slider-button__right');

let currentPosition = 0;
let changeScreenSize = false;

function getClickDistance() {
    const screenWidth = window.innerWidth;
    let clickCount;
    if (screenWidth >= 769) {
        clickCount = 3;
    } else if (screenWidth >= 380) {
        clickCount = 6;
    } else {
        clickCount = 6;
    }

    const sliderWidth = sliderContainer.scrollWidth;
    const visibleWidth = sliderContainer.offsetWidth;
    return (sliderWidth - visibleWidth) / clickCount;
}

function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(-${currentPosition}px)`;

    leftButton.disabled = currentPosition <= 0;
    rightButton.disabled = currentPosition >= sliderContainer.scrollWidth - sliderContainer.offsetWidth;
}

rightButton.addEventListener('click', function() {
    const clickDistance = getClickDistance();
    currentPosition += clickDistance;
    if (currentPosition > sliderContainer.scrollWidth - sliderContainer.offsetWidth) {
        currentPosition = sliderContainer.scrollWidth - sliderContainer.offsetWidth;
    }
    updateSliderPosition();
});

leftButton.addEventListener('click', function() {
    const clickDistance = getClickDistance();
    currentPosition -= clickDistance;
    if (currentPosition < 0) {
        currentPosition = 0;
    }
    updateSliderPosition();
});

window.addEventListener('resize', function() {
  changeScreenSize = true;
  currentPosition = 0;
  updateSliderPosition();
});

updateSliderPosition();


//timer
function newYearTimer(){
    const currentDate = new Date();
    const newYearDate = new Date(Date.UTC(currentDate.getUTCFullYear() + 1, 0, 1));

    const difference = newYearDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(newYearTimer, 1000);
newYearTimer();


//gifts
function getRandomGift() {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    return gifts[randomIndex];
}

function updateGiftCards() {
    const cards = document.querySelectorAll('.bestGifts-card');

    cards.forEach(card => {
        const gift = getRandomGift();

        let image = '';
        let categoryClass = '';
        switch (gift.category) {
            case 'For Work':
                image = "../../assets/img/gift-for-work.png";
                categoryClass = 'work';
                break;
            case 'For Health':
                image = "../../assets/img/gift-for-health.png";
                categoryClass = 'health';
                break;
            case 'For Harmony':
                image = "../../assets/img/gift-for-harmony.png";
                categoryClass = 'harmony';
                break;
            default:
                categoryClass = 'default';
        }

        card.querySelector('.bestGifts-card__img').src = image;
        card.querySelector('.bestGifts-card__img').alt = gift.category;
        card.querySelector('.bestGifts-card__text-h3').textContent = gift.name;
        card.querySelector('.bestGifts-card__text-h4').textContent = gift.category;
        card.querySelector('.bestGifts-card__text-h4').className = `bestGifts-card__text-h4 ${categoryClass}`;
    });
}

updateGiftCards();




document.addEventListener('DOMContentLoaded', () => {

  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  const modalClose = document.querySelector('.modal-close');
  const cards = document.querySelectorAll('.bestGifts-card');

  cards.forEach(card => {
    card.addEventListener('click', function() {
      const categoryElement = card.querySelector('.bestGifts-card__text-h4');
      const category = categoryElement.textContent;
      const categoryClass = Array.from(categoryElement.classList).find(className => className !== 'gifts-card__text-h4');
      const name = card.querySelector('.bestGifts-card__text-h3').textContent;
      const imgSrc = card.querySelector('.bestGifts-card__img').src;

      const selectedGift = gifts.find(gift => gift.name === name);

      if (selectedGift) {
        modalContent.innerHTML = `
        <div class="modal-content">
            <img class="modal-content__img" src="${imgSrc}" alt="${name}">
            <div class="modal-content__description">
                <div class="modal-content__text">
                    <h4 class="modal-content__text-h4 ${categoryClass}">${category}</h4>
                    <h3 class="modal-content__text-h3">${name}</h3>
                    <p class="modal-content__text_description">${selectedGift.description}</p>
                </div>
                <div class="modal-content__superpowers">
                    <h4 class="modal-content__superpowers-h4">Adds superpowers to:</h4>
                    <div class="modal-content__powers">
                        ${Object.entries(selectedGift.superpowers).map(([key, value]) => {
                          const svgCount = Math.floor(value / 100);
                          const svgs = Array(svgCount).fill(`
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.1959 9.88162L10.6482 9.56542L12.1158 9.17219L11.8732 8.26704L9.50055 8.90278L8.38146 8.25667C8.39689 8.17336 8.40538 8.08765 8.40538 7.99997C8.40538 7.91229 8.39692 7.82655 8.38146 7.74327L9.50055 7.09716L11.8732 7.7329L12.1158 6.82775L10.6482 6.43452L11.1959 6.11831L13.546 5.97725L13.8921 4.02063L12.0246 3.34203L10.7274 5.30677L10.1797 5.62297L10.5729 4.15545L9.66778 3.91293L9.03204 6.28561L7.91226 6.93211C7.78247 6.82103 7.63242 6.73313 7.4683 6.67494V5.3828L9.20521 3.64586L8.5426 2.98325L7.46827 4.05755V3.42515L8.51792 1.32584L6.99976 0L5.48157 1.3259L6.53122 3.42521V4.05761L5.45689 2.98332L4.79429 3.64592L6.53119 5.38286V6.675C6.36708 6.73319 6.21702 6.82109 6.08724 6.93217L4.96746 6.28568L4.33171 3.91299L3.42656 4.15551L3.81979 5.62304L3.27213 5.30684L1.9749 3.34209L0.107422 4.02069L0.453485 5.97731L2.80362 6.11838L3.35128 6.43458L1.88375 6.82781L2.1263 7.73296L4.49898 7.09722L5.61807 7.74333C5.60264 7.82664 5.59414 7.91235 5.59414 8.00003C5.59414 8.08771 5.60261 8.17345 5.61807 8.25673L4.49898 8.90285L2.1263 8.2671L1.88375 9.17226L3.35128 9.56548L2.80362 9.88169L0.453485 10.0227L0.107422 11.9793L1.97493 12.6579L3.27216 10.6932L3.81985 10.377L3.42662 11.8445L4.33177 12.087L4.96752 9.71435L6.0873 9.06786C6.21708 9.17894 6.36714 9.26684 6.53125 9.32503V10.6172L4.79435 12.3541L5.45696 13.0167L6.53129 11.9424V12.5748L5.48163 14.6741L6.99983 16L8.51802 14.6741L7.46837 12.5748V11.9424L8.5427 13.0167L9.2053 12.3541L7.4684 10.6172V9.32503C7.63251 9.26684 7.78257 9.17894 7.91235 9.06786L9.03213 9.71435L9.66788 12.087L10.573 11.8445L10.1798 10.377L10.7275 10.6932L12.0247 12.6579L13.8922 11.9793L13.5462 10.0227L11.1959 9.88162Z" fill="#FF4646" />
                            </svg>
                          `).join('');

                          return `
                            <div class="modal-content__power">
                                <p class="modal-content__power-name">${key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                <p class="modal-content__power-number">${value}</p>
                                <div class="modal-content__power-snowflake">
                                    ${svgs}
                                </div>
                            </div>
                          `;
                        }).join('')}
                    </div>
                </div>
            </div>
          </div>
      `;

        modal.classList.add('open');
        body.style.overflow = 'hidden';
      }
    });
  });

  modalClose.addEventListener('click', function() {
    modal.classList.remove('open');
    body.style.overflow = '';
  });

  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('open');
      body.style.overflow = '';
    }
  });
});