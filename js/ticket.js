// Получаем параметры из URL
const params = new URLSearchParams(window.location.search);
const name_pass = params.get("name");
const city_pass = params.get("city")

// Вставляем данные в HTML
document.getElementById("passenger-name").textContent = name_pass;
document.getElementById("passenger-city").textContent = city_pass;

// Формируем ссылку на Google Forms
// const googleFormUrl = "https://docs.google.com/forms/d/твой_google_form_id/viewform";
// const formLink = `${googleFormUrl}?entry.123456=${name_pass}`;
// document.getElementById("form-link").href = formLink;

// // Получаем элементы слайдера
const wishes = document.querySelector('.wishes');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(wishes.querySelectorAll('.wish'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

//таймер
const countdown = document.querySelector('.timer');
const targetDate = new Date('2025-08-21T12:00:00');
 
function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;
 
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}
 
// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);


const passportFront = document.querySelector('.passport-front');
const passportInner = document.querySelector('.passport-inner');
const passportContainer = document.querySelector('.passport-container');

let isOpen = false;

const togglePassport = () => {
    
    if (!isOpen) {
        passportFront.style.visibility = "hidden";
        passportFront.style.opacity = '0';
        passportFront.style.transform = 'rotateY(-180deg)';
        passportInner.style.transform = 'rotateY(0deg)';
        passportInner.style.visibility = 'visible';
        passportInner.style.opacity = '1';
        
    } else {
        passportFront.style.visibility = 'visible';
        passportFront.style.opacity = '1';
        passportFront.style.transform = 'rotateY(0deg)';
        passportInner.style.transform = 'rotateY(180deg)';
        passportInner.style.visibility = 'hidden';
        passportInner.style.opacity = '0';
    }
    isOpen = !isOpen;
};

// Клик по передней странице — открыть
passportFront.addEventListener('click', togglePassport);

// Клик по левой внутренней странице — закрыть
document.querySelector('.passport-left').addEventListener('click', () => {
    if (isOpen) togglePassport();
});

