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